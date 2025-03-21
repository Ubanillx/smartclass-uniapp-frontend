<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号： 12  3 4 0  00   048 5 3 1  99  59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SearchBar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SearchBar 搜索栏，主要用于内容搜索，跳转展示等。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基本使用</view>
			<fui-search-bar @search="search" v-model="val"></fui-search-bar>
			<view class="fui-section__title">调整样式</view>
			<fui-search-bar background="#ededed" radius="36" searchColor="#FFB703" @search="search"></fui-search-bar>
			<view class="fui-section__title">插槽使用/返回箭头/不显示占位</view>
			<fui-search-bar background="#fff" radius="36" inputBackground="#fafafa" @search="search">
				<view class="fui-arrow__left" @tap.stop="back">
					<fui-icon name="arrowleft" size="56"></fui-icon>
				</view>
			</fui-search-bar>
			<view class="fui-section__title">占位内容左对齐</view>
			<fui-search-bar isLeft background="#111" color="#fff" inputBackground="#222" @search="search">
			</fui-search-bar>
			<view class="fui-section__title">禁用状态，只做跳转</view>
			<fui-search-bar disabled @click="onClick"></fui-search-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: ''
			}
		},
		onLoad() {

		},
		watch: {
			val(newValue, oldValue) {
				console.log(newValue)
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			search(e) {
				//输入框值
				console.log(e.detail.value)
				this.fui.toast(`搜索关键词:${e.detail.value}`)
				//搜索逻辑自行处理
				//...
			},
			onClick() {
				this.fui.toast('跳转至搜索页面~')
			},
			back() {
				uni.navigateBack()
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

	.fui-arrow__left {
		flex-shrink: 0;
		margin-left: -8rpx;
		padding-right: 12rpx;
	}

	.fui-arrow__left:active {
		opacity: .5;
	}
</style>