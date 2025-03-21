<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号： 12  34 00   0048 5  3  1 9 9   59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">PuzzleVerify <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">PuzzleVerify 滑块拼图验证，根据提示进行行为验证。此组件为 SliderCaptcha 组件的功能补充，详见文档。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="点击按钮进行验证" bold :margin="['48rpx']"
					@click="btnVerify">
				</fui-button>

			</view>
			<fui-puzzle-verify :width="width" :height="height" :src="src" :cutSrc="cutSrc" :x="40" :y="49" @init="init"
				@verify="verify" ref="pvRef">
			</fui-puzzle-verify>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resUrl: this.fui.resUrl(),
				src: '',
				cutSrc: '',
				width: 300,
				height: 150,
				x: 0,
				y: 0
			}
		},
		methods: {
			//rpx转化为px
			getPx(value) {
				let val = parseInt(uni.upx2px(Number(value)))
				return val % 2 === 0 ? val : val + 1
			},
			//初始化事件中请求接口获取 有黑块的背景图、裁剪图、位置等信息
			//画布大小可使用rpx转化为px传回给后端使用，动态生成背景图，这样可做到自适应，适配所有终端
			//示例使用的是已生成好的图，所以使用的是固定宽高
			init(e) {
				//裁剪图片宽度，固定为44（px）
				let cutGraphWidth = e.cutGraphWidth
				this.width = 300 //this.getPx(640)
				this.height = 150 //this.getPx(320)

				//以上参数传给后端获取验证信息
				//示例仅为演示，使用预处理内容
				this.getVerifyImage()
			},
			//注意：为了避免图片显示失真，后端处理图片大小需按照提供的参数等比放大倍数，可根据设备pixelRatio（设备像素比）等比放大
			getVerifyImage() {
				//以下由后端获取返回（x1：裁剪位置由后端存储，不返回）
				//带黑块的背景图，后端接口提供
				this.src = `${this.resUrl}/component/sc/bg_img_verify.png`
				//裁剪下的图片，后端接口提供
				this.cutSrc = `${this.resUrl}/component/sc/cut_img.png`
				//裁剪图在背景图内的left值 ，后端接口提供
				this.x = 40;
				//裁剪图在背景图内的top值 ，后端接口提供
				this.y = 49
			},
			btnVerify() {
				//需要等组件初始化完成
				this.$refs.pvRef && this.$refs.pvRef.show()
			},
			//开始验证，将返回的滑动距离传给后端进行验证
			verify(e) {
				//示例仅为演示，以下为模拟后端验证

				//滑动距离
				let slipDistance = e.slipDistance
				//验证方法，参考js方法自行转为后端方法
				//x1为裁剪黑块的left值，该值仅后端知道，示例使用的预处理数据，此处仅为演示
				let x1 = 222;
				//width为需要滑动的总距离
				let width = x1 - this.x
				//误差范围，后端自行定义（px）
				let range = 3
				//滑动距离 减去 总距离 的绝对值 小于等于误差范围即为验证通过
				if (Math.abs(slipDistance - width) <= range) {
					this.success()
				} else {
					this.fui.toast('验证失败！')
					//重置验证，nvue下需延时重置
					setTimeout(() => {
						this.$refs.pvRef.reset()
					}, 50)
					//当失败多次时，可重新生成验证数据返回
					//...
				}
			},
			success() {
				this.fui.toast('验证通过！')
				setTimeout(() => {
					//关闭验证框
					this.$refs.pvRef.closeVerify()
				}, 200)
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
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