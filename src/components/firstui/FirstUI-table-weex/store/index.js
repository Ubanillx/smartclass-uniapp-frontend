// 本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：1      2 3400004853 1     9 9 5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef MP
import http from '../common/fui-request'
// #endif
// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			// #endif

			// #ifdef VUE3
			import {
				createStore
			} from 'vuex'
			const store = createStore({
				// #endif
				state: {
					//是否登录
					isLogin: uni.getStorageSync("firstui_m_token") ? true : false
				},
				mutations: {
					//登录
					login(state, payload) {
						if (payload) {
							state.token = payload.token
							uni.setStorageSync('firstui_m_token',payload.token)
						}
						state.isLogin = true
					},
					//退出登录
					logout(state) {
						state.token = ""
						state.isLogin = false
						uni.removeStorageSync('firstui_m_token')
					}
				},
				actions: {

				}
			})

			export default store