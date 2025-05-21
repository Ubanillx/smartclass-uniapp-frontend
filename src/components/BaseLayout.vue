<template>
  <view class="base-layout">
    <!-- 顶部状态栏和导航栏 -->
    <top-bar 
      :title="title" 
      :showBack="showBack" 
      :textColor="textColor" 
      :backBtnBgColor="backBtnBgColor"
      :backFn="customBackFn"
    >
      <template #right>
        <slot name="navRight"></slot>
      </template>
    </top-bar>
    
    <!-- 页面内容区域 -->
    <view 
      class="content-container" 
      :style="{ 
        paddingTop: `${topHeight}px`, 
        paddingBottom: showTabBar ? '120rpx' : '30rpx'
      }"
    >
      <slot></slot>
    </view>
    
    <!-- 底部导航栏（可选） -->
    <tab-bar 
      v-if="showTabBar" 
      :active="activeTab" 
      @change="handleTabChange"
    ></tab-bar>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import TopBar from '@/components/TopBar.vue';
import TabBar from '@/components/TabBar.vue';

// 组件属性
const props = defineProps({
  // 页面标题
  title: {
    type: String,
    default: ''
  },
  // 是否显示返回按钮
  showBack: {
    type: Boolean,
    default: true
  },
  // 文字颜色
  textColor: {
    type: String,
    default: '#333333'
  },
  // 返回按钮背景色
  backBtnBgColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.2)'
  },
  // 自定义返回方法
  customBackFn: {
    type: Function,
    default: null
  },
  // 是否显示底部标签栏
  showTabBar: {
    type: Boolean,
    default: false
  },
  // 当前激活的标签
  activeTab: {
    type: String,
    default: 'home'
  }
});

// 组件事件
const emit = defineEmits(['tabChange']);

// 状态栏高度
const statusBarHeight = ref(44);
// 导航栏高度 (90rpx转换为px)
const navBarHeight = ref(45); // 默认值，90rpx约等于45px

// 计算总的顶部高度
const topHeight = computed(() => {
  return statusBarHeight.value + navBarHeight.value;
});

// 获取状态栏高度和计算导航栏高度
const getStatusBarHeight = () => {
  try {
    // 优先从存储中获取
    const savedHeight = uni.getStorageSync('statusBarHeight');
    if (savedHeight) {
      statusBarHeight.value = savedHeight;
    } else {
      // 如果没有保存，则获取系统信息
      uni.getSystemInfo({
        success: (res) => {
          statusBarHeight.value = res.statusBarHeight || 20;
          // 计算导航栏高度，将rpx转换为px
          navBarHeight.value = uni.upx2px(90);
          // 保存到本地存储
          uni.setStorageSync('statusBarHeight', statusBarHeight.value);
        }
      });
    }
  } catch (e) {
    console.error('获取状态栏高度失败', e);
  }
};

// 处理标签变更
const handleTabChange = (tab: string) => {
  emit('tabChange', tab);
};

// 生命周期
onMounted(() => {
  getStatusBarHeight();
});
</script>

<style lang="scss" scoped>
.base-layout {
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: #F5F5F5;
}

.content-container {
  width: 100%;
  box-sizing: border-box;
}
</style> 