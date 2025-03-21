<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID： 40 3 4，营业执照号：1    2  340000   485 3   199  5  9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">FormItem<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">FormItem 表单项，主要用于表单组件相关布局使用，可结合fui-form组件做表单校验。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-form error-position="1" ref="form" top="0" :model="formData" :show="false">
				<fui-form-item label="活动名称">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入活动名称"></fui-input>
				</fui-form-item>
				<fui-form-item label="手机号码">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入手机号码"></fui-input>
				</fui-form-item>
				<fui-form-item label="即时配送">
					<fui-switch :scaleRatio="0.9"></fui-switch>
				</fui-form-item>
				<fui-form-item label="活动性质">
					<fui-checkbox-group>
						<fui-label inline>
							<fui-checkbox value="1"></fui-checkbox>
							<fui-text :size="28" text="地推活动" :padding="['0','30rpx','0','16rpx']"></fui-text>
						</fui-label>
						<fui-label inline>
							<fui-checkbox value="2"></fui-checkbox>
							<fui-text :size="28" text="美食活动" :padding="['0','16rpx']"></fui-text>
						</fui-label>
					</fui-checkbox-group>
				</fui-form-item>
				<fui-form-item label="特殊资源">
					<fui-radio-group>
						<fui-label>
							<fui-radio value="1"></fui-radio>
							<fui-text :size="28" text="线上品牌方赞助" :padding="['0','30rpx','0','16rpx']"></fui-text>
						</fui-label>
						<fui-label :margin="['32rpx','0','0']">
							<fui-radio value="2"></fui-radio>
							<fui-text :size="28" text="线下场地免费" :padding="['0','16rpx']"></fui-text>
						</fui-label>
					</fui-radio-group>
				</fui-form-item>
				<fui-form-item label="评分">
					<fui-rate></fui-rate>
				</fui-form-item>
				<fui-form-item label="上传图片" :padding="['28rpx','32rpx','8rpx']">
					<fui-upload></fui-upload>
				</fui-form-item>
				<view class="fui-section__title">必填星号【提示居左对齐】</view>
				<fui-form-item label="姓名" asterisk prop="name" error-align="left">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入姓名"
						v-model="formData.name"></fui-input>
				</fui-form-item>
				<fui-form-item label="手机号码" asterisk prop="mobile" error-align="left">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入手机号码"
						v-model="formData.mobile"></fui-input>
				</fui-form-item>
				<view class="fui-section__title">星号居右【提示居中对齐】</view>
				<fui-form-item asterisk-position="right" label="身份证" asterisk prop="idCard">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入身份证"
						v-model="formData.idCard"></fui-input>
				</fui-form-item>
				<fui-form-item asterisk-position="right" label="电子邮箱" asterisk prop="email">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入电子邮箱"
						v-model="formData.email"></fui-input>
				</fui-form-item>
				<view class="fui-section__title">label右对齐【提示居右对齐】</view>
				<fui-form-item label-align="right" asterisk-position="right" label="活动名称" asterisk prop="activityName"
					error-align="right">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入活动名称"
						v-model="formData.activityName"></fui-input>
				</fui-form-item>
				<fui-form-item label-align="right" asterisk-position="right" label="主办方" asterisk prop="organizer"
					error-align="right">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入主办方"
						v-model="formData.organizer"></fui-input>
				</fui-form-item>
				<view class="fui-section__title">选择</view>
				<fui-form-item label="活动时间" arrow highlight @click="onTap(1)">
					<fui-input :borderBottom="false" :padding="[0]" :disabled="true" placeholder="请选择时间"
						backgroundColor="transparent"></fui-input>
				</fui-form-item>
				<fui-form-item label="地区" arrow highlight @click="onTap(2)">
					<fui-input :borderBottom="false" :padding="[0]" placeholder="请选择地区" :disabled="true"
						backgroundColor="transparent"></fui-input>
				</fui-form-item>
				<view class="fui-section__title">上下排列</view>
				<fui-form-item asterisk label="详细描述" :bottomBorder="false" prop="descr" error-align="left">
					<template v-slot:vertical>
						<fui-textarea maxlength="-1" :padding="['0','32rpx','32rpx']" :border-bottom="false" :border-top="false"
							placeholder="请输入详细描述..." v-model="formData.descr"></fui-textarea>
					</template>
				</fui-form-item>

				<view class="fui-section__title">其他</view>
				<fui-form-item label="是否推送">
					<template v-slot:right>
						<fui-switch></fui-switch>
					</template>
				</fui-form-item>
				<fui-form-item label="体重">
					<fui-input type="digit" :borderBottom="false" :padding="['0','16rpx']" placeholder="请输入体重"
						text-align="right">
					</fui-input>
					<template v-slot:right>
						<fui-text text="kg"></fui-text>
					</template>
				</fui-form-item>
				<fui-form-item label="验证码">
					<fui-input :borderBottom="false" :padding="['0']" placeholder="请输入验证码" maxlength="6"></fui-input>
					<template v-slot:right>
						<fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="获取验证码"></fui-button>
					</template>
				</fui-form-item>
				<view class="fui-btn__box">
					<fui-button text="Submit" bold @click="submit"></fui-button>
				</view>
			</fui-form>
		</view>
	</view>
</template>

<script>
	/*
	  结合表单校验显示错误信息需要注意：
	  1、fui-form-item 组件 必须设置prop属性
	  2、fui-form 组件必须设置 model属性，且show属性必须设为false
	  3、form 组件validator方法第三个参数必须传true
	*/
	const rules = [{
		name: "name",
		rule: ["required", "isChinese", "minLength:2", "maxLength:6"],
		msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
	}, {
		name: "mobile",
		rule: ["required", "isMobile"],
		msg: ["请输入手机号", "请输入正确的手机号"]
	}, {
		name: "idCard",
		rule: ["required", "isIdCard"],
		msg: ["请输入身份证号码", "请输入正确的身份证号码"]
	}, {
		name: "email",
		rule: ["required", "isEmail"],
		msg: ["请输入电子邮箱", "请输入正确的邮箱"]
	}, {
		name: "activityName",
		rule: ["required"],
		msg: ["请输入活动名称"]
	}, {
		name: "organizer",
		rule: ["required"],
		msg: ["请输入主办方"]
	}, {
		name: "descr",
		rule: ["required"],
		msg: ["请输入详细描述"]
	}];
	export default {
		data() {
			return {
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
				//示例仅对必填项做了数据收集，仅为了演示表单校验效果
				formData: {
					name: '',
					mobile: '',
					idCard: '',
					email: '',
					activityName: '',
					organizer: '',
					descr: ''
				}

			}
		},
		onReady() {
			//开启实时校验【当前item项内容改变即校验】
			// this.$refs.form && this.$refs.form.switchRealTimeValidator(true, rules)
		},
		methods: {
			submit() {
				console.log(this.formData)
				//注意：validator方法第三个参数必须传true
				this.$refs.form.validator(this.formData, rules, true).then(res => {
					console.log(res)
					if (res.isPassed) {
						this.fui.toast('校验通过！')
					} else {
						this.fui.toast('向上滑动页面查看错误提示！')
					}
				}).catch(err => {
					console.log(err)
				})
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onTap(e) {
				console.log(e === 1 ? '选择时间' : '选择地区')
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-wrap {
		padding-bottom: 96rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-btn__box {
		width: 100%;
		padding: 64rpx 32rpx 0;
		box-sizing: border-box;
	}
</style>