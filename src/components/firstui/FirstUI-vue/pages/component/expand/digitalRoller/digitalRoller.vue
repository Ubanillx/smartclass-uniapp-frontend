<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：12    3   4  0000  48 531995     9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">DigitalRoller <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">DigitalRoller 数字滚轮，数字变化时切换滚动效果，一般用于金额的变化。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-roller__box">
				<text>默认样式： </text>
				<fui-digital-roller :value="value"></fui-digital-roller>
			</view>
			<view class="fui-roller__box">
				<fui-digital-roller :value="value" color="#FFB703" :size="48" :height="48"></fui-digital-roller>
			</view>
			<fui-button type="gray" btn-size="medium" text="188.21" bold :margin="['24rpx']"
				@click="roller('188.21')"></fui-button>
			<fui-button type="gray" btn-size="medium" text="5,890.89" bold @click="roller('5,890.89')">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="$1,314.20" bold :margin="['24rpx']"
				@click="roller('$1,314.20')">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="￥9,790.95" bold @click="roller('￥9,790.95')">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="8913" bold :margin="['24rpx']"
				@click="roller('8913')">
			</fui-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 361
			}
		},
		onLoad() {
			setTimeout(() => {
				this.value = 908
			}, 1200);
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			roller(val) {
				this.value = val
			}
		}
	}
</script>

<style>
	.fui-roller__box {
		width: 100%;
		padding: 24rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>