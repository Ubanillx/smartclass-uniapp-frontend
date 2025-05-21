<template>
  <view class="banner-swiper">
    <swiper 
      class="banner-content" 
      autoplay 
      circular 
      indicator-dots
      indicator-color="rgba(255, 255, 255, 0.6)"
      indicator-active-color="#ffffff"
      :interval="3000" 
      :duration="500">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <view class="banner-item" @click="goToBanner(item.id)">
          <image class="banner-image" :src="item.imageUrl" mode="aspectFill"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  // 接收外部传入的轮播图数据
  data: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['banner-click']);

// 轮播图数据
const banners = ref(props.data.length > 0 ? props.data : [
  // 默认数据
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

// 处理轮播图点击
const goToBanner = (id: number) => {
  const banner = banners.value.find(item => item.id === id);
  if (banner) {
    // 触发自定义事件
    emit('banner-click', banner);
    
    // 如果有链接，默认跳转
    if (banner.link) {
      uni.navigateTo({ url: banner.link });
    }
  }
};
</script>

<style lang="scss">
.banner-swiper {
  margin: 20rpx 0 30rpx;
  height: 300rpx;
  border-radius: 12rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
}

.banner-content {
  width: 100%;
  height: 100%;
}

.banner-item {
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  border-radius: 12rpx;
}
</style> 