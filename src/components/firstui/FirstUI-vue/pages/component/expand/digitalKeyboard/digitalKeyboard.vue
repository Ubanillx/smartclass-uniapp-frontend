<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：  12  3  4  0  000 4   853199 5  9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">DigitalKeyboard <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">DigitalKeyboard 数字键盘，一般用于数字输入，如金额、密码、验证码输入等。</view>
		</view>
		<view class="fui-page__bd">
			<fui-single-input :native="false" isFocus borderColor="#ccc" :value="value" @focus="onFocus" ref="fui_si">
			</fui-single-input>
			<view class="fui-flex__center fui-flex__column">
				<fui-button type="gray" btn-size="medium" text="默认键盘" bold @click="btnTap(0)">
				</fui-button>
				<fui-button type="gray" btn-size="medium" text="改变按钮背景色" bold :margin="['24rpx']"
					@click="btnTap(1)"></fui-button>
				<fui-button type="gray" btn-size="medium" text="带小数点" bold @click="btnTap(2)">
				</fui-button>
				<fui-button type="gray" btn-size="medium" text="带取消按钮" bold :margin="['24rpx']"
					@click="btnTap(3)"></fui-button>
				<fui-button type="gray" btn-size="medium" text="带清空按钮" bold @click="btnTap(4)"></fui-button>
				<fui-button type="gray" btn-size="medium" text="暗黑模式" bold :margin="['24rpx']"
					@click="btnTap(5)"></fui-button>
				<fui-button type="gray" btn-size="medium" text="身份证键盘" bold @click="btnTap(6)"></fui-button>
				<fui-button type="gray" btn-size="medium" text="自定义插槽内容" :margin="['24rpx']" bold
					@click="btnClick">
				</fui-button>
			</view>
			<fui-digital-keyboard :show="show" :background="background" :decimal="decimal" :spareKey="spareKey"
				:theme="theme" @click="keyClick" @confirm="confirm" @backspace="backspace" @spare="spare">
			</fui-digital-keyboard>

			<!--自定义插槽内容示例-->
			<fui-backdrop :zIndex="9" :show="visible"></fui-backdrop>
			<fui-digital-keyboard :zIndex="10" :show="visible" spareKey="取消" background="#09BE4F" @click="keyClick2"
				@confirm="confirm2" @backspace="backspace2" @spare="spare2">
				<view class="fui-dk__header">
					<text class="fui-title">请输入密码</text>
					<fui-single-input :native="false" borderColor="#ccc" border="1" borderWidth="1" radius="16"
						activeColor="#09BE4F" cursorHeight="40" cursorColor="#09BE4F" :length="6" width="80" height="80"
						size="24" password isFocus :value="value2" ref="fui_si2">
					</fui-single-input>
				</view>
			</fui-digital-keyboard>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				init: false,
				show: false,
				value: '',
				background: '',
				decimal: false,
				spareKey: '',
				theme: 'light',
				visible: false,
				value2: ''
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			keyClick(e) {
				console.log(e)
				//输入的值
				let val = e.value;
				//之前输入的值
				let text = this.value;
				//判断根据实际情况做调整，这里只是做演示
				if (text.length === 4) {
					this.fui.toast('已完成输入！')
					return
				} else if (text.includes('.') && val === '.') {
					this.fui.toast('小数点不可重复输入！')
					return
				}

				if (!text && val === '.') {
					this.value = '0.'
				} else {
					this.value += val
				}

			},
			confirm(e) {
				let text = this.value;
				let vals = text.split('')
				if (text.length < 4) {
					this.fui.toast('请先输入完成！')
					return
				} else if (vals[vals.length - 1] === '.') {
					this.fui.toast('最后一位不可输入小数点！')
					return
				}

				this.fui.toast('您输入的值为：' + text)
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
			spare(e) {
				console.log(e)
				//备用键事件，可以换成其他需要的功能
				if (this.spareKey === '清空') {
					this.value = ''
				} else if (this.spareKey === 'X') {
					//可控制仅输入一次
					if (this.value.length === 4) {
						this.fui.toast('已完成输入！')
						return
					}else if (~this.value.indexOf('X')) {
						this.fui.toast('X不可重复输入！')
						return
					}
					this.value += e.value
				} else {
					this.show = false
					//输入框失去焦点
					this.$refs.fui_si.initFocus(false)
				}
			},
			onFocus(e) {
				setTimeout(() => {
					this.show = true
					if (this.init) {
						this.init = false
					}
				}, this.init ? 200 : 0);
			},
			btnTap(type) {
				switch (type) {
					case 0:
						this.theme = 'light';
						this.background = '#465CFF';
						this.spareKey = '';
						this.decimal = false;
						break;
					case 1:
						this.background = '#FFB703';
						break;
					case 2:
						this.decimal = true;
						break;
					case 3:
						//备用键，可以替换为其他需要的功能
						this.spareKey = '取消';
						break;
					case 4:
						this.spareKey = '清空';
						break;
					case 5:
						this.theme = 'dark';
						break;
					case 6:
						this.spareKey = 'X';
						this.decimal = false;
						break;
					default:
						break;
				}
				if (!this.show) {
					this.show = true
					//输入框获得焦点
					this.$refs.fui_si.initFocus(true)
				}
			},
			btnClick() {
				//清空之前输入的密码
				this.value2 = '';
				this.visible = true
				this.$refs.fui_si2.initFocus(true)
			},
			keyClick2(e) {
				console.log(e)
				if (this.value2.length === 6) return;
				this.value2 += e.value
			},
			confirm2(e) {
				let text = this.value2;
				if (text.length < 6) {
					this.fui.toast('请输入6位数密码！')
					return
				}
				this.fui.toast('您输入的密码为：' + text)
				this.visible = false
				//输入框失去焦点
				this.$refs.fui_si2.initFocus(false)
			},
			backspace2(e) {
				let val = this.value2;
				if (val) {
					this.value2 = val.substring(0, val.length - 1)
				}
			},
			spare2(e) {
				//清空输入的密码
				this.value2 = '';
				this.visible = false
				//输入框失去焦点
				this.$refs.fui_si2.initFocus(false)
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

	.fui-dk__header {
		width: 100%;
		padding-bottom: 24rpx;
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
</style>