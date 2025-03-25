<template>
  <view class="logout-button">
    <fui-button 
      text="退出登录" 
      @click="handleLogout"
      :plain="true"
      type="danger"
      background="#FFFFFF"
      borderColor="#ff4d4f"
      color="#ff4d4f"
    ></fui-button>
  </view>
</template>

<script setup>
import { useRouter } from 'vue-router';
import fuiButton from '@/components/firstui/FirstUI-vue/components/firstui/fui-button/fui-button.vue';

const router = useRouter();

const handleLogout = () => {
  // 显示确认对话框
  uni.showModal({
    title: '提示',
    content: '确定要退出登录吗？',
    success: function (res) {
      if (res.confirm) {
        // 清除登录信息
        uni.removeStorageSync('userInfo');
        uni.removeStorageSync('token');
        uni.removeStorageSync('isLoggedIn');
        
        // 显示提示
        uni.showToast({
          title: '已退出登录',
          icon: 'success',
          duration: 1500
        });
        
        // 延迟跳转到登录页
        setTimeout(() => {
          uni.reLaunch({
            url: '/pages/user/Login'
          });
        }, 1500);
      }
    }
  });
};
</script>

<style lang="scss" scoped>
.logout-button {
  padding: 30rpx;
  
  :deep(.fui-button) {
    width: 100%;
    height: 90rpx;
    border-radius: 45rpx;
    border-width: 2rpx;
  }
}
</style> 