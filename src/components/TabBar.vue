<template>
	<view class="tab-bar">
		<view class="tab-item" :class="{ active: active === 'home' }" @click="switchTab('home')">
			<fui-icon name="home" :size="50" :color="active === 'home' ? '#1890FF' : '#999'"></fui-icon>
			<text class="tab-text" :class="{ 'tab-text-active': active === 'home' }">主页</text>
		</view>
		<view class="tab-item" :class="{ active: active === 'message' }" @click="switchTab('message')">
			<fui-icon name="message" :size="50" :color="active === 'message' ? '#1890FF' : '#999'"></fui-icon>
			<text class="tab-text" :class="{ 'tab-text-active': active === 'message' }">对话</text>
		</view>
		<view class="tab-item" :class="{ active: active === 'course' }" @click="switchTab('course')">
			<fui-icon name="order" :size="50" :color="active === 'course' ? '#1890FF' : '#999'"></fui-icon>
			<text class="tab-text" :class="{ 'tab-text-active': active === 'course' }">课程</text>
		</view>
		<view class="tab-item" :class="{ active: active === 'my' }" @click="switchTab('my')">
			<fui-icon name="my" :size="50" :color="active === 'my' ? '#1890FF' : '#999'"></fui-icon>
			<text class="tab-text" :class="{ 'tab-text-active': active === 'my' }">我的</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import fuiIcon from './firstui/FirstUI-vue/components/firstui/fui-icon/fui-icon.vue';

// 组件属性
const props = defineProps({
	active: {
		type: String,
		default: 'home'
	}
});

// 组件事件
const emit = defineEmits(['change']);

// 切换标签
const switchTab = (tab: string) => {
	emit('change', tab);
};
</script>

<style lang="scss" scoped>
.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	background-color: #FFFFFF;
	box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
	display: flex;
	z-index: 999;
}

.tab-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10rpx 0;
}

.tab-text {
	font-size: 24rpx;
	color: #999999;
	margin-top: 6rpx;
}

.tab-text-active {
	color: #1890FF;
	font-weight: bold;
}
</style> 