<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4  034，营业执照号：1  2    34 0 00  0 4  85   3199 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<image src="/static/images/logo.png" class="fui-logo"></image>
		<!-- <fui-icon custom-prefix="fui-custom-icon" name="icon-fabulous"></fui-icon> -->
		<view class="fui-btn__box">
			<!-- 仅app端使用 -->
			<!-- #ifdef APP-PLUS -->
			<fui-button text="table 示例" @click="href" :margin="['24rpx','0']"></fui-button>
			<!-- #endif -->

			<!-- #ifndef APP-PLUS -->
			<fui-text size="36" text="请在app端运行" align="center" block></fui-text>
			<!-- #endif -->
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			href(page) {
				let url = '/pages/table/table'
				this.fui.href(url)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.fui-logo {
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
		margin: 96rpx 0 32rpx;
	}

	.fui-text {
		font-size: 40rpx;
		text-align: center;
		padding-bottom: 64rpx;
	}

	.fui-btn__box {
		width: 100%;
		padding-top: 32rpx;
	}
</style>