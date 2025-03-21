<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号：1     2   3  4   0 0 004 85 319959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<fui-vtabs :vtabs="vtabs" :activeTab="activeTab" :linkage="false" @click="onTabClick">
			<view class="fui-vtabs-content__item">
				<view class="fui-content--box">
					<text class="fui-title">{{content.title}}</text>
					<image class="fui-img" :src="resUrl+content.img" mode="widthFix"></image>
					<view v-if="content.title==='FAQ'">
						<image class="fui-img" :src="resUrl+item.img" mode="widthFix" v-for="(item,index) in contents"
							:key="index"></image>
					</view>
					<text class="fui-descr">{{content.descr}}</text>
				</view>
			</view>
		</fui-vtabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 0,
				vtabs: [],
				contents: [],
				content: {},
				resUrl: this.fui.resUrl()
			}
		},
		onLoad() {
			//内容可与tabs分开
			this.vtabs = ['First UI', '快速上手', '更新日志', '升级指南', '设计规范', '自定义主题', 'FAQ']
			const contents = [{
					title: 'FirstUI组件库',
					img: '/cooperate/light/img_banner_3x.png',
					descr: 'First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！'
				},
				{
					title: '快速上手',
					img: '/cooperate/dark/img_banner_3x.png',
					descr: '使用 First UI前，请确保你已经学习并熟练使用过 uni-app 或者 微信小程序 。文档详见：https://doc.firstui.cn/docs/started.html。'
				},
				{
					title: '更新日志',
					img: '/cooperate/light/img_banner_3x.png',
					descr: 'First UI 严格遵循 Semantic Versioning 2.0.0语义化版本规范。更新日志详见：https://doc.firstui.cn/docs/log.html。'
				},
				{
					title: '升级指南',
					img: '/cooperate/dark/img_banner_3x.png',
					descr: 'First UI 升级指南，当含有破坏性更新，不向下兼容的版本升级时，会在这里写入相关的升级指导。'
				},
				{
					title: '设计规范',
					img: '/cooperate/light/img_banner_3x.png',
					descr: '为了约束和成就更多优秀的产品，打造优质的体验，我们拟定了一些UI界面设计指南和建议。 设计指南建立在充分尊重用户知情权与操作权的基础之上。旨在First UI生态体系内，建立友好、高效、一致的用户体验，同时最大程度适应和支持不同需求，实现用户与First UI的共赢。'
				},
				{
					title: '自定义主题',
					img: '/cooperate/dark/img_banner_3x.png',
					descr: 'First UI 默认提供了一套主题，并使用 CSS 变量 来实现定制主题，链接中的内容可以帮助你对 CSS 变量 概念有基本的认识，避免许多不必要的困扰。文档详见：https://doc.firstui.cn/docs/theme.html。'
				},
				{
					title: 'FAQ',
					img: '/cooperate/light/img_banner_3x.png',
					descr: '常见问题解答，使用前请先仔细阅读FAQ内容，了解常见问题，避免在后续使用过程中花费更多时间。详见：https://doc.firstui.cn/docs/FAQ.html。'
				}
			]

			this.contents = contents
			this.content = contents[this.activeTab]
		},
		methods: {
			onTabClick(e) {
				const index = e.index
				this.content = this.contents[index]
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
		font-weight: normal;
	}

	.fui-vtabs-content__item {
		width: 100%;
		/* padding: 0 20rpx; */
		box-sizing: border-box;
		overflow: hidden;
	}

	.fui-img {
		width: 100%;
		height: 268rpx;
		display: block;
		margin-top: 24rpx;
	}

	.fui-content--box {
		width: 100%;
		padding: 30rpx 24rpx 40rpx;
		box-sizing: border-box;
	}

	.fui-title {
		display: block;
		font-size: 32rpx;
		font-weight: bold;
	}

	.fui-descr {
		display: block;
		font-size: 24rpx;
		padding-top: 24rpx;
	}
</style>