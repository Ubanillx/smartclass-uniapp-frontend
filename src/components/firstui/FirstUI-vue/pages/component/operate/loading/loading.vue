<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  403 4，营业执照号：1234 0   0  00  4 85319    9 5   9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Loading</view>
			<view class="fui-page__desc">Loading 加载。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用（type=row）</view>
			<fui-loading type="row" :isFixed="false"></fui-loading>
			<view class="fui-section__title">基础使用（type=col）</view>
			<fui-loading :isFixed="false"></fui-loading>
			<!-- 居中且显示遮罩，仅 isFixed为true时生效-->
			<!-- <fui-loading isMask mask-bg-color="rgba(0,0,0,.3)"></fui-loading> -->
			<view class="fui-section__title">更换图标（type=row）</view>
			<fui-loading type="row" :isFixed="false" srcRow="/static/images/component/loading_gray.png" text="正在加载...">
			</fui-loading>
			<view class="fui-section__title">更换图标（type=col）</view>
			<fui-loading :isFixed="false" srcCol="/static/images/component/loading_white.png" text="正在加载...">
			</fui-loading>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}
</style>