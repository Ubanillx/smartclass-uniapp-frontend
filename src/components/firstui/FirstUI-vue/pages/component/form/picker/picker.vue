<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号：123 40 00  0   4853    1995 9     Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Picker <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Picker 选择器，用于数据的选择，可联动选择。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="一级选择" bold :margin="['24rpx']" @click="btnClick(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="二级选择 - 不联动" bold @click="btnClick(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="三级选择 - 不联动" bold :margin="['24rpx']" @click="btnClick(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="四级选择 - 不联动" bold @click="btnClick(4)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="二级选择 - 联动" bold :margin="['24rpx']" @click="btnClick(5)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="三级选择 - 联动" bold @click="btnClick(6)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="四级选择 - 联动" bold :margin="['24rpx']" @click="btnClick(7)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="设置默认值 / 暗黑" bold @click="pickerShow">
			</fui-button>

			<view class="fui-picker__result">
				选择的值为：{{result}}
			</view>
		</view>
		<fui-picker :layer="layer" :options="items" :linkage="linkage" :show="show" @change="change" @cancel="cancel">
		</fui-picker>

		<fui-picker theme="dark" title="请选择时间" :value="value" param="dark" :options="options" @change="onChange"
			ref="picker">
		</fui-picker>
	</view>
</template>

<script>
	import pkData from './picker.js'
	export default {
		data() {
			return {
				value: ['10:00-11:30'],
				result: '',
				layer: 1,
				items: [],
				linkage: false,
				show: false,
				options: pkData.options,
				options2: pkData.options2,
				options3: pkData.options3,
				options4: pkData.options4,
				options5: pkData.options5,
				options6: pkData.options6,
				options7: pkData.options7
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			btnClick(type) {
				this.show = false;
				switch (type) {
					case 1:
						this.layer = 1;
						this.linkage = false;
						this.items = this.options
						break;
					case 2:
						this.layer = 2;
						this.linkage = false;
						this.items = this.options2
						break;
					case 3:
						this.layer = 3;
						this.linkage = false;
						this.items = this.options3
						break;
					case 4:
						this.layer = 4;
						this.linkage = false;
						this.items = this.options4
						break;
					case 5:
						this.layer = 2;
						this.linkage = true;
						this.items = this.options5
						break;
					case 6:
						this.layer = 3;
						this.linkage = true;
						this.items = this.options6
						break;
					case 7:
						this.layer = 4;
						this.linkage = true;
						this.items = this.options7
						break;
					default:
						break;
				}

				this.$nextTick(() => {
					setTimeout(() => {
						this.show = true;
					}, 50)
				})
			},
			change(e) {
				this.show = false
				this.onChange(e)
			},
			onChange(e) {
				console.log(e)
				this.result = JSON.stringify(e || {})
			},
			cancel() {
				this.show = false
			},
			pickerShow() {
				//显示选择器
				this.$refs.picker.open()
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

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