<template>
  <view class="ai-list-container">
    <!-- 顶部导航栏 -->
    <view class="nav-header">
      <text class="back-icon" @click="handleBack">←</text>
      <text class="page-title">智慧体中心</text>
    </view>

    <!-- 智慧体列表 -->
    <scroll-view scroll-y class="ai-list">
      <view 
        class="ai-item" 
        v-for="(ai, index) in aiList" 
        :key="index"
        @click="navigateToChat(ai)"
      >
        <image class="ai-avatar" :src="ai.avatar" mode="aspectFill" />
        <view class="ai-info">
          <view class="ai-header">
            <text class="ai-name">{{ ai.name }}</text>
            <text class="online-status">在线</text>
          </view>
          <text class="ai-desc">{{ ai.description }}</text>
          <view class="ai-tags">
            <text class="tag" v-for="(tag, tagIndex) in ai.tags" :key="tagIndex">{{ tag }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref } from 'vue'

// Mock AI助手数据
const aiList = ref([
  {
    name: '英语教师 Emma',
    description: '专业英语教学，语法讲解，口语指导',
    avatar: '/static/ai/emma.png',
    tags: ['语法', '口语', '教学']
  },
  {
    name: '口语伙伴 Mike',
    description: '日常英语对话，地道表达，场景练习',
    avatar: '/static/ai/mike.png',
    tags: ['口语', '日常对话', '场景练习']
  },
  {
    name: '写作助手 Sarah',
    description: '作文指导，文章润色，写作技巧',
    avatar: '/static/ai/sarah.png',
    tags: ['写作', '润色', '技巧']
  },
  {
    name: '考试辅导员 Jack',
    description: '考试技巧，备考指导，模拟测试',
    avatar: '/static/ai/jack.png',
    tags: ['考试', '备考', '技巧']
  },
  {
    name: '商务英语专家 Lisa',
    description: '商务邮件，会议对话，职场英语',
    avatar: '/static/ai/lisa.png',
    tags: ['商务', '职场', '邮件']
  }
])

// 返回上一页
const handleBack = () => {
  uni.navigateBack()
}

// 跳转到聊天页面
const navigateToChat = (ai: any) => {
  uni.navigateTo({
    url: `/pages/home/AiChat?name=${ai.name}&avatar=${ai.avatar}`
  })
}
</script>

<style lang="scss" scoped>
.ai-list-container {
  min-height: 100vh;
  background-color: #f5f5f5;

  .nav-header {
    background-color: #ffffff;
    height: 88rpx;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    border-bottom: 1rpx solid #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 1;

    .back-icon {
      font-size: 40rpx;
      color: #333;
      padding: 20rpx;
      margin-left: -20rpx;
    }

    .page-title {
      flex: 1;
      text-align: center;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin-right: 40rpx;
    }
  }

  .ai-list {
    padding: 20rpx;

    .ai-item {
      background-color: #ffffff;
      border-radius: 16rpx;
      padding: 24rpx;
      margin-bottom: 20rpx;
      display: flex;
      align-items: flex-start;
      box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.98);
        opacity: 0.8;
      }

      .ai-avatar {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }

      .ai-info {
        flex: 1;

        .ai-header {
          display: flex;
          align-items: center;
          margin-bottom: 8rpx;

          .ai-name {
            font-size: 32rpx;
            font-weight: 500;
            color: #333;
            margin-right: 12rpx;
          }

          .online-status {
            font-size: 24rpx;
            color: #4CAF50;
          }
        }

        .ai-desc {
          font-size: 26rpx;
          color: #666;
          line-height: 1.4;
          margin-bottom: 12rpx;
        }

        .ai-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8rpx;

          .tag {
            font-size: 24rpx;
            color: #007AFF;
            background-color: rgba(0, 122, 255, 0.1);
            padding: 4rpx 12rpx;
            border-radius: 8rpx;
          }
        }
      }
    }
  }
}
</style> 