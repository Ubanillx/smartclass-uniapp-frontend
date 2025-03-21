<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：1   234  0   00048 53    19  9 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">WhiteSpace</view>
			<view class="fui-page__desc">上下间距，布局组件，主要用于设置内容之间上下间距使用。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">size = small（8rpx）</view>
			<view class="fui-block"></view>
			<fui-white-space size="small"></fui-white-space>
			<view class="fui-block"></view>

			<view class="fui-section__title">size = default（16rpx）</view>
			<view class="fui-block"></view>
			<fui-white-space size="default"></fui-white-space>
			<view class="fui-block"></view>

			<view class="fui-section__title">size = large（24rpx）</view>
			<view class="fui-block"></view>
			<fui-white-space size="large"></fui-white-space>
			<view class="fui-block"></view>

			<view class="fui-section__title">自定义间距（10rpx）</view>
			<view class="fui-block"></view>
			<fui-white-space height="10"></fui-white-space>
			<view class="fui-block"></view>
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

		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-block {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
	}
</style>