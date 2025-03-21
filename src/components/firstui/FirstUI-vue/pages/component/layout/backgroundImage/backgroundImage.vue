<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号： 1234    0  0   0 0485 3 1 99   59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap" :style="{marginTop:top}">
		<fui-status-bar @init="init"></fui-status-bar>
		<!-- #ifndef H5 -->
		<image :style="{top:top}" class="fui-back--icon" src="/static/images/layout/icon_back_3x.png" @tap="onBack">
		</image>
		<!-- #endif -->
		<view class="fui-content">
			<text class="fui-text">welcome to this page!</text>
		</view>
		<view style="width:100%;height: 600px;"></view>
		<view class="fui-content">
			<text class="fui-text">背景图～</text>
		</view>
		<!-- <fui-background-image :absolute="true" background="linear-gradient(to top right, rgb(238, 163, 175), rgb(149, 214, 240));"></fui-background-image> -->
		<fui-background-image :src="`${resUrl}/component/bg.jpeg`"></fui-background-image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top: '',
				resUrl: ''
			}
		},
		onLoad() {
			this.resUrl = this.fui.resUrl()
		},
		methods: {
			init(e) {
				this.top = e.statusBarHeight
			},
			onBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	page {
		background-color: transparent;
	}

	/* #endif */


	.fui-back--icon {
		width: 60rpx;
		height: 60rpx;
		position: fixed;
		z-index: 2;
		left: 32rpx;
		margin-top: 8rpx;
	}

	.fui-wrap {
		padding-top: 60rpx;
		background: transparent;
	}

	.fui-content {
		width: 700rpx;
		height: 500rpx;
		background: rgba(255, 255, 255, .4);
		box-shadow: 0px 3rpx 40rpx rgba(0, 0, 0, 0.36);
		border-radius: 33rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 200rpx auto;
	}

	.fui-text {
		color: #fff;
		font-size: 50rpx;
	}
</style>