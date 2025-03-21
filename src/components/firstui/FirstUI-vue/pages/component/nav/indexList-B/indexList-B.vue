<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：12  34 0   0  0  04 85 3  19 9 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<fui-index-list isSelect :listData="lists" @init="init" @click="itemClick">
		<fui-search-bar @search="search"></fui-search-bar>

		<!--解构插槽使用，自定义内容 custom属性 设为true时生效-->
		<!-- <template v-slot:item="{ model, idx, index }">
			<fui-list-cell>
				{{model.text}}
			</fui-list-cell>
		</template> -->

		<template v-slot:footer>
			<fui-loadmore v-if="!show"></fui-loadmore>
			<fui-divider text="已加载全部数据" v-if="show"></fui-divider>
		</template>
	</fui-index-list>
</template>

<script>
	import lists from './index.list.js'
	export default {
		data() {
			return {
				lists: lists,
				show: false
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	this.show = true;
			// }, 500)
		},
		methods: {
			init() {
				this.show = true;
			},
			search(e) {
				this.fui.toast(`搜索：${e.detail.value}`)
				//相关逻辑自行处理
				// ...
			},
			itemClick(e) {
				console.log(e)
				//相关逻辑自行处理，如限制选择数，选择后操作等
				let obj = this.lists[e.index].data[e.subIndex]
				this.$set(obj, 'checked', !obj.checked)
				// ...
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}
</style>