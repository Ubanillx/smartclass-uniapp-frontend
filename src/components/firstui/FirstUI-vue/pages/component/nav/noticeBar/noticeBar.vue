<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号： 1 2 3400     0 04  85  319 95  9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd" :class="{'fui-notice__pt':show}">
			<view class="fui-page__title fui-align__center" @tap="vip">NoticeBar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">NoticeBar 通告栏，一般用作系统提醒、活动提醒等通知。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">单行展示</view>
			<fui-notice-bar :padding="['0','32rpx']" :content="content" single></fui-notice-bar>
			<view class="fui-section__title">多行展示</view>
			<fui-notice-bar background="#fff8d5" color="#FFB703" :padding="['16rpx','32rpx']" :content="content">
			</fui-notice-bar>
			<view class="fui-section__title">文字滚动</view>
			<fui-notice-bar :content="content" scrollable></fui-notice-bar>
			<view class="fui-section__title">加图标/控制速度</view>
			<fui-notice-bar :content="content" :speed="200" scrollable activeMode="forwards" >
				<view class="fui-icon__box">
					<fui-icon name="notice" :size="36" color="#FF2B2B"></fui-icon>
				</view>
			</fui-notice-bar>
			<view class="fui-section__title">查看更多</view>
			<fui-notice-bar :content="content" height="88" size="30" single background="#fff" color="#333">
				<view class="fui-icon__box">
					<fui-icon name="notice-fill" :size="40" color="#465CFF"></fui-icon>
				</view>
				<template v-slot:right>
					<view class="fui-more__wrap">
						<text class="fui-more__text">查看更多</text>
						<fui-icon name="arrowright" :size="36" color="#7F7F7F"></fui-icon>
					</view>
				</template>
			</fui-notice-bar>
		</view>
		<!--顶部固定-->
		<view class="fui-notice__fixed" v-if="show">
			<fui-notice-bar :content="content" background="#fff8d5" color="#FF2B2B" scrollable>
				<view class="fui-icon__box">
					<fui-icon name="notice" :size="36" color="#FF2B2B"></fui-icon>
				</view>
				<template v-slot:right>
					<view class="fui-more__wrap" @tap.stop="closeNotice">
						<fui-icon name="close" :size="40" color="#FF2B2B"></fui-icon>
					</view>
				</template>
			</fui-notice-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。',
				show: true
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			closeNotice() {
				this.show = false
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

	.fui-page__hd {
		transition: all .2s;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-icon__box {
		padding-left: 24rpx;
		padding-right: 12rpx;
	}

	.fui-more__wrap {
		display: flex;
		align-items: center;
		padding: 0 24rpx;
	}

	.fui-more__text {
		font-size: 26rpx;
		color: #7F7F7F;
	}

	.fui-notice__fixed {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
	}

	.fui-notice__pt {
		padding-top: 124rpx;
	}
</style>