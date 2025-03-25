<template>
  <view class="profile-container">
    <!-- 用户信息区域 -->
    <view class="user-info">
      <image class="avatar" src="../../static/demo.png" mode="aspectFill" />
      <view class="user-details">
        <text class="username">Ubanillx</text>
        <view class="phone">手机号：156****9905</view>
        <view class="level">等级 3</view>
        <text class="phone">距离下一级还需100经验</text>
      </view>
      <view class="settings-icon">
        <text class="iconfont">⚙️</text>
      </view>
    </view>

    <!-- 统计数据区域 -->
    <view class="stats-container">
      <view class="stat-item">
        <view class="icon-clock"></view>
        <view class="stat-number">15</view>
        <view class="stat-label">学习天数</view>
      </view>
      <view class="stat-item">
        <view class="icon-clock"></view>
        <view class="stat-number">7</view>
        <view class="stat-label">连续打卡</view>
      </view>
      <view class="stat-item">
        <view class="icon-clock"></view>
        <view class="stat-number">128</view>
        <view class="stat-label">获得星星</view>
      </view>
      <view class="stat-item">
        <view class="icon-clock"></view>
        <view class="stat-number">8</view>
        <view class="stat-label">获得徽章</view>
      </view>
    </view>

    <!-- 今日学习目标 -->
    <view class="section daily-goals">
      <view class="section-header">
        <text class="section-title">今日学习目标</text>
        <text class="add-goal">+</text>
      </view>
      <daily-goals />
    </view>

    <!-- 我的成就 -->
    <view class="section achievements">
      <view class="section-header">
        <text class="section-title">我的成就</text>
        <text class="view-all">查看全部</text>
      </view>
      <achievements />
    </view>

    <!-- 最近学习 -->
    <view class="section recent-learning">
      <view class="section-header">
        <text class="section-title">最近学习</text>
      </view>
      <recent-learning />
    </view>

    <!-- 学习历史记录 -->
    <view class="section learning-history">
      <view class="section-header">
        <text class="section-title">学习历史记录</text>
        <text class="view-all">查看全部</text>
      </view>
      <learning-history />
    </view>

    <!-- 退出登录按钮 -->
    <logout-button />
  </view>
</template>

<script>
import DailyGoals from '@/components/profile/DailyGoals.vue'
import Achievements from '@/components/profile/Achievements.vue'
import RecentLearning from '@/components/profile/RecentLearning.vue'
import LearningHistory from '@/components/profile/LearningHistory.vue'
import LogoutButton from '@/components/profile/LogoutButton.vue'

export default {
  name: 'Profile',
  components: {
    DailyGoals,
    Achievements,
    RecentLearning,
    LearningHistory,
    LogoutButton
  },
  data() {
    return {
      // 数据将在后续实现
    }
  },
  methods: {
   handleLogout() {
      // 退出登录逻辑将在后续实现
      uni.showModal({
        title: '提示',
        content: '确认退出登录？',
        success: function (res) {
          if  (res.confirm) {
            // 退出登录处理
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20rpx;
}

.user-info {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20rpx;

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 60rpx;
  }

  .user-details {
    margin-left: 20rpx;
    flex: 1;

    .username {
      font-size: 32rpx;
      font-weight: bold;
    }

    .phone {
      font-size: 24rpx;
      color: #666;
      margin-top: 10rpx;
    }

    .level {
      display: inline-block;
      background-color: #007AFF;
      color: #fff;
      font-size: 24rpx;
      padding: 4rpx 16rpx;
      margin-right: 12rpx;
      border-radius: 20rpx;
      margin-top: 10rpx;
    }
  }

  .settings-icon {
    font-size: 40rpx;
  }
}

.stats-container {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20rpx;

  .stat-item {
    text-align: center;

    .icon-clock {
        margin:20rpx 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40rpx;
        height: 40rpx;
        background-image: url('../../static/icons/示例.svg');
        background-size: cover;
        background-position: center;
    }

    .stat-icon {
      width: 40rpx;
      height: 40rpx;
    }

    .stat-number {
      font-size: 36rpx;
      font-weight: bold;
      color: #333;
    }

    .stat-label {
      font-size: 24rpx;
      color: #666;
      margin-top: 10rpx;
    }
  }
}

.section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: bold;
    }

    .view-all, .add-goal {
      font-size: 28rpx;
      color: #007AFF;
    }
  }
}

.logout-btn {
  width: 90%;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  background-color: #ffffff;
  color: #ff4d4f;
  border-radius: 44rpx;
  margin: 40rpx auto;
  font-size: 30rpx;
  font-weight: 700;
}
</style> 