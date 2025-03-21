<template>
	<!--本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号：1 234  0  00 048   5     31995 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
	<view class="fui-parse__group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "fui-parse-group",
		emits: ['atap', 'preview'],
		provide() {
			return {
				parsegroup: this
			}
		},
		props: {
			imgPreview: {
				type: Boolean,
				default: true
			},
			thBgcolor: {
				type: Boolean,
				default: true
			}
		},
		data() {
			const pageNodeKey = `fui_parse_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				pageNodeKey
			}
		},
		methods: {
			onATap(href) {
				this.$emit('atap', href)
			},
			previewImage(src, imageUrls) {
				this.$emit('preview', {
					src,
					imageUrls
				})
			}
		},
	}
</script>

<style scoped>
	.fui-parse__group {
		width: 100%;
	}
</style>