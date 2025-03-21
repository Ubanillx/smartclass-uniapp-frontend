<template>
	<view class="register-container">
		<!-- 返回按钮 -->
		<view class="back-button" @click="goBack">
			<view class="back-icon">
				<fui-icon name="arrowleft" :size="40"></fui-icon>
			</view>
			<text class="back-text">注册账号</text>
		</view>
		
		<!-- 内容区域 -->
		<view class="content">
			<!-- 云图标 -->
			<view class="cloud-icon">
				<image src="/static/logo.svg" mode="aspectFit" class="logo-image"></image>
			</view>
			
			<!-- 欢迎文本 -->
			<view class="welcome-text">
				<text class="title">创建账号</text>
				<text class="subtitle">注册后开启您的学习之旅</text>
			</view>
			
			<!-- 注册方式选项卡 -->
			<view class="tab-container">
				<view 
					class="tab-item" 
					:class="{ active: activeTab === 'username' }" 
					@click="activeTab = 'username'"
				>
					<text class="tab-text">用户名注册</text>
					<view class="tab-line" v-if="activeTab === 'username'"></view>
				</view>
				<view 
					class="tab-item" 
					:class="{ active: activeTab === 'phone' }" 
					@click="activeTab = 'phone'"
				>
					<text class="tab-text">手机号注册</text>
					<view class="tab-line" v-if="activeTab === 'phone'"></view>
				</view>
			</view>
			
			<!-- 表单区域 - 用户名注册 -->
			<view class="form-container" v-if="activeTab === 'username'">
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
				
				<!-- 昵称输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">昵称</text>
						<input 
							class="form-input" 
							type="text" 
							v-model="formData.nickname" 
							placeholder="请输入昵称"
							@blur="validateNickname"
						/>
					</view>
					<text class="error-text" v-if="errors.nickname">{{ errors.nickname }}</text>
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
				
				<!-- 确认密码输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">确认密码</text>
						<input 
							class="form-input" 
							:type="showPassword ? 'text' : 'password'" 
							v-model="formData.confirmPassword" 
							placeholder="请再次输入密码"
							@blur="validateConfirmPassword"
						/>
					</view>
					<text class="error-text" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</text>
				</view>
			</view>
			
			<!-- 表单区域 - 手机号注册 -->
			<view class="form-container" v-if="activeTab === 'phone'">
				<!-- 手机号输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">手机号</text>
						<input 
							class="form-input" 
							type="number" 
							v-model="formData.phone" 
							placeholder="请输入手机号"
							maxlength="11"
							@blur="validatePhone"
						/>
					</view>
					<text class="error-text" v-if="errors.phone">{{ errors.phone }}</text>
				</view>
				
				<!-- 验证码输入框 -->
				<view class="form-item code-item">
					<view class="input-row">
						<text class="form-label">验证码</text>
						<view class="code-input-container">
							<input 
								class="form-input code-input" 
								type="number" 
								v-model="formData.code" 
								placeholder="请输入验证码"
								maxlength="6"
								@blur="validateCode"
							/>
							<button 
								class="code-button" 
								:disabled="isCountingDown || !formData.phone" 
								@click="sendVerificationCode"
							>
								{{ countdownText }}
							</button>
						</view>
					</view>
					<text class="error-text" v-if="errors.code">{{ errors.code }}</text>
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
				
				<!-- 确认密码输入框 -->
				<view class="form-item">
					<view class="input-row">
						<text class="form-label">确认密码</text>
						<input 
							class="form-input" 
							:type="showPassword ? 'text' : 'password'" 
							v-model="formData.confirmPassword" 
							placeholder="请再次输入密码"
							@blur="validateConfirmPassword"
						/>
					</view>
					<text class="error-text" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</text>
				</view>
			</view>
			
			<!-- 注册按钮 -->
			<view class="register-button-container">
				<button class="register-button" @click="handleRegister" :disabled="isSubmitting">注册</button>
			</view>
			
			<!-- 底部链接 -->
			<view class="login-link">
				<text>已有账号？</text>
				<text class="login-text" @click="goToLogin">立即登录</text>
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
	nickname: '',
	password: '',
	confirmPassword: '',
	phone: '',
	code: ''
});

// 错误提示
const errors = reactive({
	username: '',
	nickname: '',
	password: '',
	confirmPassword: '',
	phone: '',
	code: ''
});

// 表单状态
const isSubmitting = ref(false);
const showPassword = ref(false);
const activeTab = ref('username');

// 验证码倒计时
const isCountingDown = ref(false);
const countdown = ref(60);
const countdownText = ref('获取验证码');

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

// 验证昵称
const validateNickname = () => {
	if (!formData.nickname.trim()) {
		errors.nickname = '昵称不能为空';
		return false;
	}
	
	errors.nickname = '';
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

// 验证确认密码
const validateConfirmPassword = () => {
	if (!formData.confirmPassword) {
		errors.confirmPassword = '请确认密码';
		return false;
	}
	
	if (formData.confirmPassword !== formData.password) {
		errors.confirmPassword = '两次输入的密码不一致';
		return false;
	}
	
	errors.confirmPassword = '';
	return true;
};

// 验证手机号
const validatePhone = () => {
	if (!formData.phone) {
		errors.phone = '手机号不能为空';
		return false;
	}
	
	if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
		errors.phone = '请输入正确的手机号';
		return false;
	}
	
	errors.phone = '';
	return true;
};

// 验证验证码
const validateCode = () => {
	if (!formData.code) {
		errors.code = '验证码不能为空';
		return false;
	}
	
	if (formData.code.length !== 6) {
		errors.code = '验证码为6位数字';
		return false;
	}
	
	errors.code = '';
	return true;
};

// 发送验证码
const sendVerificationCode = () => {
	if (!validatePhone()) {
		return;
	}
	
	isCountingDown.value = true;
	countdown.value = 60;
	countdownText.value = `${countdown.value}秒后重新获取`;
	
	const timer = setInterval(() => {
		countdown.value--;
		countdownText.value = `${countdown.value}秒后重新获取`;
		
		if (countdown.value <= 0) {
			clearInterval(timer);
			isCountingDown.value = false;
			countdownText.value = '获取验证码';
		}
	}, 1000);
	
	// 这里可以添加发送验证码的接口调用
	console.log('发送验证码到', formData.phone);
};

// 表单验证 - 用户名注册
const validateUsernameForm = () => {
	const isUsernameValid = validateUsername();
	const isNicknameValid = validateNickname();
	const isPasswordValid = validatePassword();
	const isConfirmPasswordValid = validateConfirmPassword();
	
	return isUsernameValid && isNicknameValid && isPasswordValid && isConfirmPasswordValid;
};

// 表单验证 - 手机号注册
const validatePhoneForm = () => {
	const isPhoneValid = validatePhone();
	const isCodeValid = validateCode();
	const isPasswordValid = validatePassword();
	const isConfirmPasswordValid = validateConfirmPassword();
	
	return isPhoneValid && isCodeValid && isPasswordValid && isConfirmPasswordValid;
};

// 提交注册
const handleRegister = () => {
	let isValid = false;
	
	if (activeTab.value === 'username') {
		isValid = validateUsernameForm();
	} else {
		isValid = validatePhoneForm();
	}
	
	if (!isValid) {
		return;
	}
	
	isSubmitting.value = true;
	
	// 这里是模拟注册请求
	setTimeout(() => {
		uni.showToast({
			title: '注册成功',
			icon: 'success'
		});
		isSubmitting.value = false;
		
		// 注册成功后跳转到登录页
		setTimeout(() => {
			goToLogin();
		}, 1500);
	}, 1500);
};

// 跳转到登录页
const goToLogin = () => {
	uni.navigateTo({
		url: '/pages/user/Login'
	});
};

// 返回上一页
const goBack = () => {
	uni.navigateBack();
};
</script>

<style lang="scss" scoped>
.register-container {
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

.tab-container {
	display: flex;
	width: 100%;
	border-bottom: 1px solid #EEEEEE;
	margin-bottom: 30rpx;
	
	.tab-item {
		flex: 1;
		height: 80rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		
		.tab-text {
			font-size: 30rpx;
			color: #666666;
			padding: 0 10rpx;
		}
		
		.tab-line {
			position: absolute;
			bottom: 0;
			width: 60rpx;
			height: 4rpx;
			background-color: #1890FF;
			border-radius: 2rpx;
		}
		
		&.active {
			.tab-text {
				color: #1890FF;
				font-weight: bold;
			}
		}
	}
}

.form-container {
	width: 90%;
	padding: 0 20rpx;
}

.form-item {
	margin-bottom: 5rpx;
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

.code-item {
	.code-input-container {
		flex: 1;
		display: flex;
		align-items: center;
		
		.code-input {
			flex: 1;
			margin-right: 20rpx;
		}
		
		.code-button {
			width: 180rpx;
			height: 80rpx;
			background-color: #1890FF;
			color: #FFFFFF;
			font-size: 24rpx;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			padding: 0;
			
			&[disabled] {
				opacity: 0.7;
				background-color: #CCCCCC;
			}
		}
	}
}

.register-button-container {
	margin-top: 60rpx;
	margin-bottom: 20rpx;
	width: 100%;
	padding: 0 20rpx;
	
	.register-button {
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

.login-link {
	display: flex;
	justify-content: center;
	margin-top: 30rpx;
	font-size: 28rpx;
	color: #666666;
	
	.login-text {
		color: #1890FF;
		margin-left: 10rpx;
	}
}
</style> 