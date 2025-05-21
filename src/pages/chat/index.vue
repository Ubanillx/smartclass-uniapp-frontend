<template>
  <base-layout
    title="智能对话"
    :showTabBar="true"
    activeTab="chat"
    @tabChange="handleTabChange"
  >
    <view class="content">
      <view class="chat-list">
        <view class="chat-item" v-for="(item, index) in chatList" :key="index" @click="navigateToChat(item)">
          <text class="chat-icon iconfont icon-duihua"></text>
          <view class="chat-info">
            <text class="chat-name">{{ item.name }}</text>
            <text class="chat-desc">{{ item.description }}</text>
          </view>
          <text class="chat-arrow iconfont icon-jiahaoanniu_jiahaoanniu"></text>
        </view>
      </view>
    </view>
  </base-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 模拟智能对话列表
const chatList = ref([
  {
    name: '英语教师 Emma',
    description: '专业英语教学，语法讲解，口语指导',
    icon: 'icon-duihua',
    id: '1'
  },
  {
    name: '口语伙伴 Mike',
    description: '日常英语对话，地道表达，场景练习',
    icon: 'icon-duihua',
    id: '2'
  },
  {
    name: '写作助手 Sarah',
    description: '作文指导，文章润色，写作技巧',
    icon: 'icon-duihua',
    id: '3'
  },
  {
    name: '数学辅导 Alex',
    description: '中学数学知识点解析，题型讲解',
    icon: 'icon-duihua',
    id: '4'
  },
  {
    name: '物理助手 Newton',
    description: '物理概念解释，公式推导，典型例题',
    icon: 'icon-duihua',
    id: '5'
  }
]);

// 跳转到聊天详情
const navigateToChat = (item: any) => {
  uni.navigateTo({
    url: `/pages/home/AiChat?id=${item.id}&name=${encodeURIComponent(item.name)}`
  });
};

// 处理标签变更
const handleTabChange = (tab: string) => {
  console.log('切换到标签:', tab);
};
</script>

<style lang="scss">
@import '@/static/icons/iconfont.css';

.content {
  flex: 1;
  padding: 30rpx;
}

.chat-list {
  margin-top: 20rpx;
}

.chat-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.chat-icon {
  font-size: 60rpx;
  color: #3370ff;
  margin-right: 20rpx;
}

.chat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-name {
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
  margin-bottom: 8rpx;
}

.chat-desc {
  font-size: 24rpx;
  color: #666;
  line-height: 1.4;
}

.chat-arrow {
  font-size: 36rpx;
  color: #ccc;
  transform: rotate(45deg);
}
</style> 