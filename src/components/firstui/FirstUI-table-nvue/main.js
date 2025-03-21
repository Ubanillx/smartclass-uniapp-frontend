// 本文件由FirstUI授权予安徽理工大学（会员ID：4 03  4，营业执照号：12 3  400     0 04853   1 9 9 59  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。

import App from './App'
import fui from './common/fui-app'
import store from './store'



// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.fui = fui

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue';
/*
  在 Vue3 中，如果 nvue 使用了 Vuex 的相关 API，
  需要在 main.js 的 createApp 的返回值中 return 一下 Vuex
*/
import Vuex from "vuex";
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.fui = fui;
	return {
		Vuex,
		app
	}
}
// #endif