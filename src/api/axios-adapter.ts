import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
import { OpenAPI } from './generated/core/OpenAPI';

// 为小程序环境配置axios适配器
// @ts-ignore - 忽略类型错误，这是一个适配器的兼容性问题
axios.defaults.adapter = mpAdapter;

// 对FormData进行兼容性处理的类
class MiniProgramFormData {
  private data: Record<string, any> = {};

  append(key: string, value: any, _filename?: string) {
    this.data[key] = value;
  }

  // 用于兼容原始FormData的接口
  getHeaders() {
    return { 'Content-Type': 'multipart/form-data' };
  }

  // 返回数据对象供请求使用
  getData() {
    return this.data;
  }
}

// 在小程序环境中，全局添加FormData构造函数
try {
  if (typeof FormData === 'undefined') {
    // @ts-ignore - 为全局添加FormData构造函数
    global.FormData = MiniProgramFormData;
    console.log('FormData已模拟');
  }
} catch (error) {
  console.error('FormData模拟失败:', error);
}

// 配置API基础URL和认证信息
export function setupAPI(baseUrl: string, token?: string) {
  console.log('正在设置API:', baseUrl);
  
  try {
    OpenAPI.BASE = baseUrl;
    
    if (token) {
      OpenAPI.TOKEN = token;
    } else {
      // 从用户信息中获取token
      const userInfo = uni.getStorageSync('userInfo');
      if (userInfo && (userInfo.token || userInfo.userToken)) {
        OpenAPI.TOKEN = userInfo.token || userInfo.userToken;
      }
    }
    
    // 为小程序环境添加拦截器，处理请求和响应
    axios.interceptors.request.use(
      (config) => {
        // 处理FormData
        if (config.data instanceof MiniProgramFormData) {
          config.data = (config.data as MiniProgramFormData).getData();
        }
        
        // 添加token到请求头
        if (OpenAPI.TOKEN && config.headers) {
          config.headers['Authorization'] = `Bearer ${OpenAPI.TOKEN}`;
        }
        
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    // 响应拦截器
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // 处理常见的网络和权限错误
        if (!error.response) {
          uni.showToast({
            title: '网络连接失败',
            icon: 'none'
          });
        } else if (error.response.status === 401) {
          // 未授权，清除用户信息并重定向到登录页
          uni.removeStorageSync('userInfo');
          
          setTimeout(() => {
            uni.redirectTo({
              url: '/pages/user/Login'
            });
          }, 1500);
        }
        
        return Promise.reject(error);
      }
    );
    
    console.log('API设置完成');
  } catch (error) {
    console.error('API设置失败:', error);
  }
} 