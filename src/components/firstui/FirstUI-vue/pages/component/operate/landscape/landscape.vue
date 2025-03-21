<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4   034，营业执照号：  123 4    0 0 00 48  53 199 59   Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Landscape <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Landscape 压屏窗，用于在浮层中显示广告或说明。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="关闭按钮-左上" bold :margin="['24rpx']"
				@click="showPopup(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="关闭按钮-右上" bold @click="showPopup(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="关闭按钮-中下" bold :margin="['24rpx']"
				@click="showPopup(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="无关闭按钮" bold @click="showPopup(4)">
			</fui-button>
		</view>
		<fui-landscape :show="show" :closable="closable" :position="position" @close="closePopup">
			<view class="fui-ani__box">
				<image class="fui-hd__img" src="/static/images/member/light/img_layer_3x.png" mode="widthFix"></image>
				<view class="fui-flex__center fui-flex__column">
					<view class="fui-ani__title">开通会员</view>
					<view class="fui-desc">会员开通请前往 First UI官网(<text>firstui.cn</text>)，在官网购买开通会员后，前往个人中心订单页即可下载会员源码。
					</view>
					<fui-button btn-size="medium" radius="100rpx"
						background="linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)" borderColor="rgba(0,0,0,0)"
						border-width="0" @click="btnClick">我知道了</fui-button>
				</view>
			</view>
		</fui-landscape>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				position: 3,
				closable: true
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			showPopup(type) {
				this.closable = type !== 4;
				this.position = type;
				setTimeout(() => {
					this.show = true
				}, 50);
			},
			closePopup() {
				this.show = false
			},
			btnClick(e) {
				this.fui.toast('您点击了按钮~')
				//...
				this.closePopup()
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-ani__box {
		width: 640rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		padding-bottom: 64rpx;
	}

	.fui-hd__img {
		width: 100%;
		height: 192rpx;
		display: block;
	}

	.fui-ani__title {
		font-size: 36rpx;
		font-weight: 600;
		padding: 54rpx 0 32rpx;
		text-align: center;
	}

	.fui-desc {
		padding: 0 54rpx 82rpx;
		font-size: 24rpx;
		line-height: 48rpx;
		font-weight: 400;
		color: #333333;
		box-sizing: border-box;
	}

	.fui-desc text {
		color: #FF2B2B;
	}
</style>