<template>
	<view class="top-bar">
		<view class="status-bar" :style="{ height: `${statusBarHeight}px` }"></view>
		<view class="content-bar">
			<view class="left-area">
				<view v-if="showBack" class="back-btn" :style="backBtnStyle" @tap="goBack" hover-class="back-btn-hover">
					<fui-icon name="left" :color="textColor" size="32"></fui-icon>
				</view>
			</view>
			<view class="title-area">
				<text class="page-title" :style="{ color: textColor }">{{ title }}</text>
			</view>
			<view class="right-area">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
import fuiIcon from '@/components/firstui/FirstUI-nvue/components/firstui/fui-icon/fui-icon.vue'

export default {
	name: 'TopBar',
	components: {
		fuiIcon
	},
	props: {
		// 页面标题
		title: {
			type: String,
			default: ''
		},
		// 是否显示返回按钮
		showBack: {
			type: Boolean,
			default: false
		},
		// 返回按钮点击后执行的方法，不传则默认返回上一页
		backFn: {
			type: Function,
			default: null
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
		}
	},
	data() {
		return {
			statusBarHeight: 44
		};
	},
	computed: {
		backBtnStyle() {
			return {
				backgroundColor: this.backBtnBgColor
			}
		}
	},
	created() {
		this.getStatusBarHeight();
	},
	methods: {
		getStatusBarHeight() {
			try {
				// 优先从存储中获取
				const savedHeight = uni.getStorageSync('statusBarHeight');
				if (savedHeight) {
					this.statusBarHeight = savedHeight;
				} else {
					// 如果没有保存，则获取系统信息
					uni.getSystemInfo({
						success: (res) => {
							this.statusBarHeight = res.statusBarHeight || 20;
							// 保存到本地存储
							uni.setStorageSync('statusBarHeight', this.statusBarHeight);
						}
					});
				}
			} catch (e) {
				console.error('获取状态栏高度失败', e);
			}
		},
		// 返回上一页
		goBack() {
			if (this.backFn && typeof this.backFn === 'function') {
				this.backFn();
			} else {
				uni.navigateBack({
					delta: 1,
					fail: () => {
						// 如果返回失败，可能是没有上一页，则跳转到首页
						uni.switchTab({
							url: '/pages/home/index'
						});
					}
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.top-bar {
	width: 100%;
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	
	.status-bar {
		width: 100%;
	}
	
	.content-bar {
		display: flex;
		align-items: center;
		height: 90rpx;
		
		.left-area {
			width: 120rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.back-btn {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease;
			}
			
			.back-btn-hover {
				opacity: 0.8;
				transform: scale(0.95);
			}
		}
		
		.title-area {
			flex: 1;
			text-align: center;
			
			.page-title {
				font-size: 34rpx;
				font-weight: 500;
			}
		}
		
		.right-area {
			width: 120rpx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style> 