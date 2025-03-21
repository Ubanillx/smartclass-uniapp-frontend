<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号： 123   40 000  4 8 53 19 9    5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-bg__box">
			<image src="/static/images/share/img_bg_3x.png" mode="widthFix" class="fui-share__bg"></image>
			<view class="fui-logo__box">
				<image class="fui-logo" src="/static/images/common/img_logo.png"></image>
				<view class="fui-text">First UI组件库</view>
			</view>
		</view>
		<view class="fui-qrcode__box">
			<!-- #ifdef MP-WEIXIN -->
			<image src="/static/images/qrcode/wx_qrcode.jpg" mode="widthFix" class="fui-qrcode"></image>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY-->
			<image src="/static/images/qrcode/ali_qrcode.png" mode="widthFix" class="fui-qrcode"></image>
			<!-- #endif -->
			<!-- #ifdef MP-QQ-->
			<image src="/static/images/qrcode/qq_qrcode.jpg" mode="widthFix" class="fui-qrcode"></image>
			<!-- #endif -->
			<!-- #ifdef MP-BAIDU-->
			<image src="/static/images/qrcode/baidu_qrcode.png" mode="widthFix" class="fui-qrcode"></image>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ ||  MP-BAIDU -->
			<image src="/static/images/qrcode/h5_qrcode.png" mode="widthFix" class="fui-qrcode"></image>
			<!-- #endif -->
		</view>
		<view class="fui-btn__box">
			<fui-button open-type="share" @tap="share" radius="100rpx"
				background="-webkit-linear-gradient(90deg, #465CFF 0%, #6831FF 100%)" :margin="['64rpx','0','32rpx']">
				<view class="fui-flex__center">
					<image class="fui-share__ic" src="/static/images/share/icon_share_3x.png"></image>
					<text>分享好友</text>
				</view>
			</fui-button>
			<fui-button radius="100rpx" background="#F1F4FA" color="#333333" borderColor="#465CFF"
				@click="generatePoster">
				<view class="fui-flex__center">
					<image class="fui-share__ic" src="/static/images/share/icon_picture_3x.png"></image>
					<text>生成海报</text>
				</view>
			</fui-button>

			<!-- #ifdef MP-BAIDU-->
			<fui-animation :duration="500" :animationType="['fade']" :styles="styles" :show="show" @click="handleClick">
				<view class="fui-ani__box">
					<image class="fui-poster__img" :src="filePath" mode="widthFix"></image>
					<view class="fui-flex__center">
						<fui-button type="purple" btn-size="medium" radius="100rpx" @click="saveImage">保存到相册
						</fui-button>
					</view>
				</view>
			</fui-animation>
			<!-- #endif -->

		</view>
		<fui-poster ref="generator" :width="750" :height="1064" @ready="ready"></fui-poster>
	</view>
</template>

<script>
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				posterData: {
					imgs: [{
						imgResource: '/static/images/share/img_bg_3x.png',
						x: 64,
						y: 112,
						width: 622,
						height: 466,
						zIndex: 1
					}, {
						imgResource: '/static/images/common/img_logo.png',
						x: 329,
						y: 48,
						width: 92,
						height: 92,
						borderRadius: 24,
						zIndex: 3
					}, {
						// #ifdef MP-WEIXIN
						imgResource: '/static/images/qrcode/wx_qrcode.jpg',
						// #endif
						// #ifdef MP-ALIPAY
						imgResource: '/static/images/qrcode/ali_qrcode.png',
						// #endif
						// #ifdef MP-QQ
						imgResource: '/static/images/qrcode/qq_qrcode.jpg',
						// #endif
						// #ifdef MP-BAIDU
						imgResource: '/static/images/qrcode/baidu_qrcode.png',
						// #endif
						// #ifndef MP-WEIXIN || MP-ALIPAY || MP-QQ || MP-BAIDU
						imgResource: '/static/images/qrcode/h5_qrcode.png',
						// #endif
						x: 175,
						y: 546,
						width: 400,
						height: 400,
						zIndex: 3
					}],
					blocks: [{
						width: 750,
						height: 1064,
						x: 0,
						y: 0,
						backgroundColor: '#F1F4FA'
					}, {
						width: 512,
						height: 512,
						x: 119,
						y: 490,
						backgroundColor: '#FFFFFF',
						borderRadius: 48,
						shadow: {
							offsetX: 0,
							offsetY: 20,
							blur: 50,
							color: 'rgba(9, 41, 134, 0.12)'
						},
						zIndex: 2
					}],
					texts: [{
						text: 'First UI组件库',
						x: 375,
						y: 184,
						fontSize: 28,
						color: '#181818',
						width: 184,
						fontWeight: 'bold',
						textAlign: 'center',
						zIndex: 3
					}]
				},
				isReady: false,
				//海报绘制完成保存路径，避免重复绘制
				filePath: '',
				show: false,
				styles: {
					position: 'fixed',
					bottom: 0,
					top: 0,
					left: 0,
					right: 0,
					display: 'flex',
					'justify-content': 'center',
					'align-items': 'center',
					backgroundColor: 'rgba(0,0,0,0.6)'
				}
			}
		},
		methods: {
			ready() {
				this.isReady = true
			},
			previewImage() {
				// #ifndef MP-BAIDU
				uni.previewImage({
					// #ifdef MP-ALIPAY
					enablesavephoto: true,
					enableShowPhotoDownload: true,
					// #endif
					urls: [this.filePath]
				})
				// #endif

				// #ifdef MP-BAIDU
				setTimeout(() => {
					this.show = true
				}, 50)
				// #endif
			},
			generatePoster() {
				if (this.isReady) {
					//已经绘制直接使用，避免重复绘制
					if (this.filePath) {
						this.previewImage()
					} else {
						uni.showLoading({
							title: '正在生成...'
						})
						//绘制海报
						this.$refs.generator.generatePoster(this.posterData, (res) => {
							//海报图片res
							console.log(res)
							this.filePath = res;
							this.previewImage()
							uni.hideLoading()
						})
					}
				} else {
					this.fui.toast('组件尚未初始化完成！')
				}
			},
			saveImage() {
				//百度小程序
				this.$refs.generator.saveImage(this.filePath)
			},
			handleClick() {
				//百度小程序
				this.show = false;
			},
			share(e) {
				//#ifdef APP-PLUS
				plus.share.sendWithSystem({
						content: 'First UI组件库',
						href: 'https://firstui.cn/',
						pictures: ['/static/images/common/logo.png']
					},
					function() {
						console.log('分享成功');
					},
					function(e) {
						console.log('分享失败：' + JSON.stringify(e));
					}
				);
				//#endif
				// #ifdef H5
				const text = 'First UI组件库，官网链接：https://firstui.cn/'
				$fui.getClipboardData(text, res => {
					this.fui.toast('链接复制成功，快去分享吧~');
				}, e);
				// #endif
			}
		},
		onShareAppMessage() {
			return {
				title: 'First UI组件库'
			}
		}
	}
</script>

<style>
	.fui-wrap {
		width: 100%;
		padding: 0 64rpx 64rpx;
		box-sizing: border-box;
	}

	.fui-bg__box {
		width: 100%;
		position: relative;
	}

	.fui-share__bg {
		width: 100%;
		height: 466rpx;
		display: block;
		margin-top: 112rpx;
	}

	.fui-logo__box {
		width: 100%;
		position: absolute;
		top: 48rpx;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-logo {
		width: 96rpx;
		height: 96rpx;
		border-radius: 16rpx;
	}

	.fui-text {
		font-size: 28rpx;
		padding-top: 16rpx;
	}

	.fui-qrcode__box {
		width: 512rpx;
		height: 512rpx;
		padding: 56rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0 20rpx 20rpx 0 rgba(9, 41, 134, 0.12);
		border-radius: 48rpx;
		margin: -88rpx auto 0;
		position: relative;
		z-index: 10;
	}

	.fui-qrcode {
		width: 100%;
		height: 400rpx;
	}

	.fui-btn__box {
		width: 100%;
	}

	.fui-share__ic {
		width: 48rpx;
		height: 48rpx;
		margin-right: 16rpx;
	}

	.fui-ani__box {
		width: 600rpx;
		border-radius: 24rpx;
	}

	.fui-poster__img {
		width: 100%;
		border-radius: 24rpx;
		margin-bottom: 30rpx;
		display: block;
	}
</style>