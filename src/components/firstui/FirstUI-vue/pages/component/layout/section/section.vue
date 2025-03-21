<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号：12 3400      0  0  485  319 9 5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<fui-section title="Section" descr="Section 标题栏，主要用于文章、列表详情等标题展示。" :margin-top="52"></fui-section>
		<view class="fui-page__bd">
			<fui-section title="装饰线条" isLine margin-top="64"></fui-section>
			<fui-section title="线条宽度/颜色调整" line-width="8rpx" line-color="#FF2B2B" isLine margin-top="96"></fui-section>
			<fui-section title="标题/无线条/带描述" descr="我是描述文本~" margin-top="96"></fui-section>
			<fui-section :padding="['32rpx','32rpx']" background="#fff" title="设置背景" isLine
				margin-top="96"></fui-section>
			<fui-section title="插槽使用/加图标" margin-top="64">
				<template v-slot:right>
					<image class="fui-vip__icon" src="/static/images/index/light/icon_member_3x.png"></image>
				</template>
			</fui-section>
			<fui-section title="线条渐变色/调整字体大小" line-width="3px" size="48" isLine
				line-color="linear-gradient(to bottom , #FFB703, #FF416C)" margin-top="96"></fui-section>
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

		}
	}
</script>

<style>

</style>