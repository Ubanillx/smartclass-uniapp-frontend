<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：  123       400  00 48531  99 5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Validator<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Validator 表单验证，提供了常用的表单校验方法（完整内容请查看文档），支持传入自定义校验方法。</view>
		</view>
		<view class="fui-page__bd">
			<fui-input required label="姓名" borderTop placeholder="请输入姓名" v-model="formData.name"></fui-input>
			<fui-input required label="手机号" placeholder="请输入手机号码" v-model="formData.mobile"></fui-input>
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
			<view class="fui-btn__box">
				<fui-button text="Submit" bold @click="submit"></fui-button>
			</view>
		</view>
	</view>
</template>

<script>
	import form from '@/components/firstui/fui-validator/fui-validator'
	//自定义校验方法
	function checkWxNo(value) {
		return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
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
		validator: [{
			msg: "微信号不正确！请输入6~20位以字母开头，字母、数字、减号、下划线组合的微信号",
			method: checkWxNo
		}]
	}];
	export default {
		data() {
			return {
				formData: {
					name: '',
					mobile: '',
					password: '',
					confirmPwd: '',
					age: '',
					idCard: '',
					email: '',
					url: '',
					amount: '',
					wechatNo: ''
				}
			}
		},
		methods: {
			submit() {
				console.log(this.formData)
				let res = form.validator(this.formData, rules);
				console.log(res)
				if (res.isPassed) {
					this.fui.toast('校验通过！')
				} else {
					this.fui.toast(res.errorMsg)
				}
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

	.fui-btn__box {
		width: 100%;
		padding: 64rpx 32rpx;
		box-sizing: border-box;
	}
</style>