<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 0  34，营业执照号：123 40  00  0 4 8     5 319   9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">UploadVideo <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">UploadVideo 视频上传，拍摄或从手机相册中选择视频进行上传。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">自动上传/设置边框</view>
			<fui-upload-video immediate border-color="#FFB703" border-sytle="dashed" :url="url" ref="upload"
				@success="success" @error="error" @complete="complete">
			</fui-upload-video>
			<view class="fui-section__title">手动上传/自定义加号图标/背景</view>
			<view class="fui-btn__box">
				<fui-button type="gray" btn-size="medium" text="开始上传" bold @click="startUpload">
				</fui-button>
			</view>
			<fui-upload-video :width="340" :max="2" background="#333" addColor="#d1d1d1" :fileList="fileList" :url="url"
				ref="upload2" @success="success2" @error="error2" @complete="complete2">
				<fui-icon name="plussign" color="#d1d1d1" :size="80"></fui-icon>
			</fui-upload-video>
			<view class="fui-section__title">传入文件上传函数，返回一个promise</view>
			<fui-upload-video call-upload ref="uploader" @reupload="reUpload" @complete="complete3"></fui-upload-video>
			<view class="fui-btn__box">
				<fui-button :margin="['48rpx','0']" type="gray" btn-size="medium" text="调用upload方法上传" bold
					@click="callUpload">
				</fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上传接口地址
				url: 'https://ffa.firstui.cn/api/example/upload-file',
				//上传状态，用于保存或其他操作时做判断
				status: '',
				//上传的视频地址列表
				urls: [],
				//上传状态，用于保存或其他操作时做判断
				status2: '',
				//初始化已上传的视频列表
				fileList: ['https://ffa.firstui.cn/uploadfile/220831211231709.mp4'],
				//上传的视频地址列表
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
					//data.url为上传成功后返回的视频地址
					//e.index为视频索引值
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
					//已上传完成的视频列表 this.urls
					console.log(this.urls)
				}
			},
			success2(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的视频地址
					//e.index为视频索引值
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
					//已上传完成的视频列表 this.urls
					console.log(this.urls)
				}
			},
			startUpload() {
				if (!this.status2 || this.status2 !== 'preupload') {
					this.fui.toast('请选择需要上传的视频！')
					return
				}
				//开始上传
				this.$refs.upload2.start()
			},
			/*
			   以下为调用upload方法手动上传的所有方法内容
			*/
			//调用upload方法上传时传入的回调函数
			uploadFile(filePath, index) {
				//filePath：上传的临时文件路径；index：位置索引值（更新上传进度使用）
				console.log('upload filePath', filePath)

				// 文件上传的函数，返回一个promise
				//上传成功后返回上传后的视频地址，上传失败则返回false即可
				return new Promise((resolve, reject) => {
					//调用api上传，所有需要参数自行补充
					const uploadTask = uni.uploadFile({
						url: this.url,
						name: 'file',
						// header: {},
						// formData: {},
						filePath: filePath,
						success: (res) => {
							//以下成功或失败逻辑根据接口自行处理
							const data = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
							if (data.statusCode === 200) {
								//返回上传成功后的视频（约定返回格式，不可修改）
								resolve(data.data.url)
							} else {
								//上传失败（约定返回格式，不可修改）
								reject(false)
							}
						},
						fail: (res) => {
							//上传失败（约定返回格式，不可修改）
							reject(false)
						}
					})
					//更新上传进度
					uploadTask.onProgressUpdate((res) => {
						//调用方法更新组件内当前视频上传进度
						this.$refs.uploader.setProgress(res.progress, index)
					});
				})
			},
			callUpload() {
				//注意：此方法上传函数需要页面自行实现，如上 uploadFile（当组件内部方法无法满足时使用该方法自行去实现上传）
				if (!this.status3 || this.status3 !== 'preupload') {
					this.fui.toast('请选择需要上传的视频！')
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
					//已上传完成的视频列表 this.urls3
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

	.fui-page__bd {
		padding-left: 24rpx;
		box-sizing: border-box;
	}
</style>