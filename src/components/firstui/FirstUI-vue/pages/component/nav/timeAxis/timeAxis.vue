<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号：12 34 00     0 0485  319    9   59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">TimeAxis <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">TimeAxis 时间轴，用于展现时间流信息。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">右侧展示</view>
			<fui-timeaxis background="#fff" :padding="['32rpx','16rpx']">
				<fui-timeaxis-node :lineColor="index<3?item.activeColor:'#ccc'" :lined="index!==processData.length-1"
					v-for="(item,index) in processData" :key="index">
					<view class="fui-node" :style="{borderColor:item.activeColor}">
					</view>
					<template v-slot:right>
						<view class="fui-process__node" :class="{'fui-node__pb':index!==processData.length-1}">
							<view class="fui-title" :style="{color:index===3?item.activeColor:'#181818'}">{{item.title}}
							</view>
							<view class="fui-descr" v-if="item.descr">{{item.descr}}</view>
							<view class="fui-time">{{item.time}}</view>
						</view>
					</template>
				</fui-timeaxis-node>
			</fui-timeaxis>
			<view class="fui-section__title">左右展示</view>
			<fui-timeaxis leftWidth="200" background="#fff" :padding="['32rpx','16rpx']">
				<fui-timeaxis-node :lineColor="index<3?item.activeColor:'#ccc'" :lined="index!==processData.length-1"
					v-for="(item,index) in processData" :key="index">
					<view class="fui-node" :style="{borderColor:item.activeColor}">
					</view>
					<template v-slot:left>
						<view class="fui-time__left">{{item.time}}</view>
					</template>
					<template v-slot:right>
						<view class="fui-process__node" :class="{'fui-node__pbtm':index!==processData.length-1}">
							<view class="fui-title" :style="{color:index===3?item.activeColor:'#181818'}">{{item.title}}
							</view>
							<view class="fui-descr" v-if="item.descr">{{item.descr}}</view>
						</view>
					</template>
				</fui-timeaxis-node>
			</fui-timeaxis>
			<view class="fui-section__title">节点设置icon</view>
			<fui-timeaxis background="#fff" :padding="['32rpx','16rpx']">
				<fui-timeaxis-node>
					<view class="fui-node__box" style="background: #FF2B2B;">
						<fui-icon name="check" :size="28" color="#fff"></fui-icon>
					</view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder">自定义内容</view>
						</view>
					</template>
				</fui-timeaxis-node>
				<fui-timeaxis-node>
					<view class="fui-node__box" style="background: #09BE4F;">
						<fui-icon name="face" :size="28" color="#fff"></fui-icon>
					</view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder">自定义内容</view>
						</view>
					</template>
				</fui-timeaxis-node>
				<fui-timeaxis-node>
					<view class="fui-node__box" style="background: #465CFF;">
						<fui-icon name="my-fill" :size="28" color="#fff"></fui-icon>
					</view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder">自定义内容</view>
						</view>
					</template>
				</fui-timeaxis-node>
				<fui-timeaxis-node>
					<view class="fui-node__sm"></view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder">自定义内容</view>
						</view>
					</template>
				</fui-timeaxis-node>
				<fui-timeaxis-node>
					<view class="fui-node"></view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder" style="height: 400rpx;">First UI</view>
						</view>
					</template>
				</fui-timeaxis-node>
				<fui-timeaxis-node :lined="false">
					<view class="fui-node"></view>
					<template v-slot:right>
						<view class="fui-custom__wrap">
							<view class="fui-custom__innder">
								<image src="/static/images/common/logo.png" class="fui-logo"></image>
							</view>
						</view>
					</template>
				</fui-timeaxis-node>
			</fui-timeaxis>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				processData: [{
					title: '入场',
					time: '07:00',
					activeColor: '#465CFF'
				}, {
					title: '主场演讲',
					time: '08:00',
					descr: '马云（阿里巴巴）',
					activeColor: '#465CFF'
				}, {
					title: '世界互联经济',
					time: '08:30',
					descr: '马云（阿里巴巴）',
					activeColor: '#465CFF'
				}, {
					title: '打造自己的互联帝国',
					time: '09:30',
					descr: '马化腾（腾讯）',
					activeColor: '#FFB703'
				}, {
					title: '散场',
					time: '11:00',
					descr: '请带走垃圾，有序散场。'
				}]
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
	page {
		font-weight: normal;
	}

	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-node {
		width: 32rpx;
		height: 32rpx;
		border-radius: 50%;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 4px solid #ccc;
		box-sizing: border-box;
	}

	.fui-process__node {
		padding-left: 20rpx;
	}

	.fui-node__pb {
		padding-bottom: 48rpx;
	}

	.fui-title {
		font-size: 34rpx;
		line-height: 34rpx;
		font-weight: bold;
	}

	.fui-descr {
		font-size: 28rpx;
		padding-top: 12rpx;
		color: #7F7F7F;
	}

	.fui-time {
		font-size: 24rpx;
		color: #B2B2B2;
		padding-top: 12rpx;
	}

	.fui-time__left {
		font-size: 36rpx;
		line-height: 36rpx;
		text-align: right;
		padding-right: 20rpx;
	}

	.fui-node__pbtm {
		padding-bottom: 88rpx;
	}

	.fui-custom__wrap {
		padding: 20rpx;
		box-sizing: border-box;
	}

	.fui-custom__innder {
		height: 200rpx;
		border-radius: 0 16rpx 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F1F4FA;
		color: #FFB703;
	}

	.fui-logo {
		width: 120rpx;
		height: 120rpx;
		border-radius: 24rpx;
	}

	.fui-node__box {
		width: 36rpx;
		height: 36rpx;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.fui-node__sm {
		width: 9px;
		height: 9px;
		background: #ccc;
		border-radius: 50%;
	}
</style>