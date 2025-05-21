import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import './api/polyfill'; // 先导入兼容性补丁
import './api/axios-adapter';  // 导入axios适配器
import { apiConfig } from './api/config'; // 导入API配置
import { setupAPI } from './api/axios-adapter'; // 直接导入setupAPI函数
import BaseLayout from '@/components/BaseLayout.vue'; // 导入BaseLayout组件

export function createApp() {
	const app = createSSRApp(App);
	
	// 全局注册BaseLayout组件
	app.component('base-layout', BaseLayout);
	
	// #ifdef MP-WEIXIN
	// 微信小程序特定配置
	console.log('当前运行在微信小程序环境');
	// 直接调用setupAPI，不使用动态导入
	setupAPI(apiConfig.baseUrl);
	console.log('API适配器已初始化');
	// #endif
	
	return {
		app,
	};
}
