<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：12340 0 0 0   4  8  5 3 1  99 5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">FilterBar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">FilterBar 筛选栏，主要用于数据的筛选。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<view class="fui-filter--wrap">
				<fui-filter-bar :items="items" @change="change"></fui-filter-bar>
				<fui-dropdown-menu :isMask="false" :options="itemList" ref="ddm" left="0" minWidth="750" splitLine
					@click="itemClick">
				</fui-dropdown-menu>
			</view>
			<view class="fui-section__title">配置项调整</view>
			<fui-filter-bar :items="items2"></fui-filter-bar>
			<view class="fui-section__title">互不排斥/选项共存</view>
			<view class="fui-filter--wrap">
				<fui-filter-bar coexist :items="items4" @change="change4"></fui-filter-bar>
				<fui-dropdown-menu :isMask="false" :options="itemStatus" ref="statusRef" left="0" minWidth="750" splitLine @click="statusClick">
				</fui-dropdown-menu>
				<fui-dropdown-menu :isMask="false" :options="itemTypes" ref="typesRef" left="0" minWidth="750" splitLine @click="typeClick">
				</fui-dropdown-menu>
			</view>
			<view class="fui-section__title">颜色调整 / 默认选中</view>
			<fui-filter-bar :items="items3" background="#222" color="#A3A3A3" lineColor="#333" activeColor="#465CFF">
			</fui-filter-bar>
			<!--筛选-->
			<fui-drawer :show="show" @close="closeDrawer">
				<scroll-view scroll-y class="fui-scroll__view">
					<view class="fui-filter__list" v-for="(item,index) in filters" :key="index">
						<view class="fui-filter__title">{{item.title}}</view>
						<view class="fui-filter__item">
							<view class="fui-filter__item-btn" :class="{'fui-item__btn-active':isActive(modal.value)}"
								@tap="attrClick(modal.value)" v-for="(modal,idx) in item.data" :key="idx">
								{{modal.text}}
							</view>
						</view>
					</view>
				</scroll-view>
			</fui-drawer>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				itemList: ['综合', '信用'],
				filters: [{
					title: '品牌',
					data: [{
						text: '南极人',
						value: 1
					}, {
						text: '易文',
						value: 2
					}, {
						text: '宿云月',
						value: 3
					}, {
						text: 'RAMPO/乱步乱步',
						value: 4
					}]
				}],
				brands: [],
				items: [{
					text: '综合',
					value: '',
					type: 'dropdown',
					active: false
				}, {
					text: '价格',
					type: 'sort',
					sort: 1
				}, {
					text: '销量',
					type: 'text',
					active: false
				}, {
					type: 'switch',
					switch: 1
				}, {
					text: '筛选',
					value: '',
					type: 'filter'
				}],
				items2: [{
					text: '综合',
					value: '',
					type: 'dropdown',
					active: false
				}, {
					text: '价格',
					type: 'sort',
					active: false,
					sort: 1
				}, {
					text: '评论',
					type: 'sort',
					sort: 1
				}],
				items3: [{
					text: 'Updated',
					value: '',
					type: 'dropdown',
					active: false
				}, {
					text: 'Forks',
					type: 'text',
					active: false,
					sort: 1
				}, {
					text: 'Stars',
					type: 'sort',
					value: 'desc',
					sort: 2
				}, {
					text: '筛选',
					value: '',
					type: 'filter'
				}],
				items4:[{
					text: '状态',
					type: 'dropdown',
					active: false
				},{
					text: '类型',
					type: 'dropdown',
					active: false
				}, {
					text: '时间',
					type: 'sort',
					sort: 1
				}],
				itemStatus: ['已完成', '待审核', '审核中'],
				itemTypes: ['PC网站', '小程序', '微信公众号']
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			isActive(val) {
				return ~this.brands.indexOf(val)
			},
			attrClick(val) {
				let attrs = [...this.brands];
				let index = attrs.indexOf(val)
				if (index !== -1) {
					attrs.splice(index, 1)

				} else {
					attrs.push(val)
				}
				this.brands = attrs;
				let items = [...this.items]
				let vals = this.brands.join(',')
				//filter 类型需要设置value来表示选中
				items[4].value = vals
				this.fui.toast(`筛选：${vals?vals:'全部'}`)
				this.items = items;
			},
			changeData(items, idx) {
				items.forEach((item, index) => {
					if (index !== idx && item.type !== 'filter' && item.type !== 'switch') {
						if (item.type === 'sort') {
							item.sort = 1;
						}
						item.active = false;
						item.value = ''
					}
				})
				return items
			},
			itemClick(e) {
				console.log(e)
				let items = [...this.items]
				let item = items[0]
				item.text = e.text;
				//dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
				item.value = e.text;
				item.active = false;
				this.items = this.changeData(items, 0)
			},
			closeDrawer(e) {
				this.show = false
			},
			change(e) {
				console.log(e)
				this.items = e.items;
				let item = this.items[e.index]
				if (item.type === 'dropdown') {
					if (item.active) {
						this.$refs.ddm.show();
					} else {
						this.$refs.ddm.close();
					}
				} else if (item.type === 'sort') {
					this.fui.toast(item.text + ' ' + item.value)
					this.changeData(this.items, e.index)
				} else if (item.type === 'text') {
					this.fui.toast(item.text)
					this.changeData(this.items, e.index)
				} else if (item.type === 'switch') {
					this.fui.toast('切换为：' + (item.switch === 1 ? '大图' : '列表'))
				} else if (item.type === 'filter') {
					this.show = true
				}
			},
			change4(e){
				console.log(e)
				this.items4 = e.items;
				let item = this.items4[e.index]
				if(e.index==0){
					if (item.active) {
						this.$refs.statusRef.show();
					} else {
						this.$refs.statusRef.close();
					}
				}else if(e.index==1){
					if (item.active) {
						this.$refs.typesRef.show();
					} else {
						this.$refs.typesRef.close();
					}
				}
			},
			statusClick(e){
				console.log(e)
				let items = [...this.items4]
				let item = items[0]
				item.text = e.text;
				//dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
				item.value = e.text;
				item.active = false;
			},
			typeClick(e){
				console.log(e)
				let items = [...this.items4]
				let item = items[1]
				item.text = e.text;
				//dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
				item.value = e.text;
				item.active = false;
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}
	.fui-filter--wrap{
		position: relative;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	/* 筛选 */
	.fui-scroll__view {
		width: 640rpx;
		flex: 1;
		overflow: hidden;
	}

	.fui-filter__title {
		width: 100%;
		padding: 32rpx 24rpx 24rpx 24rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		line-height: 32rpx;
		font-weight: bold;
	}

	.fui-filter__list {
		width: 100%;
		display: inline-flex;
		flex-direction: column;
		padding-bottom: 24rpx;
	}

	.fui-filter__item {
		width: 100%;
		padding: 0 24rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}

	.fui-filter__item-btn {
		width: 32%;
		height: 64rpx;
		line-height: 64rpx;
		background: #f7f7f7;
		display: inline-block;
		padding: 0 8rpx;
		box-sizing: border-box;
		border-radius: 32rpx;
		margin-right: 2%;
		margin-bottom: 2%;
		font-size: 26rpx;
		flex-shrink: 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		position: relative;
		border: 1rpx solid #f7f7f7;
	}

	.fui-filter__item-btn:nth-of-type(3n) {
		margin-right: 0;
	}

	.fui-item__btn-active {
		background: #F1F4FA;
		color: #465CFF;
		border-color: #465CFF;
	}

	/* 筛选 */
</style>