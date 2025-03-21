<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：123  40 00048  5  3 1  995      9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Slider <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Slider 滑块选择器，用于在一个区间内选择特定值。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">默认使用</view>
			<fui-slider :width="width" @change="onChange" @changing="onChanging"></fui-slider>
			<view class="fui-section__title">初始值/显示value</view>
			<fui-slider :value="50" showValue></fui-slider>
			<view class="fui-section__title">仅显示/禁止滑动</view>
			<fui-slider :value="70" showValue disabled></fui-slider>
			<view class="fui-section__title">调整颜色</view>
			<fui-slider showValue background="rgba(255, 183, 3, .3)" activeColor="#FFB703" blockColor="#FFB703"
				valueColor="#FFB703"></fui-slider>
			<view class="fui-section__title">区间选择/min/max</view>
			<fui-slider showValue section width="220" :min="100" :max="800" :value="100" :endValue="800"
				@change="sectionChange">
			</fui-slider>
		</view>
	</view>
</template>

<script>
	// 头条小程序边缘侧滑返回事件与touch事件有冲突
	// 头条小程序中组件不要靠屏幕边缘太近
	export default {
		data() {
			return {
				init: true,
				width: uni.upx2px(600)
			}
		},
		onReady() {
			// #ifdef MP-TOUTIAO
			//禁用侧滑返回
			// tt.setSwipeBackMode(0);
			// #endif
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onChange(e) {
				console.log(e)
				if (!this.init || e.value !== 0) {
					this.fui.toast(`您选择的值为：${e.value}`)
				}
				this.init = false
			},
			//需要实时数据时使用
			onChanging(e) {
				//console.log(e)
			},
			//区间选择返回数据
			sectionChange(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-bottom: 48rpx;
	}

	/* 头条小程序边缘侧滑返回事件与touch事件有冲突
	头条小程序中组件不要靠屏幕边缘太近 */

	/* #ifdef MP-TOUTIAO */
	.fui-page__spacing {
		padding-left: 64rpx;
	}

	/* #endif */
</style>