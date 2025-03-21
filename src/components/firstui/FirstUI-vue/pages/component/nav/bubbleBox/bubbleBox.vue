<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号： 1 23400  0048   5   31    995 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">BubbleBox <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">BubbleBox 气泡框，弹出气泡式的卡片浮层。</view>
		</view>
		<view class="fui-page__bd">
			<fui-bubble-box :items="items" direction="top" position="absolute" :show="show1"
				@click="itemClick($event,1)" @close="onClose(1)">
				<fui-button type="gray" width="320rpx" height="84rpx" text="上方显示" bold :margin="['24rpx']"
					@click="bubble(1)"></fui-button>
			</fui-bubble-box>
			<view class="fui-bubble-box">
				<fui-bubble-box background="#4c4c4c" color='#fff' lineColor="#666" :items="items" direction="right"
					position="absolute" :triangle="{top:78}" :show="show3" @click="itemClick($event,3)"
					@close="onClose(3)">
					<fui-button type="gray" width="320rpx" height="84rpx" text="右侧显示" bold @click="bubble(3)">
					</fui-button>
				</fui-bubble-box>
				<fui-bubble-box :items="items" direction="left" position="absolute" :triangle="{top:78}" :show="show2"
					@click="itemClick($event,2)" @close="onClose(2)">
					<fui-button type="gray" width="320rpx" height="84rpx" text="左侧显示" bold @click="bubble(2)">
					</fui-button>
				</fui-bubble-box>
			</view>
			<fui-bubble-box :items="items" direction="bottom" position="absolute" :show="show4"
				@click="itemClick($event,4)" @close="onClose(4)">
				<fui-button type="gray" width="320rpx" height="84rpx" text="下方显示" bold :margin="['24rpx']"
					@click="bubble(4)">
				</fui-button>
			</fui-bubble-box>
			<fui-button type="gray" width="320rpx" height="84rpx" text="左上方显示" bold @click="bubble(5)">
			</fui-button>
			<fui-button type="gray" width="320rpx" height="84rpx" text="右上方显示" bold :margin="['24rpx']"
				@click="bubble(6)">
			</fui-button>
			<fui-bubble-box :items="items" :show="show5" :left="8" :triangle="{left:56}" @click="itemClick($event,5)"
				@close="onClose(5)"></fui-bubble-box>
			<fui-bubble-box :padding="['26rpx','30rpx']" :right="8" background="#4c4c4c" color='#fff' lineColor="#666" :items="items" :show="show6"
				@click="itemClick($event,6)" @close="onClose(6)">
			</fui-bubble-box>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					text: 'First UI',
					src: '/static/images/common/logo.png'
				}, {
					text: '气泡框',
					src: '/static/images/common/logo.png'
				}],
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			bubble(type) {
				switch (type) {
					case 1:
						this.show1 = true
						break;
					case 2:
						this.show2 = true
						break;
					case 3:
						this.show3 = true
						break;
					case 4:
						this.show4 = true
						break;
					case 5:
						this.show5 = true
						break;
					case 6:
						this.show6 = true
						break;
					default:
						break;
				}
			},
			itemClick(e, type) {
				console.log(e)
				this.onClose(type)
			},
			onClose(type) {
				switch (type) {
					case 1:
						this.show1 = false
						break;
					case 2:
						this.show2 = false
						break;
					case 3:
						this.show3 = false
						break;
					case 4:
						this.show4 = false
						break;
					case 5:
						this.show5 = false
						break;
					case 6:
						this.show6 = false
						break;
					default:
						break;
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
		padding-top: 64rpx;
	}

	.fui-bubble-box {
		width: 100%;
		padding: 0 32rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>