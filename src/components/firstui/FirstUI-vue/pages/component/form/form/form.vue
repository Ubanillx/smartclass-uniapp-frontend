<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：1  2 34 00 0 0  4 8   53199     59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Form<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Form 表单校验，提供了常用的表单校验方法（完整内容请查看文档），支持传入自定义校验方法。</view>
		</view>
		<view class="fui-page__bd">
			<!--H5端如果使用了默认导航栏，则top值不可设置为0，默认为44px-->
			<fui-form ref="form" top="0">
				<view class="fui-section__title">输入框</view>
				<fui-input required label="姓名" borderTop placeholder="请输入姓名" v-model="formData.name"></fui-input>
				<fui-input required label="手机号" placeholder="请输入手机号码" v-model="formData.mobile"></fui-input>
				<fui-input required :padding="['20rpx','32rpx']" label="验证码" placeholder="请输入手机验证码"
					v-model="formData.code">
					<fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="获取验证码"></fui-button>
				</fui-input>
				<fui-input required label="密码" password placeholder="请输入密码" v-model="formData.password">
				</fui-input>
				<fui-input required label="确认密码" password placeholder="请再次输入密码" v-model="formData.confirmPwd">
				</fui-input>
				<fui-input label="年龄" placeholder="请输入年龄" v-model="formData.age"></fui-input>
				<fui-input label="身份证" placeholder="请输入身份证号码" v-model="formData.idCard"></fui-input>
				<fui-input label="邮箱" placeholder="请输入邮箱" v-model="formData.email"></fui-input>
				<fui-input label="个人主页" placeholder="请输入个人主页" v-model="formData.url">
				</fui-input>
				<fui-input label="商品金额" placeholder="请输入商品金额" v-model="formData.amount">
				</fui-input>
				<fui-input label="微信号" :bottomLeft="0" placeholder="自定义校验，6至20位，字母，数字..." v-model="formData.wechatNo">
				</fui-input>
				<view class="fui-section__title">文本域</view>
				<fui-textarea isCounter placeholder="请输入内容" v-model="formData.text"></fui-textarea>
				<view class="fui-section__title">单选列表项</view>
				<fui-radio-group v-model="formData.ageRange">
					<fui-label v-for="(item,index) in radioItems" :key="index">
						<fui-list-cell>
							<view class="fui-list__cell">
								<text>{{item.name}}</text>
								<fui-radio isCheckMark checkMarkColor="#465CFF" :scaleRatio="1.3"
									:checked="item.checked" :value="item.value">
								</fui-radio>
							</view>
						</fui-list-cell>
					</fui-label>
				</fui-radio-group>
				<view class="fui-section__title">复选列表项</view>
				<fui-checkbox-group @change="checkboxChange">
					<fui-label v-for="(item,index) in checkboxItems" :key="index">
						<fui-list-cell>
							<view class="fui-align__center">
								<fui-checkbox :checked="item.checked" :value="item.value">
								</fui-checkbox>
								<text class="fui-text">{{item.name}}</text>
							</view>
						</fui-list-cell>
					</fui-label>
				</fui-checkbox-group>
				<view class="fui-section__title">开关</view>
				<fui-list-cell :highlight="false">
					<view class="fui-list__cell">
						<text>标题文字</text>
						<fui-switch :scaleRatio="0.8" @change="switchChange"></fui-switch>
					</view>
				</fui-list-cell>
				<view class="fui-section__title">选择</view>
				<fui-list-cell arrow @click="areaPicker">
					<view class="fui-list__cell">
						<text>地区/国家</text>
						<fui-input text-align="right" :padding="[0]" :borderBottom="false" backgroundColor="transparent" disabled
							:value="formData.area"></fui-input>
					</view>
				</fui-list-cell>
				<fui-list-cell arrow @click="datePicker">
					<view class="fui-list__cell">
						<text>日期时间</text>
						<fui-input placeholder="请选择" text-align="right" :padding="[0]" :borderBottom="false"
							backgroundColor="transparent" disabled :value="formData.dateTime"></fui-input>
					</view>
				</fui-list-cell>
				<view class="fui-section__title">评分</view>
				<fui-list-cell :highlight="false">
					<fui-rate @change="rateChange"></fui-rate>
				</fui-list-cell>
				<view class="fui-section__title">上传图片</view>
				<fui-list-cell :padding="['32rpx','32rpx','12rpx','32rpx']" :highlight="false">
					<fui-upload :max="2" immediate :url="uploadUrl" ref="upload" @success="success"
						@complete="complete">
					</fui-upload>
				</fui-list-cell>
				<view class="fui-clause--cell fui-clause--wrap">
					<fui-label>
						<view class="fui-clause--cell">
							<fui-checkbox :scaleRatio="0.8" @change="agreeChange"></fui-checkbox>
							<text class="fui-clause--text">阅读并同意</text>
						</view>
					</fui-label>
					<text class="fui-color__link">《FirstUI 相关条款》</text>
				</view>
				<view class="fui-btn__box">
					<fui-button text="Submit" bold @click="submit"></fui-button>
				</view>
			</fui-form>
		</view>
		<fui-picker :options="areaOptions" :show="show" @change="change" @cancel="areaCancel"></fui-picker>
		<fui-date-picker :type="5" :show="dateShow" @change="dateChange" @cancel="dateCancel">
		</fui-date-picker>
	</view>
</template>

<script>
	//微信号自定义校验方法
	function checkWxNo(value) {
		return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
	}
	//勾选协议校验
	function checkAgree(agree) {
		return agree
	}
	const rules = [{
		name: "name",
		rule: ["required", "isChinese", "minLength:2", "maxLength:6"],
		msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
	}, {
		name: "mobile",
		rule: ["required", "isMobile"],
		msg: ["请输入手机号", "请输入正确的手机号"]
	}, {
		name: "code",
		rule: ["required"],
		msg: ["请输入验证码"]
	}, {
		name: "password",
		rule: ["required", "isEnAndNo"],
		msg: ["请输入密码", "密码为4~30位数字和字母组合"]
	}, {
		name: "confirmPwd",
		rule: ["required", "isSame:password"],
		msg: ["请输入确认密码", "两次输入的密码不一致"]
	}, {
		name: "age",
		rule: ["isNumber", "range:[1,149]"],
		msg: ["请输入正确的年龄", "请输入正确的年龄范围：1~149"]
	}, {
		name: "idCard",
		rule: ["isIdCard"],
		msg: ["请输入正确的身份证号码"]
	}, {
		name: "email",
		rule: ["isEmail"],
		msg: ["请输入正确的邮箱"]
	}, {
		name: "url",
		rule: ["isUrl"],
		msg: ["请输入正确的URL地址"]
	}, {
		name: "amount",
		rule: ["isAmount"],
		msg: ["请输入正确的金额，允许保留两位小数"]
	}, {
		name: "wechatNo",
		//如果必填项，需配置必填校验
		// rule: ["required"],
		// msg: ["请输入微信号"],
		validator: [{
			msg: "微信号不正确！请输入6~20位以字母开头，字母、数字、减号、下划线组合的微信号",
			method: checkWxNo
		}]
	}, {
		name: "agree",
		validator: [{
			msg: "请勾选并同意《FirstUI 相关条款》",
			method: checkAgree
		}]
	}];
	export default {
		data() {
			return {
				formData: {
					name: '',
					mobile: '',
					code: '',
					password: '',
					confirmPwd: '',
					age: '',
					idCard: '',
					email: '',
					url: '',
					amount: '',
					wechatNo: '',
					text: '',
					ageRange: '1',
					motion: '1',
					switchRes: false,
					area: '',
					dateTime: '',
					score: 0,
					img: '',
					agree: false
				},
				radioItems: [{
						name: '18~28岁',
						value: '1',
						checked: true
					},
					{
						name: '29~40岁',
						value: '2',
						checked: false
					}
				],
				checkboxItems: [{
					name: '篮球',
					value: '1',
					checked: true
				}, {
					name: '乒乓球',
					value: '2',
					checked: false
				}],
				areaOptions: ['中国', '美国', '俄罗斯', '日本'],
				show: false,
				dateShow: false,
				uploadUrl: 'https://ffa.firstui.cn/api/example/upload-file'
			}
		},
		methods: {
			submit() {
				console.log(this.formData)
				this.$refs.form.validator(this.formData, rules).then(res => {
					console.log(res)
					if (res.isPassed) {
						this.fui.toast('校验通过！')
					}
				}).catch(err => {
					console.log(err)
				})
			},
			checkboxChange(e) {
				console.log(e)
				this.$set(this.formData, 'motion', e.detail.value.join(','))
			},
			switchChange(e) {
				console.log(e.detail)
				this.$set(this.formData, 'switchRes', e.detail.value)
			},
			areaPicker() {
				this.show = true
			},
			change(e) {
				console.log(e)
				this.$set(this.formData, 'area', e.value)
				this.areaCancel()
			},
			areaCancel() {
				this.show = false
			},
			datePicker() {
				this.dateShow = true
			},
			dateChange(e) {
				console.log(e)
				this.$set(this.formData, 'dateTime', e.result)
				this.dateCancel()
			},
			dateCancel() {
				this.dateShow = false
			},
			//评分
			rateChange(e) {
				console.log(e)
				this.$set(this.formData, 'score', e.score)
			},
			//图片上传，具体使用请查看上传组件
			success(e) {
				console.log(e)
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				if (res.data.url) {
					this.$refs.upload.result(res.data.url, e.index)
				}
			},
			complete(e) {
				if (e.status === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					console.log(e.urls)
					this.$set(this.formData, 'img', e.urls.join(','))
				}
			},
			agreeChange(e) {
				console.log(e)
				this.$set(this.formData, 'agree', e.checked)
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
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

	.fui-list__cell {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fui-text {
		font-size: 30rpx;
		padding-left: 16rpx;
	}

	.fui-section__title:not(:first-child) {
		margin-top: 64rpx;
	}

	.fui-clause--cell {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
	}

	.fui-clause--wrap {
		width: 100%;
		margin-top: 64rpx;
	}

	.fui-clause--text {
		padding-left: 16rpx;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-color__link {
		color: var(--fui-color-link);
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.fui-color__link:active {
		opacity: .5;
	}

	.fui-btn__box {
		width: 100%;
		padding: 64rpx 32rpx;
		box-sizing: border-box;
	}
</style>