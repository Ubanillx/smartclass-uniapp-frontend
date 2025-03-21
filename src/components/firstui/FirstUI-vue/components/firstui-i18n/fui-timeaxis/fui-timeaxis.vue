<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：12   3   4   00 0048531 9 95 9    Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-timeaxis__wrap"
		:style="{paddingTop:padding[0] || 0,paddingRight:padding[1]||0,paddingBottom:padding[2] || padding[0]||0,paddingLeft:padding[3] || padding[1]||0,background:background}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "fui-timeaxis",
		props: {
			padding: {
				type: Array,
				default () {
					return []
				}
			},
			background: {
				type: String,
				default: 'transparent'
			},
			leftWidth: {
				type: [Number, String],
				default: 0
			},
			width: {
				type: [Number, String],
				default: 48
			},
			// #ifdef APP-NVUE
			lineWidth: {
				type: [Number, String],
				default: 0.5
			},
			// #endif
			// #ifndef APP-NVUE
			lineWidth: {
				type: [Number, String],
				default: 1
			}
			// #endif

		},
		provide() {
			return {
				timeaxis: this
			}
		},
		created() {
			this.children = []
		},
		watch: {
			width(val) {
				this.children.forEach(item => {
					item.width = val
				})
			},
			lineWidth(val) {
				this.children.forEach(item => {
					item.lineWidth = val
				})
			},
			leftWidth(val) {
				this.children.forEach(item => {
					item.leftWidth = val
				})
			}
		}
	}
</script>

<style scoped>
	.fui-timeaxis__wrap {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */
	}
</style>