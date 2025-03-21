<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40  34，营业执照号： 12 3   4  0  0 0 0 4  85  3199 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Cascader <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Cascader 级联选择器，用于一组相关联的数据集合进行选择，例如省市区等。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-cascader @complete="complete" :options="options"></fui-cascader>
			<view class="fui-section__title">默认选项</view>
			<fui-cascader ref="cascader" @complete="complete" :options="options" :value="value" activeColor="#FF2B2B">
			</fui-cascader>
			<view class="fui-flex__center">
				<fui-button type="gray" btn-size="medium" text="重置选择" bold :margin="['48rpx','0','0']"
					@click="btnReset"></fui-button>
			</view>
			<view class="fui-section__title">逐级请求数据</view>
			<fui-cascader ref="cascader1" :options="layer1" stepLoading @change="change" @complete="complete">
			</fui-cascader>
			<view class="fui-section__title">逐级请求数据/默认选项</view>
			<fui-cascader ref="cascader2" :options="layerData" :value="value2" stepLoading @change="change2"
				@complete="complete">
			</fui-cascader>
			<view class="fui-flex__center">
				<fui-button type="gray" btn-size="medium" text="底部弹出选择" bold :margin="['48rpx','0','0']"
					@click="btnSelect"></fui-button>
			</view>
		</view>
		<fui-bottom-popup :show="show">
			<view class="fui-scroll__wrap">
				<view class="fui-title">请选择地区</view>
				<fui-cascader @complete="complete2" :options="options"></fui-cascader>
				<view class="fui-icon__close" @tap.stop="closePopup">
					<fui-icon name="close" :size="48"></fui-icon>
				</view>
			</view>
		</fui-bottom-popup>
	</view>
</template>

<script>
	import data from './data.js'
	export default {
		data() {
			return {
				options: data.options,
				value: ["440000", "440200", "440202", "44020203"],
				//分级加载时，设置第一级数据
				layer1: data.layer_0,
				//分级加载设置默认数据时，需要将所有层级数据返回
				layerData: [data.layer_0, data.layer_1, data.layer_2, data.layer_3, data.layer_4, data.layer_5],
				value2: ["04", "0203", "0302", "0405", "0501", "0602"],
				show: false
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			btnReset() {
				//重置选择
				if (this.$refs.cascader) {
					this.$refs.cascader.reset()
				}
			},
			complete(e) {
				console.log(e)
				this.fui.toast(`您的选择为：${e.text.join('')}`)
			},
			change(e) {
				//默认返回的为约定数据，其他属性可自行扩展
				console.log(e)
				//当前点击item所在层级
				let layer = e.layer;
				//当前点击item索引值
				let index = e.index;
				//value值
				let val = e.value
				//...

				//获取下一级数据，此处为模拟，省略请求
				uni.showLoading()
				setTimeout(() => {
					//设置请求返回数据
					//当无数据时设置空数组，则会触发@complete事件，表示完成选择（或者调用end方法）
					// if (layer === 5) {
					// 	//如果层级已知，可直接判断，结束选择
					// 	this.$refs.cascader1.end();
					// 	return
					// }
					uni.hideLoading()
					this.$refs.cascader1.setRequestData(data[`layer_${layer+1}`], layer)
				}, 300)
			},
			change2(e) {
				//默认返回的为约定数据，其他属性可自行扩展
				console.log(e)
				//当前点击item所在层级
				let layer = e.layer;
				//当前点击item索引值
				let index = e.index;
				//value值
				let val = e.value
				//...

				//获取下一级数据，此处为模拟，省略请求
				uni.showLoading()
				setTimeout(() => {
					//设置请求返回数据
					//当无数据时设置空数组，则会触发@complete事件，表示完成选择（或者调用end方法）
					// if (layer === 5) {
					// 	//如果层级已知，可直接判断，结束选择
					// 	this.$refs.cascader2.end();
					// 	return
					// }
					uni.hideLoading()
					this.$refs.cascader2.setRequestData(data[`layer_${layer+1}`], layer)
				}, 300)
			},
			btnSelect() {
				this.show = true
			},
			closePopup() {
				this.show = false
			},
			complete2(e) {
				console.log(e)
				this.fui.toast(`您的选择为：${e.text.join('')}`)
				this.closePopup()
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-scroll__wrap {
		padding-top: 30rpx;
		position: relative;
	}

	.fui-title {
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		padding-bottom: 24rpx;
	}

	.fui-icon__close {
		position: absolute;
		top: 24rpx;
		right: 24rpx;
	}
</style>