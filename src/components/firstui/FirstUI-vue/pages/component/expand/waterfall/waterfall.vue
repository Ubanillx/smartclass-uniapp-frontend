<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：   12 3  400 00  48 53 1  9  9 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Waterfall <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Waterfall 瀑布流，是比较流行的一种页面布局，视觉表现为参差不齐的多栏布局。</view>
		</view>
		<view class="fui-page__bd">
			<fui-waterfall @end="onEnd">
				<fui-waterfall-item v-for="(item,index) in images" :key="item" :src="item">
					<view class="fui-text">自定义信息</view>
				</fui-waterfall-item>
			</fui-waterfall>
			<fui-loadmore v-if="!isEnd"></fui-loadmore>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [
					'https://res.firstui.cn/static/images/component/waterfall/P_001.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_002.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_003.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_004.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_005.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_006.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_007.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_008.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_009.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_010.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_011.jpeg',
					'https://res.firstui.cn/static/images/component/waterfall/P_012.jpeg'
				],
				isEnd: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onEnd(e) {
				this.isEnd = true
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-text {
		padding: 20rpx 0;
		text-align: center;
		font-weight: normal;
		font-size: 28rpx;
		color: #B2B2B2
	}
</style>