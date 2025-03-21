<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号： 1 234 00   0  0  48 5 3  1 9  959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Sticky <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Sticky 吸顶容器，用于将标题栏在滚动时固定到页面顶部。</view>
		</view>
		<view class="fui-page__bd">
			<fui-sticky range>
				<view class="fui-title">小鸡 🐤</view>
				<template v-slot:content>
					<fui-list-cell>你看哪里有个小鸡呦</fui-list-cell>
					<fui-list-cell>你看哪里有个小鸡呦</fui-list-cell>
					<fui-list-cell>你看那里他有小鸡哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>
			<fui-sticky range>
				<view class="fui-title">母鸡 🐔</view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有母鸡哟</fui-list-cell>
					<fui-list-cell>你看那里又有母鸡哟</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">公鸡 🐓</view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有公鸡哟</fui-list-cell>
					<fui-list-cell>你看那里又有公鸡哟</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">火鸡 🦃 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有火鸡哟</fui-list-cell>
					<fui-list-cell>你看那里又有火鸡哟</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">鸽子 🕊 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有鸽子哟</fui-list-cell>
					<fui-list-cell>你看那里又有鸽子哟</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">猫咪 🐱 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有猫咪哟</fui-list-cell>
					<fui-list-cell>你看那里又有猫咪哟</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">小狗 🐶 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有小狗哟</fui-list-cell>
					<fui-list-cell>你看那里又有小狗哟</fui-list-cell>
					<fui-list-cell>小狗旺旺旺旺旺-wang-</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">山羊 🐐 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有山羊哟</fui-list-cell>
					<fui-list-cell>你看那里又有山羊哟</fui-list-cell>
					<fui-list-cell>山羊咩-mie-</fui-list-cell>
					<fui-list-cell>小狗旺旺旺旺旺-wang-</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">绵羊 🐑 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有绵羊哟</fui-list-cell>
					<fui-list-cell>你看那里又有绵羊哟</fui-list-cell>
					<fui-list-cell>绵羊咇-bie</fui-list-cell>
					<fui-list-cell>山羊咩-mie</fui-list-cell>
					<fui-list-cell>小狗旺旺旺旺旺-wang-</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">母牛 🐮 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有母牛哟</fui-list-cell>
					<fui-list-cell>你看那里又有母牛哟</fui-list-cell>
					<fui-list-cell>母牛萌-meng-</fui-list-cell>
					<fui-list-cell>绵羊咇-bie</fui-list-cell>
					<fui-list-cell>山羊咩-mie</fui-list-cell>
					<fui-list-cell>小狗旺旺旺旺旺-wang-</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">公牛 🐂 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有公牛哟</fui-list-cell>
					<fui-list-cell>你看那里又有公牛哟</fui-list-cell>
					<fui-list-cell>公牛呣-mu-</fui-list-cell>
					<fui-list-cell>母牛萌-meng-</fui-list-cell>
					<fui-list-cell>绵羊咇-bie</fui-list-cell>
					<fui-list-cell>山羊咩-mie</fui-list-cell>
					<fui-list-cell>小狗旺旺旺旺旺-wang-</fui-list-cell>
					<fui-list-cell>猫咪喵喵喵喵喵-miao-</fui-list-cell>
					<fui-list-cell>鸽子图噜噜噜噜-lu-</fui-list-cell>
					<fui-list-cell>火鸡嘟嘟嘟嘟嘟-du-</fui-list-cell>
					<fui-list-cell>公鸡喔喔喔喔喔-wo-</fui-list-cell>
					<fui-list-cell>母鸡咯咯咯咯咯咯-go-</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
					<fui-list-cell>小鸡哔哔哔哔-bi-哟</fui-list-cell>
				</template>
			</fui-sticky>

			<fui-sticky range>
				<view class="fui-title">拖拉机 🚜 </view>
				<template v-slot:content>
					<fui-list-cell>你看那里又有拖拉机哟</fui-list-cell>
					<fui-list-cell>你看那里又有拖拉机哟</fui-list-cell>
					<fui-list-cell>拖拉机嗡-weng-</fui-list-cell>
					<fui-list-cell>拖拉机嗡-weng-</fui-list-cell>
					<fui-list-cell>拖拉机嗡-weng-</fui-list-cell>
					<fui-list-cell>小鸡被撞 喔 啊喔</fui-list-cell>
				</template>
			</fui-sticky>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onReady() {
			 // || MP-BAIDU || MP-TOUTIAO || MP-QQ
			// #ifdef MP-WEIXIN || APP-PLUS
			const manager = uni.getBackgroundAudioManager();
			if (manager) {
				manager.title = '小鸡哔哔';
				manager.singer = '洛天依';
				manager.coverImgUrl =
					'https://res.firstui.cn/template/component/music/cover.jpeg';
				manager.src =
					'https://res.firstui.cn/template/component/music/chicken_beep.mp3';
			}
			// #endif
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	.fui-title {
		width: 100%;
		height: 72rpx;
		background: #e1e1e1;
		display: flex;
		align-items: center;
		padding: 0 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}
</style>