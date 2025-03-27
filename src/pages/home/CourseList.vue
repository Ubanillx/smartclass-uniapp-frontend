<template>
  <view class="course-list">
    <!-- 搜索栏 -->
    <view class="search-section">
      <fui-search-bar
        :placeholder="'搜索课程'"
        :radius="'true'"
        :background="'#ffffff'"
        :padding="'24rpx 30rpx'"
        :height="'72rpx'"
        :border="false"
        @search="handleSearch"
        @clear="handleClear"
      />
    </view>

    <!-- 课程内容区域 -->
    <view class="course-content">
      <!-- TODO: 实现课程列表 -->
      <text>课程列表内容</text>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref } from 'vue'
import fuiSearchBar from "../../components/firstui/FirstUI-vue/components/firstui/fui-search-bar/fui-search-bar.vue"

// 搜索相关
const handleSearch = (e: any) => {
  console.log('搜索内容：', e.value)
  // TODO: 实现搜索逻辑
}

const handleClear = () => {
  console.log('清空搜索')
  // TODO: 实现清空逻辑
}
</script>

<style lang="scss" scoped>
.course-list {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20rpx;

  .search-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  }

  .course-content {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    min-height: 300rpx;
  }
}
</style> 