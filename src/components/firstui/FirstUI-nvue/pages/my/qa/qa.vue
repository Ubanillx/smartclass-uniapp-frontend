<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4 03  4，营业执照号：   123   400 0 04 85   3 19  9 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-wrap">
		<fui-list-cell bottom-right="32" :highlight="false">
			<text class="fui-title">{{title}}</text>
		</fui-list-cell>
		<view class="fui-content">
			<view class="fui-p" v-for="(item,index) in answers" :key="index">
				<text class="fui-sign" v-if="answers.length>1">-</text>
				<text>{{item}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				answerList: {
					0: ['可以，组件支持按需引入，详见 First UI 文档 “快速上手”，使用组件前请先仔细阅读组件文档。'],
					1: ['参考uni-app官方组件：cover-view/cover-image', '建议使用 v-if 控制显隐'],
					2: ['First UI 分为 “开源版” 和 “商业版”，所有示例或文档中加 “V” 的表示需要开通相应版本会员才可获取源码使用，会员内容不会发布到任何公开渠道。'],
					3: ['支持。组件支持哪些平台请参考组件具体文档，每个组件文档中都有支持平台的说明。'],
					4: ['支持情况同uni-app官方一致，具体请前往uni-app官网查看。'],
					5: ['如果控制台有提示方法未定义，请先查看示例的引用，如检查 main.js 中是否有引用，然后检查一下自己的代码是否复制完整。'],
					6: ['将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。'],
					7: ['原因一可能是调试基础库版本较低，请先检查小程序开发工具调试基础库的版本是否为比较新的版本，如果不是，切换至比较新的版本重新编译',
						'原因二可能是未配置appid，请配置小程序的appid'
					],
					8: ['TypeError: Cannot read property ‘mark’ of undefined...',
						'出现此错误一般是程序中ES7语法导致编译错误，解决办法：尝试将开发工具 “详情->本地设置->增强编译” 勾选上，重新编译。'
					],
					9: ['更多的功能可供使用，详细区别请参考 First UI 文档 “FAQ”。'],
					10: ['除了获取商业版组件源码外，会员还可以获取示例项目中布局版块的源码', '物料商城中产品可享受折扣(特殊产品除外)', '可进会员交流群。', '可在社区中发帖提问'],
					11: ['购买会员后，首次下载源码时会生成一份商业授权书，授权之前需要确定被授权方信息为个人还是企业', '个人会员 商业版源码仅可用于自己独立运营的项目或学习使用，不可用于所在公司的任何项目',
						'企业会员 商业版源码仅可用于该企业内部任何自营项目'
					],
					12: ['可商用(仅用于自己的项目或公司自营项目)，也可学习使用', '使用时无需署名', '不限制你自己或公司的项目数量',
						'不能将 First UI 平台的内容提供给他人或其他机构，企业下载', '不能转让，出售这份源码(包含用 First UI 开发的任何项目)，双方必须同为VIP用户才可进行',
						'不能用于开源项目，不能发布到任何公开渠道(包含用 First UI 开发的任何项目)',
						'不能用于外包项目(包含用 First UI 开发的任何项目)，双方必须同为VIP用户才可进行', '最终解释权归 First UI 所有，侵权必究'
					],
					13: ['开通以及查看会员价格请前往 First UI官网 （firstui.cn)，随着功能的增加与完善，会员价格会相应调整。', '在官网购买开通会员后，个人中心订单页即可下载会员源码'],
					14: ['永久性会员，付费某一版本，后续升级更新该版本不需要再支付费用。'],
					15: ['可以。会员用户可在会员中心给第三方用户代购商业授权，没有次数限制', '需填写第三方用户基本信息，走完支付流程后会生成代购商业源码下载地址',
						'首次下载代购商业源码时会生成一份代购商业授权书'
					],
					16: ['可以。购买所需版本会员或者其他产品后可联系 FirstUI客服 开具电子发票。']
				},
				answers: []
			}
		},
		onLoad(e) {
			const index = Number(e.index) || 0;
			this.title = e.title || '我只想用某个组件可以吗？';
			this.answers = this.answerList[index]
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
		font-weight: normal;
	}

	.fui-title {
		font-weight: 600;
	}

	.fui-content {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.fui-p {
		width: 100%;
		padding-bottom: 32rpx;
		word-break: break-all;
		display: flex;
		line-height: 44rpx;
	}

	.fui-sign {
		padding-right: 8rpx;
	}
</style>