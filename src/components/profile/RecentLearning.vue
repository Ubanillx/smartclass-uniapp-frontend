<template>
  <view class="recent-learning">
    <view class="learning-progress" v-for="(item, index) in learningItems" :key="index">
      <view class="progress-header">
        <image class="course-icon" :src="item.icon" mode="aspectFit" />
        <view class="course-info">
          <text class="course-name">{{ item.name }}</text>
          <view class="progress-bar-container">
            <fui-progress 
              :percent="item.progress"
              :showInfo="true"
              :activeColor="'#007AFF'"
              :background="'#f0f0f0'"
              :height="10"
              :radius="5"
              :size="26"
              :percentWidth="60"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue'
import fuiProgress from "@/components/firstui/FirstUI-vue/components/firstui/fui-progress/fui-progress.vue"

export default {
  name: 'RecentLearning',
  components: {
    fuiProgress
  },
  setup() {
    const learningItems = ref([
      {
        name: '基础发音课程',
        progress: 80,
        icon: '/static/icons/demo.png'
      },
      {
        name: '日常对话练习',
        progress: 45,
        icon: '/static/icons/demo.png'
      },
      {
        name: '趣味单词记忆',
        progress: 60,
        icon: '/static/icons/demo.png'
      }
    ])

    return {
      learningItems
    }
  }
}
</script>

<style lang="scss" scoped>
.recent-learning {
  padding: 0 20rpx;
  
  .learning-progress {
    margin-bottom: 80rpx;

    .progress-header {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15rpx;

      .course-icon {
        width: 80rpx;
        height: 80rpx;
        margin-right: 20rpx;
        flex-shrink: 0;
      }

      .course-info {
        flex: 1;
        width: 0;

        .course-name {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 15rpx;
          display: block;
        }

        .progress-bar-container {
          position: relative;
          width: 100%;
        }
      }
    }
  }
}
</style> 