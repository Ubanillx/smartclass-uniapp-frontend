<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：1234        0   00048 531  9  95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Sticky <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Sticky 吸顶容器，用于将标题栏在滚动时固定到页面顶部。</view>
		</view>
		<view class="fui-section__title">放置根目录下</view>
		<fui-sticky :zIndex="1001" :scrollTop="scrollTop">
			<view class="fui-header">滑动页面查看效果</view>
		</fui-sticky>
		<view class="fui-seat__wrap">
			温馨提示：组件父元素不能使用overflow:hidden或者overflow:auto属性，且父元素的高度不能低于sticky元素的高度
		</view>
		<view class="fui-section__title">放置scroll-view内</view>
		<scroll-view scroll-y class="fui-scroll__view">
			<view style="height: 800px;position: relative;">
				<view class="fui-seat__wrap" style="height: 70px;">
					温馨提示：组件父元素不能使用overflow:hidden或者overflow:auto属性，且父元素的高度不能低于sticky元素的高度
				</view>
				<!--scroll-view 内组件不需要传值 scrollTop -->
				<fui-sticky>
					<view class="fui-header">滑动scroll-view查看效果</view>
				</fui-sticky>
				<view class="fui-seat__wrap" style="height: 40px;">
					注意：sticky组件如果放在scroll-view根目录下，当到scroll-view元素的底部时sticky效果会失效。
				</view>
				<view class="fui-seat__wrap">
					解决办法：如当scroll-view的高度为200px，但是scrollHeight为800px，在scroll-view中嵌套一个view就能顺利定位。</view>
				<view class="fui-footer">到达底部</view>
			</view>
		</scroll-view>
		<view style="height: 800px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		// #ifdef MP-QQ || MP-TOUTIAO || MP-BAIDU
		onPageScroll(e) {
			// console.log(e)
			this.scrollTop = e.scrollTop
		},
		// #endif
		methods: {
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

	.fui-section__title {
		margin-left: 32rpx;
		margin-top: 48rpx;
	}

	.fui-header {
		width: 100%;
		padding: 24rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		background: #F8F8F8;
		color: #465CFF;
		font-weight: bold;
	}

	.fui-seat__wrap,
	.fui-footer {
		height: 60px;
		font-size: 24rpx;
		color: #B2B2B2;
		padding: 32rpx;
		box-sizing: border-box;
	}

	.fui-footer {
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.fui-scroll__view {
		width: 100%;
		height: 200px;
		background: #fff;
	}
</style>