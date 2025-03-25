<template>
  <view class="recent-learning">
    <view class="learning-progress" v-for="(item, index) in learningItems" :key="index">
      <view class="progress-header">
        <image class="course-icon" :src="item.icon" mode="aspectFit" />
        <view class="course-info">
          <text class="course-name">{{ item.name }}</text>
          <view class="progress-bar-container">
            <view class="progress-bar">
              <view class="progress-inner" :style="{ width: item.progress + '%' }">
                <view class="progress-badge">{{ item.progress }}%</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'RecentLearning',
  data() {
    return {
      learningItems: [
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
      ]
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
        width: 0; // 确保文本可以正确换行

        .course-name {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 15rpx;
          display: block;
        }

        .progress-bar-container {
          position: relative;
          width: 100%;
          
          .progress-bar {
            height: 10rpx;
            background-color: #f0f0f0;
            border-radius: 5rpx;
            overflow: visible; // 允许进度标签超出进度条

            .progress-inner {
              position: relative;
              height: 100%;
              background-color: #007AFF;
              border-radius: 5rpx;
              transition: width 0.3s ease;

              .progress-badge {
                position: absolute;
                right: -20rpx;
                top: 50%;
                background-color: #007AFF;
                color: #fff;
                font-size: 20rpx;
                padding: 4rpx 12rpx;
                border-radius: 20rpx;
                transform: translate(50%, -50%);
                white-space: nowrap;
                z-index: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style> 