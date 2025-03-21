<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号：123  4 0    0004  8 5 3  1  9959  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Select <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Select 选择器，用于弹出一个底部菜单给用户选择操作，可单选或多选。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="单选+默认选中" bold @click="btnClick(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="多选" bold :margin="['24rpx']"
				@click="btnClick(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="列表" bold @click="btnClick(3)">
			</fui-button>
			<view class="fui-picker__result">
				选择的值为：{{result}}
			</view>
		</view>
		<fui-select :show="show" :options="items" title="请选择平台" :type="type" @click="onTap"
			@confirm="onConfirm($event,1)" @close="onClose(1)">
		</fui-select>
		<!--多选-->
		<fui-select :show="show1" :options="items1" title="请选择银行" multiple isReverse checkboxColor="#FFC529"
			btnBackground="#FFC529" btnColor="#1A1D26" closeColor="#6D758A" @confirm="onConfirm($event,2)"
			@close="onClose(2)">
		</fui-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					text: 'First UI（App-vue）',
					src: '/static/images/common/logo.png'
				}, {
					text: 'First UI（App-Nvue）',
					src: '/static/images/common/logo.png'
				}, {
					text: 'First UI（微信小程序）',
					src: '/static/images/common/logo.png',
					//设置默认选中
					checked: true
				}, {
					text: 'First UI（支付宝小程序，禁用选择）',
					src: '/static/images/common/logo.png',
					disabled: true
				}, {
					text: 'First UI（百度小程序）',
					src: '/static/images/common/logo.png'
				}, {
					text: 'First UI（字节小程序）',
					src: '/static/images/common/logo.png'
				}, {
					text: 'First UI（QQ小程序）',
					src: '/static/images/common/logo.png'
				}, {
					text: 'First UI（H5）',
					src: '/static/images/common/icon_tabbar.png'
				}],
				//需要设置默认选中时使用items数据格式
				items1: ['中国银行', '中国建设银行', '中国工商银行', '中国农业银行', '中国邮政储蓄银行'],
				show: false,
				show1: false,
				type: 'select',
				result: ''
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			btnClick(type) {
				if (type === 2) {
					this.show1 = true;
				} else {
					this.type = type === 1 ? 'select' : 'list';
					setTimeout(() => {
						this.show = true;
					}, 80)
				}
			},
			onTap(e) {
				//仅type=list时有效
				console.log(JSON.stringify(e))
				this.result = JSON.stringify(e)

				this.onClose(1)

			},
			onConfirm(e, type) {
				//仅type=select时有效
				console.log(JSON.stringify(e))
				this.result = JSON.stringify(e)
				this.onClose(type)
			},
			onClose(type) {
				if (type === 1) {
					this.show = false
				} else {
					this.show1 = false
				}
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