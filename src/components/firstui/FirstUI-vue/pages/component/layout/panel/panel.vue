<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号： 1   2340 00 04 85 3   19 9 5    9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center"  @tap="vip">Panel <image
					src="/static/images/index/light/icon_member_3x.png"></image></view>
			<view class="fui-page__desc">Panel 面板，常用的布局组件。</view>
		</view>
		<view class="fui-page__bd">
			<fui-panel :panelData="panelData"  radius="24" fontWeight="600"></fui-panel>
			<fui-panel row-reverse :panelData="panelData2" :marginTop="24" :size="34" :descSize="26"></fui-panel>
			<fui-panel :panelData="panelData3" :marginTop="24" :size="34" :descSize="26">
				<fui-list-cell arrow :bottomBorder="false" topBorder topLeft="32">
					<text class="fui-text__link">查看更多</text>
				</fui-list-cell>
			</fui-panel>
			<fui-panel :panelData="panelData4" radius="16" :marginTop="24" width="60" height="60" :size="32"></fui-panel>
			<fui-panel :panelData="panelData5" :marginTop="24" :size="32" @click="itemClick">
			</fui-panel>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				panelData: {
					src: '/static/images/common/img_logo.png',
					title: '基础使用',
					desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
				},
				panelData2: {
					head: '带标题的列表',
					src: '/static/images/common/logo.png',
					title: 'First UI组件库',
					desc: 'First UI是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
				},
				panelData3: {
					head: 'First UI介绍',
					list: [{
						src: '/static/images/common/logo.png',
						title: 'First UI组件库',
						desc: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
					}, {
						src: '/static/images/common/logo.png',
						title: 'First UI跨平台UI组件库',
						desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
					}]
				},
				panelData4: {
					head: '设置图片大小',
					list: [{
						src: '/static/images/common/img_logo.png',
						title: 'First UI组件库'
					}, {
						src: '/static/images/common/img_logo.png',
						title: 'First UI跨平台UI组件库'
					}]
				},
				panelData5: {
					head: '附加信息',
					list: [{
						title: 'First UI组件库',
						desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。',
						source: '开源中国',
						time: '2021-08-09'
					}, {
						title: 'First UI跨平台UI组件库',
						desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。',
						source: 'GitHub',
						time: '2021-08-09',
						extra: 'Apache License 2.0'
					}]
				}
			}
		},
		methods: {
			itemClick(e) {
				console.log(e)
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-text__link {
		color: #465CFF;
		font-size: 32rpx;
	}
</style>