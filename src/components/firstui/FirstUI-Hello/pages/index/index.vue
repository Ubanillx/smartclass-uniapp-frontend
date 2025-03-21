<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：1  234  0    00   0 48 53  1  9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<image src="/static/images/logo.png" class="fui-logo"></image>
		<view class="fui-text">Hello FirstUI ！</view>
        <!-- <fui-icon custom-prefix="fui-custom-icon" name="icon-fabulous"></fui-icon> -->
		<view class="fui-btn__box">
			<fui-button :text="isLogin?'退出登录':'登录'" @click="btnLogin"></fui-button>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		//登录状态
		computed: mapState(['isLogin']),
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations(['login', 'logout']),
			btnLogin() {
				if (!this.isLogin) {
					//请求接口
					//....
					let token = 'testToken';
					//保存登录信息，修改状态
					this.login({
						token
					});
					this.fui.toast('登录成功！')
				} else {
					//退出登录
					this.logout()
					this.fui.toast('退出登录成功！')
				}
			}
		}
	}
</script>

<style>
	.fui-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 32rpx;
		box-sizing: border-box;
	}

	.fui-logo {
		width: 200rpx;
		height: 200rpx;
		border-radius: 24rpx;
		margin: 96rpx 0 32rpx;
	}

	.fui-text {
		font-size: 40rpx;
		text-align: center;
		padding-bottom: 64rpx;
	}
	.fui-btn__box{
		width: 100%;
	}
</style>