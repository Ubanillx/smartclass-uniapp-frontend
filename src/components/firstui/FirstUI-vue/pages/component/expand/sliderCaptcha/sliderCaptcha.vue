<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号：   1234000 048 53      1  9 9 59  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SliderCaptcha <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SliderCaptcha 滑块拼图验证，根据提示进行行为验证。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="点击按钮进行验证" bold :margin="['48rpx']"
					@click="btnVerify">
				</fui-button>
			</view>
			<!--务必保证属性 imageType 正确，H5端注意处理图片资源跨域问题-->
			<fui-slider-captcha ref="scRef" :src="src" @success="success" @fail="fail">
			</fui-slider-captcha>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//图片地址（默认宽高比2:1）
				src: '',
				resUrl: this.fui.resUrl(),
				index: 0
			}
		},
		onLoad() {
			this.getVerifyImage()
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			getVerifyImage() {
				//获取需要验证的图片
				let index = this.index
				index++;
				if (index > 3) {
					index = 1
				}
				this.index = index
				this.src = `${this.resUrl}/component/sc/img_sc_${index}.png`
			},
			btnVerify() {
				//需要等组件初始化完成
				this.$refs.scRef && this.$refs.scRef.show()
			},
			success(e) {
				this.fui.toast('验证通过！')
				setTimeout(() => {
					//关闭验证框
					this.$refs.scRef.closeVerify()
				}, 200)
			},
			fail(e) {
				//当验证失败多次时，可在这里做相应处理
				let times = e.times
				this.fui.toast('验证失败！')
				if (times >= 3) {
					this.getVerifyImage()
				}
			}
		}
	}
</script>

<style>
	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>