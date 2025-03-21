<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号： 1 2   34   000  0  48 53 19  9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-banner__box">
			<image :src="`${resUrl}/cooperate/light/img_banner_3x.png`" mode="widthFix" class="fui-banner"></image>
		</view>
		<view class="fui-menu__wrap">
			<view class="fui-menu__item" v-for="(model,idx) in menus" :key="idx" @tap.stop="open(idx)">
				<view class="fui-item__inner" :class="['fui-bg__'+idx]">
					<image class="fui-menu__icon" :src="`/static/images/cooperate/light/icon_${model.icon}_3x.png`">
					</image>
					<text>{{model.name}}</text>
				</view>
			</view>
		</view>
		<view class="fui-divider"></view>
		<view class="fui-page__bd">
			<view class="fui-contacts__box">
				<view class="fui-contacts__item" v-for="(item,index) in contacts" :key="index"
					@tap="copy($event,item.value,item.text)">
					<image class="fui-icon" :src="`/static/images/cooperate/light/icon_${item.icon}_3x.png`"></image>
					<view class="fui-title">{{item.text}}</view>
				</view>
			</view>
			<fui-divider backgroundColor="#fff" dividerColor="#F1F4FA" color="#465CFF" text="联系方式" :size="28">
			</fui-divider>
			<view class="fui-desc">
				上方联系方式，仅限合作沟通，加好友或发邮件时请务必备注您的来意，谢谢配合！
			</view>
		</view>
		<fui-animation :duration="500" :animationType="['fade']" :styles="styles" :show="show">
			<view class="fui-ani__box">
				<view class="fui-ani__title">
					<image src="/static/images/cooperate/light/img_decorate_Left_3x.png" mode="widthFix"></image>
					<text>{{title}}</text>
					<image src="/static/images/cooperate/light/img_decorate_right_3x.png" mode="widthFix"></image>
				</view>
				<view class="fui-flex__center fui-flex__column">
					<view class="fui-desc fui-p" v-if="idx<4">
						定制软件开发价格具体需要结合软件的具体的功能，需求来决定，一般来说如果进行定制开发这样的造价比模板制作要贵。定制开发可以最大程度上满足用户需求，并且后期维护和改动比较方便，适合企业公司深层次推广并且使用。如有需要可通过页面联系方式与我们联系。
					</view>
					<view class="fui-desc fui-p" v-if="idx===4">
						在以任何形式的参与前，请先阅读文档开发指南。如有任何的意见或建议，欢迎您通过创建<text class="fui-link"
							@tap="copy($event,'https://github.com/FirstUI/FirstUI/issues')">Issue</text>或<text
							class="fui-link" @tap="copy($event,'https://github.com/FirstUI/FirstUI/pulls')">Pull Request</text>的方式告知我们。
					</view>
					<view class="fui-desc fui-p" v-if="idx===5">
						First UI 拥有成熟优秀的开发工程师团队及专业的UI设计师团队。产品研发团队中拥有多位行业经验丰富技术工程师。如需合作请通过页面联系方式与我们联系。
					</view>
					<fui-button btn-size="medium" radius="100rpx"
						background="linear-gradient(270deg, #6831FF 0%, #465CFF 100%)" borderColor="rgba(0,0,0,0)"
						border-width="0" @click="close">我知道了</fui-button>
				</view>
			</view>
		</fui-animation>
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
				resUrl: this.fui.resUrl(),
				menus: [{
					icon: 'app',
					name: 'App定制',
				}, {
					icon: 'web',
					name: '网站定制'
				}, {
					icon: 'applet',
					name: '小程序'
				}, {
					icon: 'design',
					name: 'UI定制'
				}, {
					icon: 'code',
					name: '贡献代码'
				}, {
					icon: 'cooperation',
					name: '其他合作'
				}],
				// #ifndef MP-BAIDU || MP-ALIPAY || MP-QQ
				contacts: [{
					icon: 'email',
					text: '邮箱',
					value: 'firstui@126.com'
				}, {
					icon: 'weixin',
					text: '微信',
					value: 'wx_firstui'
				}, {
					icon: 'qq',
					text: 'QQ',
					value: '3560662983'
				}],
				// #endif
				// #ifdef MP-BAIDU || MP-ALIPAY || MP-QQ
				contacts: [{
					icon: 'email',
					text: '邮箱',
					value: 'firstui@126.com'
				}],
				// #endif
				show: false,
				styles: {
					position: 'fixed',
					bottom: 0,
					top: 0,
					left: 0,
					right: 0,
					display: 'flex',
					'justify-content': 'center',
					'align-items': 'center',
					backgroundColor: 'rgba(0,0,0,0.6)'
				},
				idx: 0,
				title: '开发定制'
			}
		},
		computed: mapState(['status']),
		onLoad() {
			// #ifdef MP-BAIDU || MP-ALIPAY || MP-QQ
			if (this.status == 1) {
				this.contacts = [{
					icon: 'email',
					text: '邮箱',
					value: 'firstui@126.com'
				}, {
					icon: 'weixin',
					text: '微信',
					value: 'wx_firstui'
				}, {
					icon: 'qq',
					text: 'QQ',
					value: '3560662983'
				}]
			}
			// #endif
		},
		methods: {
			copy(e, content, title) {
				// #ifdef MP-BAIDU
				if (this.status == 0) {
					this.fui.toast('功能完善中~');
					return;
				};
				// #endif
				title = title || '链接'
				$fui.getClipboardData(content, res => {
					this.fui.toast(`${title}复制成功`);
				}, e);
			},
			open(idx) {
				this.idx = idx;
				if (idx === 4) {
					this.title = '贡献代码'
				} else if (idx === 5) {
					this.title = '其他合作'
				} else {
					this.title = '开发定制'
				}
				setTimeout(() => {
					this.show = true;
				}, 80);
			},
			close() {
				this.show = false;
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
		background-color: #fff;
	}

	.fui-banner__box {
		width: 100%;
		height: 420rpx;
		background: #F1F4FA;
	}

	.fui-banner {
		width: 100%;
		height: 420rpx;
		display: block;
	}

	.fui-menu__wrap {
		width: 100%;
		padding: 16rpx 16rpx 32rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}

	.fui-menu__item {
		width: 33.333333%;
		padding: 16rpx;
		box-sizing: border-box;
	}

	.fui-item__inner {
		width: 100%;
		height: 208rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 28rpx;
		color: #333333;
		background-color: rgba(254, 184, 8, .05);
		border-radius: 24rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-bg__1 {
		background-color: rgba(9, 190, 79, .05);
	}

	.fui-bg__2 {
		background-color: rgba(70, 92, 255, .05);
	}

	.fui-bg__3 {
		background-color: rgba(104, 49, 255, .05);
	}

	.fui-bg__4 {
		background-color: rgba(255, 43, 43, .05);
	}

	.fui-page__bd {
		background-color: #fff;
	}

	.fui-menu__icon {
		width: 96rpx;
		height: 96rpx;
		display: block;
		margin-bottom: 16rpx;
	}

	.fui-contacts__box {
		width: 100%;
		padding: 32rpx 32rpx 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.fui-contacts__item {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-icon {
		width: 96rpx;
		height: 96rpx;
	}

	.fui-title {
		font-size: 28rpx;
		color: #333333;
		padding-top: 16rpx;
	}

	.fui-desc {
		font-size: 24rpx;
		font-weight: 400;
		color: #7F7F7F;
		line-height: 48rpx;
		width: 100%;
		padding: 0 64rpx;
		box-sizing: border-box;
		text-align: center;
	}

	.fui-pb {
		padding-bottom: 16rpx;
	}

	.fui-section__title {
		margin-bottom: 24rpx;
	}

	.fui-link {
		padding: 0 8rpx;
		font-weight: 500;
		color: #465CFF;
		white-space: nowrap;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-divider {
		width: 100%;
		height: 24rpx;
		background-color: #F1F4FA;
	}

	.fui-ani__box {
		width: 622rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		padding-bottom: 64rpx;
	}

	.fui-ani__title {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
		font-weight: 600;
		color: #465CFF;
		padding: 48rpx 0 30rpx;
	}

	.fui-ani__title text {
		padding: 0 24rpx;
	}

	.fui-ani__title image {
		width: 116rpx;
		height: 20rpx;
	}

	.fui-p {
		color: #333;
		text-align: left;
		margin-bottom: 120rpx;
	}
</style>