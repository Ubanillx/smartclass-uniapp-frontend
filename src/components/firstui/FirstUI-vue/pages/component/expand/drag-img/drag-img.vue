<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4   034，营业执照号：123  40 00  04  853  1    995   9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Drag <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Drag 拖拽排序，通过拖动列表元素以此来达到对数据的重新排列。长按列表开启拖拽。</view>
		</view>
		<view class="fui-page__bd">
			<fui-drag :width="720" :itemList="itemList" :columns="4" square :styles="styles" @end="end"></fui-drag>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					id: 1,
					src: 'https://res.firstui.cn/static/images/common/logo.png'
				}, {
					id: 2,
					src: 'https://res.firstui.cn/static/images/common/img_logo.png'
				}, {
					id: 3,
					src: 'https://res.firstui.cn/static/images/qrcode/h5_qrcode.png'
				}, {
					id: 4,
					src: 'https://res.firstui.cn/static/images/qrcode/toutiao_qrcode.png'
				}, {
					id: 5,
					src: 'https://res.firstui.cn/static/images/qrcode/qq_qrcode.jpg'
				}, {
					id: 6,
					src: 'https://res.firstui.cn/static/images/qrcode/wx_qrcode.jpg'
				}, {
					id: 7,
					src: 'https://res.firstui.cn/static/images/qrcode/baidu_qrcode.png'
				}, {
					id: 8,
					src: 'https://res.firstui.cn/static/images/qrcode/ali_qrcode.png'
				}, {
					id: 9,
					src: 'https://res.firstui.cn/static/images/common/logo.png'
				}, {
					id: 10,
					src: 'https://res.firstui.cn/static/images/common/img_logo.png'
				}],
				styles: {
					padding: 4
				}

			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			end(e){
				//排序后列表
				console.log(e.itemList)
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>