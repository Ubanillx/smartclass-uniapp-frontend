<template>
  <view class="notice-list-container">
    <!-- 顶部导航栏 -->
    <view class="nav-header">
      <text class="back-icon" @click="handleBack">←</text>
      <text class="page-title">公告列表</text>
    </view>

    <!-- 公告列表 -->
    <scroll-view scroll-y class="notice-list">
      <view class="notice-item" v-for="(notice, index) in notices" :key="index">
        <view class="notice-header">
          <text class="notice-title">{{ notice.title }}</text>
          <text class="notice-date">{{ notice.date }}</text>
        </view>
        <text class="notice-content">{{ notice.content }}</text>
      </view>
      <!-- 底部留白 -->
      <view class="bottom-space"></view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref } from 'vue'

// Mock 公告数据
const notices = ref([
  {
    title: '新功能上线：AI 口语助手',
    date: '2024-03-15',
    content: '我们很高兴地宣布，全新的 AI 口语助手功能现已上线！这个功能将帮助您提升口语水平，提供实时发音纠正和对话练习。欢迎体验并提供反馈。'
  },
  {
    title: '系统升级通知',
    date: '2024-03-14',
    content: '系统将于今晚22:00进行升级维护，预计持续2小时，期间可能影响部分功能使用。'
  },
  {
    title: '课程更新提醒',
    date: '2024-03-13',
    content: '新增多门精品课程，包括英语口语、商务写作等，欢迎学习！'
  }
])

// 返回上一页
const handleBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.notice-list-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: env(safe-area-inset-bottom); // 适配底部安全区域

  .nav-header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    height: 88rpx;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    border-bottom: 1rpx solid #f5f5f5;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);

    .back-icon {
      font-size: 40rpx;
      color: #333;
      padding: 20rpx;
      margin-left: -20rpx;
    }

    .page-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      flex: 1;
      text-align: center;
      margin-right: 40rpx; // 补偿返回按钮的宽度，使标题居中
    }
  }

  .notice-list {
    padding: 30rpx;
    box-sizing: border-box;
    height: calc(100vh - 88rpx);

    .notice-item {
      background-color: #ffffff;
      border-radius: 16rpx;
      padding: 30rpx;
      margin-bottom: 24rpx;
      box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.98);
        opacity: 0.8;
      }

      .notice-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20rpx;

        .notice-title {
          font-size: 32rpx;
          font-weight: bold;
          color: #333;
          flex: 1;
          margin-right: 20rpx;
        }

        .notice-date {
          font-size: 24rpx;
          color: #999;
          flex-shrink: 0;
          padding-top: 6rpx;
        }
      }

      .notice-content {
        font-size: 28rpx;
        color: #666;
        line-height: 1.8;
      }
    }

    // 底部留白
    .bottom-space {
      height: 40rpx;
    }
  }
}
</style> 