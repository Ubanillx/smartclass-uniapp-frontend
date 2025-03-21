<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号：       1 2 34000  0 4 853 19  959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-banner__box">
			<image class="fui-banner" :src="`${resUrl}/index/light/img_banner_3x.png`" mode="widthFix"></image>
			<view class="fui-banner__content">
				<image class="fui-logo" src="/static/images/common/img_logo.png" mode="widthFix"></image>
				<view class="fui-title">First UI</view>
				<view class="fui-desc">First UI是一款轻量、全面可靠的移动端组件库。</view>
			</view>
			<view class="fui-tabs__box">
				<scroll-view class="fui-scroll__box" id="fui_tabs" scroll-with-animation scroll-x
					:show-scrollbar="false" :scroll-into-view="scrollInto">
					<view class="fui-scroll__view fui-align__center">
						<view v-for="(tab, index) in tabs" :key="index" class="fui-tab__item fui-flex__center"
							:class="{'fui-tab__item-active':tabIndex===index}" :id="tab.id" @tap="tabClick(index)">
							<view :class="{'fui-tab__item-text':tabIndex===index}">{{ tab.name }}</view>
						</view>
					</view>
				</scroll-view>
				<swiper :current="tabIndex" class="fui-swiper__box" :duration="300" @change="tabChange"
					:style="{height:height+'px'}">
					<swiper-item class="fui-swiper__item" v-for="(tab, index) in tabs" :key="tab.id">
						<scroll-view class="fui-scroll__box" scroll-y :style="{height:height+'px'}">
							<view class="fui-list__view">
								<fui-list-cell arrow :padding="[0,'32rpx']" :bottomBorder="false" radius="16rpx"
									marginTop="24" v-for="(item,idx) in tab.data" :key="idx"
									@click="href(tab.id,item.page)">
									<view class="fui-list__item fui-align__center">
										<view class="fui-item__icon-box">
											<image class="fui-item__icon"
												:src="`${resUrl}/index/light/icon_${item.icon}_3x.png`"></image>
										</view>
										<text>{{item.name}}</text>
										<image v-if="item.vip" class="fui-vip__icon"
											src="/static/images/index/light/icon_member_3x.png"></image>
									</view>
								</fui-list-cell>
							</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import tabs from './index.js';
	export default {
		data() {
			return {
				tabs: tabs,
				scrollInto: '',
				tabIndex: 0,
				height: 0,
				resUrl: this.fui.resUrl()
			}
		},
		computed: mapState(['status']),
		onLoad() {
			let time = 80
			// #ifdef H5
			time = 200
			// #endif
			setTimeout(() => {
				this.height = uni.getSystemInfoSync().windowHeight - uni.upx2px(538);
				// #ifdef MP
				this.getStatus().then((res) => {})
				// #endif
			}, time)
		},
		methods: {
			...mapActions(['getStatus']),
			tabClick(index) {
				this.switchTab(index)
			},
			tabChange(e) {
				if (e.detail.source == 'touch') {
					let index = e.target.current || e.detail.current;
					this.switchTab(index);
				}
			},
			switchTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				let scrollIndex = index - 1 < 0 ? 0 : index - 1;
				this.scrollInto = this.tabs[scrollIndex].id;
			},
			href(type, page) {
				if (page) {
					// #ifdef MP-TOUTIAO
					if (this.status !== 1 && page === 'imageCropper') {
						this.fui.toast('开发中~')
						return;
					}
					// #endif
					if (type === 'canvas' && page === 'charts') {
						type = "expand"
					}
					this.fui.href(`/pages/component/${type}/${page}/${page}`)
				} else {
					this.fui.href('/pages/common/coding/coding')
				}
			}
		},
		onShareAppMessage() {
			return {
				title: 'First UI组件库'
			}
		}
	}
</script>

<style>
	.fui-banner__box {
		width: 100%;
		height: 540rpx;
		position: relative;
		background-color: #EDF9FF;
	}

	.fui-banner {
		width: 100%;
		height: 540rpx;
		display: block;
	}

	.fui-banner__content {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		padding: 80rpx 32rpx 0;
		box-sizing: border-box;
	}

	.fui-logo {
		width: 80rpx;
		height: 80rpx;
		border-radius: 16rpx;
		display: block;
	}

	.fui-title {
		font-size: 40rpx;
		line-height: 40rpx;
		padding: 24rpx 0 40rpx;
		box-sizing: border-box;
	}

	.fui-desc {
		width: 280rpx;
		font-size: 24rpx;
		line-height: 40rpx;
		color: #333333;
	}

	.fui-tabs__box {
		width: 100%;
		height: 108rpx;
		background: #FFFFFF;
		border-radius: 40rpx 40rpx 0 0;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 12;
	}

	.fui-scroll__view {
		min-width: 100%;
		height: 108rpx;
		white-space: nowrap;
	}

	.fui-tab__item {
		flex-shrink: 0;
		padding: 0 26rpx;
		height: 108rpx;
		font-size: 28rpx;
		color: #7F7F7F;
		position: relative;
	}

	.fui-tab__item-text {
		transform: scale(1.2);
		color: #465CFF;
		transition: transform 0.2s linear;
	}

	.fui-tab__item-active::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		background-color: #465CFF;
		border-radius: 2px;
		left: 24rpx;
		bottom: 0;
		transform: scale(1.2);
		animation: ani 0.2s linear forwards;
	}

	@keyframes ani {
		0% {
			width: 0;
		}

		100% {
			width: 45rpx;
		}
	}

	.fui-swiper__box,
	.fui-swiper__item,
	.fui-scroll__box {
		width: 100%;
	}

	.fui-list__view {
		width: 100%;
		min-height: 101%;
		padding: 8rpx 32rpx 32rpx;
		box-sizing: border-box;
	}

	.fui-list__item {
		width: 100%;
		height: 112rpx;
	}

	.fui-list__item text {
		padding-left: 24rpx;
		padding-right: 12rpx;
		flex-shrink: 0;
	}

	.fui-item__icon-box {
		width: 48rpx;
		height: 48rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-item__icon,
	.fui-vip__icon {
		width: 48rpx;
		height: 48rpx;
		display: block;
		flex-shrink: 0;
	}
</style>