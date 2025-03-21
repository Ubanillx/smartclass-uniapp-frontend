<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：1 23  40  0  004     8531 99   59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Poster <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Poster 分享海报 ，传入JSON数据生成海报。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="基本使用" bold :margin="['24rpx']" @click="poster(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="生成商品海报" bold @click="poster(2)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="First UI分享海报" bold :margin="['24rpx']"
				@click="share"></fui-button>
		</view>
		<fui-poster ref="generator" :width="560" :height="980" @ready="ready"></fui-poster>

		<!-- #ifdef MP-BAIDU-->
		<fui-animation :duration="500" :animationType="['fade']" :styles="styles" :show="show" @click="handleClick">
			<view class="fui-ani__box">
				<image class="fui-poster__img" :src="showFilePath" mode="widthFix"></image>
				<view class="fui-flex__center">
					<fui-button type="purple" btn-size="medium" radius="100rpx" @click="saveImage">保存到相册
					</fui-button>
				</view>
			</view>
		</fui-animation>
		<!-- #endif -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	//注意：头条小程序颜色值不支持简写如：#333，必须写成：#333333
	export default {
		data() {
			return {
				isReady: false,
				//基本使用案例数据
				basicData: {
					blocks: [{
						//背景
						x: 0,
						y: 0,
						width: 560,
						height: 980,
						backgroundColor: '#ffffff'
					}, {
						//带圆角
						x: 20,
						y: 20,
						width: 100,
						height: 100,
						borderRadius: 20,
						backgroundColor: '#465CFF',
						zIndex: 2
					}, {
						//渐变背景
						x: 140,
						y: 20,
						width: 100,
						height: 200,
						backgroundColor: '#FF2B2B',
						gradientColor: '#6831FF',
						zIndex: 2
					}, {
						//带边框
						x: 260,
						y: 20,
						width: 100,
						height: 100,
						borderWidth: 1,
						borderColor: '#465CFF',
						zIndex: 2
					}, {
						//圆形
						x: 380,
						y: 20,
						width: 100,
						height: 100,
						borderRadius: 100,
						backgroundColor: '#465CFF',
						zIndex: 2
					}],
					imgs: [{
						imgResource: '/static/images/common/img_logo.png',
						x: 20,
						y: 260,
						width: 100,
						height: 100,
						zIndex: 2
					}, {
						imgResource: '/static/images/common/img_logo.png',
						x: 140,
						y: 260,
						width: 100,
						height: 100,
						borderRadius: 16,
						zIndex: 2
					}, {
						imgResource: '/static/images/common/img_logo.png',
						x: 260,
						y: 260,
						width: 100,
						height: 100,
						borderRadius: 100,
						zIndex: 2
					}],
					texts: [{
						text: 'First UI',
						x: 20,
						y: 420,
						fontSize: 32,
						color: '#181818',
						width: 520,
						fontWeight: 'bold',
						zIndex: 3
					}, {
						text: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。',
						x: 20,
						y: 460,
						fontSize: 20,
						color: '#181818',
						width: 496,
						zIndex: 3
					}, {
						text: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。',
						x: 20,
						y: 520,
						fontSize: 20,
						lineHeight: 32,
						color: '#B2B2B2',
						width: 496,
						rows: 2,
						zIndex: 3
					}, {
						text: '此段文字作废',
						x: 20,
						y: 620,
						fontSize: 22,
						color: '#B2B2B2',
						width: 500,
						lineThrough: true,
						zIndex: 3
					}, {
						text: 'End!',
						x: 20,
						y: 916,
						fontSize: 44,
						color: '#465CFF',
						width: 500,
						fontWeight: 'bold',
						zIndex: 6
					}],
					lines: [{
						x: 20,
						y: 660,
						endX: 220,
						endY: 660,
						color: '#181818',
						width: 1,
						zIndex: 4
					}, {
						x: 20,
						y: 700,
						endX: 240,
						endY: 700,
						color: '#09BE4F',
						width: 4,
						zIndex: 4
					}, {
						x: 20,
						y: 740,
						endX: 240,
						endY: 780,
						color: '#6831FF',
						width: 4,
						zIndex: 4
					}, {
						x: 20,
						y: 780,
						endX: 240,
						endY: 740,
						color: '#FFB703',
						width: 4,
						zIndex: 5
					}, {
						x: 20,
						y: 820,
						endX: 520,
						endY: 820,
						color: '#465CFF',
						width: 4,
						zIndex: 5
					}],
					qrcode: [{
						x: 300,
						y: 600,
						width: 160,
						height: 160,
						value: 'https://www.firstui.cn',
						zIndex: 6
					}]
				},
				//商品海报数据
				goodsData: {
					blocks: [{
						x: 0,
						y: 0,
						width: 560,
						height: 980,
						backgroundColor: '#ffffff',
						borderRadius: 40
					}, {
						x: 56,
						y: 128,
						width: 448,
						height: 648,
						backgroundColor: '#ffffff',
						borderRadius: 24,
						zIndex: 2
					}],
					imgs: [{
						imgResource: '/static/images/component/img_bg_poster.png',
						x: 0,
						y: 0,
						width: 560,
						height: 800,
						zIndex: 1
					}, {
						imgResource: '/static/images/component/img_goods_3x.jpg',
						x: 56,
						y: 128,
						width: 448,
						height: 448,
						borderRadius: 24,
						zIndex: 3
					}, {
						imgResource: '/static/images/qrcode/wx_qrcode.jpg',
						x: 378,
						y: 822,
						width: 136,
						height: 136,
						zIndex: 2
					}],
					texts: [{
						text: '满赠促销 满50件送赠品',
						x: 280,
						y: 68,
						fontSize: 38,
						color: '#FFFFFF',
						width: 400,
						fontWeight: 'bold',
						textAlign: 'center',
						zIndex: 2
					}, {
						text: '活动时间: 7月2日-7月20日',
						x: 280,
						y: 104,
						fontSize: 22,
						color: '#FFFFFF',
						width: 260,
						textAlign: 'center',
						zIndex: 2
					}, {
						text: '三奇医疗 3Q一次性医用外科口罩透气轻薄成人3层医用口罩 1袋10只',
						x: 85,
						y: 620,
						fontSize: 24,
						lineHeight: 36,
						color: '#333333',
						width: 380,
						rows: 2,
						zIndex: 3
					}, {
						text: '热销商品 每满1000减90！',
						x: 85,
						y: 696,
						fontSize: 18,
						color: '#999999',
						fontWeight: 'normal',
						width: 388,
						zIndex: 3
					}, {
						text: '￥7.00',
						x: 84,
						y: 746,
						fontSize: 32,
						color: '#FF2B2B',
						width: 200,
						zIndex: 3
					}, {
						text: '￥12.00',
						x: 84,
						y: 746,
						fontSize: 20,
						color: '#999999',
						width: 200,
						lineThrough: true,
						frontText: '￥7.00',
						frontSize: 32,
						spacing: 12,
						zIndex: 3
					}, {
						text: 'First UI 商城小程序',
						x: 50,
						y: 870,
						fontSize: 30,
						color: '#333333',
						width: 290,
						zIndex: 2
					}, {
						text: '长按识别  购好物',
						x: 50,
						y: 922,
						fontSize: 24,
						color: '#666666',
						width: 180,
						zIndex: 2
					}]
				},
				//海报绘制完成保存路径，避免重复绘制
				filePath: '',
				goodsFilePath: '',
				showFilePath: '',
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
		computed: mapState(['status']),
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			ready() {
				this.isReady = true;
			},
			previewImage() {
				/*百度小程序只支持打开网络路径，不支持本地临时路径*/
				// #ifndef MP-BAIDU
				uni.previewImage({
					// #ifdef MP-ALIPAY
					enablesavephoto: true,
					enableShowPhotoDownload: true,
					// #endif
					urls: [this.showFilePath]
				})
				// #endif
				// #ifdef MP-BAIDU
				setTimeout(() => {
					this.show = true
				}, 50)
				// #endif
			},
			poster(type) {
				if (this.isReady) {
					//已经绘制直接使用，避免重复绘制
					// #ifdef MP-BAIDU || MP-TOUTIAO
					if (this.status == 0) {
						this.fui.toast('功能完善中~')
						return
					}
					// #endif
					this.showFilePath = type === 1 ? this.filePath : this.goodsFilePath;
					if (this.showFilePath) {
						this.previewImage()
					} else {
						//绘制海报
						uni.showLoading({
							title: '正在生成...'
						})
						this.$refs.generator.generatePoster(type === 1 ? this.basicData : this.goodsData, (res) => {
							//海报图片res
							console.log(res)
							this.showFilePath = res;
							if (type === 1) {
								this.filePath = res;
							} else {
								this.goodsFilePath = res
							}
							this.previewImage()
							uni.hideLoading()
						})
					}

				} else {
					this.fui.toast('组件尚未初始化完成！')
				}
			},
			share() {
				// #ifdef MP-BAIDU || MP-TOUTIAO
				if (this.status == 0) {
					this.fui.toast('功能完善中~')
					return
				}
				// #endif
				this.fui.href("/pages/my/share/share")
			},
			handleClick() {
				this.show = false;
			},
			saveImage() {
				this.$refs.generator.saveImage(this.filePath)
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

	.fui-ani__box {
		width: 580rpx;
		border-radius: 24rpx;
	}

	.fui-poster__img {
		width: 100%;
		border-radius: 24rpx;
		margin-bottom: 30rpx;
		display: block;
	}
</style>