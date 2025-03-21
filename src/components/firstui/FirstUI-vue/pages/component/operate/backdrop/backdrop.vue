<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：12340   0 0    048 5    3 199 59  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Backdrop</view>
			<view class="fui-page__desc">Backdrop 遮罩层，在组件中设置显示蒙层。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="打开遮罩层" bold :margin="['24rpx']" @click="open">
			</fui-button>
		</view>
		<!--closable为true时click事件才生效-->
		<fui-backdrop :show="show" closable @click="close"></fui-backdrop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			open() {
				this.show = true
			},
			//关闭遮罩通过show进行控制
			close() {
				this.show = false;
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>