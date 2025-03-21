<!--本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号：12   3     4 000048 5   3  19 959 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//App2.6.5+ 仅iOS
			// #ifdef APP-PLUS
			let theme = uni.getStorageSync('fui_theme')
			theme = theme || plus.navigator.getUIStyle();
			this.setThemeStyle(theme)
			// #endif

			// #ifdef APP-PLUS || MP-WEIXIN
			uni.onThemeChange(function(res) {
				this.setThemeStyle(res.theme)
			});
			// #endif

			// #ifndef APP-PLUS || H5
			if (uni.canIUse('getUpdateManager')) {
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate((res) => {
					if (res.hasUpdate) {
						updateManager.onUpdateReady(() => {
							this.fui.modal('更新提示', '发现新版本，为了获得更好的体验，建议立即更新', (res) => {
								updateManager.applyUpdate();
							});
						});
						updateManager.onUpdateFailed(() => {
							this.fui.modal('更新失败', '新版本更新失败，请稍后再试或删除小程序重新搜索打开',
								(res) => {});
						});
					}
				});
			}
			// #endif
		},
		onShow: function() {
			// console.log(uni.$fui.toast('提示~'))
		},
		onHide: function() {
			console.log('App Hide')
		},
		onThemeChange: function({
			theme
		}) {
			this.setThemeStyle(theme)
		},
		methods: {
			...mapMutations(['setTheme']),
			setThemeStyle(theme) {
				// #ifdef APP-PLUS
				if (theme === 'dark') {
					plus.nativeUI.setUIStyle('dark');
				} else {
					plus.nativeUI.setUIStyle('light');
				}
				// #endif
				this.setTheme(theme)
				uni.setStorageSync('fui_theme', theme)
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/fui-app.css';
	@import './components/firstui/fui-theme/fui-theme.css';
</style>