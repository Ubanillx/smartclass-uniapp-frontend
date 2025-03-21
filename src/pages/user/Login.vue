<template>
	<view class="login-container">
		<!-- 返回按钮 -->
		<view class="back-button" @click="goBack">
			<view class="back-icon">
				<fui-icon name="arrowleft" :size="40"></fui-icon>
			</view>
			<text class="back-text">登录</text>
		</view>
		
		<!-- 内容区域 -->
		<view class="content">
			<!-- 云图标 -->
			<view class="cloud-icon">
				<image src="/static/logo.svg" mode="aspectFit" class="logo-image"></image>
			</view>
			
			<!-- 欢迎文本 -->
			<view class="welcome-text">
				<text class="title">欢迎来到智云星课</text>
				<text class="subtitle">登录后即刻开启您的学习之旅</text>
			</view>
			
			<!-- 表单区域 -->
			<view class="form-container">
				<!-- 用户名输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">用户名</text>
						<input 
							class="form-input" 
							type="text" 
							v-model="formData.username" 
							placeholder="请输入用户名"
							@blur="validateUsername"
						/>
					</view>
					<text class="error-text" v-if="errors.username">{{ errors.username }}</text>
				</view>
				
				<!-- 密码输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">密码</text>
						<input 
							class="form-input" 
							:type="showPassword ? 'text' : 'password'" 
							v-model="formData.password" 
							placeholder="请输入密码"
							@blur="validatePassword"
						/>
					</view>
					<text class="error-text" v-if="errors.password">{{ errors.password }}</text>
				</view>
				
				<!-- 登录按钮 -->
				<view class="login-button-container">
					<button class="login-button" @click="handleLogin" :disabled="isSubmitting">登录</button>
				</view>
				
				<!-- 底部链接 -->
				<view class="bottom-links">
					<text class="forgot-password" @click="goToForgotPassword">忘记密码?</text>
					<text class="register" @click="goToRegister">注册新账号</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import fuiIcon from '../../components/firstui/FirstUI-vue/components/firstui/fui-icon/fui-icon.vue';

// 声明uni类型，避免TypeScript报错
declare const uni: any;

// 表单数据
const formData = reactive({
	username: '',
	password: ''
});

// 错误提示
const errors = reactive({
	username: '',
	password: ''
});

// 表单状态
const isSubmitting = ref(false);
const showPassword = ref(false);

// 验证用户名
const validateUsername = () => {
	if (!formData.username.trim()) {
		errors.username = '用户名不能为空';
		return false;
	}
	
	if (formData.username.length < 3) {
		errors.username = '用户名长度不能少于3个字符';
		return false;
	}
	
	errors.username = '';
	return true;
};

// 验证密码
const validatePassword = () => {
	if (!formData.password) {
		errors.password = '密码不能为空';
		return false;
	}
	
	if (formData.password.length < 6) {
		errors.password = '密码长度不能少于6个字符';
		return false;
	}
	
	// 密码需包含字母和数字
	const hasLetter = /[a-zA-Z]/.test(formData.password);
	const hasNumber = /[0-9]/.test(formData.password);
	
	if (!hasLetter || !hasNumber) {
		errors.password = '密码需包含字母和数字';
		return false;
	}
	
	errors.password = '';
	return true;
};

// 表单验证
const validateForm = () => {
	const isUsernameValid = validateUsername();
	const isPasswordValid = validatePassword();
	return isUsernameValid && isPasswordValid;
};

// 提交登录
const handleLogin = () => {
	if (!validateForm()) {
		return;
	}
	
	isSubmitting.value = true;
	
	// 这里是模拟登录请求
	setTimeout(() => {
		uni.showToast({
			title: '登录成功',
			icon: 'success'
		});
		isSubmitting.value = false;
		
		// 登录成功后的处理，因为当前页面就是首页，不需要再跳转
		// 如果有其他页面，可以在这里跳转
		console.log('登录成功', formData);
	}, 1500);
};

// 跳转到忘记密码页面
const goToForgotPassword = () => {
	uni.navigateTo({
		url: '/pages/user/Forget'
	});
};

// 跳转到注册页面
const goToRegister = () => {
	uni.navigateTo({
		url: '/pages/user/Register'
	});
};

// 返回上一页
const goBack = () => {
	uni.navigateBack();
};
</script>

<style lang="scss" scoped>
.login-container {
	min-height: 100vh;
	background-color: #FFFFFF;
	padding: 30rpx;
}

.back-button {
	display: flex;
	align-items: center;
	height: 80rpx;
	margin-bottom: 40rpx;
	
	.back-icon {
		margin-right: 10rpx;
		display: flex;
		align-items: center;
		
		.back-icon-text {
			font-size: 40rpx;
			color: #333;
		}
	}
	
	.back-text {
		font-size: 36rpx;
		font-weight: bold;
		color: #333333;
	}
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40rpx 0;
}

.cloud-icon {
	margin-bottom: 0rpx;
	
	.logo-image {
		width: 200rpx;
		height: 160rpx;
	}
}

.welcome-text {
	text-align: center;
	margin-bottom: 60rpx;
	
	.title {
		display: block;
		font-size: 35rpx;
		font-weight: bold;
		color: #333333;
		margin-bottom: 10rpx;
	}
	
	.subtitle {
		display: block;
		font-size: 27rpx;
		color: #999999;
	}
}

.form-container {
	width: 90%;
	padding: 0 20rpx;
}

.form-item {
	margin-bottom: 30rpx;
}

.input-row {
	display: flex;
	align-items: center;
}

.form-label {
	font-size: 26rpx;
	color: #333333;
	font-weight: bold;
	width: 120rpx;
	flex-shrink: 0;
}

.form-input {
	flex: 1;
	height: 80rpx;
	border: 1px solid #EEEEEE;
	border-radius: 8rpx;
	padding: 0 20rpx;
	font-size: 26rpx;
	background-color: #F9F9F9;
}

.error-text {
	display: block;
	font-size: 22rpx;
	color: #FF4D4F;
	margin-top: 6rpx;
	padding-left: 120rpx;
}

.login-button-container {
	margin-top: 60rpx;
	margin-bottom: 40rpx;
	
	.login-button {
		width: 100%;
		height: 70rpx;
		background-color: #1890FF;
		color: #FFFFFF;
		font-size: 26rpx;
		font-weight: bold;
		border-radius: 45rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		
		&[disabled] {
			opacity: 0.7;
		}
	}
}

.bottom-links {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 30rpx;
	
	.forgot-password, .register {
		font-size: 26rpx;
		color: #1890FF;
	}
}
</style> 