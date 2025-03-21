<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：1     234000 0  4     8 5 3 1995 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Parse <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Parse 富文本解析，支持 html 或 markdown 解析。</view>
		</view>
		<view class="fui-page__bd">
			<!-- html 解析 -->
			<fui-parse-group @preview="preview" @atap="atap">
				<fui-parse :nodes="html"></fui-parse>
			</fui-parse-group>

			<!-- markdown 解析 -->
			<fui-parse-group :thBgcolor="false" @preview="preview">
				<fui-parse :nodes="md" language="md"></fui-parse>
			</fui-parse-group>
		</view>
	</view>
</template>

<script>
	import richtext from './index.js'
	export default {
		data() {
			return {
				html: richtext.html,
				md: richtext.md
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			preview(e) {
				console.log(e)
			},
			atap(e) {
				console.log(e)
				this.fui.toast(e)
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		padding: 0 32rpx 96rpx;
		box-sizing: border-box;
	}
</style>