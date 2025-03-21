<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号： 1 23400004    8  531  9  95 9    Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__wrap" :style="{paddingBottom:height+'px'}">
			<page-a v-if="current===0"></page-a>
			<page-b v-if="current===1"></page-b>
			<page-c v-if="current===2"></page-c>
			<page-d v-if="current===3"></page-d>
		</view>
		<fui-tabbar :tabBar="tabBar" :current="current" @init="init" @click="itemClick"></fui-tabbar>
	</view>
</template>

<script>
	import pageA from './pageA.vue'
	import pageB from './pageB.vue'
	import pageC from './pageC.vue'
	import pageD from './pageD.vue'
	export default {
		components: {
			pageA,
			pageB,
			pageC,
			pageD
		},
		data() {
			return {
				current: 0,
				tabBar: [{
						text: "组件",
						iconPath: "/static/images/tabbar/assembly_default_3x.png",
						selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
					},
					{
						text: "布局",
						iconPath: "/static/images/tabbar/layout_default_3x.png",
						selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
					},
					{
						text: "模板",
						iconPath: "/static/images/tabbar/mod_default_3x.png",
						selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
					},
					{
						text: "我的",
						iconPath: "/static/images/tabbar/my_default_3x.png",
						selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
					}
				],
				height: 0
			}
		},
		methods: {
			init(e) {
				//处理tabbar高度，避免内容被tabbar遮住
				this.height = e.height
			},
			itemClick(e) {
				console.log(e)
				//这里可以做其他验证处理，比如登录等
				//....
				//验证通过执行以下逻辑
				this.current = e.index

				uni.setNavigationBarTitle({
					title:['组件','布局','模板','我的'][e.index]
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
		font-weight: normal;
	}

	.fui-wrap {
		/* #ifndef APP-NVUE */
		width: 100%;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		/* #endif */
	}
</style>