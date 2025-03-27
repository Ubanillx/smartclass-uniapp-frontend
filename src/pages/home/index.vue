<template>
  <view class="home-content">
    <!-- 搜索栏 -->
    <view class="search-section">
      <fui-search-bar
        :placeholder="'搜索课程、文章、单词'"
        :radius="'true'"
        :background="'#ffffff'"
        :padding="'24rpx 30rpx'"
        :height="'72rpx'"
        :border="false"
        @search="handleSearch"
        @clear="handleClear"
      />
    </view>

    <!-- 最新公告 -->
    <view class="notice-section">
      <view class="section-header">
        <view class="title-wrapper">
          <text class="icon">📢</text>
          <text class="section-title">最新公告</text>
        </view>
        <text class="view-all" @click.stop="navigateToNoticeList">更多</text>
      </view>
      <view class="notice-content" @click="showNoticeDetail">
        <view class="notice-item">
          <text class="notice-title">{{ latestNotice.title }}</text>
          <text class="notice-brief">{{ latestNotice.content }}</text>
          <text class="notice-date">{{ latestNotice.date }}</text>
        </view>
      </view>
    </view>

    <!-- 最新公告详情弹出层 -->
    <fui-bottom-popup
      :show="showNotice"
      @close="closeNoticePopup"
      :radius="'true'"
      :mask="'true'"
      :maskClosable="true"
      :height="'50vh'"
      :zIndex="1002"
    >
      <view class="notice-popup">
        <view class="popup-header">
          <text class="popup-title">公告详情</text>
          <text class="close-icon" @click="closeNoticePopup">×</text>
        </view>
        <scroll-view scroll-y class="notice-detail">
          <text class="notice-detail-title">{{ latestNotice.title }}</text>
          <text class="notice-detail-date">{{ latestNotice.date }}</text>
          <text class="notice-detail-content">{{ latestNotice.content }}</text>
        </scroll-view>
      </view>
    </fui-bottom-popup>

    <!-- 智慧体 -->
    <view class="ai-section">
      <view class="section-header">
        <view class="title-wrapper">
          <text class="icon">🤖</text>
          <text class="section-title">智慧体</text>
        </view>
        <text class="view-all" @click="switchToMessage">更多</text>
      </view>
      <view class="ai-content">
        <view class="ai-list">
          <view 
            class="ai-item" 
            v-for="(ai, index) in aiList.slice(0, 3)" 
            :key="index"
            @click="navigateToAiChat(ai)"
          >
            <image class="ai-avatar" :src="ai.avatar" mode="aspectFill" />
            <view class="ai-info">
              <text class="ai-name">{{ ai.name }}</text>
              <text class="ai-desc">{{ ai.description }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 热门课程 -->
    <view class="course-section">
      <view class="section-header">
        <text class="section-title">热门课程</text>
        <text class="view-all" @click="navigateToCourseList">更多</text>
      </view>
      <view class="course-content">
        <!-- TODO: 实现课程列表 -->
        <text>课程列表</text>
      </view>
    </view>

    <!-- 每日单词 -->
    <view class="word-section">
      <view class="section-header">
        <text class="section-title">每日单词</text>
        <text class="view-all">查看详情</text>
      </view>
      <view class="word-content">
        <!-- TODO: 实现每日单词展示 -->
        <text>每日单词内容</text>
      </view>
    </view>

    <!-- 每日美文 -->
    <view class="article-section">
      <view class="section-header">
        <text class="section-title">每日美文</text>
        <text class="view-all">更多</text>
      </view>
      <view class="article-content">
        <!-- TODO: 实现美文展示 -->
        <text>美文内容</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;
declare const getCurrentPages: any;
declare const getApp: any;

import { ref, computed, nextTick } from 'vue'
import fuiSearchBar from "../../components/firstui/FirstUI-vue/components/firstui/fui-search-bar/fui-search-bar.vue"
import fuiBottomPopup from "../../components/firstui/FirstUI-vue/components/firstui/fui-bottom-popup/fui-bottom-popup.vue"

// Mock 公告数据
const notices = ref([
  {
    title: '新功能上线：AI 口语助手',
    date: '2024-03-15',
    content: '我们很高兴地宣布，全新的 AI 口语助手功能现已上线！这个功能将帮助您提升口语水平，提供实时发音纠正和对话练习。欢迎体验并提供反馈。'
  }
])

// 计算最新公告
const latestNotice = computed(() => notices.value[0])

// 控制公告弹出层显示
const showNotice = ref(false)

// 显示最新公告详情
const showNoticeDetail = () => {
  showNotice.value = true
}

// 关闭公告弹出层
const closeNoticePopup = () => {
  showNotice.value = false
}

// 跳转到公告列表页
const navigateToNoticeList = () => {
  uni.navigateTo({
    url: '/pages/home/NoticeList'
  })
}

// 搜索相关
const handleSearch = (e: any) => {
  console.log('搜索内容：', e.value)
  // TODO: 实现搜索逻辑
}

const handleClear = () => {
  console.log('清空搜索')
  // TODO: 实现清空逻辑
}

// Mock AI助手数据
const aiList = ref([
  {
    name: '英语教师 Emma',
    description: '专业英语教学，语法讲解，口语指导',
    avatar: '/static/demo.png'
  },
  {
    name: '口语伙伴 Mike',
    description: '日常英语对话，地道表达，场景练习',
    avatar: '/static/demo.png'
  },
  {
    name: '写作助手 Sarah',
    description: '作文指导，文章润色，写作技巧',
    avatar: '/static/demo.png'
  }
])

// 在 script 部分添加新的导航方法
const navigateToAiChat = (ai: any) => {
  uni.navigateTo({
    url: `/pages/home/AiChat?name=${encodeURIComponent(ai.name)}&avatar=${encodeURIComponent(ai.avatar)}`
  })
}

// 切换到对话标签页
const switchToMessage = async () => {
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  
  if (page?.$vm?.$vm?.handleTabChange) {
    await nextTick()
    page.$vm.$vm.handleTabChange('message')
  } else {
    // 如果找不到父组件的方法，尝试直接设置activeTab
    const homePage = pages.find(p => p.route === 'pages/main/Home')
    if (homePage?.$vm?.$vm?.activeTab) {
      homePage.$vm.$vm.activeTab = 'message'
    } else {
      // 尝试通过getApp获取
      const app = getApp()
      if (app?.globalData?.homePage?.handleTabChange) {
        app.globalData.homePage.handleTabChange('message')
      }
    }
  }
}

// 跳转到课程列表页
const navigateToCourseList = () => {
  uni.navigateTo({
    url: '/pages/home/CourseList'
  })
}
</script>

<style lang="scss" scoped>
.home-content {
  padding: 20rpx;
  background-color: #f5f5f5;
  min-height: 100vh;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
    }

    .view-all {
      font-size: 24rpx;
      color: #007AFF;
    }
  }

  .search-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  }

  .notice-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 24rpx;
    margin-bottom: 20rpx;

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16rpx;

      .title-wrapper {
        display: flex;
        align-items: center;
        
        .icon {
          font-size: 32rpx;
          margin-right: 8rpx;
        }

        .section-title {
          font-size: 32rpx;
          font-weight: bold;
          color: #333;
        }
      }

      .view-all {
        font-size: 24rpx;
        color: #007AFF;
      }
    }

    .notice-content {
      .notice-item {
        display: flex;
        flex-direction: column;
        gap: 8rpx;

        .notice-title {
          font-size: 28rpx;
          color: #333;
          font-weight: 500;
        }

        .notice-brief {
          font-size: 26rpx;
          color: #666;
          line-height: 1.6;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .notice-date {
          font-size: 24rpx;
          color: #999;
          margin-top: 8rpx;
        }
      }
    }
  }

  .ai-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 24rpx;
    margin-bottom: 20rpx;

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16rpx;

      .title-wrapper {
        display: flex;
        align-items: center;
        
        .icon {
          font-size: 32rpx;
          margin-right: 8rpx;
        }

        .section-title {
          font-size: 32rpx;
          font-weight: bold;
          color: #333;
        }
      }

      .view-all {
        font-size: 24rpx;
        color: #007AFF;
      }
    }

    .ai-content {
      .ai-list {
        display: flex;
        flex-direction: column;
        gap: 16rpx;

        .ai-item {
          display: flex;
          align-items: center;
          padding: 16rpx;
          background-color: #f8f8f8;
          border-radius: 12rpx;

          .ai-avatar {
            width: 80rpx;
            height: 80rpx;
            border-radius: 50%;
            margin-right: 16rpx;
          }

          .ai-info {
            flex: 1;

            .ai-name {
              font-size: 28rpx;
              font-weight: 500;
              color: #333;
              margin-bottom: 4rpx;
              display: block;
            }

            .ai-desc {
              font-size: 24rpx;
              color: #666;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }

  .course-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
  }

  .word-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
  }

  .article-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
  }
}

.notice-popup {
  background-color: #ffffff;
  border-radius: 24rpx 24rpx 0 0;
  overflow: hidden;
  height: 50vh;
  display: flex;
  flex-direction: column;

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28rpx 30rpx;
    border-bottom: 1rpx solid #eee;

    .popup-title {
      font-size: 32rpx;
      font-weight: 500;
      color: #333;
    }

    .close-icon {
      font-size: 40rpx;
      color: #999;
      padding: 10rpx;
      line-height: 1;
    }
  }

  .notice-detail {
    flex: 1;
    padding: 30rpx;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    .notice-detail-title {
      font-size: 36rpx;
      font-weight: bold;
      color: #333;
      display: block;
      margin-bottom: 16rpx;
    }

    .notice-detail-date {
      font-size: 24rpx;
      color: #999;
      display: block;
      margin-bottom: 24rpx;
    }

    .notice-detail-content {
      font-size: 28rpx;
      color: #666;
      line-height: 1.8;
      display: block;
      padding-bottom: 40rpx;
    }
  }
}
</style> 