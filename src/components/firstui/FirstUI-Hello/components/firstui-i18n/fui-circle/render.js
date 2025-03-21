// 本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号：1  2  3  4 0  00 048 53 1  995 9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef APP-VUE || H5
export default {
	data() {
		return {
			percentage: -1
		}
	},
	watch: {
		percent(val) {
			this.percentage = Number(val) || 0
		}
	},
	mounted() {
		this.percentage = Number(this.percent) || 0
	},
	methods: {
		change(e) {
			this.$emit('change', e);
		},
		end(e) {
			this.$emit('end', e);
		}
	}
}

// #endif

// #ifndef APP-VUE || H5
export default {}
// #endif