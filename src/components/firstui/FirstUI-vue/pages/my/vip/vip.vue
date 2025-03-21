<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号：12 3   40   0  00 485 3 1  99 5  9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-banner__box">
			<image :src="`${resUrl}/member/img_banner_3x.png`" mode="widthFix" class="fui-banner__img"></image>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-content__box">
				<image :src="`${resUrl}/member/img_mod_bg.png`" class="fui-bg__img"></image>
				<view class="fui-btn__top fui-flex__center">加入会员 <text class="fui-pl">享受权益</text></view>
				<view class="fui-inner__box">
					<view class="fui-intro__text">组件数：<text>120</text>+ /永久使用 </view>
					<fui-button radius="100rpx" background="linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)"
						borderColor="rgba(0,0,0,0)" border-width="0" @click="purchase">
						<!-- #ifdef MP-TOUTIAO || MP-BAIDU || MP-QQ -->
						{{status==1?'立即开通':'获取组件'}}
						<!-- #endif -->
						<!-- #ifndef MP-TOUTIAO || MP-BAIDU || MP-QQ  -->
						立即开通
						<!-- #endif -->
					</fui-button>
					<view class="fui-menu__box">
						<view class="fui-menu__item" v-for="(item,index) in menus" :key="index" @tap="href(index)">
							<image :src="`/static/images/member/icon_${item.icon}_3x.png`"></image>
							<view class="fui-title">{{item.title}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<fui-animation :duration="500" :animationType="['fade']" :styles="styles" :show="show" @click="handleClick">
			<view class="fui-ani__box">
				<!-- @tap.stop="" 阻止关闭-->
				<image class="fui-hd__img" src="/static/images/member/light/img_layer_3x.png" mode="widthFix"></image>
				<view class="fui-flex__center fui-flex__column">
					<view class="fui-ani__title">开通会员</view>
					<view class="fui-desc">会员开通请前往 First UI官网(<text>firstui.cn</text>)，在官网购买开通会员后，前往个人中心订单页即可下载会员源码。
					</view>
					<fui-button btn-size="medium" radius="100rpx"
						background="linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)" borderColor="rgba(0,0,0,0)"
						border-width="0" @click="getLink">复制官网链接</fui-button>
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
				resUrl:this.fui.resUrl(),
				menus: [{
					icon: 'vip',
					title: 'VIP的优势？'
				}, {
					icon: 'difference',
					title: '商用版的区别？'
				}, {
					icon: 'date',
					title: 'VIP的有效期？'
				}],
				show: false,
				styles: {
					position: 'fixed',
					bottom: 0,
					top: 0,
					left: 0,
					right: 0,
					/* #ifndef APP-NVUE */
					display: 'flex',
					/* #endif */
					'justify-content': 'center',
					'align-items': 'center',
					backgroundColor: 'rgba(0,0,0,0.6)'
				}
			}
		},
		computed: mapState(['status']),
		methods: {
			href(index) {
				let title = [
					'会员除了获取商业版组件源码外与非会员有什么其他优势？',
					'开源版与商业版有什么区别?',
					'会员的有效期是多久?'
				][index];
				let idx = [10, 9, 14][index];
				this.fui.href(`../qa/qa?index=${idx}&title=${title}`)
			},
			purchase(mask) {
				// #ifdef MP-TOUTIAO || MP-BAIDU || MP-QQ
				if (this.status == 0) {
					this.fui.toast('功能完善中~')
				} else {
					setTimeout(() => {
						this.show = true;
					}, 80);
				}
				// #endif

				// #ifndef MP-TOUTIAO || MP-BAIDU || MP-QQ
				setTimeout(() => {
					this.show = true;
				}, 80);
				// #endif
			},
			handleClick() {
				this.show = false;
			},
			getLink(e) {
				$fui.getClipboardData('https://www.firstui.cn/', res => {
					this.fui.toast('链接复制成功');
					this.show = false;
				}, e);
			}
		}
	}
</script>

<style>
	page {
		background-color: #181818;
	}
	.fui-banner__box{
		width: 100%;
		height: 638rpx;
	}

	.fui-banner__img {
		width: 100%;
		height: 638rpx;
		display: block;
	}

	.fui-content__box {
		position: relative;
		height: 760rpx;
	}

	.fui-bg__img {
		width: 100%;
		height: 760rpx;
		display: block;
	}

	.fui-inner__box {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		padding: 68rpx 64rpx 0;
		box-sizing: border-box;
	}

	.fui-btn__top {
		width: 416rpx;
		height: 84rpx;
		background: #222222;
		box-shadow: 0 4rpx 8rpx 0 rgba(17, 17, 17, 0.8);
		border-radius: 42rpx;
		color: #7F6232;
		position: absolute;
		z-index: 10;
		top: -16rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.fui-pl {
		padding-left: 24rpx;
	}

	.fui-intro__text {
		color: #fff;
		font-size: 28rpx;
		font-weight: 600;
		text-align: center;
		padding-top: 64rpx;
		padding-bottom: 32rpx;
	}

	.fui-intro__text text {
		color: #E3BF82;
		font-size: 64rpx;
		padding-right: 8rpx;
		/* line-height: 64rpx; */
		font-style: italic;
	}

	.fui-menu__box {
		display: flex;
		align-items: center;
		padding-top: 96rpx;

	}

	.fui-menu__item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-menu__item image {
		width: 96rpx;
		height: 96rpx;
	}

	.fui-title {
		font-size: 24rpx;
		color: #D1D1D1;
		padding-top: 16rpx;
		white-space: nowrap;
	}

	.fui-ani__box {
		width: 686rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		padding-bottom: 64rpx;
	}

	.fui-hd__img {
		width: 100%;
		height: 204rpx;
		display: block;
	}

	.fui-ani__title {
		font-size: 36rpx;
		font-weight: 600;
		padding: 54rpx 0 32rpx;
		text-align: center;
	}

	.fui-desc {
		padding: 0 54rpx 82rpx;
		font-size: 24rpx;
		line-height: 48rpx;
		font-weight: 400;
		color: #333333;
		box-sizing: border-box;
	}

	.fui-desc text {
		color: #FF2B2B;
	}
</style>