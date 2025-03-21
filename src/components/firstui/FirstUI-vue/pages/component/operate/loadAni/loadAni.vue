<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：  1  2 3   4 00 0 048 53 19  95 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">LoadAni <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">LoadAni 加载动画，该组件是对Loading组件的扩展。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用、改变颜色</view>
			<fui-grid>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani color="#FFB703"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani color="-webkit-linear-gradient(top,#FF416C,#6831FF)"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="2"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="2" color="#6831FF"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="2" color="-webkit-linear-gradient(top,#FF416C,#FFB703)"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="3"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="3" color="#09BE4F"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="3" color="#B2B2B2"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="4"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="4" color="#FFB703"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="4" color="#B2B2B2"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="5"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="5" color="#7F7F7F"></fui-load-ani>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-load-ani type="5" color="-webkit-linear-gradient(top,#FF416C,#6831FF)"></fui-load-ani>
					</view>
				</fui-grid-item>
			</fui-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}

	.fui-load__item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>