<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：1 234 0000  48 5 31      9   95 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Circle <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Circle 圆形进度条，用于展现某个任务的当前进度。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-circle :percent="80"></fui-circle>
			<view class="fui-section__title">调整样式/起始弧度/渐变</view>
			<!-- 快手小程序暂不支持渐变 -->
			<!--注意：头条小程序不支持颜色值简写 如：#EEEEEE 不可写成 #eee-->
			<fui-circle :percent="75" color="#FFB703" background="#EEEEEE" foreground="#FFB703" gradient="#FAE845"
				:sAngle="-0.5" :width="200" :strokeWidth="6" :size="16"></fui-circle>
			<view class="fui-section__title">调整百分比</view>
			<fui-circle :percent="percent"></fui-circle>
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
				let percent = this.percent + 25
				this.percent = percent > 100 ? 25 : percent
			}
		}
	}
</script>

<style></style>