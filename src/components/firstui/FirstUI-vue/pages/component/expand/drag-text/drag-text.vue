<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：       123400 004   8  5 319 9 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Drag <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Drag 拖拽排序，通过拖动列表元素以此来达到对数据的重新排列。长按列表开启拖拽。</view>
		</view>
		<view class="fui-page__bd">
			<fui-drag :itemList="itemList" :itemHeight="88" :styles="styles" @end="end" @delete="del"></fui-drag>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [{
					id: 1,
					text: '标题文本《一》'
				}, {
					id: 2,
					text: '标题文本《二》'
				}, {
					id: 3,
					text: '标题文本《三》'
				}, {
					id: 4,
					text: '标题文本《四》'
				}, {
					id: 5,
					text: '标题文本《五》'
				}, {
					id: 6,
					text: '标题文本《六》'
				}, {
					id: 7,
					text: '标题文本《七》'
				}, {
					id: 8,
					text: '标题文本《八》'
				}, {
					id: 9,
					text: '标题文本《九》'
				}],
				styles: {
					type: 2,
					isDel: true
				}

			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			end(e) {
				//排序后列表
				console.log(e.itemList)
			},
			del(e) {
				this.fui.toast(`删除列目索引：${e.index}`)
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