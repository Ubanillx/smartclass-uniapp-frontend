<template>
  <view class="achievements">
    <view class="achievement-grid">
      <view class="achievement-item" v-for="(item, index) in achievements" :key="index">
        <image class="achievement-icon" :src="item.icon" mode="aspectFit" />
        <text class="achievement-name">{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Achievements',
  data() {
    return {
      achievements: [
        {
          name: '单词达人',
          icon: '/static/icons/achievement/demo.png'
        },
        {
          name: '坚持不懈',
          icon: '/static/icons/achievement/demo.png'
        },
        {
          name: '听力小子',
          icon: '/static/icons/achievement/demo.png'
        },
        {
          name: '阅读能手',
          icon: '/static/icons/achievement/demo.png'
        },
        {
          name: '语法专家',
          icon: '/static/icons/achievement/demo.png'
        },
        {
          name: '口语达人',
          icon: '/static/icons/achievement/demo.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.achievements {
  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rpx;

    .achievement-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20rpx;
      background-color: #f8f8f8;
      border-radius: 12rpx;

      .achievement-icon {
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 10rpx;
      }

      .achievement-name {
        font-size: 24rpx;
        color: #333;
        text-align: center;
      }
    }
  }
}
</style> 