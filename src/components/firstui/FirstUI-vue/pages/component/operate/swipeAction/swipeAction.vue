<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号： 123 4    0   0 00485 3  199 59   Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SwipeAction <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SwipeAction 滑动菜单，用于滑动操作的组件。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-swipeaction-group>
				<!--循环中区分可传参索引值：onClick($event,index) ,也可使用param属性值-->
				<fui-swipe-action @click="onClick" @change="change">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">默认菜单按钮</fui-list-cell>
				</fui-swipe-action>
				<fui-swipe-action :buttons="buttons" @click="onClick" @change="change">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">自定义菜单按钮</fui-list-cell>
				</fui-swipe-action>
				<fui-swipe-action :buttons="buttons">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">插槽菜单</fui-list-cell>
					<template v-slot:buttons>
						<view class="fui-menu__box">
							<view class="fui-menu__btn">
								<fui-icon name="delete" :size="44"></fui-icon>
							</view>
						</view>
					</template>
				</fui-swipe-action>
			</fui-swipeaction-group>
			<view class="fui-section__title">禁止滑动</view>
			<fui-swipeaction-group>
				<fui-swipe-action disabled>
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">不可滑动</fui-list-cell>
				</fui-swipe-action>
			</fui-swipeaction-group>
			<view class="fui-section__title">默认打开</view>
			<fui-swipeaction-group>
				<fui-swipe-action :show="show">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">默认打开状态</fui-list-cell>
				</fui-swipe-action>
			</fui-swipeaction-group>
			<view class="fui-section__title">各菜单状态不关联</view>
			<fui-swipeaction-group>
				<fui-swipe-action :autoClose="false">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">左滑菜单</fui-list-cell>
				</fui-swipe-action>
				<fui-swipe-action :autoClose="false" :buttons="buttons">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false">自定义菜单按钮</fui-list-cell>
				</fui-swipe-action>
			</fui-swipeaction-group>
			<view class="fui-section__title">点击不关闭，结合提示操作</view>
			<fui-swipeaction-group>
				<fui-swipe-action :clickClose="false" :show="isShow" @change="stateChange" @click="buttonTap">
					<fui-list-cell :padding="['36rpx','32rpx']" :highlight="false"
						@click="onTap">点击菜单弹出提示信息</fui-list-cell>
				</fui-swipe-action>
			</fui-swipeaction-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				buttons: [{
					text: '标为未读',
					background: '#465CFF'
				}, {
					text: '删除',
					background: '#FF2B2B'
				}],
				isShow: false
			}
		},
		onLoad() {
			setTimeout(() => {
				this.show = true
			}, 500)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onClick(e) {
				console.log(e)
				this.fui.toast(e.item.text)
			},
			change(e) {
				console.log(e)
			},
			//点击不关闭，结合提示操作
			stateChange(e) {
				//同步打开状态【结合提示时必须同步】
				this.isShow = e.isOpen
			},
			onTap() {
				//列表点击事件，此处也可关闭菜单
				console.log('详情～')
				this.fui.toast('点击了～')
			},
			buttonTap(e) {
				//按钮点击事件
				console.log(e)
				this.fui.modal('提示', '确定要删除吗', (confirm) => {
					if (confirm) {
						this.fui.toast('删除～')

					} else {
						this.fui.toast('取消删除，关闭菜单～')
						//关闭菜单
						this.isShow = false
					}
				}, true)
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-menu__box {
		width: 160rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-menu__btn {
		width: 88rpx;
		height: 88rpx;
		background: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>