<template>
	<view class="container">
		<!-- 主要内容区域 - 根据activeTab切换显示 -->
		<view class="content-area">
			<!-- 主页内容 -->
			<view v-if="activeTab === 'home'" class="page-content">
				<home-content />
			</view>
			
			<!-- 对话（智慧体列表）内容 -->
			<view v-if="activeTab === 'message'" class="page-content">
				<ai-list />
			</view>
			
			<!-- 课程内容 -->
			<view v-if="activeTab === 'course'" class="page-content">
				<course-list />
			</view>
			
			<!-- 我的内容 -->
			<view v-if="activeTab === 'profile'" class="page-content">
				<Profile />
			</view>
		</view>
		
		<!-- 底部导航 -->
		<tab-bar :active="activeTab" @change="handleTabChange"></tab-bar>
	</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TabBar from '../../components/TabBar.vue';
import Profile from '../profile/index.vue';
import HomeContent from '../home/index.vue';
import AiList from '../home/AiList.vue';
import CourseList from '../home/CourseList.vue';

// 声明uni类型
declare const uni: any;
declare const getCurrentPages: any;
declare const getApp: any;

// 当前选中的标签页
const activeTab = ref('home');
// 用户信息
const username = ref('');

// 页面加载时执行
onMounted(() => {
	// 获取存储的用户信息
	try {
		const userInfo = uni.getStorageSync('userInfo');
		if (userInfo) {
			username.value = userInfo.username || userInfo.userAccount || '用户';
		} else {
			// 如果没有登录信息，跳转到登录页
			redirectToLogin();
		}
		
		// 获取URL参数中的tab
		const pages = getCurrentPages();
		const currentPage = pages[pages.length - 1];
		const tab = currentPage?.options?.tab;
		if (tab) {
			activeTab.value = tab;
		}

		// 注册到全局
		const app = getApp()
		app.globalData = app.globalData || {}
		app.globalData.homePage = {
			handleTabChange: handleTabChange
		}
	} catch (e) {
		console.error('获取用户信息失败', e);
		redirectToLogin();
	}
});

// 切换底部标签
const handleTabChange = (tab: string) => {
	activeTab.value = tab;
};

// 退出登录
const handleLogout = () => {
	uni.showModal({
		title: '提示',
		content: '确定要退出登录吗？',
		success: (res: any) => {
			if (res.confirm) {
				// 清除登录信息
				uni.removeStorageSync('userInfo');
				uni.removeStorageSync('token');
				uni.removeStorageSync('isLoggedIn');
				// 跳转到登录页
				redirectToLogin();
			}
		}
	});
};

// 跳转到登录页
const redirectToLogin = () => {
	uni.reLaunch({
		url: '/pages/user/Login'
	});
};
</script>

<style lang="scss" scoped>
.container {
	min-height: 100vh;
	background-color: #F5F5F5;
	padding-bottom: 120rpx;
}

.content-area {
	padding: 20rpx;
}

.page-content {
	padding-bottom: 120rpx;
}

// 空内容样式
.empty-content {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300rpx;
	background-color: #FFFFFF;
	border-radius: 16rpx;
	margin-top: 50rpx;
	
	.empty-text {
		font-size: 28rpx;
		color: #999999;
	}
}
</style> 