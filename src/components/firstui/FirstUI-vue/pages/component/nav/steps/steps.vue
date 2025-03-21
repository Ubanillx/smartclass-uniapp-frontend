<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4   034，营业执照号：1 2  340  0 0 0 48 5  3 1  9959   Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Steps <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Steps 步骤条，显示一个任务的进度或者引导用户完成某个复杂任务。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-steps :items="items" :current="current"></fui-steps>
			<view class="fui-section__title">线条贯穿圆点</view>
			<fui-steps :items="items" :current="current" :line-through="true"></fui-steps>
			<view class="fui-section__title">数字节点/线条加粗</view>
			<fui-steps :items="items2" :current="current" activeColor="#FFB703" lineBold></fui-steps>
			<view class="fui-section__title">不显示对号标识</view>
			<fui-steps :items="items2" :current="current" :isMark="false"></fui-steps>
			<view class="fui-section__title">带描述</view>
			<fui-steps :items="items3" :current="current"></fui-steps>
			<view class="fui-section__title">当前步骤失败</view>
			<fui-steps :items="items3" :current="current3" processStatus="fail" process-color="#FF2B2B" lineBold></fui-steps>
			<view class="fui-section__title">进行中（direction=row 有效）</view>
			<fui-steps :items="items3" :current="current" processStatus="wait" process-color="#FFB703" isWait
				lineBold></fui-steps>
			<view class="fui-section__title">当前步骤失败</view>
			<fui-steps :items="items3" :current="current3" processStatus="fail" active-color="#09BE4F"
				process-color="#FF2B2B" isWait lineBold></fui-steps>
			<view class="fui-section__title">自定义图标</view>
			<fui-steps :items="items4" :current="current" radius="24rpx"></fui-steps>
			<view class="fui-section__title">纵向展示</view>
			<fui-steps :items="items2" :current="current" direction="column" :padding="['0','32rpx']"></fui-steps>

			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="Next step" bold :margin="['24rpx']"
					@click="stepChange"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				current2: 1,
				current3:2,
				items: [{
					title: '注册'
				}, {
					title: '激活邮箱'
				}, {
					title: '注册完成'
				}],
				items2: [{
					title: '注册',
					text: '1'
				}, {
					title: '激活邮箱',
					text: '2'
				}, {
					title: '注册完成',
					text: '3'
				}],
				items3: [{
					title: 'STEP1',
					descr: '步骤一',
					text: 'F'
				}, {
					title: 'STEP2',
					descr: '步骤二',
					text: 'S'
				}, {
					title: 'STEP3',
					descr: '步骤三',
					text: 'T'
				}],
				items4: [{
					title: 'STEP1',
					descr: '步骤一',
					src: '/static/images/common/logo.png'
				}, {
					title: 'STEP2',
					descr: '步骤二',
					src: '/static/images/common/img_logo.png'
				}, {
					title: 'STEP3',
					descr: '步骤三',
					src: '/static/images/common/logo.png'
				}]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			stepChange() {
				//实际开发需根据步骤数据长度-1来得出最后一步（从 0 开始记数），此处为演示
				if (this.current === 2) {
					this.current = 0
				} else {
					this.current++
				}
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

	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 48rpx;
	}
</style>