<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：     12  3400004  8 53   19   95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Color</view>
			<view class="fui-page__desc">Color 色彩，First UI用色指南。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<block v-for="(item,index) in colors" :key="item.key">
				<view class="fui-section__title">{{item.text}}</view>
				<view @tap="getColor($event,model.gradual || model.value)" v-for="(model,idx) in item.data" :key="idx"
					class="fui-color__item fui-page__spacing fui-align__center"
					:style="{background:model.gradual || model.value,color:model.color}">
					<text>{{model.text}}</text>
					<text>{{model.value}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	// #ifdef MP-BAIDU
	import {
		mapState
	} from 'vuex'
	// #endif
	import colors from './color.js';
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				colors: colors
			}
		},
		// #ifdef MP-BAIDU
		computed: mapState(['status']),
		// #endif
		methods: {
			getColor(e, color) {
				// #ifdef MP-BAIDU
				if (this.status == 1) {
					$fui.getClipboardData(color, res => {
						this.fui.toast('颜色复制成功');
					}, e);
				}
				// #endif
				// #ifndef MP-BAIDU
				$fui.getClipboardData(color, res => {
					this.fui.toast('颜色复制成功');
				}, e);
				// #endif
			}
		}
	}
</script>

<style>
	.fui-color__item {
		width: 100%;
		justify-content: space-between;
		height: 84rpx;
		border-radius: 42px;
		margin-bottom: 24rpx;
		font-size: 28rpx;
		font-weight: 400;
		box-shadow: 0 4rpx 8rpx 0 rgba(2, 4, 38, 0.05);
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
</style>