<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：  1 2340 00 048    531995        9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">OverflowHidden <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">OverflowHidden 内容超出隐藏，主要用于文本内容超出隐藏功能。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">显示一行</view>
			<view class="fui-oh__wrap">
				<fui-overflow-hidden :text="text"></fui-overflow-hidden>
			</view>
			<view class="fui-section__title">显示两行</view>
			<view class="fui-oh__wrap">
				<fui-overflow-hidden :text="text" :rows="isHidden?2:1000">
					<view class="fui-btn__text" :class="{'fui-visible':!isHidden}" @tap="change">{{isHidden?'展开':'收起'}}
					</view>
				</fui-overflow-hidden>
			</view>
			<view class="fui-section__title">调整样式，显示三行</view>
			<view class="fui-oh__wrap">
				<fui-overflow-hidden :text="text" :size="28" color="#FFB703" :rows="3"></fui-overflow-hidden>
			</view>
			<view class="fui-section__title">渐变隐藏</view>
			<view class="fui-oh__wrap">
				<!--注意：Nvue端使用插槽时，文本及其他内容元素样式需自行设置-->
				<fui-overflow-hidden :text="text2" :size="28" color="#FF2B2B" type="2" gradientColor="#FFFFFF"
					height="200rpx" :visible="visible"></fui-overflow-hidden>
				<fui-button type="gray" btn-size="medium" :text="btnText" bold :margin="['48rpx','auto']"
					@click="readMore">
				</fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	//注意：Nvue端使用插槽时，文本及其他内容元素样式需自行设置
	export default {
		data() {
			return {
				text: 'First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！',
				text2: 'First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！此外FirstUI准备打造其他版本框架，不仅仅局限于uni-app，目前考虑的有微信小程序原生版本、支付宝原生版本、Taro版本等。目前已上架的除uni-app外，微信小程序原生版本已于2022年02月正式上线。',
				visible: false,
				isHidden: true,
				btnText: '点击查看所有内容',
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change() {
				this.isHidden = !this.isHidden
			},
			readMore() {
				if (this.visible) {
					this.visible = false
					this.btnText = '点击查看所有内容'
				} else {
					this.visible = true
					this.btnText = '点击隐藏内容'
				}
			}
		}
	}
</script>

<style>
	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-oh__wrap {
		width: 100%;
		padding: 24rpx 32rpx;
		box-sizing: border-box;
		background: #FFFFFF;
	}

	.fui-btn__text {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 2;
		background-color: #fff;
		color: var(--fui-color-primary);
		cursor: pointer;
		padding-left: 8rpx;
	}

	.fui-btn__text::after {
		content: '';
		position: absolute;
		top: 0;
		left: -48rpx;
		height: 100%;
		width: 48rpx;
		background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5) 10%, #fff);
		pointer-events: none;
	}

	.fui-visible {
		display: inline-block;
		position: static;
		padding-left: 0;
	}

	.fui-visible::after {
		background: none;
	}
</style>