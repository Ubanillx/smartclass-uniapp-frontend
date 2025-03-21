<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号：1234 0    0  00   485    31 9  959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Vtabs <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Vtabs 纵向选项卡，用于让用户在不同的视图中进行切换。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="选项卡-联动" bold :margin="['24rpx']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="选项卡-不联动" bold @click="href(2)">
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
				let url = '../vtabs-A/vtabs-A';
				if (type !== 1) {
					url = '../vtabs-B/vtabs-B'
				}

				this.fui.href(url)
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