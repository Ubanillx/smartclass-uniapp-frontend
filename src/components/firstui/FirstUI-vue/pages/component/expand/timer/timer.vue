<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：12 34 0  00048     53   1 99 5   9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Timer <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Timer 计时器，可累加计时。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">20s自动结束</view>
			<view class="fui-timer__box">
				<fui-timer :maxTime="20" @end="end"></fui-timer>
			</view>
			<view class="fui-section__title">冒号显示为文字</view>
			<view class="fui-timer__box">
				<fui-timer :isColon="false" :maxTime="40" @end="end"></fui-timer>
			</view>
			<view class="fui-section__title">更换样式，显示毫秒</view>
			<view class="fui-timer__box">
				<fui-timer background="#465CFF" color="#fff" colonColor="#465CFF" isMs msWidth="40" :maxTime="180"
					@end="end"></fui-timer>
			</view>
			<view class="fui-section__title">手动控制</view>
			<view class="fui-timer__box">
				<fui-timer ref="timer" isMs :autoStart="false" @end="end"></fui-timer>
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

			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			end(e) {
				console.log(e)
				this.fui.toast(`计时结束，时间：${e.totalSeconds}s`)
			},
			handleClick(e) {
				let index = e.detail.index;
				if (index == 0) {
					this.$refs.timer.startTiming()
				} else if (index == 1) {
					this.$refs.timer.endTimer()
				} else {
					this.$refs.timer.resetTimer()
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