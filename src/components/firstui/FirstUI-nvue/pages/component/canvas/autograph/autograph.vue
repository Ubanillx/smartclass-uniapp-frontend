<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 03 4，营业执照号： 1 2 3 40    0 0   04   853 19959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">
				<fui-text font-weight="600" size="36" text="Autograph"></fui-text>
				<image class="fui-vip__icon" src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<text class="fui-page__desc">Autograph 手写签名，用于手写电子签名。</text>
		</view>
		<view class="fui-page__bd">
			<text class="fui-section__title fui-mtop--0">请在下方空白处签名</text>
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
				uni.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
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
	/* #ifndef APP-NVUE */
	page {
		font-weight: normal;
	}
	/* #endif */

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-btn__box {
		/* #ifndef APP-NVUE */
		width: 100%;
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-autograph__box {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		display: flex;
		/* #endif */
		height: 200rpx;
		padding: 64rpx 32rpx;
		flex-direction: row;
		align-items: center;
	}

	.fui-text {
		font-size: 24rpx;
		color: #7f7f7f;
	}

	.fui-img {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		width: 200rpx;
		height: 200rpx;
	}
</style>