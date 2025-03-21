<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：  123 4 0     00  04  8 5  3 19959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Drag <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Drag 拖拽排序，通过拖动列表元素以此来达到对数据的重新排列。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="图片元素" bold :margin="['24rpx']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="标题分组元素" bold @click="href(2)">
			</fui-button>
			<!-- #ifndef MP-TOUTIAO -->
			<fui-button type="gray" btn-size="medium" text="自定义元素" bold :margin="['24rpx']" @click="href(3)">
			</fui-button>
			<!-- #endif -->
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
			href(type) {
				let url='../drag-img/drag-img'
				if(type!==1){
					url = type == 2 ? '../drag-text/drag-text' : '../drag-custom/drag-custom'
				}
				this.fui.href(url)
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