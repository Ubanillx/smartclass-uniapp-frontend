<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号： 1234 0      0004 8 5 3 19 9    59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-logo__box">
			<image src="/static/images/common/img_logo.png" class="fui-logo" mode="widthFix"></image>
			<view class="fui-title">First UI</view>
			<view class="fui-version">Version {{version}}</view>
		</view>

		<view class="fui-page__bd">
			<view class="fui-desc">
				<text class="fui-mr">First UI</text> 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。
			</view>
			<fui-list-cell topBorder arrow @click="getLink">
				去STAR
			</fui-list-cell>
			<fui-list-cell arrow @click="href('../updated/updated')">
				功能介绍
			</fui-list-cell>
			<fui-list-cell bottomLeft="0" arrow @click="href('../vip/vip')">
				会员介绍
			</fui-list-cell>
			<fui-footer isFixed text="Copyright © 2023 First UI. All Rights Reserved."></fui-footer>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		computed: mapState(['version','status']),
		data() {
			return {

			}
		},
		methods: {
			getLink(e) {
				// #ifdef MP-BAIDU
				 if(this.status==0){
					 this.fui.toast('暂不支持此功能~')
					 return;
				 }
				// #endif
				$fui.getClipboardData('https://github.com/FirstUI/FirstUI', res => {
					this.fui.toast('GitHub地址复制成功');
				}, e);
			},
			href(page){
				this.fui.href(page)
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
		font-weight: normal;
	}

	.fui-logo__box {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 64rpx;
		padding-bottom: 64rpx;
	}

	.fui-logo {
		width: 120rpx;
		height: 120rpx;
		border-radius: 24rpx;
	}

	.fui-title {
		font-size: 36rpx;
		padding-top: 24rpx;
	}

	.fui-version {
		padding-top: 8rpx;
		font-size: 24rpx;
		font-weight: 400;
	}
	.fui-desc {
		font-size: 28rpx;
		line-height: 56rpx;
		padding: 0 32rpx;
		margin-bottom: 64rpx;
		box-sizing: border-box;
		font-weight: 400;
	}

	.fui-mr {
		margin-right: 8rpx;
	}
</style>