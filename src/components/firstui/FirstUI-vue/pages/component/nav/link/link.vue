<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号：123 40  0 00 4 8 5   3  1 9 95 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Link<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Link 超链接，外部网页超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-link href="https://www.firstui.cn"></fui-link>
			<view class="fui-section__title">改变颜色/点击效果</view>
			<fui-link href="https://www.firstui.cn" color="#FFB703" highlight></fui-link>
			<view class="fui-section__title">加下划线</view>
			<fui-link href="https://www.firstui.cn" underline></fui-link>
			<view class="fui-section__title">自定义显示文本</view>
			<fui-link href="https://www.firstui.cn" text="FirstUI 组件库" underline></fui-link>
			<view class="fui-section__title">调整字体大小/加粗</view>
			<fui-link href="https://www.firstui.cn" size="32" font-weight="600"></fui-link>
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
	page {
		font-weight: normal;
	}

	.fui-wrap {
		padding-bottom: 64rpx;
	}
</style>