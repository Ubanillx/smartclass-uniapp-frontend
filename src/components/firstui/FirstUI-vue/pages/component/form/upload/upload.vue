<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：    1 234 0000 48   53 1   9 959  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Upload <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Upload 图片上传，用于选择或拍照进行上传图片。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">自动上传</view>
			<fui-upload :max="5" immediate :url="url" ref="upload" @success="success" @error="error"
				@complete="complete" @preview="preview">
			</fui-upload>
			<view class="fui-section__title">手动上传/自定义加号图标/背景/圆角</view>
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="开始上传" bold @click="startUpload">
				</fui-button>
			</view>
			<fui-upload background="#333" radius="20" :fileList="fileList" :url="url" ref="upload2" @success="success2"
				@error="error2" @complete="complete2" @preview="preview">
				<fui-icon name="plussign" color="#d1d1d1"></fui-icon>
			</fui-upload>
			<view class="fui-section__title">传入文件上传函数，返回一个promise</view>

			<fui-upload :max="3" call-upload border-color="#FFB703" border-sytle="dashed" ref="uploader"
				@reupload="reUpload" @complete="complete3" @preview="preview">
			</fui-upload>
			<view class="fui-btn__box">
				<fui-button :margin="['48rpx','0']" type="gray" btn-size="medium" text="调用upload方法上传" bold
					@click="callUpload">
				</fui-button>
			</view>
		</view>
		<!--previewImage：百度小程序只支持预览网络路径图片，这里为了做兼容-->
		<!-- #ifdef MP-BAIDU -->
		<fui-gallery :show="show" :current="current" :urls="preUrls" @hide="hideGallery"></fui-gallery>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// #ifdef MP-BAIDU
				//预览图片列表
				preUrls: [],
				show: false,
				current: 0,
				// #endif
				//上传接口地址
				url: 'https://ffa.firstui.cn/api/example/upload-file',
				//上传状态，用于保存或其他操作时做判断
				status: '',
				//上传的图片地址列表
				urls: [],
				//上传状态，用于保存或其他操作时做判断
				status2: '',
				//初始化已上传的图片列表
				fileList: ['https://res.firstui.cn/static/images/common/logo.png'],
				//上传的图片地址列表
				urls2: [],
				//调用upload 方法上传
				status3: '',
				urls3: []
			}
		},
		onLoad() {
			this.urls2 = this.fileList
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			success(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的图片地址
					//e.index为图片索引值
					this.$refs.upload.result(res.data.url, e.index)
				}
			},
			error(e) {
				this.status = e.status
			},
			complete(e) {
				this.status = e.status
				this.urls = e.urls
				if (this.status === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的图片列表 this.urls
					console.log(this.urls)
				}
			},
			preview(e) {
				// #ifdef MP-BAIDU
				this.preUrls = e.urls;
				this.current = e.index;
				setTimeout(() => {
					this.show = true;
				}, 50)
				// #endif
			},
			hideGallery() {
				this.show = false;
			},
			success2(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的图片地址
					//e.index为图片索引值
					this.$refs.upload2.result(res.data.url, e.index)
				}
			},
			error2(e) {
				this.status2 = e.status
				uni.showModal({
					content: JSON.stringify(e)
				})
			},
			complete2(e) {
				this.status2 = e.status
				this.urls2 = e.urls
				if (this.status2 === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的图片列表 this.urls2
					console.log(this.urls2)
				}
			},
			startUpload() {
				if (!this.status2 || this.status2 !== 'preupload') {
					this.fui.toast('请选择需要上传的图片！')
					return
				}
				//开始上传
				this.$refs.upload2.start()
			},
			/*
			   以下为调用upload方法手动上传的所有方法内容
			*/
			//调用upload方法上传时传入的回调函数
			uploadFile(file) {
				//上传的文件信息
				console.log('upload file', file)
				// 文件上传的函数，返回一个promise
				//上传成功后返回上传后的图片地址，上传失败则返回false即可
				return new Promise((resolve, reject) => {
					//调用api上传，所有需要参数自行补充
					uni.uploadFile({
						url: this.url,
						name: 'file',
						// header: {},
						// formData:{},
						filePath: file.path,
						success: (res) => {
							//以下成功或失败逻辑根据接口自行处理
							const data = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
							if (data.statusCode === 200) {
								//返回上传成功后的图片
								resolve(data.data.url)
							} else {
								//上传失败
								reject(false)
							}
						},
						fail: (err) => {
							//上传失败
							reject(false)
						}
					})
				})
			},
			callUpload() {
				//注意：此方法上传函数需要页面自行实现，如上 uploadFile（当组件内部方法无法满足时使用该方法自行去实现上传）
				if (!this.status3 || this.status3 !== 'preupload') {
					this.fui.toast('请选择需要上传的图片！')
					return
				}
				//调用upload 方法上传，并传入函数，此时请勿传入index值
				this.$refs.uploader.upload(this.uploadFile)
			},
			//重新上传
			reUpload(e) {
				/*
				  callUpload 中上传失败时会出现重新上传按钮
				  点击重新上传按钮触发（仅call-upload 为true 时有效）
				*/
				//当前上传按钮索引值
				console.log(e.index)
				//调用upload 方法上传，并传入函数，且此时需要传入index值
				this.$refs.uploader.upload(this.uploadFile, e.index)
			},
			complete3(e) {
				console.log(e)
				this.status3 = e.status
				this.urls3 = e.urls
				if (this.status3 === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的图片列表 this.urls3
					// console.log(this.urls3)
				}
			}
		}
	}
</script>

<style>
	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 64rpx;
	}
</style>