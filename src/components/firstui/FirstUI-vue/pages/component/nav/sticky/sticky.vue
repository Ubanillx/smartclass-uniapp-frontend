<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4  034，营业执照号：12     340 00048531 9  95      9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Sticky <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Sticky 吸顶容器，用于将标题栏在滚动时固定到页面顶部。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="基础使用" bold :margin="['24rpx']"
				@click="sticky(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="指定内容范围" bold @click="sticky(2)">
			</fui-button>
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
			},
			sticky(type) {
				let url = type === 1 ? '../sticky-A/sticky-A' : '../sticky-B/sticky-B'
				this.fui.href(url)
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