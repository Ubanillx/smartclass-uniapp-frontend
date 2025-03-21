<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：1  23 4 0  000 4 8 53   19 9 5  9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Tabbar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Tabbar 标签栏，用于在不同功能模块之间进行切换，小图标建议尺寸84*84。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar2" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">纯文本</view>
			<fui-tabbar :isFixed="false" background="rgba(0,0,0,.5)" color="rgba(255,255,255,.7)" selectedColor="#fff"
				size="32" font-weight="500" :tabBar="tabBar" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">纯图标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar3" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">中间使用图标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar4" :current="current2" @click="itemClick2"></fui-tabbar>
			<!-- #ifndef APP-NVUE -->
			<!-- Nvue暂不支持 -->
			<view class="fui-section__title">中间大图标（凸出）</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar5" :current="current2" @click="itemClick2"></fui-tabbar>
			<!-- #endif -->
			<view class="fui-section__title">带角标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar6" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">使用字体图标（fui-icon）</view>
			<fui-tabbar :isFixed="false" selected-color="#FFB703" :tabBar="tabBar7" :current="current" @click="itemClick"></fui-tabbar>
		</view>
	</view>
</template>

<script>
	import data from './index.js'
	export default {
		data() {
			return {
				tabBar: data.tabBar,
				current: 0,
				current2: 0,
				tabBar2: data.tabBar2,
				tabBar3: data.tabBar3,
				tabBar4: data.tabBar4,
				tabBar5: data.tabBar5,
				tabBar6: data.tabBar6,
				tabBar7: data.tabBar7
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			itemClick(e) {
				console.log(e)
				this.current = e.index
			},
			itemClick2(e) {
				console.log(e)
				if (e.index == 2) {
					this.fui.toast('您点击了大图标~')
				} else {
					this.current2 = e.index
				}
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}
</style>