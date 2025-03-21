<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号： 1    2340    0  0048531 9959     Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center"  @tap="vip">MovableView <image
					src="/static/images/index/light/icon_member_3x.png"></image></view>
			<view class="fui-page__desc">MovableView 可移动的视图容器，在页面中可以拖拽滑动，暂不支持缩放。</view>
		</view>
		<fui-movable-view @change="change">
			<view class="fui-fab--box" @tap="handleClick">
				<fui-icon name="edit" color="#fff"></fui-icon>
			</view>
		</fui-movable-view>

		<fui-movable-view top="200">
			<view class="fui-fab--box" @tap="handleClick">
				<fui-icon name="share" color="#fff"></fui-icon>
			</view>
		</fui-movable-view>

		<fui-movable-view left="80">
			<view class="fui-fab--box" @tap="handleClick">
				<fui-icon name="plus" color="#fff"></fui-icon>
			</view>
		</fui-movable-view>
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
				console.log(e)
			},
			handleClick(){
				this.fui.toast('点击了~')
			}
		}
	}
</script>

<style>
 .fui-fab--box{
	 width: 108rpx;
	 height: 108rpx;
	 border-radius: 50%;
	 background: #465CFF;
	 display: flex;
	 align-items: center;
	 justify-content: center;
 }
</style>