<template>
  <base-layout
    title="智云星课"
    :showTabBar="true"
    activeTab="home"
    @tabChange="handleTabChange"
  >
    <view class="content">
      <view class="custom-search" @click="navigateToSearch" :class="{'search-active': isSearchActive}" @touchstart="setSearchActive(true)" @touchend="setSearchActive(false)">
        <view class="search-icon-box">
          <view class="search-icon-circle"></view>
          <view class="search-icon-line"></view>
        </view>
        <text class="search-placeholder">搜索课程、文章、帖子</text>
      </view>
      
      <!-- 使用抽离的轮播组件 -->
      <banner-swiper 
        :data="banners" 
        @banner-click="handleBannerClick"
      />
      
      <view class="menu-list">
        <view class="menu-item" @click="navigateTo('/pages/home/AiList')">
          <view class="icon-wrapper icon-ai">
            <text class="menu-icon iconfont icon-rengongzhinengjiqiren"></text>
          </view>
          <text class="menu-text">智慧体</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/WordCenter')">
          <view class="icon-wrapper icon-word">
            <text class="menu-icon iconfont icon-yingyu"></text>
          </view>
          <text class="menu-text">单词中心</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/ArticleList')">
          <view class="icon-wrapper icon-article">
            <text class="menu-icon iconfont icon-wenzhang"></text>
          </view>
          <text class="menu-text">每日美文</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/Friends')">
          <view class="icon-wrapper icon-friend">
            <text class="menu-icon iconfont icon-quanzi"></text>
          </view>
          <text class="menu-text">交友</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/Posts')">
          <view class="icon-wrapper icon-post">
            <text class="menu-icon iconfont icon-gongshigonggao"></text>
          </view>
          <text class="menu-text">帖子</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/CourseList')">
          <view class="icon-wrapper icon-course">
            <text class="menu-icon iconfont icon-kecheng"></text>
          </view>
          <text class="menu-text">课程表</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/TaskRepository')">
          <view class="icon-wrapper icon-task">
            <text class="menu-icon iconfont icon-sousuo"></text>
          </view>
          <text class="menu-text">任务仓库</text>
        </view>
        <view class="menu-item" @click="navigateTo('/pages/home/RecentStudy')">
          <view class="icon-wrapper icon-recent">
            <text class="menu-icon iconfont icon-lishi"></text>
          </view>
          <text class="menu-text">最近学习</text>
        </view>
      </view>
    </view>
  </base-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BannerSwiper from '@/components/home/BannerSwiper.vue';

// 搜索框动画状态
const isSearchActive = ref(false);

// 设置搜索框激活状态
const setSearchActive = (status: boolean) => {
  isSearchActive.value = status;
};

// 轮播图数据
const banners = ref([
  {
    id: 1,
    imageUrl: '/static/banner/banner1.jpg',
    link: '/pages/home/Notice?id=1'
  },
  {
    id: 2,
    imageUrl: '/static/banner/banner2.jpg',
    link: '/pages/home/Notice?id=2'
  },
  {
    id: 3,
    imageUrl: '/static/banner/banner3.jpg',
    link: '/pages/home/Course?id=101'
  }
]);

const navigateTo = (url: string) => {
  uni.navigateTo({ url });
};

const navigateToSearch = () => {
  uni.navigateTo({ url: '/pages/home/Search' });
};

// 处理轮播图点击
const handleBannerClick = (banner: any) => {
  console.log('点击了轮播图:', banner);
  // 在这里可以添加额外的处理逻辑，如数据统计等
};

const handleTabChange = (tab: string) => {
  console.log('切换到标签:', tab);
};

onMounted(() => {
  // 检查是否登录
  const userInfo = uni.getStorageSync('userInfo');
  if (!userInfo) {
    uni.redirectTo({
      url: '/pages/user/Login'
    });
  }
  
  // 这里可以添加获取轮播图数据的接口调用
  // getBanners().then(res => {
  //   banners.value = res.data || [];
  // });
});
</script>

<style lang="scss">
@import '@/static/icons/iconfont.css';

.content {
  flex: 1;
  padding: 30rpx 30rpx 50rpx;
  background-color: #fafafa;
  position: relative;
}

.content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30rpx;
  background: linear-gradient(to bottom, rgba(0,0,0,0.03), rgba(0,0,0,0));
  z-index: 1;
  pointer-events: none;
}

/* 轮播图样式已移至组件中 */

.custom-search {
  height: 72rpx;
  background-color: #ffffff;
  border-radius: 36rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 30rpx;
  margin-bottom: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.custom-search:active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.search-active {
  transform: scale(0.98);
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  background-color: #f9f9f9;
}

.search-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotate(-45deg);
  transform-origin: 56% center;
  margin-right: 16rpx;
  transition: transform 0.3s ease;
}

.custom-search:active .search-icon-box {
  transform: rotate(-45deg) scale(0.95);
}

.search-icon-circle {
  width: 24rpx;
  height: 24rpx;
  border: 1px solid #1989fa;
  border-radius: 50%;
}

.search-icon-line {
  width: 1px;
  height: 12rpx;
  background-color: #1989fa;
  border-bottom-left-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
}

.search-placeholder {
  font-size: 28rpx;
  color: #999999;
  transition: color 0.3s ease;
}

.menu-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40rpx;
  padding: 0 10rpx;
}

.menu-item {
  width: 150rpx;
  height: 140rpx;
  border-radius: 20rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25rpx;
  margin-right: calc((100% - 600rpx) / 3);
  transition: transform 0.2s;
}

.menu-item:nth-child(4n) {
  margin-right: 0;
}

.menu-item:nth-child(-n+4) {
  background-color: #fff;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.08);
}

.menu-item:active {
  transform: scale(0.95);
}

.icon-wrapper {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rpx;
}

.icon-ai {
  background-color: #e2f5ff;
}

.icon-word {
  background-color: #e8f4d9;
}

.icon-article {
  background-color: #fff6e0;
}

.icon-friend {
  background-color: #f5e6ff;
}

.icon-post {
  background-color: #ffeef0;
}

.icon-course {
  background-color: #ddf0ff;
}

.icon-task {
  background-color: #e8f8ff;
}

.icon-recent {
  background-color: #ffefd5;
}

.menu-icon {
  font-size: 40rpx;
}

.icon-ai .menu-icon {
  color: #4a99ff;
}

.icon-word .menu-icon {
  color: #67c23a;
}

.icon-article .menu-icon {
  color: #ff9500;
}

.icon-friend .menu-icon {
  color: #a66eff;
}

.icon-post .menu-icon {
  color: #ff4f81;
}

.icon-course .menu-icon {
  color: #1989fa;
}

.icon-task .menu-icon {
  color: #00b2ff;
}

.icon-recent .menu-icon {
  color: #ff8c00;
}

.menu-text {
  font-size: 24rpx;
  color: #333;
}
</style> 