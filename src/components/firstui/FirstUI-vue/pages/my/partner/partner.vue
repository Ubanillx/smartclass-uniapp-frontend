<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4  034，营业执照号：1    2 3     4  0000 4 85 31 9 959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">合作伙伴</view>
			<view class="fui-page__desc">如需合作请联系客服。</view>
		</view>
		<view class="fui-page__bd">
			<fui-grid @click="href">
				<fui-grid-item v-for="(item,index) in partners" :key="index" :index="index" :highlight="item.name!==''">
					<view class="fui-grid__cell" v-if="item.name!==''">
						<view class="fui-icon__wrap">
							<image :src="resUrl+item.src" class="fui-icon" mode="widthFix"></image>
						</view>
						<text>{{item.name}}</text>
					</view>
				</fui-grid-item>
			</fui-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resUrl: this.fui.resUrl(),
				partners: [{
					name: 'ThorUI组件库',
					src: '/links/thorui_logo.png'
				}, {
					name: '跨端图表',
					src: '/links/ucharts_logo.png'
				}, {
					name: '图鸟 UI',
					src: '/links/tn__logo.png'
				}]
			}
		},
		methods: {
			href(e) {
				// #ifdef MP-WEIXIN
				let index = e.detail.index
				let appId = ['wxb6a98ca343f57a38', 'wx37a9ee6a7398dec0', 'wxf3d81a452b88ff4b'][index]
				wx.navigateToMiniProgram({
					appId: appId
				});
				// #endif
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.fui-grid__cell {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		font-size: 28rpx;
		font-weight: 400;
	}

	.fui-icon__wrap {
		width: 96rpx;
		height: 96rpx;
		overflow: hidden;
		margin-bottom: 16rpx;
	}

	.fui-icon {
		width: 96rpx;
		height: 96rpx;
		border-radius: 16rpx;
	}
</style>