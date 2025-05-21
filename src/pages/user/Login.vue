<template>
	<BaseLayout
		title="登录"
		:showBack="false"
		:showTabBar="false"
		textColor="#333333"
	>
		<view class="login-page">
			<!-- Logo区域 -->
			<view class="logo-box">
				<image src="/static/logo/logo.svg" class="logo-image" mode="aspectFit"></image>
			</view>
			
			<!-- 标题区域 -->
			<view class="title-box">
				<text class="main-title">欢迎来到智云星课</text>
				<text class="sub-title">登录后即刻开启您的学习之旅</text>
			</view>
			
			<!-- 表单区域 -->
			<view class="form-box">
				<!-- 用户名输入 -->
				<view class="input-group">
					<text class="input-label">用户名</text>
					<fui-input
						v-model="formData.username"
						placeholder="请输入用户名"
						:borderTop="false"
						:borderBottom="true"
						borderColor="#dcdfe6"
						focusBorderColor="#409EFF"
						:padding="['24rpx', '0']"
						:marginTop="0"
						@blur="validateUsername"
					></fui-input>
					<text class="error-message" v-if="errors.username">{{ errors.username }}</text>
				</view>
				
				<!-- 密码输入 -->
				<view class="input-group">
					<text class="input-label">密码</text>
					<fui-input
						v-model="formData.password"
						:password="!showPassword"
						placeholder="请输入密码"
						:borderTop="false"
						:borderBottom="true"
						borderColor="#dcdfe6"
						focusBorderColor="#409EFF"
						:padding="['24rpx', '0']"
						:marginTop="0"
						@blur="validatePassword"
					>
						<template #right>
							<text 
								class="password-toggle" 
								@click="showPassword = !showPassword"
							>
								{{ showPassword ? '隐藏' : '显示' }}
							</text>
						</template>
					</fui-input>
					<text class="error-message" v-if="errors.password">{{ errors.password }}</text>
				</view>
				
				<!-- 登录按钮 -->
				<view class="button-area">
					<fui-button
						type="primary"
						text="登录"
						:bold="true"
						:loading="isSubmitting"
						background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)"
						borderWidth="0"
						@click="handleLogin"
					></fui-button>
				</view>
			</view>
		</view>
	</BaseLayout>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue';
import fuiInput from '@/components/firstui/FirstUI-nvue/components/firstui/fui-input/fui-input.vue';
import fuiButton from '@/components/firstui/FirstUI-nvue/components/firstui/fui-button/fui-button.vue';
import { UserControllerService } from '@/api/generated/services/UserControllerService';

export default {
	components: {
		BaseLayout,
		fuiInput,
		fuiButton
	},
	data() {
		return {
			// 表单数据
			formData: {
				username: '',
				password: ''
			},
			// 错误提示
			errors: {
				username: '',
				password: ''
			},
			// 表单状态
			isSubmitting: false,
			showPassword: false
		};
	},
	methods: {
		// 验证用户名
		validateUsername() {
			if (!this.formData.username.trim()) {
				this.errors.username = '用户名不能为空';
				return false;
			}
			
			if (this.formData.username.length < 3) {
				this.errors.username = '用户名长度不能少于3个字符';
				return false;
			}
			
			this.errors.username = '';
			return true;
		},
		
		// 验证密码
		validatePassword() {
			if (!this.formData.password) {
				this.errors.password = '密码不能为空';
				return false;
			}
			
			// 移除密码格式校验
			this.errors.password = '';
			return true;
		},
		
		// 表单验证
		validateForm() {
			const isUsernameValid = this.validateUsername();
			const isPasswordValid = this.validatePassword();
			return isUsernameValid && isPasswordValid;
		},
		
		// 提交登录
		handleLogin() {
			if (!this.validateForm()) {
				return;
			}
			
			this.isSubmitting = true;
			
			UserControllerService.userLoginUsingPost({
				userLoginRequest: {
					userAccount: this.formData.username,
					userPassword: this.formData.password
				}
			}).then(res => {
				if (res.code === 0 || res.code === 200) {
					// 保存登录信息
					uni.setStorageSync('userInfo', res.data);
					
					// 提示登录成功
					uni.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 1500,
						success: () => {
							// 跳转到主页
							setTimeout(() => {
								uni.reLaunch({
									url: '/pages/home/index'
								});
							}, 1500);
						}
					});
				} else {
					// 登录失败
					uni.showToast({
						title: res.message || '登录失败',
						icon: 'none'
					});
				}
			}).catch(err => {
				console.error('登录请求错误', err);
				uni.showToast({
					title: err.message || '网络错误，请稍后重试',
					icon: 'none'
				});
			}).finally(() => {
				this.isSubmitting = false;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.login-page {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(135deg, #f5f7fa 0%, #e4ecfb 100%);
	padding: 60rpx 50rpx;
	box-sizing: border-box;
}

.logo-box {
	display: flex;
	justify-content: center;
	padding: 40rpx 0;
	
	.logo-image {
		width: 160rpx;
		height: 160rpx;
	}
}

.title-box {
	text-align: center;
	margin-bottom: 80rpx;
	
	.main-title {
		display: block;
		font-size: 44rpx;
		font-weight: 600;
		color: #2c3e50;
		margin-bottom: 16rpx;
	}
	
	.sub-title {
		font-size: 28rpx;
		color: #7f8c8d;
	}
}

.form-box {
	background: rgba(255, 255, 255, 0.85);
	border-radius: 24rpx;
	padding: 50rpx 40rpx;
	box-shadow: 0 8rpx 30rpx rgba(0, 10, 60, 0.1);
	backdrop-filter: blur(8rpx);
}

.input-group {
	margin-bottom: 40rpx;
	
	.input-label {
		display: block;
		font-size: 28rpx;
		color: #2c3e50;
		font-weight: 500;
		margin-bottom: 20rpx;
	}
	
	.password-toggle {
		font-size: 28rpx;
		color: #409EFF;
		padding: 10rpx 16rpx;
	}
	
	.error-message {
		font-size: 24rpx;
		color: #e74c3c;
		padding-top: 16rpx;
		display: block;
	}
}

.button-area {
	margin-top: 60rpx;
}
</style> 