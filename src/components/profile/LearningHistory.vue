<template>
  <view class="learning-history">
    <view class="history-item" v-for="(item, index) in historyItems" :key="index">
      <view class="history-date">
        <text class="date-text">{{ item.date }}</text>
      </view>
      <view class="history-content">
        <image class="history-icon" :src="item.icon" mode="aspectFit" />
        <view class="history-info">
          <view class="history-title">{{ item.title }}</view>
          <view class="history-score">{{ item.score }}</view>
        </view>
        <text class="history-time">{{ item.time }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'LearningHistory',
  data() {
    return {
      historyItems: [
        {
          date: '今天',
          title: '完成单词测试',
          score: '正确率 85%',
          time: '14:30',
          icon: '/static/icons/demo.png'
        },
        {
          date: '昨天',
          title: '观看视频课程',
          score: '《英语口语进阶》第3课',
          time: '16:45',
          icon: '/static/icons/demo.png'
        },
        {
          date: '昨天',
          title: '完成听力练习',
          score: '得分 90分',
          time: '10:20',
          icon: '/static/icons/demo.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.learning-history {
  .history-item {
    margin-bottom: 30rpx;

    .history-date {
      margin-bottom: 15rpx;

      .date-text {
        font-size: 24rpx;
        color: #999;
      }
    }

    .history-content {
      display: flex;
      align-items: center;
      background-color: #f8f8f8;
      padding: 20rpx;
      border-radius: 12rpx;

      .history-icon {
        width: 48rpx;
        height: 48rpx;
        margin-right: 20rpx;
      }

      .history-info {
        flex: 1;

        .history-title {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 8rpx;
        }

        .history-score {
          font-size: 24rpx;
          color: #666;
        }
      }

      .history-time {
        font-size: 24rpx;
        color: #999;
      }
    }
  }
}
</style> 