<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号：1  2   34  0000     48 5 3 1  9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">ShareSheet <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">ShareSheet 分享面板，主要用于分享或相关操作使用。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="内容两端对齐" bold :margin="['24rpx']"
				@click="shareSheet(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="展示多行" bold @click="shareSheet(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="更换颜色" bold :margin="['24rpx']" @click="shareSheet(3)">
			</fui-button>
		</view>
		<fui-share-sheet isFull padding="48" background="#fff" lineColor="#eee" :show="visible" :itemList="items"
			maskClosable @cancel="onCancel(1)" @click="onTap">
		</fui-share-sheet>

		<fui-share-sheet :show="show" :itemList="itemList" itemBackground="#fff" @click="onClick($event,1)"
			@cancel="onCancel(2)">
		</fui-share-sheet>

		<fui-share-sheet title="分享给好友" background="#222" itemBackground="#333" btnColor="#d1d1d1" lineColor="#333"
			:show="show2" :itemList="itemList2" @click="onClick($event,2)" @cancel="onCancel(3)">
		</fui-share-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				items: [{
					name: 'wechat',
					color: '#07c160',
					text: '微信好友',
					openType: 'share'
				}, {
					name: 'moments',
					color: '#44DC6B',
					text: '朋友圈'
				}, {
					name: 'qq',
					color: '#3FB7F5',
					text: 'QQ'
				}, {
					name: 'sina',
					color: '#D8070B',
					text: '新浪微博'
				}],
				itemList: [],
				show: false,
				itemList2: [],
				show2: false
			}
		},
		onLoad() {
			this.itemList = [
				[{
					name: 'wechat',
					size: 72,
					color: '#07c160',
					text: '微信好友',
					openType: 'share'

				}, {
					name: 'moments',
					size: 72,
					color: '#44DC6B',
					text: '朋友圈'
				}, {
					name: 'qq',
					size: 72,
					color: '#3FB7F5',
					text: 'QQ'
				}, {
					name: 'sina',
					size: 72,
					color: '#D8070B',
					text: '新浪微博'
				}, {
					name: 'browser',
					size: 72,
					color: '#465CFF',
					text: '浏览器打开'
				}, {
					name: 'community-fill',
					size: 72,
					color: '#FFB703',
					text: '社区'
				}],
				[{
					name: 'picture',
					size: 56,
					text: '分享海报'
				}, {
					name: 'link',
					size: 56,
					text: '复制链接'
				}, {
					name: 'search',
					size: 56,
					text: '搜索'
				}, {
					name: 'refresh',
					size: 56,
					text: '刷新'
				}, {
					name: 'help',
					size: 56,
					text: '帮助'
				}, {
					name: 'edit',
					size: 56,
					text: '反馈',
					openType: 'feedback'
				}]
			]

			this.itemList2 = JSON.parse(JSON.stringify(this.itemList))
			this.itemList2.map((item, index) => {
				if (index === 1) {
					item.map(obj => {
						obj.color = "#d1d1d1"
					})
				}
			})
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			shareSheet(type) {
				if (type === 1) {
					this.visible = true;
				} else if (type === 2) {
					this.show = true
				} else {
					this.show2 = true
				}
			},
			onTap(e) {
				console.log(e)
				this.fui.toast(e.item.text)
				this.visible = false
			},
			onClick(e, type) {
				console.log(e)
				if (type === 1) {
					this.show = false
				} else {
					this.show2 = false
				}
			},
			onCancel(type) {
				if (type == 1) {
					this.visible = false
				} else if (type == 2) {
					this.show = false
				} else {
					this.show2 = false
				}
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>