<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：   12 3  400  0 0  4  8 5319   959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">BottomNavbar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">BottomNavbar 底部导航栏，用于提供页面的导航能力。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-bottom-navbar :items="items" :isFixed="false"></fui-bottom-navbar>
			<view class="fui-section__title">改变颜色</view>
			<fui-bottom-navbar background="#222" color="#d1d1d1" lineColor="#333" :items="items" :isFixed="false">
			</fui-bottom-navbar>
		</view>
		<fui-bottom-navbar @init="init" @click="onClick" left="8" :items="options">
		</fui-bottom-navbar>
		<fui-bubble-box width="200" :size="28" direction="top" :show="show" :triangle="{left:100}" :bottom="height"
			:left="32" :items="subItems" @click="subClick" @close="onClose"></fui-bubble-box>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['历史文章', '面试总结', '欢迎投稿'],
				options: [{
					text: '最新动态',
					name: 'menu',
					size: 24
				}, {
					text: '学习平台'
				}, {
					text: '加入我们'
				}],
				subItems: [{
					text: '官方新闻'
				}, {
					text: '线下活动'
				}, {
					text: '商城优惠'
				}],
				height: 100,
				show: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			init(e) {
				this.height = Math.ceil(e.height / e.windowWidth * 750)
			},
			onClick(e) {
				console.log(e)
				if (e.index === 0) {
					this.show = true
				} else {
					this.fui.toast(e.text)
				}
			},
			subClick(e) {
				console.log(e)
				this.fui.toast(this.subItems[e.index].text)
				this.onClose()
			},
			onClose() {
				this.show = false
			}
		}
	}
</script>

<style>
	.fui-section__title {
		margin-left: 32rpx;
	}
</style>