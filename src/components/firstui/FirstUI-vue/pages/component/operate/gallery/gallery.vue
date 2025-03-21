<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：  12 3 40 0  00   48  5  31  9 959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Gallery <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Gallery 画廊，用于预览图片或其他操作。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="自定义Gallery" bold :margin="['24rpx']"
				@click="showGallery"></fui-button>
			<fui-button type="gray" btn-size="medium" text="原生预览" bold @click="previewImage"></fui-button>
		</view>
		<fui-gallery :urls="urls" :show="show" @hide="hideGallery"></fui-gallery>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urls: [{
					src: '/static/images/common/logo.png',
					descr: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
				}, {
					src: '/static/images/component/img_goods_3x.jpg'
				}, {
					src: '/static/images/component/img_bg_poster.png'
				}],
				show: false,
				resUrl: this.fui.resUrl()
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			showGallery() {
				this.show = true
			},
			hideGallery() {
				this.show = false
			},
			previewImage() {
				uni.previewImage({
					urls: [`${this.resUrl}/common/logo.png`, `${this.resUrl}/component/img_goods_3x.jpg`]
				})
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>