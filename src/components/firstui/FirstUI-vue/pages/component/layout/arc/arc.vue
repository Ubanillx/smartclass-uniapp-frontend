<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号： 1   23   4000 0 485319      9 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">BannerArc <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">BannerArc 横幅底部圆弧，常用的布局组件。</view>
		</view>
		<view class="fui-page__bd">
			<fui-section is-line title="纯背景色" margin-top="32"></fui-section>
			<fui-banner-arc background="#465CFF" margin-top="32"></fui-banner-arc>
			<fui-section is-line title="渐变背景/调整高度/弧度" margin-top="96"></fui-section>
			<!-- ratio 用于调整弧度大小，值越大弧度越小 -->
			<fui-banner-arc background="linear-gradient(#6831FF,#465CFF)" :height="500" :ratio="1.5"
				margin-top="32"></fui-banner-arc>
			<fui-section is-line title="图片设置弧度" margin-top="96"></fui-section>
			<fui-banner-arc margin-top="32" background="#EDF9FF" height="512" :ratio="1.5">
				<image class="fui-banner" src="https://res.firstui.cn/static/images/my/light/img_banner_3x.png" mode="widthFix"></image>
			</fui-banner-arc>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 120rpx;
	}

	.fui-banner {
		width: 750rpx;
		height: 512rpx;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */

		/* #ifdef APP-NVUE */
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-bottom-right-radius: 750rpx;
		border-bottom-left-radius: 750rpx;
		/* #endif */
	}
</style>