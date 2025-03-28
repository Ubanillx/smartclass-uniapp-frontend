<template>
  <view class="article-list-page">
    <!-- 头部 -->
    <view class="header">
      <view class="back-icon" @tap="goBack">
        <text>&lt;</text>
      </view>
      <text class="header-title">每日美文</text>
    </view>
    
    <!-- 搜索栏 -->
    <view class="search-section">
      <fui-search-bar
        :placeholder="'搜索美文'"
        :radius="'true'"
        :background="'#f8f8f8'"
        :padding="'0 20rpx'"
        :height="'72rpx'"
        :border="false"
        v-model="searchValue"
        @search="handleSearch"
        @clear="handleClear"
      />
    </view>
    
    <!-- 分类标签 -->
    <view class="category-tabs">
      <view class="tab-item" 
        v-for="(tab, index) in categoryTabs" 
        :key="index"
        :class="{'active': currentTab === index}"
        @tap="switchTab(index)"
      >
        <text>{{ tab }}</text>
      </view>
    </view>
    
    <!-- 美文列表 -->
    <view class="article-list-content">
      <view class="article-item" v-for="(article, index) in articles" :key="index" @tap="navigateToDetail(article)">
        <image class="article-image" :src="article.image" mode="aspectFill" />
        <view class="article-info">
          <view class="article-category">
            <text class="category-tag" :style="{backgroundColor: article.categoryColor}">{{ article.category }}</text>
            <text class="article-duration">{{ article.duration }}分钟</text>
            <text class="article-level">{{ article.level }}</text>
          </view>
          <text class="article-title">{{ article.title }}</text>
          <text class="article-brief">{{ article.brief }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref } from 'vue';
import fuiSearchBar from "../../components/firstui/FirstUI-vue/components/firstui/fui-search-bar/fui-search-bar.vue";

// 搜索文本
const searchValue = ref('');

// 分类标签
const categoryTabs = ref(['全部', '励志', '历史', '科技', '文学', '社会', '艺术']);
const currentTab = ref(0);

// Mock 美文列表
const articles = ref([
  {
    title: 'The Power of Positive Thinking',
    brief: 'How optimism can change your life and lead to success in both personal and professional areas. Discover practical tips for developing a positive mindset.',
    category: '励志',
    categoryColor: '#ff6b6b',
    duration: 5,
    level: '初级',
    image: '/static/demo.png'
  },
  {
    title: 'A Journey Through Time',
    brief: 'Exploring the history of human civilization from ancient times to the modern era. Learn about important historical events that shaped our world.',
    category: '历史',
    categoryColor: '#74b9ff',
    duration: 8,
    level: '中级',
    image: '/static/demo.png'
  },
  {
    title: 'The Future of Technology',
    brief: 'What innovations will shape our future? Discover emerging technologies that are changing how we live, work and interact with the world around us.',
    category: '科技',
    categoryColor: '#55efc4',
    duration: 6,
    level: '高级',
    image: '/static/demo.png'
  },
  {
    title: 'The Art of Storytelling',
    brief: 'Learn the fundamental elements of compelling storytelling and how to craft narratives that captivate your audience from beginning to end.',
    category: '文学',
    categoryColor: '#a29bfe',
    duration: 7,
    level: '中级',
    image: '/static/demo.png'
  }
]);

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 切换标签
const switchTab = (index: number) => {
  currentTab.value = index;
  // TODO: 根据标签筛选文章
  console.log('切换到标签:', categoryTabs.value[index]);
};

// 跳转到详情页
const navigateToDetail = (article: any) => {
  uni.navigateTo({
    url: `/pages/home/ArticleDetail?title=${encodeURIComponent(article.title)}`
  });
};

// 搜索相关
const handleSearch = () => {
  const text = searchValue.value.trim();
  if (text) {
    console.log('搜索美文:', text);
    // TODO: 实现搜索逻辑
  } else {
    console.log('搜索内容为空');
  }
};

const handleClear = () => {
  console.log('清空搜索');
  searchValue.value = '';
  // TODO: 重置美文列表
};
</script>

<style lang="scss" scoped>
.article-list-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  
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
    
    .header-title {
      flex: 1;
      text-align: center;
      font-size: 32rpx;
      font-weight: 500;
      color: #333;
      margin-right: 60rpx; // 平衡左侧返回按钮宽度
    }
  }
  
  .search-section {
    background-color: #ffffff;
    padding: 0 20rpx 20rpx;
  }
  
  .category-tabs {
    display: flex;
    overflow-x: auto;
    background-color: #ffffff;
    padding: 0 20rpx 20rpx;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    .tab-item {
      padding: 12rpx 24rpx;
      margin-right: 16rpx;
      border-radius: 30rpx;
      background-color: #f0f0f0;
      
      text {
        font-size: 26rpx;
        color: #666;
      }
      
      &.active {
        background-color: #007AFF;
        
        text {
          color: #ffffff;
        }
      }
    }
  }
  
  .article-list-content {
    padding: 20rpx;
    
    .article-item {
      background-color: #ffffff;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      overflow: hidden;
      box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
      
      .article-image {
        width: 100%;
        height: 300rpx;
        display: block;
      }
      
      .article-info {
        padding: 24rpx;
        
        .article-category {
          display: flex;
          align-items: center;
          gap: 16rpx;
          margin-bottom: 16rpx;
          
          .category-tag {
            padding: 4rpx 12rpx;
            border-radius: 4rpx;
            font-size: 22rpx;
            color: #fff;
          }
          
          .article-duration, .article-level {
            font-size: 22rpx;
            color: #999;
          }
        }
        
        .article-title {
          font-size: 32rpx;
          font-weight: 500;
          color: #333;
          margin-bottom: 12rpx;
        }
        
        .article-brief {
          font-size: 26rpx;
          color: #666;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
</style> 