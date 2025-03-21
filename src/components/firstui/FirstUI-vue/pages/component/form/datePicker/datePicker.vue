<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：1 23 4    00 0     04  85319  95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">DatePicker <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">DatePicker 日期时间选择器，用于选择日期或时间。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="年月" bold :margin="['24rpx']"
				@click="btnClick(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="年月日" bold @click="btnClick(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="年月日 时" bold :margin="['24rpx']"
				@click="btnClick(4)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="年月日 时分" bold @click="btnClick(5)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="时分秒" bold @click="btnClick(7)"
				:margin="['24rpx']">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="日期区间选择" bold @click="btnClick(3,true)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="设置默认值" bold :margin="['24rpx']"
				@click="btnClick(5,false,true)">
			</fui-button>
			<view class="fui-picker__result">
				选择的值为：{{result}}
			</view>
		</view>
		<fui-date-picker :show="show" :type="type" :range="range" :value="value" :valueEnd="valueEnd" @change="change"
			@cancel="cancel">
		</fui-date-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: '',
				type: 1,
				range: false,
				//默认值
				value: '',
				valueEnd: '',
				show: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			btnClick(type, range, def) {
				this.show = false
				this.type = type;
				this.range = range || false;
				//默认值，区间选择时起始值使用属性：value，结束值使用属性：valueEnd
				this.value = def ? '2021-11-22 11:12' : ''
				setTimeout(() => {
					this.show = true
				}, 80)
			},
			change(e) {
				this.show = false
				console.log(e)
				this.result = JSON.stringify(e || {})
			},
			cancel() {
				this.show = false
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-picker__result {
		width: 100%;
		padding: 64rpx 32rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		word-break: break-all;
		font-weight: normal;
	}
</style>