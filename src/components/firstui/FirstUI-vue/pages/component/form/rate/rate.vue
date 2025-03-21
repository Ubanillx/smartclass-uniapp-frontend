<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 03  4，营业执照号：   12340  000   4  853   1 9   959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Rate <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Rate 评分，对评价进行展示或对事物进行快速的评级操作。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-rate @change="change"></fui-rate>
			<view class="fui-section__title">设置颜色</view>
			<fui-rate color="#888" activeColor="#465CFF" @change="change"></fui-rate>
			<view class="fui-section__title">设置大小</view>
			<fui-rate :size="48" @change="change"></fui-rate>
			<view class="fui-section__title">设置最大评分数</view>
			<fui-rate :max="8" :score="5" @change="change"></fui-rate>
			<view class="fui-section__title">支持半星</view>
			<fui-rate allowHalf @change="change"></fui-rate>
			<view class="fui-section__title">仅展示，禁用操作</view>
			<fui-rate disabled :score="3" @change="change"></fui-rate>
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
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e){
				//返回评分 e.score
				console.log(e)
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.fui-wrap {
		padding-bottom: 64rpx;
	}
</style>