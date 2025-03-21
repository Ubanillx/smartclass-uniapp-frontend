<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0 3 4，营业执照号： 1  23400 0048 5   31     9   95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Calendar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Calendar 日历，用于选择日期区间。支持单选、多选、区间选择。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">单个日期选择/按年加载,滑动切换月份</view>
			<fui-calendar @change="change"></fui-calendar>
			<view class="fui-section__title">多个日期选择/显示农历</view>
			<fui-calendar type="2" :isMultiple="false" showLunar @change="change1"></fui-calendar>
			<view class="fui-section__title">设置自定义描述/角标</view>
			<fui-calendar badgeColor="#09BE4F" :isMultiple="false" @change="change" @dateChange="dateChange"
				ref="calendarRef"></fui-calendar>
			<view class="fui-section__title">设置默认值/范围/仅展示不可选择</view>
			<fui-calendar type="2" :isMultiple="false" language="en" :value="value" disabled minDate="2021-01-01"
				maxDate="2023-12-31">
			</fui-calendar>
			<view class="fui-section__title">区间选择/底部弹出选择</view>
			<view class="fui-flex__center">
				<fui-button type="gray" btn-size="medium" text="日期区间选择" bold :margin="['48rpx','0','0']"
					@click="btnSelect"></fui-button>
			</view>
			<view class="fui-result">您的选择为：{{result}}</view>
			<fui-bottom-popup :show="show">
				<view class="fui-scroll__wrap">
					<view class="fui-calendar-title">请选择日期</view>
					<fui-calendar type="3" :isMultiple="false" showLunar showBtn @change="change2"></fui-calendar>
					<view class="fui-icon__close" @tap.stop="closePopup">
						<fui-icon name="close" :size="48"></fui-icon>
					</view>
				</view>
			</fui-bottom-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//默认值，多选
				value: ['2021-01-06', '2021-01-16', '2021-01-26', '2021-02-08', '2022-01-08', '2022-01-10', '2022-01-20'],
				//区间选择默认值设置
				// value2:['2021-12-06', '2021-12-31'],
				show: false,
				result: '',
				descrDate: ''
			}
		},
		onLoad() {
			uni.showLoading({
				title: '请稍候...'
			})

			setTimeout(() => {
				uni.hideLoading()
			}, 500)
		},
		onReady() {
			if (!this.$refs.calendarRef) return;
			//设置自定义描述数据
			this.$refs.calendarRef.setDescr(this.getDescr)
			//设置角标，返回数组中数据判定为true则显示角标，为false则不显示角标
			this.$refs.calendarRef.setBadge(this.getDescr)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e) {
				console.log(e)
				this.fui.toast(e.value)
			},
			change1(e) {
				console.log(e)
				this.fui.toast(e.value.join(','))
			},
			btnSelect() {
				this.show = true
			},
			closePopup() {
				this.show = false
			},
			change2(e) {
				this.result = JSON.stringify(e)
				this.closePopup()
			},
			//返回Promise的获取描述数据的函数
			getDescr(year, month, days) {
				//year, month, days 为 组件返回数据
				console.log(year, month, days)
				this.descrDate = `${year}-${month}`
				return new Promise((resolve, reject) => {
					//模拟获取到数据且处理后返回
					setTimeout(() => {
						//返回数据需要处理成和 days格式一致,没有描述则使用空字符串（描述文本不可过长）
						if (true) {
							//成功后处理描述数据，数据顺序需要与days中日期保持一致
							const descrArr = []
							days.forEach((item, index) => {
								//此处仅为模拟判断，具体逻辑需自行结合数据判断
								let descr = ''
								if (month % 2 === 0) {
									descr = (index + 1) % 2 === 0 ? '有号' : ''
								} else {
									descr = index % 2 === 0 ? '有号' : ''
								}
								descrArr.push(descr)
							})
							resolve(descrArr)
						} else {
							//失败
							reject(false)
						}
					}, 200)
				})
			},
			dateChange(e) {
				console.log(e)
				//设置自定义描述数据。页面过于复杂时，可能还未获取到组件实例，可在onReady中初始执行一次
				const date = `${e.year}-${e.month}`
				if (this.descrDate === date) return;
				this.$refs.calendarRef && this.$refs.calendarRef.setDescr(this.getDescr)
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
		box-sizing: border-box;
	}

	.fui-result {
		width: 100%;
		padding: 64rpx 32rpx 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-weight: normal;
		word-break: break-all;
	}

	.fui-scroll__wrap {
		padding-top: 30rpx;
		position: relative;
	}

	.fui-calendar-title {
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		padding-bottom: 24rpx;
	}

	.fui-icon__close {
		position: absolute;
		top: 24rpx;
		right: 24rpx;
	}
</style>