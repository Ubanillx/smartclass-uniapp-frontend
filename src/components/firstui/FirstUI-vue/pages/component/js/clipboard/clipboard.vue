<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：  1 2 3  400004  8  53   19 95 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Clipboard<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Clipboard 复制文本，主要针对H5做兼容。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="www.firstui.cn" bold :margin="['24rpx']"
				@click="copy"></fui-button>
			<fui-button type="gray" btn-size="medium" text="doc.firstui.cn" bold
				@click="copyText($event,'doc.firstui.cn')">
			</fui-button>
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

			}
		},
		computed: mapState(['status']),
		methods: {
			copy(e) {
				const text = "www.firstui.cn"
				this.copyText(e, text, '官网地址复制成功')
			},
			copyText(e, text, tips) {
				// #ifdef MP-BAIDU || MP-TOUTIAO
				if (this.status == 0) {
					this.fui.toast('功能完善中~');
					return;
				}
				// #endif
				$fui.getClipboardData(text, res => {
					if (res) {
						this.fui.toast(tips || '文档地址复制成功');
					}
				}, e);
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
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