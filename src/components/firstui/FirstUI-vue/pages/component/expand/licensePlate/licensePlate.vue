<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：     1 2340 0 00      4 8 531 9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">LicensePlate <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">LicensePlate 车牌号键盘，用于车牌号的输入。</view>
		</view>
		<view class="fui-page__bd">
			<text class="fui-title">请输入车牌号</text>
			<view class="fui-si__wrap">
				<text class="fui-si__tip">新能源</text>
				<fui-single-input :native="false" borderColor="#ccc" border="1" borderWidth="1" radius="16"
					cursorHeight="40" :length="8" width="80" height="80" size="40" padding="32" :value="value"
					ref="fui_si" @focus="onFocus">
				</fui-single-input>
			</view>
			<view class="fui-flex__center fui-flex__column">
				<fui-button type="gray" btn-size="medium" text="默认键盘" bold @click="btnTap(1)">
				</fui-button>
				<fui-button type="gray" btn-size="medium" text="暗黑模式" bold :margin="['24rpx']"
					@click="btnTap(2)"></fui-button>
			</view>
			<fui-license-plate ref="plate" :show="show" :theme="theme" :toolbar="toolbar" @click="keyClick" @backspace="backspace" @complete="complete"></fui-license-plate>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				value: '',
				theme: 'light',
				toolbar: true
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onFocus(){
				if (!this.show) {
					this.show = true
					//输入框获得焦点
					this.$refs.fui_si.initFocus(true)
				}
			},
			keyClick(e) {
				console.log(e)
				//输入的值
				let val = e.value;
				if (this.value.length === 8) return
				this.value += val
			},
			complete(e) {
				this.show = false
				//输入框失去焦点
				this.$refs.fui_si.initFocus(false)
			},
			backspace(e) {
				let val = this.value;
				if (val) {
					this.value = val.substring(0, val.length - 1)
				}
			},
			btnTap(type) {
				if (type === 1) {
					this.theme = 'light'
				} else {
					this.theme = 'dark'
				}
				// 切换键盘，cn/en
				// this.$refs.plate.changeKeyboard('en')
				if (!this.show) {
					this.show = true
					//输入框获得焦点

					this.$refs.fui_si.initFocus(true)
				}
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-flex__center {
		padding-top: 120rpx;
	}

	.fui-title {
		width: 100%;
		display: flex;
		justify-content: center;
		text-align: center;
		font-size: 24rpx;
		color: #333;
		padding-top: 12rpx;
		padding-bottom: 24rpx;
		font-weight: normal;
	}

	.fui-si__wrap {
		width: 100%;
		position: relative;
	}

	.fui-si__tip {
		display: block;
		width: 80rpx;
		position: absolute;
		right: 32rpx;
		top: -32rpx;
		text-align: center;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #09BE4F;
		font-weight: normal;
		transform: scale(.8);
	}
</style>