<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号： 12 3 4   0  00  0  4  8531995   9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Charts <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Charts 图表，轻量级的简易图表，目前仅提了柱状图、折线图、饼状图，复杂场景可使用推荐的图表库。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="柱状图表" bold :margin="['24rpx']" @click="href(1)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="折线图表" bold @click="href(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="饼状图表" bold :margin="['24rpx']" @click="href(3)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="更多图表" bold @click="href(4)">
			</fui-button>
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
				if (type === 4) {
					// #ifdef MP-WEIXIN
					wx.navigateToMiniProgram({
						appId: 'wx37a9ee6a7398dec0'
					});
					// #endif

					// #ifndef MP-WEIXIN
					this.fui.toast('更多需求可通过创建 Issue 或 PR 的方式告知我们，也可搜索使用uCharts图表库！')
					// #endif
				} else {

					this.fui.href('/pages/common/coding/coding')
					return;
					let url = '../charts-column/charts-column'
					if (type === 2) {
						url = '../charts-line/charts-line'
					} else if (type === 3) {
						url = '../charts-pie/charts-pie'
					}
					this.fui.href(url)
				}
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