<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号： 1 2  34000 04  8 5 3  199  5   9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">HorizontalScroll <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">HorizontalScroll 横向滚动的视图容器，主要用于菜单导航，热门商品区等场景。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">商品展示</view>
			<fui-horizontal-scroll background="rgba(255, 43, 43, .08)" scrollBarColor="#FF2B2B">
				<view class="fui-list">
					<view class="fui-list--item" v-for="(item,index) in goodsList" :key="index">
						<fui-lazyload radius="16" marginBottom="20" :width="128" :height="128" :src="item.src"
							mode="aspectFill">
						</fui-lazyload>
						<fui-text :text="`￥${item.price}`" color="#FF2B2B" size="24"></fui-text>
					</view>
				</view>
			</fui-horizontal-scroll>
			<view class="fui-section__title">菜单展示</view>
			<fui-horizontal-scroll>
				<view>
					<view class="fui-list" :class="{'fui-mtop':index!==0}" v-for="(list,index) in menuList" :key="index">
						<view class="fui-list--item fui-mr--52" v-for="(item,idx) in list" :key="item.text">
							<fui-lazyload background="transparent" marginBottom="12" :width="96" :height="96" :src="item.icon"
								mode="aspectFill">
							</fui-lazyload>
							<fui-text un-shrink :text="item.text" color="#888"  size="24"></fui-text>
						</view>
					</view>
				</view>
			</fui-horizontal-scroll>
		</view>
	</view>
</template>

<script>
	import data from './index.js'
	export default {
		data() {
			return {
				goodsList: data.goodsList,
				menuList: data.menuList
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	.fui-list {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.fui-list--item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-right: 24rpx;
	}
	.fui-mr--52{
		margin-right: 52rpx;
	}

	.fui-list--item:last-child {
		margin-right: 0;
	}
	.fui-mtop{
		margin-top: 24rpx;
	}
</style>