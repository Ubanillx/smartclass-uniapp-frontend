<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号：12340 0004 8    53  1      9 959  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Barcode <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Barcode 条形码，用于展现条形码信息。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-input__box">
				<fui-input v-model="val" maxlength="13" type="number"></fui-input>
				<view class="fui-tips">请输入13位条码信息，扫描只能识别有效的条形码（EAN-13）。</view>
			</view>
			<fui-button type="gray" btn-size="medium" text="生成" bold :margin="['32rpx','0','64rpx']" @click="barcode">
			</fui-button>
			<fui-barcode ref="barcode" :value="val"></fui-barcode>

			<view class="fui-input__box fui-mt--96">
				<fui-input v-model="code128" placeholder="请输入条码"></fui-input>
				<view class="fui-tips">请输入条码信息，不支持中文（类型：Code 128）。</view>
			</view>
			<fui-button type="gray" btn-size="medium" text="生成" bold :margin="['32rpx','0','64rpx']"
				@click="barcodeCode128">
			</fui-button>
			<fui-barcode type="2" ref="barcode_code" :value="code128"></fui-barcode>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: '6937147252044',
				code128: 'firstui2024'
			}
		},
		onReady() {
			setTimeout(() => {
				this.barcode()
				this.barcodeCode128()
			}, 50)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			barcode() {
				//输入框如果type=number 则返回的是Number类型值
				if (String(this.val).length === 13) {
					this.$refs.barcode.draw()
				} else {
					this.fui.toast('请输入13位条形码！')
				}
			},
			isNotChinese(value) {
				let reg = /.*[\u4e00-\u9fa5]+.*$/;
				let result = true;
				if (reg.test(value)) {
					result = false
				}
				return result
			},
			barcodeCode128() {
				if(this.isNotChinese(this.code128)){
					this.$refs.barcode_code.draw()
				}else{
					this.fui.toast('不支持中文！')
				}
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-input__box {
		width: 100%;
	}

	.fui-tips {
		width: 100%;
		font-size: 24rpx;
		color: #7F7F7F;
		font-weight: 400;
		padding: 24rpx;
		box-sizing: border-box;
	}

	.fui-mt--96 {
		margin-top: 96rpx;
	}
</style>