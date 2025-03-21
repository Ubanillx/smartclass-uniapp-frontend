<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号：1 2 3  40    00048   531    9959  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap fui-page__bd">
		<fui-list-cell bottom-right="32" arrow v-for="(item,index) in logs" :key="index"
			@click="detail(item.date,item.version)">
			<view>
				<view class="fui-title">First UI {{item.version}} 主要更新</view>
				<view class="fui-date">{{item.date}}</view>
			</view>
		</fui-list-cell>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logs: [{
					date: '2024.06.11',
					version: 'V2.4.0'
				}, {
					date: '2024.02.19',
					version: 'V2.3.0'
				}, {
					date: '2023.11.09',
					version: 'V2.2.0'
				}, {
					date: '2023.10.18',
					version: 'V2.1.0'
				}, {
					date: '2023.07.17',
					version: 'V2.0.0'
				}, {
					date: '2023.06.25',
					version: 'V1.9.9'
				}, {
					date: '2023.05.29',
					version: 'V1.9.8'
				}, {
					date: '2023.05.04',
					version: 'V1.9.5'
				}, {
					date: '2023.04.04',
					version: 'V1.9.1'
				}, {
					date: '2023.03.17',
					version: 'V1.9.0'
				}, {
					date: '2023.01.31',
					version: 'V1.8.0'
				}, {
					date: '2022.09.28',
					version: 'V1.7.0'
				}, {
					date: '2022.06.26',
					version: 'V1.6.0'
				}, {
					date: '2022.05.18',
					version: 'V1.5.0'
				}, {
					date: '2022.03.16',
					version: 'V1.4.0'
				}, {
					date: '2021.12.31',
					version: 'V1.3.0'
				}, {
					date: '2021.11.22',
					version: 'V1.2.0'
				}, {
					date: '2021.09.07',
					version: 'V1.1.0'
				}, {
					date: '2021.08.02',
					version: 'V1.0.0'
				}]
			}
		},
		methods: {
			detail(date, version) {
				this.fui.href(`../log/log?date=${date}&version=${version}`)
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
		font-weight: normal;
		padding-bottom: 64rpx;
	}

	.fui-wrap {
		padding-top: 32rpx;
	}

	.fui-title {
		font-size: 28rpx;
		font-weight: 500;
	}

	.fui-date {
		font-size: 24rpx;
		color: #B2B2B2;
		padding-top: 8rpx;
	}
</style>