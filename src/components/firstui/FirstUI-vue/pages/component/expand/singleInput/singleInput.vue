<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号： 12 3 4  000 0 4 85 31     9 9 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SingleInput <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SingleInput 单输入框，每个输入框只允许输入一个字符，主要用于验证码、密码输入框等。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="验证码输入框" bold :margin="['24rpx']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="密码输入框" bold @click="href(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="结合自定义键盘" bold :margin="['24rpx']" @click="dk">
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
			href(type) {
				let url = type == 1 ? '../singleInput-A/singleInput-A' : '../singleInput-B/singleInput-B'
				this.fui.href(url)
			},
			dk() {
				this.fui.href('../digitalKeyboard/digitalKeyboard')
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>