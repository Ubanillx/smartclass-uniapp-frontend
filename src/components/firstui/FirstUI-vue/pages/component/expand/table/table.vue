<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号：123  40  0    0  0485  31 99    59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Table <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Table 表格，用于展示多条结构类似的数据。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-table :itemList="tableData" :header="headerData" ref="tableRef"></fui-table>
			<view class="fui-section__title">横向铺满/斑马纹</view>
			<fui-table full stripe :itemList="tableData" :header="headerData" @rowClick="rowClick"></fui-table>
			<!-- #ifndef APP-NVUE -->
			<view class="fui-section__title">行列固定/排序</view>
			<fui-table ref="sortTable" fixed height="600" :itemList="itemList" :header="header" @click="detail"
				@sortChange="sortChange"></fui-table>
			<!-- #endif -->

			<view class="fui-section__title">多选/禁用选择/默认选中</view>
			<!--如果需要初始化时触发 @selectionChange 事件，将属性 initEmitChange 设为true-->
			<fui-table ref="table" selection full :itemList="tableData" :header="headerData"
				@selectionChange="change"></fui-table>

			<view class="fui-flex__center fui-flex__column">
				<fui-button type="gray" btn-size="medium" text="切换第三行选中状态" bold :margin="['48rpx','0','24rpx']"
					@click="toggleSelection(tableData[2])"></fui-button>
				<fui-button type="gray" btn-size="medium" text="取消所有选择" bold @click="clearSelection"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import data from './tableData.js'
	export default {
		data() {
			return {
				tableData: data.table,
				itemList: data.itemList,
				//基础使用 表头
				headerData: [{
					prop: 'name',
					label: '名称'
				}, {
					prop: 'province',
					label: '省份'
				}, {
					prop: 'city',
					label: '城市'
				}],
				header: [{
					prop: 'date',
					label: '日期',
					fixed: true,
					//是否开启排序
					sortable: true,
					//排序图标颜色，颜色不传值则使用默认值
					sortColor: '#465CFF',
					//必传：排序数据类型
					sortType: 'date',
					//排序图标right值，默认40（单位rpx），根据列宽度自行调整至合适的位置
					// sortRight:40
				}, {
					prop: 'ranking',
					label: '名次',
					sortable: true,
					sortColor: '#465CFF',
					sortType: 'number'
				}, {
					prop: 'province',
					label: '省份',
					sortColor: '#465CFF',
					sortable: true,
					sortType: 'string'
				}, {
					prop: 'city',
					label: '城市'
				}, {
					prop: 'address',
					label: '地址',
					width: 320
				}, {
					label: '操作',
					fixed: 'right',
					type: 3,
					width: 160,
					buttons: [{
						text: '详情',
						color: '#465CFF',
						// size: 30,
						fontWeight: 600
					}]
				}]
			}
		},
		onReady() {
			// const date=String(new Date('2020'))
			// this.fui.toast(date)
			//必须等组件加载完成后调用组件方法，刷新header数据时需重新执行方法
			this.$refs.tableRef && this.$refs.tableRef.columnColorMethod(this.columnNameColor, 'name')
			this.$refs.tableRef && this.$refs.tableRef.columnColorMethod(this.columnCityColor, 'city')
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			//根据值改变列的颜色 约定接收参数 value：列值，index:行索引，idx：列索引
			columnNameColor(value, index, idx) {
				let color = '#333'
				if (value && ~value.indexOf('3')) {
					color = '#465CFF'
				}
				return color;
			},
			//根据值改变列的颜色 约定接收参数 value：列值，index:行索引，idx：列索引
			columnCityColor(value, index, idx) {
				console.log(value, index, idx)
				let color = '#333'
				if (value && ~value.indexOf('浦东')) {
					color = '#465CFF'
				}
				return color;
			},
			//行点击
			rowClick(e) {
				console.log(e)
			},
			detail(e) {
				console.log(e)
				this.fui.toast(e.item.province)
			},
			change(e) {
				console.log(e)
			},
			toggleSelection(row) {
				this.$refs.table && this.$refs.table.toggleRowSelection(row)
			},
			clearSelection() {
				this.$refs.table && this.$refs.table.clearSelection()
			},
			sortChange(e) {
				//排序数据发生改变时触发
				console.log(e)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 120rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}
</style>