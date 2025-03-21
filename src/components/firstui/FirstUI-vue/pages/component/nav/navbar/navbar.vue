<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：   1 23 40000 48 5  3   19    9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">NavBar<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">NavBar 导航栏，用于提供页面的导航能力，若上方出现空白位置，则为状态栏高度。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-nav-bar title="标题" splitLine></fui-nav-bar>
			<view class="fui-section__title">样式调整，不含状态栏高度</view>
			<fui-nav-bar title="标题" :statusBar="false" background="linear-gradient(300deg, #6831FF, #465CFF)" color="#fff"></fui-nav-bar>
			<view class="fui-section__title">左右显示内容</view>
			<fui-nav-bar title="标题内容" @leftClick="leftClick" @rightClick="rightClick">
				<fui-icon name="arrowleft"></fui-icon>
				<template v-slot:right>
					<fui-icon name="plus"></fui-icon>
				</template>
			</fui-nav-bar>
			<view class="fui-section__title">自定义导航栏内容</view>
			<fui-nav-bar custom padding="12">
				<view class="fui-nav__city">深圳市</view>
				<view class="fui-search__box">请输入搜索关键词</view>
			</fui-nav-bar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			leftClick(e) {
				console.log('左侧按钮点击')
			},
			rightClick(e) {
				console.log('右侧按钮点击')
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
	.fui-wrap{
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-nav__city {
		font-size: 28rpx;
		padding-right: 12px;
		flex-shrink: 0;
	}

	.fui-search__box {
		width: 100%;
		height: 32px;
		background-color: #eee;
		border-radius: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		color: #b2b2b2;
	}
</style>