<template>
  <view class="word-list-page">
    <!-- 头部 -->
    <view class="header">
      <view class="back-icon" @tap="goBack">
        <text>&lt;</text>
      </view>
      <text class="header-title">每日单词</text>
    </view>
    
    <!-- 搜索栏 -->
    <view class="search-section">
      <fui-search-bar
        :placeholder="'搜索单词'"
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
    
    <!-- 单词列表 -->
    <view class="word-list-content">
      <view class="word-item" v-for="(word, index) in wordList" :key="index">
        <view class="word-main">
          <text class="word-text">{{ word.word }}</text>
          <text class="word-phonetic">{{ word.phonetic }}</text>
          <text class="word-meaning">{{ word.meaning }}</text>
        </view>
        <view class="word-actions">
          <view class="action-btn" @tap="playPronunciation(word)">
            <text class="action-icon">🔊</text>
          </view>
          <view class="action-btn" @tap="toggleFavorite(index)">
            <text class="action-icon" :class="{'starred': word.isFavorite}">{{ word.isFavorite ? '★' : '☆' }}</text>
          </view>
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

// Mock 单词列表
const wordList = ref([
  {
    word: 'serendipity',
    phonetic: '/ səˌrendɪpɪtɪ /',
    meaning: '意外发现美好事物的能力',
    isFavorite: false
  },
  {
    word: 'ephemeral',
    phonetic: '/ ɪˈfemərəl /',
    meaning: '短暂的，瞬间的',
    isFavorite: true
  },
  {
    word: 'ubiquitous',
    phonetic: '/ juːˈbɪkwɪtəs /',
    meaning: '无所不在的，普遍存在的',
    isFavorite: false
  },
  {
    word: 'mellifluous',
    phonetic: '/ məˈlɪfluəs /',
    meaning: '如蜜般甜美的，流畅的',
    isFavorite: false
  },
  {
    word: 'quintessential',
    phonetic: '/ ˌkwɪntɪˈsenʃəl /',
    meaning: '精髓的，典型的',
    isFavorite: false
  }
]);

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 切换收藏状态
const toggleFavorite = (index: number) => {
  wordList.value[index].isFavorite = !wordList.value[index].isFavorite;
};

// 播放发音
const playPronunciation = (word: any) => {
  // TODO: 实现单词发音功能
  console.log('播放单词发音:', word.word);
  uni.showToast({
    title: `正在播放: ${word.word}`,
    icon: 'none'
  });
};

// 搜索相关
const handleSearch = () => {
  const text = searchValue.value.trim();
  if (text) {
    console.log('搜索单词:', text);
    // TODO: 实现搜索逻辑
  } else {
    console.log('搜索内容为空');
  }
};

const handleClear = () => {
  console.log('清空搜索');
  searchValue.value = '';
  // TODO: 重置单词列表
};
</script>

<style lang="scss" scoped>
.word-list-page {
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
  
  .word-list-content {
    padding: 20rpx;
    
    .word-item {
      background-color: #ffffff;
      border-radius: 16rpx;
      padding: 24rpx;
      margin-bottom: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
      
      .word-main {
        flex: 1;
        
        .word-text {
          font-size: 32rpx;
          font-weight: bold;
          color: #333;
          display: block;
          margin-bottom: 8rpx;
        }
        
        .word-phonetic {
          font-size: 24rpx;
          color: #666;
          display: block;
          margin-bottom: 8rpx;
          font-style: italic;
        }
        
        .word-meaning {
          font-size: 26rpx;
          color: #333;
          display: block;
        }
      }
      
      .word-actions {
        display: flex;
        gap: 20rpx;
        
        .action-btn {
          width: 60rpx;
          height: 60rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .action-icon {
            font-size: 36rpx;
            color: #999;
            
            &.starred {
              color: #FFD700;
            }
          }
        }
      }
    }
  }
}
</style> 