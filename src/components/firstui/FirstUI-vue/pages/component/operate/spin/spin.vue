<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号： 123 4000    0 4     8 5319 9 5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Spin <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Spin 旋转动画。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-grid>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>旋转</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<view class="fui-loading"></view>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<view class="fui-loading2"></view>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<fui-icon name="loading" color="#FFB703"></fui-icon>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<fui-icon name="moments" color="#09BE4F"></fui-icon>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<fui-icon name="aftersale" color="#FF2B2B"></fui-icon>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<image src="/static/images/component/loading_gray.png" class="fui-icon__img"></image>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAM1BMVEUAAACPj4+IiIiIiIiIiIiIiIiKioqHh4eHh4eHh4eHh4eIiIiIiIiJiYmIiIiJiYmIiIi8awvKAAAAEHRSTlMAEEDw4NAwwKAgYICQULBwL0wVnQAAAmpJREFUWMPtmOmO4yAQhLlvMO//tDuyjfAaCEcj7UqTT5o/iafSVLcLY/TldyHID8fPH94oir2TLD6QyugdxVoeazAnYPUaFtsws+yNVjR+htolcWz/luHyhL7F55XNQ0Narx+L8TY8bSGTXsiYUB5V8A+zHJ4rud+p3GI+PiwqCXv0Ec+T42awf3L8+iMtzwwp36UEPHR1SIYPKueS+xxJe1CZiYkooNmTvjLHUzHDR7TVgnI2UXR9k/OhQHslieKCcb87reRnB5fCzMeTVp5cUbeY8O6arEYknYs60CJXK21zOvot7DSK4lrR51eA7dQ1y1bFF9MT2Chb358DsLHeLJeKhpZdDgkDFp1jQtRGXiEYOtZU1PLdUt7OFT84gnJUHNE5XOCO2PLnCALDzl21HD2Yam4ZRU9kER8Qs/V7IQ7BIWVqp10TTCFN0gdgwvumJmkcwWDFgigsQtv4Sv8baZ2lt5Pn+n+Wfm+CMsUsHFIJQ7VH+l2hSXsaHFUbEb1l2GRt5zFb/FC1nSfskGam+lSP4cqmks10jyOc1fditiGMXD1G4DekTH5sf14gkTeD1QOdbrRLXodGAKb1hC7gh5nmvzvgI0NoHyswA1niP7WKQE4dmtYHDH4MwzxS3T2MmCWje5OL2aK26j9EC7qkrVIk97XtrM+RYzSoHSZmUCTlLoLNvTs+aFLug+XEu2Mt59boRl9+4vk7gbD79fXnii2dsS6Xc4lb3fx5lX1bfKfPD1HJInetS64lJQnxhkrryV2+INbxeCHXN1PtaGxClUYgvGJ1XY82IA7Fn7IyFO7DIDcYfflN/AFNdjdeDj7M+wAAAABJRU5ErkJggg==" class="fui-icon__img"></image>
						</fui-spin>
					</view>
				</fui-grid-item>
				<fui-grid-item :highlight="false">
					<view class="fui-load__item">
						<fui-spin>
							<image src="/static/images/common/img_logo.png" class="fui-icon__img fui-circle"></image>
						</fui-spin>
					</view>
				</fui-grid-item>
			</fui-grid>

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

	.fui-loading {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2px solid #465CFF;
		border-left-color: transparent;
	}
	.fui-loading2{
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		border: 2px solid #ccc;
		border-left-color: #888;
	}
	.fui-icon__img{
		width: 60rpx;
		height: 60rpx;
		display: block;
	}
	.fui-circle{
		border-radius: 50%;
	}
</style>