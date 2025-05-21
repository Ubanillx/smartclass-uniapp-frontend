<template>
  <base-layout
    title="个人中心"
    :showTabBar="true"
    activeTab="profile"
    @tabChange="handleTabChange"
  >
    <!-- 用户信息区域 -->
    <view class="user-info">
      <fui-avatar 
        :src="userAvatar" 
        :text="avatarText"
        :background="'#007AFF'"
        :color="'#ffffff'"
        :fontSize="64"
        :width="120"
        :height="120"
        mode="aspectFill"
      />
      <view class="user-details">
        <text class="username">{{ username }}</text>
        <view class="phone">手机号：{{ phone }}</view>
        <view class="level">等级 {{ level }}</view>
        <text class="phone">距离下一级还需{{ nextLevelExp }}经验</text>
      </view>
      <view class="settings-icon">
        <text class="iconfont">⚙️</text>
      </view>
    </view>
  </base-layout>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref, computed } from 'vue'
import LogoutButton from '@/components/profile/LogoutButton.vue'
import fuiAvatar from "@/components/firstui/FirstUI-nvue/components/firstui/fui-avatar/fui-avatar.vue"

// Mock 用户数据
const userData = ref({
  username: 'Ubanillx',
  phone: '156****9905',
  level: 3,
  nextLevelExp: 100,
  avatar: '/static/demo.png' // 空字符串表示没有头像
})

// 计算属性：头像文本（用户名首字母）
const avatarText = computed(() => {
  return userData.value.username.charAt(0).toUpperCase()
})

// 计算属性：头像地址
const userAvatar = computed(() => {
  return userData.value.avatar || ''
})

// 解构用户数据
const { username, phone, level, nextLevelExp } = userData.value

// 处理标签变更
const handleTabChange = (tab: string) => {
  console.log('切换到标签:', tab);
};
</script>

<style lang="scss" scoped>
.user-info {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 30rpx;
  display: flex;
  align-items: center;
  position: relative;
  margin: 20rpx;

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
  margin: 0 20rpx 20rpx;

  .stat-item {
    text-align: center;

    .icon-clock {
        margin:20rpx 30rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40rpx;
        height: 40rpx;
        /* 删除图标引用 */
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
  margin: 0 20rpx 20rpx;

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