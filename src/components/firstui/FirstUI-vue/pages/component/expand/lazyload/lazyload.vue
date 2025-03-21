<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：123  40   00 04  8 53 199    5 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Lazyload <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Lazyload 图片懒加载，增强用户体验，减少http的请求，减少服务器端压力。</view>
		</view>
		<view class="fui-page__bd">
			<fui-lazyload src="https://res.firstui.cn/static/images/common/img_logo.png"></fui-lazyload>
			<view class="fui-text">请继续往下滑动</view>
			<view style="width:1px;height: 600px;"></view>
			<fui-lazyload src="https://res.firstui.cn/static/images/common/img_logo.png"></fui-lazyload>
			<view style="width:1px;height: 200px;"></view>
			<fui-lazyload :src="src"></fui-lazyload>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ''
			}
		},
		onLoad() {
			setTimeout(() => {
				this.src = 'https://res.firstui.cn/static/images/common/logo.png'
			}, 3000)
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
		padding-bottom: 64rpx;
	}

	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-text {
		font-weight: normal;
		font-size: 30rpx;
		padding: 96rpx 0;
	}
</style>