<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  40 34，营业执照号：12 3     4 0000485 3    1     9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Toast</view>
			<view class="fui-page__desc">Toast 轻提示，一种轻量级反馈/提示，适合用于页面转场、数据交互的等场景中。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<fui-button type="gray" btn-size="medium" text="带图标提示" bold :margin="['24rpx']"
				@click="showToast(1)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="无图标提示" bold @click="showToast(2)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="自定义内容" :margin="['24rpx']" bold
				@click="showToast(3)">
			</fui-button>
		</view>
		<fui-toast ref="toast"></fui-toast>

		<!--自定义内容-->
		<fui-toast ref="toast2">
			<view class="fui-toast__custom">
				<fui-icon name="checkbox" color="#fff"></fui-icon>
				<text class="fui-toast__txt">操作成功</text>
			</view>
		</fui-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			showToast(type) {
				let options = {}
				if (type === 3) {
					this.$refs.toast2.show(options)
				} else {
					if (type === 1) {
						options.src = "/static/images/common/img_logo.png";
						options.text = 'First UI !';
					} else if (type === 2) {
						options.text = '请输入手机号';
					}

					this.$refs.toast.show(options)
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

	.fui-toast__custom {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-toast__txt {
		font-size: 32rpx;
		color: #FFFFFF;
		padding-top: 12rpx;
		display: block;
	}
</style>