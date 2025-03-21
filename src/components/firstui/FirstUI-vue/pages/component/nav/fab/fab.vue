<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：12 340 0 00 4    85 3     199  5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Fab <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Fab 浮动按钮，主要特点是轻盈、便捷、高效，用于在屏幕上执行主要或最常见的操作。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="基础使用" bold :margin="['24rpx']" @click="fab(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="更换背景色" bold @click="fab(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="图标换为文本" bold :margin="['24rpx']" @click="fab(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="切换位置" bold @click="fab(4)">
			</fui-button>
		</view>
		<fui-fab isDrag :background="background" :position="isLeft?'left':'right'" :fabs="fabs" @click="handleClick"></fui-fab>

		<fui-fab :zIndex="10" :position="isLeft?'right':'left'" @click="fabClick">
			<fui-icon name="edit-fill" color="#fff"></fui-icon>
		</fui-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLeft: true,
				items: [{
					name: 'star',
					text: '收藏'
				}, {
					name: 'share',
					text: '分享'
				}, {
					name: 'fabulous',
					text: '点赞'
				}, {
					name: 'comment',
					text: '评论'
				}],
				items2: [{
					name: 'calendar',
					text: '日程安排',
					background: '#3BBE88'
				}, {
					name: 'location',
					text: '地理位置',
					background: '#F7953B'
				}, {
					name: 'community',
					text: '社区交流',
					background: '#3493F0'
				}],
				list: [{
					abbr: 'A',
					abbrSize: 48,
					text: 'Apple'
				}, {
					abbr: 'F',
					abbrSize: 48,
					text: 'firstui@126.com'
				}, {
					abbr: 'S',
					abbrSize: 48,
					text: 'subject@126.com'
				}, {
					name: 'message-fill',
					abbrSize: 56,
					text: '提醒'
				}],
				background: '#465CFF',
				fabs: []
			}
		},
		onLoad() {
			this.fabs = this.items
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			fab(type) {
				switch (type) {
					case 1:
						this.fabs = this.items
						this.background = '#465CFF';
						this.fui.toast('已恢复默认状态~')
						break;
					case 2:
						this.fabs = this.items2
						this.background = 'linear-gradient(300deg, #F53423 0%, #F67F48 100%)';
						this.fui.toast('已更换~')
						break;
					case 3:
						this.fabs = this.list
						this.background = '#465CFF';
						this.fui.toast('已切换~')
						break;
					case 4:
						this.isLeft = !this.isLeft
						break;
					default:
						break;
				}

			},
			handleClick(e) {
				console.log(e)
				this.fui.toast(`您点击了【${this.fabs[e.index].text}】按钮~`)
			},
			fabClick() {
				this.fui.toast('这是一个单独的按钮~')
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