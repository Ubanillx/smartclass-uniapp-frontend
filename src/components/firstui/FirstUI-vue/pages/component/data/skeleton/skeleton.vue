<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：  1      23 400 0048   53 19  959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center fui-rect" @tap="vip">Skeleton <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc fui-rect">Skeleton 骨架屏，在需要等待加载内容的位置提供一个占位图形组合。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-sk__box fui-rect">骨架节点</view>
			<view class="fui-sk__wrap fui-round">骨架节点</view>
			<view class="fui-section__title fui-rect">手动绘制骨架</view>
			<view class="fui-outer">
				<!--手动绘制数据，外层设置relative定位节点-->
				<fui-skeleton outerClass="fui-outer" :preloadList="preloadList"></fui-skeleton>
			</view>
		</view>
		<!--查找骨架节点 fui-rect、fui-round-->
		<fui-skeleton @change="change" v-if="show" background="#F1F4FA" outerClass="fui-wrap"></fui-skeleton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//手动绘制数据，比较繁琐。可通过动态查找节点，然后通过change事件返回节点数据缓存使用
				preloadList: [{
					left: 15,
					top: 10,
					bottom: 220,
					width: 40,
					height: 40,
					type: 'round'
				}, {
					left: 60,
					right: 365,
					top: 10,
					bottom: 220,
					width: 180,
					height: 19,
					type: 'rect'
				}, {
					left: 60,
					right: 365,
					top: 40,
					bottom: 220,
					width: 240,
					height: 19,
					type: 'rect'
				}, {
					left: 60,
					right: 365,
					top: 70,
					bottom: 220,
					width: 200,
					height: 19,
					type: 'rect'
				}],
				show: true
			}
		},
		onReady() {
			setTimeout(() => {
				this.show = false
			}, 2000)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e) {
				//返回查找的骨架节点信息，可在开发环境中获取缓存到本地，然后直接用于生产环境
				//nvue端暂不支持动态获取节点，可考虑缓存节点数据直接传入使用
				console.log(e.nodes)
			}
		}
	}
</script>

<style>
	.fui-section__title {
		width: 300rpx;
		margin-left: 32rpx;
		white-space: nowrap;
	}

	.fui-outer {
		width: 100%;
		height: 300rpx;
		position: relative;
	}

	.fui-sk__box {
		width: 100%;
		height: 300rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}

	.fui-sk__wrap {
		background: #16AB60;
		color: #fff;
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 40rpx auto;
	}
</style>