<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号：  1   23 4000 0  4 8 5319  959    Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">
				<fui-text font-weight="600" size="36" text="Lottie"></fui-text>
				<image class="fui-vip__icon" src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<text class="fui-page__desc">Lottie 动画，通过读取json文件信息实现动画效果。</text>
		</view>
		<!-- nvue 请使用官方提供组件 https://uniapp.dcloud.net.cn/component/animation-view.html#animation-view -->
		<view class="fui-page__bd fui-page__spacing">
			<text class="fui-section__title">本地json文件</text>
			<view class="fui-flex__center">
				<!-- 百度小程序平台path属性目前不支持远程地址，仅支持本地绝对路径 -->
				<!-- #ifdef MP-BAIDU-->
				<animation-view class="fui-animation" path="/static/json/nodata.json" loop
					:action="action"></animation-view>
				<!-- #endif -->

				<!-- #ifndef MP-BAIDU-->
				<fui-lottie :options="options"></fui-lottie>
				<!-- #endif -->
			</view>
			<!-- #ifndef MP-BAIDU -->
			<text class="fui-section__title">网络地址</text>
			<view class="fui-flex__center">
				<fui-lottie :options="option" :action="action"></fui-lottie>
			</view>
			<!-- #endif -->


			<view class="fui-flex__center fui-flex__column">
				<fui-button type="gray" btn-size="medium" text="暂停播放" bold :margin="['24rpx']"
					@click="ani('pause')"></fui-button>
				<fui-button type="gray" btn-size="medium" text="开始播放" bold @click="ani('play')">
				</fui-button>
				<fui-button type="gray" btn-size="medium" text="停止播放" bold :margin="['24rpx']" @click="ani('stop')">
				</fui-button>
			</view>

		</view>
	</view>
</template>

<script>
	import emptyJson from '@/static/json/nodata.json'
	export default {
		data() {
			return {
				options: {
					animationData: emptyJson
				},
				option: {
					path: 'https://res.firstui.cn/static/json/empty.json'
				},
				action: 'play'
			}
		},
		methods: {
			vip() {
				uni.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			//销毁隐藏可使用v-if自行控制
			ani(action) {
				if (this.action === action) return;
				this.action = action
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	page {
		font-weight: normal;
	}

	/* #endif */
	.fui-animation {
		width: 400rpx;
		height: 400rpx;
	}
</style>