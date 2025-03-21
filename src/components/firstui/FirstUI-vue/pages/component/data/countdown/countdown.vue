<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号：12  3400 0     04  8 5319 9    59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">CountDown <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">CountDown 倒计时，用于倒计时场景，可手动控制。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<view class="fui-timer__box">
				<fui-count-down :value="value" @end="end"></fui-count-down>
			</view>
			<view class="fui-section__title">冒号显示为文字</view>
			<view class="fui-timer__box">
				<fui-count-down :isColon="false" borderColor="transparent" background="transparent" :value="3600"
					@end="end"></fui-count-down>
			</view>
			<view class="fui-section__title">显示天</view>
			<view class="fui-timer__box">
				<fui-count-down isDays :isColon="false" borderColor="transparent" background="transparent"
					:value="244800" @end="end"></fui-count-down>
			</view>
			<view class="fui-section__title">仅显示秒</view>
			<view class="fui-timer__box">
				<fui-count-down :isHours="false" :isMinutes="false" :isColon="false" unitEn borderColor="transparent"
					background="transparent" :value="180" @end="end"></fui-count-down>
			</view>
			<view class="fui-section__title">更换样式，显示毫秒</view>
			<view class="fui-timer__box">
				<fui-count-down background="#465CFF" color="#fff" colonColor="#465CFF" borderColor="#465CFF" isMs
					msWidth="40" :value="3600" @end="end">
				</fui-count-down>
			</view>
			<view class="fui-section__title">手动控制</view>
			<view class="fui-timer__box">
				<fui-count-down background="#333" color="#fff" colonColor="#333" isMs msWidth="36" :value="30"
					:autoStart="false" @end="end" ref="countdown">
				</fui-count-down>
			</view>
			<fui-grid @click="handleClick">
				<fui-grid-item backgroundColor="#fff">
					<view class="fui-grid__cell">
						<fui-icon name="play"></fui-icon>
						<text>开始</text>
					</view>
				</fui-grid-item>
				<fui-grid-item backgroundColor="#fff" :index="1">
					<view class="fui-grid__cell">
						<fui-icon name="suspend"></fui-icon>
						<text>暂停</text>
					</view>
				</fui-grid-item>
				<fui-grid-item backgroundColor="#fff" :index="2">
					<view class="fui-grid__cell">
						<fui-icon name="refresh"></fui-icon>
						<text>重置</text>
					</view>
				</fui-grid-item>
			</fui-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		onReady() {
			setTimeout(() => {
				this.value = 20
			}, 2000)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			end(e) {
				console.log(e)
				this.fui.toast('倒计时结束~')
			},
			handleClick(e) {
				let index = e.detail.index;
				if (index == 0) {
					this.$refs.countdown.startCountdown()
				} else if (index == 1) {
					this.$refs.countdown.endCountdown(true)
				} else {
					this.$refs.countdown.resetCountdown()
				}
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

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-timer__box {
		width: 100%;
		padding-left: 32rpx;
		padding-bottom: 16rpx;
		box-sizing: border-box;

	}

	.fui-grid__cell {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		font-size: 28rpx;
	}
</style>