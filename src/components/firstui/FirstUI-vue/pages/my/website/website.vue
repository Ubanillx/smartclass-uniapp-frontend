<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：123  4 0000   48  5  3   19    959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-banner__box">
			<image :src="`${resUrl}/website/light/img_banner_3x.png`" class="fui-banner" mode="widthFix"></image>
		</view>
		<view class="fui-list__view">
			<fui-list-cell arrow :padding="[0,'32rpx']" :bottomBorder="false" radius="16rpx" marginTop="24"
				v-for="(item,index) in links" :key="index" :index="index" @click="getLink">
				<view class="fui-list__item fui-align__center">
					<image class="fui-item__icon" :src="`/static/images/website/light/icon_${item.img}_3x.png`"></image>
					<text>{{item.name}}</text>
				</view>
			</fui-list-cell>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import $fui from '@/components/firstui/fui-clipboard';
	export default {
		data() {
			return {
				resUrl:this.fui.resUrl(),
				links: [{
					img: 'website',
					name: 'First UI 官网地址',
					link: 'https://www.firstui.cn/'
				}, {
					img: 'file',
					name: 'First UI 文档地址',
					link: 'https://doc.firstui.cn/'
				}, {
					img: 'github',
					name: 'GitHub 地址',
					link: 'https://github.com/FirstUI/FirstUI'
				}, {
					img: 'uni',
					name: 'UniApp 插件市场地址',
					link: 'https://ext.dcloud.net.cn/publisher?id=766365'
				}]
			}
		},
		computed: mapState(['status']),
		methods: {
			getLink(e) {
				const item = this.links[e.index]
				// #ifdef MP-BAIDU || MP-TOUTIAO
				if (this.status == 1) {
					$fui.getClipboardData(item.link, res => {
						this.fui.toast(`${item.name}复制成功`);
					}, e);
				} else {
					this.fui.toast('功能完善中~');
				}
				// #endif

				// #ifndef MP-BAIDU || MP-TOUTIAO
				$fui.getClipboardData(item.link, res => {
					this.fui.toast(`${item.name}复制成功`);
				}, e);
				// #endif
			}
		}
	}
</script>

<style>
	.fui-banner__box{
		width: 100%;
		height: 420rpx;
		background: #EDF9FF;
	}
	.fui-banner {
		width: 100%;
		height: 420rpx;
		display: block;
	}

	.fui-list__view {
		width: 100%;
		padding: 8rpx 32rpx 32rpx;
		box-sizing: border-box;
	}

	.fui-list__item {
		width: 100%;
		height: 112rpx;
	}

	.fui-list__item text {
		padding-left: 24rpx;
		padding-right: 16rpx;
	}

	.fui-item__icon {
		width: 48rpx;
		height: 48rpx;
	}
</style>