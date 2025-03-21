<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：12 3  4  0 00 0 4    8 531    9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-header">
			<image :src="`${resUrl}/help/light/img_banner_3x.png`" class="fui-banner" mode="widthFix"></image>
			<view class="fui-hd__content">
				<view class="fui-hd__title">Hi,很高兴为您服务</view>
				<view class="fui-hd__sub">已为您定制如下内容</view>
			</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-main__box">
				<view class="fui-search__box fui-align__center" @tap="search">
					<image class="fui-search__icon" src="/static/images/help/light/icon_search_3x.png" mode="widthFix">
					</image>
					<text class="fui-search__text">请输入您遇到的问题</text>
				</view>
				<fui-list-cell bottomLeft="0" :padding="['32rpx','0']" :highlight="false">
					<text class="fui-title">问题指南</text>
				</fui-list-cell>
				<view class="fui-menu__box">
					<view class="fui-menu__item" @tap="href(1)">
						<image src="/static/images/help/light/icon_introduction_3x.png"></image>
						<text>新手入门</text>
					</view>
					<view class="fui-menu__item" @tap="href(2)">
						<image src="/static/images/help/light/icon_introduce_3x.png"></image>
						<text>功能介绍</text>
					</view>
					<view class="fui-menu__item" @tap="href(3)">
						<image src="/static/images/help/light/icon_member_3x.png"></image>
						<text>会员权益</text>
					</view>
				</view>
			</view>
			<view class="fui-title__box fui-align__center">
				<image src="/static/images/help/light/icon_assembly_3x.png"></image>
				<text>常见问题</text>
			</view>
			<fui-list-cell arrow bottomRight="32" v-for="(item,index) in ques" :key="index" @click="detail(item,index)">
				<text>{{item}}</text>
			</fui-list-cell>
			<view class="fui-title__box fui-align__center">
				<image src="/static/images/help/light/icon_bug_3x.png"></image>
				<text>常见BUG</text>
			</view>
			<view>
				<fui-list-cell arrow bottomRight="32" v-for="(item,idx) in bugs" :key="idx" @click="detail(item,idx+5)">
					<text>{{item}}</text>
				</fui-list-cell>
			</view>
			<view class="fui-title__box fui-align__center">
				<image src="/static/images/help/light/icon_member_relevant_3x.png"></image>
				<text>会员相关</text>
			</view>
			<view>
				<fui-list-cell arrow bottomRight="32" v-for="(item,index) in members" :key="index"
					@click="detail(item,index+9)">
					<text>{{item}}</text>
				</fui-list-cell>
			</view>
			<!-- #ifdef MP-WEIXIN || MP-BAIDU-->
			<view class="fui-footer fui-flex__center">
				找不到答案？
				<fui-button open-type="contact" width="144rpx" height="44rpx" type="link" color="#465CFF" :size="24">
					向我提问吧</fui-button>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY-->
			<view class="fui-footer fui-flex__center">
				找不到答案？
				<view class="fui-ft__text">
					向我提问吧
					<contact-button tnt-inst-id="FCl_GXKB" scene="SCE01194651" />
				</view>

			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				resUrl: this.fui.resUrl(),
				ques: [
					'我只想用某个组件可以吗？',
					'某些平台当我使用 textarea 等组件时层级太高遮挡其他组件，如何解决？',
					'为什么文档或示例中有些组件在GitHub或npm下载的包中无法找到？',
					'组件支持Nvue、支付宝小程序...吗？',
					'组件支持vue3吗？'
				],
				bugs: [
					'方法未定义?',
					'编译到微信小程序样式混乱?',
					'编译到微信小程序报错?',
					'小程序运行报错?'
				],
				members: [
					'开源版与商业版有什么区别?',
					'会员除了获取商业版组件源码外与非会员有什么其他优势？',
					'个人会员和企业会员有什么区别？',
					'商业版本的版权解释说明是什么？',
					'如何开通会员，会员源码如何获取?',
					'会员的有效期是多久?',
					'能否代购商业授权？',
					'购买会员可以开发票吗？'
				]

			}
		},
		computed: mapState(['status']),
		methods: {
			search() {
				this.fui.toast('暂不提供搜索功能~')
			},
			href(type) {
				if (type === 1) {
					// #ifndef MP-BAIDU
					this.fui.href('../webview/webview')
					// #endif

					// #ifdef MP-BAIDU
					if (this.status == 1) {
						this.fui.href('../webview/webview')
					} else {
						this.fui.toast('功能完善中~')
					}
					// #endif

				} else if (type === 2) {
					this.fui.href('../updated/updated')
				} else {
					this.fui.href('../vip/vip')
				}
			},
			detail(title, index) {
				this.fui.href(`../qa/qa?index=${index}&title=${title}`)
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-header {
		width: 100%;
		height: 338rpx;
		position: relative;
		background: #465CFF;
	}

	.fui-banner {
		width: 100%;
		height: 336rpx;
		display: block;
	}

	.fui-hd__content {
		width: 100%;
		height: 216rpx;
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		color: #FFFFFF;
		padding-left: 64rpx;
		box-sizing: border-box;
	}

	.fui-hd__title {
		font-size: 36rpx;
		font-weight: 600;
	}

	.fui-hd__sub {
		font-size: 28rpx;
		font-weight: 400;
		padding-top: 24rpx;
	}

	.fui-page__bd {
		margin-top: -120rpx;
		position: relative;
		z-index: 2;
	}

	.fui-page__bd text {
		font-size: 28rpx;
		line-height: 48rpx;
	}

	.fui-main__box {
		width: 100%;
		background-color: #fff;
		border-radius: 48rpx 48rpx 0 0;
		padding: 32rpx 32rpx 0 32rpx;
		box-sizing: border-box;
	}

	.fui-search__box {
		width: 100%;
		height: 88rpx;
		background: #F8F8F8;
		border-radius: 16rpx;
		padding: 0 32rpx;
		box-sizing: border-box;
		margin-bottom: 16rpx;
	}

	.fui-search__icon {
		width: 32rpx;
		height: 32rpx;
		flex-shrink: 0;
	}

	.fui-search__text {
		font-size: 28rpx;
		color: #CCCCCC;
		padding-left: 16rpx;
	}

	.fui-title {
		font-size: 32rpx !important;
		font-weight: 500;
	}

	.fui-menu__box {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 48rpx 0;
	}

	.fui-menu__item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-menu__item image {
		width: 64rpx;
		height: 64rpx;
	}

	.fui-menu__item text {
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
		padding-top: 12rpx;
	}

	.fui-title__box {
		padding: 32rpx;
		box-sizing: border-box;
	}

	.fui-title__box image {
		width: 64rpx;
		height: 64rpx;
	}

	.fui-title__box text {
		font-size: 28rpx;
		font-weight: 500;
		padding-left: 16rpx;
	}


	/* #ifdef MP-ALIPAY */
	contact-button {
		position: absolute;
		width: 100%;
		height: 100%;
		right: 0;
		top: 0;
		z-index: 2;
		opacity: 0;
	}

	/* #endif */

	.fui-footer {
		font-size: 24rpx;
		color: #333;
		text-align: center;
		padding-top: 32rpx;
	}

	.fui-ft__text {
		position: relative;
		font-size: 24rpx;
		color: #465CFF;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
</style>