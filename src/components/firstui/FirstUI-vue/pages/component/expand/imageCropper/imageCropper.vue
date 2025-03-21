<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号： 12340 0 0  0 48 5 3    1    99 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<fui-image-cropper :src="src" ref="cropper"></fui-image-cropper>
		<view class="fui-cropper__tabbar">
			<text class="fui-text" @tap.stop="chooseImage">选择</text>
			<view class="fui-flex__center fui-flex__1" @tap.stop="rotate">
				<fui-icon name="rotate" color="#fff" size="52"></fui-icon>
			</view>
			<text class="fui-text" @tap.stop="cutting">确定</text>
		</view>

		<!-- #ifdef MP-BAIDU -->
		<fui-gallery :urls="urls" :show="show" @hide="hideGallery"></fui-gallery>
		<!-- #endif -->
	</view>
</template>

<script>
	//提示：可将组件放置内容页面使用v-if控制显示，无需使用单独页面使用组件
	export default {
		data() {
			return {
				src: '',
				urls: [],
				show: false,
				height: 300
			}
		},
		onLoad(e) {
			if (e.src) {
				this.src = e.src
			}
		},
		methods: {
			hideGallery() {
				this.show = false
			},
			chooseImage(e) {
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
						this.src = res.tempFilePaths[0];
					}
				});
			},
			rotate() {
				this.$refs.cropper && this.$refs.cropper.rotate()
			},
			cutting() {
				if (this.$refs.cropper) {
					this.$refs.cropper.cutting((filePath) => {
						console.log(filePath)
						// #ifndef MP-BAIDU
						uni.previewImage({
							urls: [filePath]
						})
						// #endif

						// #ifdef MP-BAIDU
						this.urls = [filePath]
						setTimeout(() => {
							this.show = true
						}, 50)
						// #endif
					})
				}
			}
		}
	}
</script>

<style>
	.fui-cropper__tabbar {
		/* #ifndef APP-NVUE */
		display: flex;
		z-index: 20;
		position: relative;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		height: 120rpx;
		left: 0;
		right: 0;
		bottom: 0;
		/* #ifdef APP-NVUE */
		border-top: 0.5px solid #666;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	.fui-cropper__tabbar::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #666;
		transform: scaleY(0.5);
		transform-origin: 0 0;
		z-index: 21;
	}

	/* #endif */

	.fui-text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		font-size: 32rpx;
		font-weight: normal;
		color: #fff;
		flex: 1;
		text-align: center;
		justify-content: center;
		align-items: center;
		height: 80rpx;
		line-height: 80rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
</style>