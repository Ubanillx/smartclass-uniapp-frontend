<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 03  4，营业执照号：1  2 34 00  0 048 5    3 199    59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-header">
			<view class="fui-title__text">PageA：组件</view>
			<view class="fui-desc__text">Tabbar 标签栏，用于在不同功能模块之间进行切换，小图标建议尺寸84*84。</view>
		</view>
		<view class="fui-body">

			<fui-divider text="往下滑动~" backgroundColor="#fff"></fui-divider>
		</view>
		<view class="fui-footer">到达底部</view>
	</view>
</template>

<script>
	export default {
		name: "pageA",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.fui-header {
		width: 100%;
		padding: 52rpx 32rpx;
		box-sizing: border-box;
	}

	.fui-body {
		width: 100%;
		height: 800px;
		padding:0 32rpx;
		box-sizing: border-box;
	}


	.fui-title__text {
		text-align: left;
		font-size: 36rpx;
		font-weight: 600;
	}

	.fui-desc__text {
		margin-top: 8rpx;
		color: #B2B2B2;
		text-align: left;
		font-size: 28rpx;
		font-weight: 400;
		word-break: break-all;
	}
	.fui-footer{
		padding: 64rpx 32rpx;
		text-align: center;
		font-size: 24rpx;
	}
</style>