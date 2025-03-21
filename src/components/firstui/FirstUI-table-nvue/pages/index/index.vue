<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 03 4，营业执照号：12 3 4 0   0 0  048     531 995 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<image src="/static/images/logo.png" class="fui-logo"></image>
		<!-- <fui-icon custom-prefix="fui-custom-icon" name="icon-fabulous"></fui-icon> -->
		<view class="fui-btn__box">
			<!-- 仅app端使用 -->
			<!-- #ifdef APP-PLUS -->
			<fui-button text="table 示例1" @click="href(1)"></fui-button>
			<fui-button text="table 示例2" @click="href(2)" :margin="['24rpx','0']"></fui-button>
			<fui-button text="table 示例3" @click="href(3)"></fui-button>
			<fui-button text="table 示例4" @click="href(4)" :margin="['24rpx','0']"></fui-button>
			<fui-button text="table 示例5" @click="href(5)"></fui-button>
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
				if (page == 2) {
					url = '/pages/table_one/table_one'
				} else if (page == 3) {
					url = '/pages/table_two/table_two'
				} else if (page == 4) {
					url = '/pages/table_three/table_three'
				} else if (page == 5) {
					url = '/pages/table_four/table_four'
				}
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