<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号：    123 400 004 8   5    3 199 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Progress <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Progress 进度条，用于展现某个任务的当前进度。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-progress :percent="80"></fui-progress>
			<view class="fui-section__title">显示进度</view>
			<fui-progress :percent="70" showInfo></fui-progress>
			<view class="fui-section__title">改变颜色</view>
			<fui-progress :percent="60" background="#ddd" activeColor="#FFB703"></fui-progress>
			<view class="fui-section__title">设置高度</view>
			<fui-progress :percent="70" height="16" radius="16" activeColor="#09BE4F"></fui-progress>
			<view class="fui-section__title">控制进度</view>
			<fui-progress :percent="percent" showInfo></fui-progress>
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="percent" bold :margin="['24rpx']"
					@click="percentChange"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent: 0
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			percentChange() {
				if (this.percent >= 100) {
					this.percent = 40;
				} else {
					//大于100按100处理
					this.percent += 30;
				}
			}
		}
	}
</script>

<style>
	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 48rpx;
	}

	.fui-wrap {
		padding-bottom: 64rpx;
	}
</style>