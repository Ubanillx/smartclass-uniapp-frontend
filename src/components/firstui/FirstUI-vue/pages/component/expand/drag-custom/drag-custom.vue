<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：  123400 0 0   4 8 53  1995  9    Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Drag <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Drag 拖拽排序，通过拖动列表元素以此来达到对数据的重新排列。长按列表开启拖拽。</view>
		</view>
		<view class="fui-page__bd">
			<!-- #ifndef MP-TOUTIAO -->
			<fui-drag :width="680" custom :itemList="itemList" :columns="4" :itemHeight="200" @end="end">
				<template v-slot="{ model,width,height, index }">
					<view class="fui-item" :style="{width:width+'px',height:height+'px'}">
						<image :src="model.src" class="fui-img"></image>
						<text class="fui-text">{{model.text}}</text>
					</view>
				</template>
			</fui-drag>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					id: 1,
					text: '微信小程序',
					src: 'https://res.firstui.cn/static/images/qrcode/wx_qrcode.jpg'
				}, {
					id: 2,
					text: '支付宝小程序',
					src: 'https://res.firstui.cn/static/images/qrcode/ali_qrcode.png'
				}, {
					id: 3,
					text: '头条小程序',
					src: 'https://res.firstui.cn/static/images/qrcode/toutiao_qrcode.png'
				}, {
					id: 4,
					text: '百度小程序',
					src: 'https://res.firstui.cn/static/images/qrcode/baidu_qrcode.png'
				}, {
					id: 5,
					text: 'QQ小程序',
					src: 'https://res.firstui.cn/static/images/qrcode/qq_qrcode.jpg'
				}, {
					id: 6,
					text: 'H5',
					src: 'https://res.firstui.cn/static/images/qrcode/h5_qrcode.png'
				}, {
					id: 7,
					text: 'IOS',
					src: 'https://res.firstui.cn/static/images/common/logo.png'
				}, {
					id: 8,
					text: 'Android',
					src: 'https://res.firstui.cn/static/images/common/img_logo.png'
				}]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			end(e) {
				//排序后列表
				console.log(e.itemList)
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-img {
		width: 120rpx;
		height: 120rpx;
		margin-bottom: 12rpx;
		border-radius: 16rpx;
		pointer-events: none;
	}

	.fui-text {
		font-size: 24rpx;
		color: #999;
		font-weight: normal;
	}
</style>