// 本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号：   1    23  4  00 0 0  4853 19 959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import App from './App'
import fui from './common/fui-app'
import http from './components/firstui/fui-request'
import fuiConfig from './components/firstui/fui-config'
import store from './store'

//初始化请求配置项
http.create({
	host: 'https://ffa.firstui.cn',
	header: {
		// 'content-type': 'application/x-www-form-urlencoded'
	}
})
//请求拦截
http.interceptors.request.use(config => {
	//请求之前可在请求头中加入token等信息
	let token = uni.getStorageSync('firstui_token') || 'testToken';
	if (config.header) {
		config.header['Authorization'] = token
	} else {
		config.header = {
			'Authorization': token
		}
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	//TODO
	return response
}, (err) => {
	//错误响应：断网、错误域名等
	return Promise.reject(err)
})

//全局组件配置
uni.$fui = fuiConfig
//兼容nvue
uni.fui = fui

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.fui = fui
Vue.prototype.http = http

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
	app.config.globalProperties.http = http;
	return {
		Vuex,
		app
	}
}
// #endif