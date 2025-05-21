<template>
	<view class="tab-bar">
		<view 
			v-for="(item, index) in tabList" 
			:key="index" 
			class="tab-item" 
			:class="{ active: currentTab === index }"
			@click="switchTab(index, item.url)"
		>
			<text class="tab-icon iconfont" :class="item.icon"></text>
			<text class="tab-text">{{ item.text }}</text>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue';

// 定义组件props
const props = defineProps({
	active: {
		type: String,
		default: 'home'
	}
});

// 定义组件事件
const emit = defineEmits(['change']);

// 定义标签页列表
const tabList = ref([
	{ text: '主页', icon: 'icon-zhuye', url: '/pages/home/index', name: 'home' },
	{ text: '对话', icon: 'icon-duihua', url: '/pages/chat/index', name: 'chat' },
	{ text: '圈子', icon: 'icon-quanzi', url: '/pages/circle/index', name: 'circle' },
	{ text: '我的', icon: 'icon-wode', url: '/pages/profile/index', name: 'profile' }
]);

// 当前选中的标签页
const currentTab = ref(0);

// 根据路由地址更新激活状态
const updateActiveTabByRoute = () => {
	const pages = getCurrentPages();
	if (!pages || pages.length === 0) return;
	
	const currentPage = pages[pages.length - 1];
	const currentRoute = `/${currentPage.route}`;
	
	// 查找当前路由对应的标签页索引
	const foundIndex = tabList.value.findIndex(item => {
		const baseUrl = item.url.split('?')[0];
		return currentRoute === baseUrl || currentRoute.startsWith(baseUrl + '/');
	});
	
	if (foundIndex !== -1 && currentTab.value !== foundIndex) {
		currentTab.value = foundIndex;
		emit('change', tabList.value[foundIndex].name);
	}
};

// 监听页面路由变化
let routeChangeCallback: null | Function = null;

onMounted(() => {
	// 初始化激活状态
	updateActiveTabByRoute();
	
	// 监听页面显示事件
	// @ts-ignore
	routeChangeCallback = () => {
		updateActiveTabByRoute();
	};
	
	// 监听路由变化
	uni.onAppRoute(routeChangeCallback);
});

onBeforeUnmount(() => {
	// 移除路由监听
	if (routeChangeCallback) {
		// @ts-ignore
		uni.offAppRoute(routeChangeCallback);
	}
});

// 切换标签页
const switchTab = (index: number, url: string) => {
	if (currentTab.value === index) return;
	
	const tabName = tabList.value[index].name;
	
	// 触发change事件
	emit('change', tabName);
	
	// 使用switchTab跳转，状态会由路由监听器更新
	uni.switchTab({
		url,
		fail: (err) => {
			console.error('Tab导航失败:', err);
		}
	});
};

// 监听active属性变化
watch(() => props.active, (newActive) => {
	if (!newActive) return;
	
	const index = tabList.value.findIndex(item => item.name === newActive);
	if (index !== -1 && currentTab.value !== index) {
		currentTab.value = index;
	}
}, { immediate: true });
</script>

<style lang="scss">
/* 导入iconfont样式 */
@import '@/static/icons/iconfont.css';

.tab-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100rpx;
	background-color: #ffffff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0 -1px 6rpx rgba(0, 0, 0, 0.05);
	padding-bottom: env(safe-area-inset-bottom);
	z-index: 999;
}

.tab-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	height: 100%;
	transition: all 0.3s ease;
	position: relative;
}

.tab-icon {
	font-size: 48rpx;
	color: #888;
	margin-bottom: 6rpx;
	line-height: 1;
	transition: color 0.25s ease;
}

.tab-text {
	font-size: 24rpx;
	color: #888;
	line-height: 1;
	transition: color 0.25s ease;
}

.tab-item.active {
	.tab-icon, .tab-text {
		color: #3370ff;
		font-weight: 500;
	}
	
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 30rpx;
		height: 6rpx;
		border-radius: 3rpx;
		background-color: #3370ff;
		opacity: 0.8;
		transition: all 0.25s ease;
	}
}

</style> 