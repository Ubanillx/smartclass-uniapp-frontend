// 本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：12   34  00  004     8 53  19 9 59Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const fui = {
	toast: function(text) {
		text && uni.showToast({
			title: text,
			icon: 'none',
			duration: 2000
		})
	},
	modal: function(title, content, callback, showCancel, confirmColor, confirmText) {
		uni.showModal({
			title: title,
			content: content,
			showCancel: showCancel || false,
			// #ifndef MP-TOUTIAO
			cancelColor: "#7F7F7F",
			confirmColor: confirmColor || "#465CFF",
			// #endif
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			},
			fail(err){
				console.log(err)
			}
		})
	},
	href(url, isMain) {
		if (isMain) {
			uni.switchTab({
				url: url
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	},
	jsonp: function(url, callback, callbackname) {
		// #ifdef H5
		window[callbackname] = callback;
		let script = document.createElement("script");
		script.src = url;
		script.type = "text/javascript";
		document.head.appendChild(script);
		document.head.removeChild(script);
		// #endif
	},
	resUrl:function(){
		return 'https://res.firstui.cn/static/images'
	}
}
export default fui