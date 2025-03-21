<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：12    34000  0  48   5   3 19 9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SafeArea <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SafeArea 底部安全区域，用于适配iphonex等机型底部安全区域。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-content">
				<view class="fui-content__text">向下滑动~</view>
				<fui-divider text="底部内容"></fui-divider>
				<fui-safe-area background="#F1F4FA"></fui-safe-area>
			</view>
			<view class="fui-tabbar__box">
				<view class="fui-tabbar__content">
					底部tabbar内容~
				</view>
				<fui-safe-area></fui-safe-area>
			</view>
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
	.fui-page__bd{
		padding-bottom: 100rpx;
	}
	.fui-content{
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
	}
	.fui-content__text{
		width: 100%;
		height: 1200px;
		font-size: 28rpx;
		font-weight: normal;
	}
   .fui-tabbar__box{
	   width: 100%;
	   position: fixed;
	   left: 0;
	   right: 0;
	   bottom: 0;
	   z-index: 10;
   }
   .fui-tabbar__content{
	   width: 100%;
	   height: 100rpx;
	   background: #fff;
	   display: flex;
	   align-items: center;
	   padding: 0 32rpx;
	   box-sizing: border-box;
   }
</style>