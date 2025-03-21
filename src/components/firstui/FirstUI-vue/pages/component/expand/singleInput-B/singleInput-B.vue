<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：1  2 3 4   00004    8    5 319 959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
1<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SingleInput <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SingleInput 单输入框，每个输入框只允许输入一个字符，可自定义样式，可设置输入长度。</view>
		</view>
		<view class="fui-page__bd">
			<fui-single-input border="1" borderWidth="1" radius="16" activeColor="#FFB703" cursorHeight="40"
				cursorColor="#FFB703" :length="6" width="80" height="80"  size="24" password isFocus  @input="onInput" @complete="onComplete">
			</fui-single-input>
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
			onInput(e) {
				//e.detail.value
				console.log(e)
			},
			onComplete(e) {
				//e.detail.value
				console.log(e)
				this.fui.toast(`您输入的密码为：${e.detail.value}`)
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>