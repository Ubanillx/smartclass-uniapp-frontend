<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：     12 34  0000485  319    95   9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Input</view>
			<view class="fui-page__desc">Input 输入框，该组件是对原生input组件的增强，内置了常用布局样式，同时包含 input 所有功能。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基本使用</view>
			<fui-input type="digit" borderTop placeholder="请输入用户名" @input="input"></fui-input>
			<fui-input :bottomLeft="0" placeholder="请输入手机号码" maxlength="11"></fui-input>
			<view class="fui-section__title">带标题</view>
			<fui-input label="标题" borderTop placeholder="这是一个输入框"></fui-input>
			<fui-input label="标题文字" :bottomLeft="0" placeholder="请输入文本"></fui-input>
			<view class="fui-section__title">密码框</view>
			<fui-input borderTop :padding="['20rpx','32rpx']" placeholder="请输入密码" :password="password" @input="input">
				<fui-icon :name="password?'invisible':'visible'" color="#B2B2B2" :size="50" @click="change"></fui-icon>
			</fui-input>
			<view class="fui-section__title">带清除按钮、双向绑定</view>
			<fui-input label="标题" :bottomLeft="0" borderTop placeholder="请输入文本" clearable v-model="text"></fui-input>
			<view class="fui-section__title">显示边框/设置圆角</view>
			<view class="fui-page__spacing">
				<fui-input label="标题" inputBorder placeholder="请输入文本"></fui-input>
				<fui-input :marginTop="24" isFillet inputBorder placeholder="请输入文本"></fui-input>
				<fui-input :marginTop="24" :radius="24" border-color="#FFB703" inputBorder
					placeholder="请输入文本"></fui-input>
			</view>
			<view class="fui-section__title">必填项</view>
			<fui-input required label="标题" borderTop placeholder="请输入文本"></fui-input>
			<fui-input required label="标题文字" :bottomLeft="0" placeholder="请输入文本内容"></fui-input>
			<view class="fui-section__title">输入文本右对齐</view>
			<fui-input text-align="right" label="身高" borderTop placeholder="请输入身高">
				<text>cm</text>
			</fui-input>
			<fui-input text-align="right" label="体重" :bottomLeft="0" placeholder="请输入体重">
				<text>kg</text>
			</fui-input>
			<view class="fui-section__title">禁用状态</view>
			<fui-input label="标题" :bottomLeft="0" borderTop placeholder="这是一个被禁用的输入框" disabled></fui-input>
			<view class="fui-section__title">右侧加按钮</view>
			<fui-input :padding="['20rpx','32rpx']" label="验证码" :bottomLeft="0" placeholder="请输入手机验证码">
				<fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="获取验证码"></fui-button>
			</fui-input>
			<view class="fui-section__title">左侧加图标</view>
			<fui-input placeholder="请输入手机号">
				<template v-slot:left>
					<view class="fui-left__icon">
						<fui-icon name="mobile" color="#333" :size="48"></fui-icon>
					</view>
				</template>
			</fui-input>
			<fui-input :padding="['20rpx','32rpx']" placeholder="请输入验证码" :bottomLeft="0">
				<template v-slot:left>
					<view class="fui-left__icon">
						<fui-icon name="captcha" :size="48"></fui-icon>
					</view>
				</template>
				<fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="获取验证码"></fui-button>
			</fui-input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '',
				password: true
			}
		},
		watch: {
			text(val) {
				console.log(val)
			}
		},
		methods: {
			input(e) {
				console.log(e)
			},
			change() {
				this.password = !this.password
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-left__icon {
		padding-right: 24rpx;
	}
</style>