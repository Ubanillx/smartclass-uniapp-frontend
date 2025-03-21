<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号：123   4  0  00   0   4 8531 9 95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">CountdownVerify <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">CountdownVerify 验证码倒计时，一般用于短信验证码发送后展现的倒计时。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-countdown-verify ref="fui_cdv" @send="sendCode"></fui-countdown-verify>
			<view class="fui-section__title">默认倒计时状态</view>
			<fui-countdown-verify :borderColor="init?'#465CFF':'#B2B2B2'" :color="init?'#465CFF':'#B2B2B2'"
				ref="fui_cdv2" @send="sendCode2" @end="end2">
			</fui-countdown-verify>
			<view class="fui-section__title">调整样式</view>
			<fui-countdown-verify borderColor="#FFB703" background="#FFB703" sent="秒后获取" color="#fff" radius="40"
				ref="fui_cdv3" @send="sendCode3">
			</fui-countdown-verify>
			<view class="fui-section__title">出现错误时重置</view>
			<fui-countdown-verify ref="fui_cdv4" @send="sendCode4"></fui-countdown-verify>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//是否为初始化状态
				init: true

			}
		},
		onReady() {
			setTimeout(() => {
				//开启倒计时
				this.$refs.fui_cdv2 && this.$refs.fui_cdv2.success()
				this.init = false
			}, 50)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			sendCode() {
				//延时为了效果展示
				setTimeout(() => {
					//发送短信
					//...
					this.$refs.fui_cdv && this.$refs.fui_cdv.success()
				}, 800)
			},
			sendCode2() {
				this.init = false
				setTimeout(() => {
					//发送短信
					//...
					this.$refs.fui_cdv2 && this.$refs.fui_cdv2.success()
				}, 800)
			},
			end2() {
				//倒计时结束，初始化样式
				this.init = true
			},
			sendCode3() {
				setTimeout(() => {
					//发送短信
					//...
					this.$refs.fui_cdv3 && this.$refs.fui_cdv3.success()
				}, 800)
			},
			sendCode4() {
				setTimeout(() => {
					this.fui.toast('手机号码格式不正确！')
					this.$refs.fui_cdv4 && this.$refs.fui_cdv4.reset()
				}, 200)
			}
		}
	}
</script>

<style>

</style>