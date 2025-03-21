<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号：12  340 0  00    4  8531    9 959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Message <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Message 消息提示，用于展现简短的提示信息，在窗口顶部显示。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="基础使用" bold :margin="['24rpx']"
				@click="showMsg(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="自定义背景色" bold @click="showMsg(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="带图标提示" bold :margin="['24rpx']"
				@click="showMsg(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="设置显示时间" bold @click="showMsg(4)">
			</fui-button>
		</view>
		<fui-message ref="msg" :background="background"></fui-message>
		<fui-message ref="tips">
			<view class="fui-icon__box">
				<fui-icon name="checkbox" color="#fff" :size="48"></fui-icon>
			</view>
		</fui-message>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: 'rgba(0,0,0,.6)'
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			showMsg(type) {
				this.background = 'rgba(0,0,0,.6)'
				let options = {}
				switch (type) {
					case 1:
						options.text = 'Hello First UI！'
						this.$refs.msg.show(options)
						break;
					case 2:
						this.background = '#09BE4F'
						options.text = '这是一条成功提示消息！'
						this.$refs.msg.show(options)
						break;
					case 3:
						options.text = '您已操作成功！'
						this.$refs.tips.show(options)
						break;
					case 4:
						options.duration = 4000
						options.text = '4s后关闭提示信息！默认2s~'
						this.$refs.msg.show(options)
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-icon__box {
		padding-right: 16rpx;
	}
</style>