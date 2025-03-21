<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：1  2 3   4  00 0  048 53   1  9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Autograph <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Autograph 手写签名，用于手写电子签名。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">请在下方空白处签名</view>
			<fui-autograph ref="autograph" @ready="ready"></fui-autograph>
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="重签" bold :margin="['64rpx','0','24rpx']"
					@click="redraw">
				</fui-button>
				<fui-button type="gray" btn-size="medium" text="完成" bold @click="complete">
				</fui-button>
			</view>
			<view class="fui-autograph__box">
				<text class="fui-text">您的签名：</text>
				<image :src="src" v-if="src" mode="widthFix" class="fui-img" @tap="preview"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasId: '',
				src: ''
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			ready(e) {
				// #ifdef MP-TOUTIAO
				//仅允许边缘滑动返回
				// tt.setSwipeBackMode(2);
				// #endif
				this.canvasId = e.canvasId
			},
			redraw() {
				if (!this.canvasId) return;
				this.src = '';
				this.$refs.autograph.redraw()
			},
			complete() {
				if (!this.canvasId || this.src) return;
				this.$refs.autograph.drawComplete((res) => {
					//res为签名图片
					this.src = res;
				})
			},
			preview() {
				if (!this.src) return;
				/*百度小程序只支持打开网络路径，不支持本地临时路径*/
				// #ifndef MP-BAIDU
				uni.previewImage({
					// #ifdef MP-ALIPAY
					enablesavephoto: true,
					enableShowPhotoDownload: true,
					// #endif
					urls: [this.src]
				})
				// #endif
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-autograph__box {
		width: 100%;
		height: 200rpx;
		padding: 64rpx 32rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.fui-text {
		font-size: 24rpx;
		color: #7f7f7f;
	}

	.fui-img {
		display: block;
		width: 200rpx;
	}
</style>