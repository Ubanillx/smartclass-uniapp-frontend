<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号： 1  23  4 0   000  485   319  9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Result <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Result 结果页，在页面中组织图标、文字等内容，向用户反馈操作结果。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="成功 success" bold :margin="['24rpx']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="警告 warning" bold @click="href(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="失败 fail" bold :margin="['24rpx']"
				@click="href(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="等待 waiting" bold @click="href(4)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="自定义图标" bold :margin="['24rpx']"
				@click="href(5)">
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
				this.fui.href(`../result-eg/result-eg?type=${type}`)
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