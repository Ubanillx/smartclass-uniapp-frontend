<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：   1 23  4 00   00 48 5 3199  59  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">CubicBezier <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">CubicBezier 贝塞尔曲线，可用于加入购物车动画。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">左下方</view>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<text class="fui-text">点击加号加入购物车</text>
					<fui-cubic-bezier :left="left" :bottom="bottom" :param="0" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<view class="fui-badge">1</view>
						</template>
					</fui-cubic-bezier>
				</view>
			</fui-list-cell>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<text class="fui-text">点击加号加入购物车</text>
					<fui-cubic-bezier :left="left" :bottom="bottom" :param="1" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<image class="fui-badge--logo" src="/static/images/common/img_logo.png"></image>
						</template>
					</fui-cubic-bezier>
				</view>
			</fui-list-cell>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<fui-cubic-bezier :left="left" :bottom="bottom" :param="1" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<image class="fui-badge--logo" src="/static/images/common/img_logo.png"></image>
						</template>
					</fui-cubic-bezier>
					<text class="fui-text">点击加号加入购物车</text>
				</view>
			</fui-list-cell>
			<view class="fui-section__title">右下方</view>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<text class="fui-text">点击加号加入购物车</text>
					<fui-cubic-bezier direction="rb" :right="right" :bottom="bottom" :param="1" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<image class="fui-badge--logo" src="/static/images/common/img_logo.png"></image>
						</template>
					</fui-cubic-bezier>
				</view>
			</fui-list-cell>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<fui-cubic-bezier direction="rb" :right="right" :bottom="bottom" :param="0" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<view class="fui-badge">1</view>
						</template>
					</fui-cubic-bezier>
					<text class="fui-text">点击加号加入购物车</text>
				</view>
			</fui-list-cell>
			<fui-list-cell :highlight="false">
				<view class="fui-list__item">
					<fui-cubic-bezier direction="rb" :right="right" :bottom="bottom" :param="1" @click="handleClick">
						<fui-icon name="plussign"></fui-icon>
						<template v-slot:badge>
							<image class="fui-badge--logo" src="/static/images/common/img_logo.png"></image>
						</template>
					</fui-cubic-bezier>
					<text class="fui-text">点击加号加入购物车</text>
				</view>
			</fui-list-cell>

		</view>
		<view class="fui-cart--box">
			<fui-icon name="cart"></fui-icon>
		</view>
		<view class="fui-cart--box fui-cart--right">
			<fui-icon name="cart"></fui-icon>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				left: 116,
				bottom: 140,
				right: 100
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			handleClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		padding-bottom: 600rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-list__item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
	}

	.fui-text {
		font-weight: normal;
		font-size: 30rpx;
	}

	.fui-tabbar--wrap {
		width: 100%;
		height: 144rpx;
		padding: 0 32rpx 44rpx;
		box-sizing: border-box;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fui-cart--box {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 40rpx;
		bottom: 80rpx;
		box-shadow: 0 10rpx 14rpx 0 rgba(0, 0, 0, 0.1);
		z-index: 100;
	}

	.fui-cart--right {
		left: auto;
		right: 40rpx;
	}

	.fui-badge {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #FF2B2B;
		color: #fff;
		font-size: 12px;
	}

	.fui-badge--logo {
		width: 18px;
		height: 18px;
	}
</style>