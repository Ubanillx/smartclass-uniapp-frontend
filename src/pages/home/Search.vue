<template>
  <base-layout title="搜索" :showBack="true">
    <view class="search-container">
      <view class="custom-search" :class="{'search-active': isSearchActive}">
        <view class="search-icon-box">
          <view class="search-icon-circle"></view>
          <view class="search-icon-line"></view>
        </view>
        <input 
          class="search-input"
          type="text"
          v-model="searchText"
          placeholder="搜索课程、文章、帖子"
          placeholder-class="search-placeholder"
          confirm-type="search"
          @confirm="handleSearch"
          @focus="setSearchActive(true)"
          @blur="setSearchActive(false)"
          auto-focus
        />
        <view class="clear-icon" v-if="searchText" @click="clearSearchText">
          <view class="clear-icon-circle">
            <view class="clear-icon-line1"></view>
            <view class="clear-icon-line2"></view>
          </view>
        </view>
        <text class="search-btn" v-if="searchText" @click="handleSearch">搜索</text>
      </view>
      
      <view class="search-result-container" v-if="hasSearched">
        <view v-if="searchResults.length === 0" class="empty-result">
          <text class="empty-text">暂无相关搜索结果</text>
        </view>
        <view v-else class="result-list">
          <view class="result-item" v-for="(item, index) in searchResults" :key="index" @click="navigateToDetail(item)">
            <text class="result-title">{{ item.title }}</text>
            <text class="result-desc">{{ item.description }}</text>
          </view>
        </view>
      </view>
      
      <view class="search-tips" v-else>
        <text class="tips-title">热门搜索</text>
        <view class="hot-keywords">
          <text 
            class="keyword-item" 
            v-for="(keyword, index) in hotKeywords" 
            :key="index"
            @click="quickSearch(keyword)"
          >{{ keyword }}</text>
        </view>
      </view>
    </view>
  </base-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// 移除 fui-search-bar 组件的导入
// import fuiSearchBar from '@/components/firstui/FirstUI-nvue/components/firstui/fui-search-bar/fui-search-bar.vue';

// 搜索框激活状态
const isSearchActive = ref(true); // 默认激活，因为搜索页自动聚焦

// 设置搜索框激活状态
const setSearchActive = (status: boolean) => {
  isSearchActive.value = status;
};

// 搜索关键词
const searchText = ref('');
// 是否已搜索
const hasSearched = ref(false);
// 搜索结果
const searchResults = ref<any[]>([]);
// 热门搜索词
const hotKeywords = ref(['英语', '数学', 'Java', 'Python', '前端开发', '人工智能', '数据结构']);

// 清空搜索框
const clearSearchText = () => {
  searchText.value = '';
  hasSearched.value = false;
};

// 处理搜索
const handleSearch = () => {
  if (!searchText.value.trim()) return;
  
  hasSearched.value = true;
  // 模拟搜索过程，实际项目中应该调用API
  searchResults.value = [];
  
  // 这里应该调用后端API进行搜索
  // 示例代码：
  // const params = { keyword: searchText.value };
  // const res = await searchAPI.search(params);
  // searchResults.value = res.data || [];
  
  // 模拟结果
  setTimeout(() => {
    if (searchText.value.includes('英语')) {
      searchResults.value = [
        {
          id: 1,
          type: 'course',
          title: '大学英语四级冲刺班',
          description: '针对大学英语四级考试的综合复习课程'
        },
        {
          id: 2,
          type: 'article',
          title: '如何高效学习英语',
          description: '分享英语学习的实用技巧和方法'
        }
      ];
    }
  }, 500);
};

// 快速搜索
const quickSearch = (keyword: string) => {
  searchText.value = keyword;
  handleSearch();
};

// 跳转到详情页
const navigateToDetail = (item: any) => {
  let url = '';
  if (item.type === 'course') {
    url = `/pages/home/CourseDetail?id=${item.id}`;
  } else if (item.type === 'article') {
    url = `/pages/home/ArticleDetail?id=${item.id}`;
  } else if (item.type === 'post') {
    url = `/pages/home/PostDetail?id=${item.id}`;
  }
  
  if (url) {
    uni.navigateTo({ url });
  }
};
</script>

<style lang="scss">
.search-container {
  padding: 20rpx 30rpx;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.custom-search {
  height: 72rpx;
  background-color: #ffffff;
  border-radius: 36rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.custom-search:active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.search-active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  background-color: #f9f9f9;
}

.search-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotate(-45deg);
  transform-origin: 56% center;
  margin-right: 16rpx;
  transition: transform 0.3s ease;
}

.custom-search:active .search-icon-box {
  transform: rotate(-45deg) scale(0.95);
}

.search-icon-circle {
  width: 24rpx;
  height: 24rpx;
  border: 1px solid #1989fa;
  border-radius: 50%;
}

.search-icon-line {
  width: 1px;
  height: 12rpx;
  background-color: #1989fa;
  border-bottom-left-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
}

.search-input {
  flex: 1;
  height: 72rpx;
  font-size: 28rpx;
  color: #333;
  background-color: transparent;
}

.search-placeholder {
  color: #999999;
  font-size: 28rpx;
  transition: color 0.3s ease;
}

.clear-icon {
  width: 40rpx;
  height: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
}

.clear-icon-circle {
  width: 32rpx;
  height: 32rpx;
  background-color: #B2B2B2;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-icon-line1, .clear-icon-line2 {
  position: absolute;
  width: 20rpx;
  height: 2rpx;
  background-color: #fff;
}

.clear-icon-line1 {
  transform: rotate(45deg);
}

.clear-icon-line2 {
  transform: rotate(-45deg);
}

.search-btn {
  font-size: 30rpx;
  color: #3370ff;
  margin-left: 10rpx;
}

.search-result-container {
  padding: 20rpx 0;
}

.empty-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
}

.empty-text {
  font-size: 28rpx;
  color: #999;
  margin-top: 20rpx;
}

.result-list {
  background-color: #fff;
  border-radius: 12rpx;
  overflow: hidden;
}

.result-item {
  padding: 30rpx;
  border-bottom: 1px solid #f1f1f1;
}

.result-title {
  font-size: 30rpx;
  color: #333;
  margin-bottom: 10rpx;
  font-weight: 500;
}

.result-desc {
  font-size: 26rpx;
  color: #666;
  line-height: 1.5;
}

.search-tips {
  padding: 30rpx 0;
}

.tips-title {
  font-size: 30rpx;
  color: #333;
  font-weight: bold;
  margin-bottom: 30rpx;
}

.hot-keywords {
  display: flex;
  flex-wrap: wrap;
}

.keyword-item {
  font-size: 26rpx;
  color: #666;
  background-color: #fff;
  padding: 12rpx 30rpx;
  border-radius: 30rpx;
  margin-right: 20rpx;
  margin-bottom: 20rpx;
}
</style> 