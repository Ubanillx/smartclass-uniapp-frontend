<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号： 12   3 4  00  0  0 4 85 31 99 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">RotateVerify <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">RotateVerify 旋转验证码，根据提示进行行为验证。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="点击按钮进行验证" bold :margin="['48rpx']"
					@click="btnVerify">
				</fui-button>
			</view>
			<fui-rotate-verify ref="rv" :src="src" @verify="verify"></fui-rotate-verify>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//图片地址（后端获取返回并已做初始角度旋转）
				src: '',
				//图片初始化旋转的角度（当后端进行验证时不需要返回）
				initAngle: 0,
				//验证结果误差范围 deg
				range: 0,
				resUrl: this.fui.resUrl()
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
				//获取需要验证的图片，后端处理旋转并返回图片地址
				//此处仅为演示省略请求，使用预先处理的图片
				this.src = `${this.resUrl}/component/verify/img_logo.jpeg`
				//仅当在前端验证结果时返回
				this.initAngle = 180
				//仅当在前端验证结果时返回
				this.range = 10
			},
			btnVerify() {
				//需要等组件初始化完成
				this.$refs.rv && this.$refs.rv.show()
			},
			/*
			 验证结果，仅前端验证时使用（模拟后端验证）
			@param {Number} angle 旋转角度
			@param {Number} initAngle 图片初始化时旋转角度，后端返回 [建议区间 -330deg<angle <-30deg 或 30deg<angle<330deg]
			@param {Number} range 可误差角度范围，约定或后端返回
			*/
			verifyRes(angle, initAngle, range) {
				let res = false
				if (Math.abs(angle + initAngle - 360) <= range || Math.abs(angle + initAngle) <= range) {
					res = true
				}
				return res
			},
			verify(e) {
				console.log(e)
				//验证旋转角度是否正确
				//e.angle 旋转角度，注意返回角度中可能存在多位小数，请按需处理
				console.log(e.angle)
				//可将结果发送至后端进行验证
				//...
				//此处为演示仅在前端进行验证
				// this.$refs.rv.verifyRes(e.angle, 180, 5, (res) => {
				//        console.log(res)
				// })
				//此步骤可在后端进行完成（后端验证时仅传e.angle参数即可）
				let res = this.verifyRes(e.angle, this.initAngle, this.range)
				if (res) {
					//验证通过
					this.$refs.rv.success();
					this.fui.toast('验证通过！')
					setTimeout(() => {
						//关闭验证框
						this.$refs.rv.closeVerify()
					}, 300)
				} else {
					//验证失败
					//验证失败多次可重新获取验证图片
					this.$refs.rv.fail()
					// this.fui.toast('验证失败！')
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