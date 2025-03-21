<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号： 1  2 34000 04      8 531 9   95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center">模板库
			</view>
			<view class="fui-page__desc">常用模板，提升开发效率，付费模块。</view>
		</view>
		<view class="fui-page-bd fui-page__spacing">
			<view class="fui-template__item" @tap="href(item.page)" v-for="(item,index) in templateData" :key="index">
				<view class="fui-template__item-inner" :style="{background:item.background}">
					<image class="fui-icon" :src="`${resUrl}/template/light/icon_${item.src}_3x.png`"
						mode="widthFix"></image>
					<view class="fui-name__cn">{{item.cn}}</view>
					<view class="fui-name__en">{{item.en}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import templateData from './index.js';
	import {
		mapState,
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				resUrl:this.fui.resUrl(),
				templateData: templateData
			}
		},
		computed: mapState(['status']),
		onLoad() {
			// #ifdef MP
			this.getStatus().then((res) => {})
			// #endif
		},
		methods: {
			...mapActions(['getStatus']),
			href(page) {
				if (this.status == 1) {
					// #ifdef MP-WEIXIN
					if (page) {
						wx.navigateToMiniProgram({
							appId: 'wx2d7de1c876758f9c',
							path: page
						});
					} else {
						wx.navigateToMiniProgram({
							appId: 'wx2d7de1c876758f9c'
						});
					}
					// #endif
					// #ifndef MP-WEIXIN
					this.fui.modal('FirstUI示例', '请前往微信搜索 "FirstUI示例" 小程序预览')
					// #endif
				} else {
					// #ifdef MP
					this.fui.href('/pages/common/coding/coding')
					// #endif

					// #ifndef MP
					this.fui.modal('First UI 示例', '请前往微信搜索 "FirstUI示例" 小程序预览')
					// #endif
				}
			}
		},
		onShareAppMessage() {
			return {
				title: 'First UI组件库'
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.fui-page-bd {
		display: flex;
		flex-wrap: wrap;
	}

	.fui-template__item {
		width: 50%;
		margin-bottom: 32rpx;
		box-sizing: border-box;
	}

	.fui-template__item:nth-of-type(odd) {
		padding-right: 15rpx;
	}

	.fui-template__item:nth-of-type(even) {
		padding-left: 15rpx;
	}

	.fui-template__item-inner {
		height: 176rpx;
		border-radius: 24rpx;
		overflow: hidden;
		position: relative;
		padding-left: 32rpx;
		box-sizing: border-box;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-icon {
		width: 64rpx;
		height: 64rpx;
		position: absolute;
		right: 32rpx;
		top: 32rpx;
	}

	.fui-name__cn {
		line-height: 32rpx;
		padding-top: 62rpx;
	}

	.fui-name__en {
		font-size: 24rpx;
		line-height: 24rpx;
		color: #B2B2B2;
		padding-top: 16rpx;
	}
</style>