<template>
  <view class="chat-container">
    <!-- 顶部导航栏 -->
    <view class="nav-header">
      <text class="back-icon" @click="handleBack">←</text>
      <text class="page-title">{{ aiName }}</text>
    </view>

    <!-- 聊天内容区域 -->
    <scroll-view 
      scroll-y 
      class="chat-content"
      :scroll-top="scrollTop"
      :scroll-with-animation="true"
      @scrolltoupper="loadMoreMessages"
    >
      <view class="message-list">
        <view 
          v-for="(message, index) in messages" 
          :key="index"
          :class="['message-item', message.type === 'user' ? 'message-right' : 'message-left']"
        >
          <image 
            class="avatar" 
            :src="message.type === 'user' ? userAvatar : aiAvatar" 
            mode="aspectFill"
          />
          <view class="message-bubble">
            <text class="message-text">{{ message.content }}</text>
          </view>
          <text class="message-time">{{ message.time }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- 底部输入区域 -->
    <view class="input-area">
      <view class="input-box">
        <textarea
          class="input"
          v-model="inputMessage"
          :adjust-position="false"
          :cursor-spacing="20"
          :show-confirm-bar="false"
          :auto-height="true"
          placeholder="输入消息..."
          @confirm="sendMessage"
        />
        <view class="send-btn" @click="sendMessage">发送</view>
      </view>
      <view class="tool-bar">
        <text class="tool-item">😊</text>
        <text class="tool-item">🎵</text>
        <text class="tool-item">📷</text>
        <text class="tool-item">⚡</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;
declare const getCurrentPages: any;

import { ref, onMounted } from 'vue'

// 获取路由参数
const aiName = ref('')
const aiAvatar = ref('')
const userAvatar = ref('/static/avatar/default.png')

// 聊天记录
const messages = ref([
  {
    type: 'ai',
    content: '你好！我是你的英语老师Emma。今天我们要学习什么呢？',
    time: '13:22'
  },
  {
    type: 'user',
    content: '你好！我想学习一些日常英语对话。',
    time: '13:23'
  },
  {
    type: 'ai',
    content: '太好了！日常对话是提高英语实用能力的好方法。我们可以从简单的问候开始，然后逐渐学习更复杂的对话场景。你有特别想学习的场景吗？比如餐厅点餐、购物或者旅游？',
    time: '13:25'
  }
])

const inputMessage = ref('')
const scrollTop = ref(0)

onMounted(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const { name, avatar } = currentPage.$page.options
  aiName.value = decodeURIComponent(name || '')
  aiAvatar.value = decodeURIComponent(avatar || '')
  scrollToBottom()
})

// 返回上一页
const handleBack = () => {
  uni.navigateBack()
}

// 发送消息
const sendMessage = () => {
  if (!inputMessage.value.trim()) return
  
  const newMessage = {
    type: 'user',
    content: inputMessage.value,
    time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  }
  
  messages.value.push(newMessage)
  inputMessage.value = ''
  
  // 模拟AI回复
  setTimeout(() => {
    const aiReply = {
      type: 'ai',
      content: '这是一个AI回复示例，实际开发时需要接入后端API。',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }
    messages.value.push(aiReply)
    scrollToBottom()
  }, 1000)
}

// 滚动到底部
const scrollToBottom = () => {
  setTimeout(() => {
    const query = uni.createSelectorQuery()
    query.select('.message-list').boundingClientRect()
    query.exec((res) => {
      if (res[0]) {
        scrollTop.value = res[0].height
      }
    })
  }, 100)
}

// 加载更多消息
const loadMoreMessages = () => {
  console.log('加载更多消息')
  // TODO: 实现加载历史消息的逻辑
}
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;

  .nav-header {
    background-color: #ffffff;
    height: 88rpx;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    border-bottom: 1rpx solid #f5f5f5;

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

  .chat-content {
    flex: 1;
    padding: 20rpx;
    overflow-y: auto;

    .message-list {
      display: flex;
      flex-direction: column;
      gap: 20rpx;

      .message-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20rpx;

        .avatar {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          margin: 0 20rpx;
        }

        .message-bubble {
          max-width: 60%;
          padding: 20rpx;
          border-radius: 20rpx;
          background-color: #ffffff;
          position: relative;

          .message-text {
            font-size: 28rpx;
            color: #333;
            line-height: 1.4;
          }
        }

        .message-time {
          font-size: 24rpx;
          color: #999;
          margin: 8rpx 20rpx;
        }

        &.message-left {
          .message-bubble {
            margin-right: auto;
            background-color: #ffffff;
          }
        }

        &.message-right {
          flex-direction: row-reverse;

          .message-bubble {
            margin-left: auto;
            background-color: #007AFF;

            .message-text {
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .input-area {
    background-color: #ffffff;
    padding: 20rpx;
    border-top: 1rpx solid #eee;

    .input-box {
      display: flex;
      align-items: flex-end;
      gap: 20rpx;
      padding: 20rpx;
      background-color: #f5f5f5;
      border-radius: 16rpx;

      .input {
        flex: 1;
        font-size: 28rpx;
        min-height: 40rpx;
        max-height: 120rpx;
        line-height: 40rpx;
      }

      .send-btn {
        padding: 12rpx 30rpx;
        background-color: #007AFF;
        color: #ffffff;
        border-radius: 8rpx;
        font-size: 28rpx;
      }
    }

    .tool-bar {
      display: flex;
      justify-content: space-around;
      padding: 20rpx 0 0;

      .tool-item {
        font-size: 40rpx;
        padding: 10rpx;
      }
    }
  }
}
</style> 