<template>
  <view class="search-page">
    <!-- 头部搜索栏 -->
    <view class="header">
      <view class="back-icon" @tap="goBack">
        <text>&lt;</text>
      </view>
      <view class="search-bar-container">
        <fui-search-bar
          :placeholder="'请输入搜索内容'"
          :radius="'true'"
          :background="'#f8f8f8'"
          :padding="'0'"
          :height="'72rpx'"
          :border="false"
          :focus="true"
          :showActionBtn="true"
          :searchText="'搜索'"
          v-model="searchValue"
          @search="handleSearch"
          @clear="handleClear"
        />
      </view>
    </view>

    <!-- 热门搜索 -->
    <view class="section hot-search">
      <view class="section-title">
        <text>热门搜索</text>
      </view>
      <view class="tag-list">
        <view class="tag-item" v-for="(tag, index) in hotSearchTags" :key="index" @tap="selectTag(tag)">
          <text>{{ tag }}</text>
        </view>
      </view>
    </view>

    <!-- 搜索历史 -->
    <view class="section search-history">
      <view class="section-header">
        <text class="section-title">搜索历史</text>
        <text class="clear-btn" @tap="clearHistory">清空</text>
      </view>
      <view class="history-list">
        <view class="history-item" v-for="(item, index) in searchHistory" :key="index">
          <view class="history-content" @tap="selectHistoryItem(item)">
            <text class="history-icon">⏱</text>
            <text class="history-text">{{ item }}</text>
          </view>
          <text class="delete-icon" @tap.stop="deleteHistoryItem(index)">×</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref, onMounted } from 'vue';
import fuiSearchBar from "../../components/firstui/FirstUI-vue/components/firstui/fui-search-bar/fui-search-bar.vue";

// 热门搜索标签
const hotSearchTags = ref([
  '阅读笔记',
  '美术技巧',
  '英语口语',
  '课堂互动',
  '古诗词',
  '考试技巧',
  '口语练习',
  '编程入门'
]);

// 搜索历史
const searchHistory = ref<string[]>([]);

// 搜索文本
const searchValue = ref('');

// 页面加载时获取历史记录
onMounted(() => {
  // 从本地存储获取搜索历史
  try {
    const history = uni.getStorageSync('searchHistory');
    if (history) {
      searchHistory.value = JSON.parse(history);
    }
  } catch (e) {
    console.error('读取搜索历史失败', e);
  }
});

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 处理搜索
const handleSearch = (e: any) => {
  // 直接使用我们的响应式变量
  const text = searchValue.value.trim();
  
  if (text) {
    // 添加到历史记录
    addToHistory(text);
    
    // 打印搜索信息
    console.log('搜索框搜索：', text);
    
    // TODO: 跳转到搜索结果页或其他操作
  } else {
    console.log('搜索内容为空');
  }
};

// 清空搜索框
const handleClear = () => {
  console.log('清空搜索框');
  searchValue.value = '';
};

// 选择标签
const selectTag = (tag: string) => {
  tag = tag.trim();
  if (tag) {
    // 添加到历史记录
    addToHistory(tag);
    // 打印搜索信息
    console.log('标签搜索：', tag);
    // TODO: 跳转到搜索结果页或其他操作
  }
};

// 选择历史记录项
const selectHistoryItem = (item: string) => {
  item = item.trim();
  if (item) {
    // 将记录移动到最前
    addToHistory(item);
    // 打印搜索信息 
    console.log('历史记录搜索：', item);
    // TODO: 跳转到搜索结果页或其他操作
  }
};

// 删除单个历史记录
const deleteHistoryItem = (index: number) => {
  searchHistory.value.splice(index, 1);
  saveHistory();
};

// 清空历史记录
const clearHistory = () => {
  searchHistory.value = [];
  saveHistory();
};

// 添加到历史记录
const addToHistory = (text: string) => {
  // 如果已存在，先删除旧的
  const index = searchHistory.value.findIndex(item => item === text);
  if (index !== -1) {
    searchHistory.value.splice(index, 1);
  }
  // 添加到最前面
  searchHistory.value.unshift(text);
  // 限制历史记录数量
  if (searchHistory.value.length > 10) {
    searchHistory.value = searchHistory.value.slice(0, 10);
  }
  saveHistory();
};

// 保存历史记录到本地存储
const saveHistory = () => {
  try {
    uni.setStorageSync('searchHistory', JSON.stringify(searchHistory.value));
  } catch (e) {
    console.error('保存搜索历史失败', e);
  }
};
</script>

<style lang="scss" scoped>
.search-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 30rpx;

  .header {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #ffffff;

    .back-icon {
      width: 60rpx;
      height: 60rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      text {
        font-size: 40rpx;
        color: #333;
      }
    }

    .search-bar-container {
      flex: 1;
    }
  }

  .section {
    margin-top: 20rpx;
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 30rpx;

    .section-title {
      font-size: 28rpx;
      font-weight: 500;
      color: #333;
      margin-bottom: 24rpx;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24rpx;

      .clear-btn {
        font-size: 24rpx;
        color: #999;
      }
    }
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;

    .tag-item {
      padding: 10rpx 24rpx;
      background-color: #f8f8f8;
      border-radius: 30rpx;

      text {
        font-size: 26rpx;
        color: #333;
      }
    }
  }

  .history-list {
    .history-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16rpx 0;
      border-bottom: 1px solid #f5f5f5;

      &:last-child {
        border-bottom: none;
      }

      .history-content {
        display: flex;
        align-items: center;
        flex: 1;

        .history-icon {
          font-size: 28rpx;
          color: #999;
          margin-right: 16rpx;
        }

        .history-text {
          font-size: 26rpx;
          color: #333;
        }
      }

      .delete-icon {
        font-size: 32rpx;
        color: #999;
        padding: 0 10rpx;
      }
    }
  }
}
</style> 