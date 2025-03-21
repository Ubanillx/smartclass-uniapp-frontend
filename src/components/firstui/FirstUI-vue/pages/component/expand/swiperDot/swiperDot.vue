<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号： 1 2      3 40  0004  85 31 9959  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SwiperDot <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SwiperDot 轮播图指示点，一般用于banner轮播图。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">默认使用</view>
			<fui-swiper-dot :items="items" :current="current">
				<swiper class="fui-banner__wrap" @change="change" circular :indicator-dots="false" autoplay
					:interval="4000" :duration="150">
					<swiper-item v-for="(item,index) in items" :key="index">
						<view class="fui-banner__item" :style="{background:item.background}">First UI 组件库</view>
					</swiper-item>
				</swiper>
			</fui-swiper-dot>
			<view class="fui-section__title">改变圆点大小</view>
			<fui-swiper-dot :styles="styles" :items="items" :current="current2">
				<swiper previous-margin="60rpx" next-margin="60rpx" class="fui-banner__box" @change="change2" circular
					:indicator-dots="false" autoplay :interval="5000" :duration="150">
					<swiper-item v-for="(item,index) in items" :key="index">
						<view class="fui-banner__cell" :class="{'fui-item__scale':current2!==index}"
							:style="{background:item.background}">First UI 组件库</view>
					</swiper-item>
				</swiper>
			</fui-swiper-dot>
			<view class="fui-section__title">数字索引</view>
			<fui-swiper-dot type="2" :styles="styles2" :items="items" :current="current3">
				<swiper class="fui-banner__wrap" @change="change3" circular :indicator-dots="false" autoplay
					:interval="5000" :duration="150">
					<swiper-item v-for="(item,index) in items" :key="index">
						<view class="fui-banner__item" :style="{background:item.background}">First UI 组件库</view>
					</swiper-item>
				</swiper>
			</fui-swiper-dot>
			<view class="fui-section__title">展示标题</view>
			<fui-swiper-dot type="3" field="title" :styles="styles3" :items="items" :current="current4">
				<swiper class="fui-banner__wrap" @change="change4" circular :indicator-dots="false" autoplay
					:interval="4500" :duration="150">
					<swiper-item v-for="(item,index) in items" :key="index">
						<view class="fui-banner__item" :style="{background:item.background}">First UI 组件库</view>
					</swiper-item>
				</swiper>
			</fui-swiper-dot>
			<view class="fui-section__title">固定于右侧</view>
			<fui-swiper-dot type="4" :styles="styles4" :items="items" :current="current5">
				<swiper class="fui-banner__wrap" @change="change5" circular :indicator-dots="false" autoplay
					:interval="4000" :duration="150">
					<swiper-item v-for="(item,index) in items" :key="index">
						<view class="fui-banner__item" :style="{background:item.background}">First UI 组件库</view>
					</swiper-item>
				</swiper>
			</fui-swiper-dot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				current2: 0,
				current3: 0,
				current4: 0,
				current5: 0,
				items: [{
					background: '#09BE4F',
					title: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
				}, {
					background: '#FFB703',
					title: 'UI 样式可配置，拓展灵活，轻松适应不同的设计风格。'
				}, {
					background: '#B2B2B2',
					title: '支持App-vue（Android、IOS）、App-Nvue（Android、IOS）。'
				}],
				styles: {
					width: 12,
					height: 12,
					activeWidth: 24
				},
				styles2: {
					width: 40,
					height: 40,
					background: 'rgba(255, 43, 43, .1)',
					activeBackground: '#FF2B2B'
				},
				styles3: {
					height: 80,
					bottom: 0
				},
				styles4: {
					width: 68,
					height: 40
				}
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e) {
				this.current = e.detail.current;
			},
			change2(e) {
				this.current2 = e.detail.current;
			},
			change3(e) {
				this.current3 = e.detail.current;
			},
			change4(e) {
				this.current4 = e.detail.current;
			},
			change5(e) {
				this.current5 = e.detail.current;
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

	.fui-banner__item {
		width: 100%;
		height: 360rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34rpx;
		font-weight: 600;
	}

	.fui-banner__wrap {
		height: 360rpx;
	}


	.fui-banner__box {
		height: 280rpx;
	}

	.fui-banner__cell {
		width: 100%;
		height: 280rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 34rpx;
		font-weight: 600;
		border-radius: 24rpx;
		transition: transform .1s linear;
	}

	.fui-item__scale {
		transform: scale3d(.9, .9, 1);
	}
</style>