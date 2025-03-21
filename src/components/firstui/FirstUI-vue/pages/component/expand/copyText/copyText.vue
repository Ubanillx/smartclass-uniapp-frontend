<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号：1 2  34 0  00  048 531      9 959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">CopyText <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">CopyText 长按复制，用于复制关键文本信息，可扩展其他功能按钮。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">上方显示按钮</view>
			<view class="fui-copy__box">
				<fui-copy-text text="长按文本复制"></fui-copy-text>
			</view>
			<view class="fui-section__title">下方显示按钮</view>
			<view class="fui-copy__box">
				<fui-copy-text direction="bottom" text="长按文本复制" value="https://doc.firstui.cn" color="#465CFF"
					size="30"></fui-copy-text>
			</view>
			<view class="fui-section__title">左侧显示按钮</view>
			<view class="fui-copy__box">
				<fui-copy-text direction="left" text="长按文本复制" value="https://doc.firstui.cn" color="#465CFF" size="30">
				</fui-copy-text>
			</view>
			<view class="fui-section__title">右侧显示按钮</view>
			<view class="fui-copy__box">
				<fui-copy-text direction="right" text="长按文本复制" value="https://doc.firstui.cn" color="#465CFF" size="30">
				</fui-copy-text>
			</view>
			<view class="fui-section__title">扩展按钮</view>
			<view class="fui-copy__box">
				<fui-copy-text text="长按文本复制" value="https://doc.firstui.cn" color="#FFB703" size="30"
					:buttons="['回复','评论']" @click="btnClick"></fui-copy-text>
			</view>
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
			btnClick(e) {
				console.log(e)
				this.fui.toast(`您点击了【${e.text}】按钮`)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-copy__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>