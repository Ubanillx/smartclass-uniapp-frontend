<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 403  4，营业执照号：  1 23 4 0      00 048   53  19959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Request<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Request 网络请求，支持Promise，可在发起请求和请求响应之前进行拦截，更多使用请参考文档。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" btn-size="medium" text="GET 返回全部数据" bold :margin="['24rpx']"
				@click="get(false)"></fui-button>
			<fui-button type="gray" btn-size="medium" text="GET 返回简洁数据" bold @click="get(true)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="GET 传参数{id}" bold :margin="['24rpx']"
				@click="get2">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="POST 返回全部数据" bold @click="post(false)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="POST 返回简洁数据" bold :margin="['24rpx']"
				@click="post(true)">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="自定义接口域名" bold @click="changeHost">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="合并多个请求" bold :margin="['24rpx']" @click="all">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="同步请求" bold @click="sync">
			</fui-button>
			<fui-button type="gray" btn-size="medium" text="使用request方法请求" bold :margin="['24rpx']"
				@click="request">
			</fui-button>
		</view>
	</view>
</template>

<script>
	//该组件已全局引入，请查看文档使用
	export default {
		data() {
			return {

			}
		},
		methods: {
			//brief 是否返回简洁数据
			get(brief) {
				this.http.get('/api/example/info', {
					brief: brief
				}).then(res => {
					console.log(res)
					if (brief) {
						if (res.succeeded) {
							this.fui.toast('请求成功！')
						}
					} else {
						const d = res.data;
						if (d.succeeded) {
							this.fui.toast('请求成功！')
						}
					}
				}).catch(e => {
					console.log(e)
				})
			},
			get2() {
				this.http.get('/api/example/info', {
					data: {
						id: 1
					}
				}).then(res => {
					console.log(res)
					const d = res.data;
					if (d.succeeded) {
						this.fui.toast('请求成功！')
					}
				}).catch(e => {
					console.log(e)
				})
			},
			//brief 是否返回简洁数据
			post(brief) {
				this.http.post('/api/example/info', {
					brief: brief,
					data: {
						Id: 2,
						Name: '张三'
					}
				}).then(res => {
					console.log(res)
					if (brief) {
						if (res.succeeded) {
							this.fui.toast('请求成功！')
						}
					} else {
						const d = res.data;
						if (d.succeeded) {
							this.fui.toast('请求成功！')
						}
					}
				}).catch(e => {
					console.log(e)
				})
			},
			changeHost() {
				this.http.get('/api/example/info', {
					//此处只是为了演示
					host: 'https://ffa.firstui.cn'
				}).then(res => {
					console.log(res)
					const d = res.data;
					if (d.succeeded) {
						this.fui.toast('请求成功！')
					}
				}).catch(e => {
					console.log(e)
				})
			},
			all() {
				//合并多个请求：都返回数据后再进行其他操作
				let func1 = this.http.get('/api/example/info')
				let func2 = this.http.get('/api/example/info', {
					data: {
						id: 3
					}
				})
				this.http.all([func1, func2]).then(res => {
					console.log(res)
					this.fui.toast('请求成功！')
				}).catch(e => {})
			},
			async sync() {
				console.log('同步请求start...')
				let res = await this.http.get('/api/example/info')
				console.log(res)
				console.log('同步请求end...')
				this.fui.toast('请求成功！')
			},
			request() {
				this.http.request({
					url: '/api/example/info',
					method: 'GET',
					data: {
						id: '100'
					}
				}).then(res => {
					console.log(res)
					const d = res.data;
					if (d.succeeded) {
						this.fui.toast('请求成功！')
					}
				}).catch(e => {})
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