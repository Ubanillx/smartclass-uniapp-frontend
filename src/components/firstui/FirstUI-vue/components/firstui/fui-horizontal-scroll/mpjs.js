// 本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号：12  3 4      000  048 53  19 9 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifndef APP-PLUS || MP-WEIXIN || H5

export default {
	methods: {
		scrollHandler(event) {
			const detail = event.detail
			const scrollWidth = detail.scrollWidth
			const scrollLeft = detail.scrollLeft
			const width = this.width
			const scrollBarWidth = this.bgWidth
			const blockWidth = this.blockWidth
			const x = scrollLeft / (scrollWidth - width) * (scrollBarWidth - blockWidth)
			this.transform = `translate3d(${x}px,0,0)`
		},
		scrolltoupper(event) {
			this.scrollEvent('left')
			this.transform = 'translate3d(0,0,0)'
		},
		scrolltolower(event) {
			this.scrollEvent('right')
			const x = this.bgWidth - this.blockWidth
			this.transform = `translate3d(${x}px,0,0)`
		}
	}
}

// #endif

// #ifdef APP-PLUS|| MP-WEIXIN || H5
export default {}
// #endif