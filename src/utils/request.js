/**
 * 网络请求工具类
 */
import axios from 'axios';
import apiConfig from '../api/config';

// 创建axios实例
const service = axios.create({
  baseURL: apiConfig.BASE_URL,
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送前做一些处理，例如添加token
    const token = uni.getStorageSync('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.error('请求错误：', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    
    // 根据自定义的错误码处理错误
    if (res.code !== 0) {
      // 处理特定错误码，例如未授权
      if (res.code === 40100 || res.code === 40101) {
        // 清除本地token
        uni.removeStorageSync('token');
        uni.removeStorageSync('userInfo');
        uni.removeStorageSync('isLoggedIn');
        
        // 跳转到登录页
        uni.reLaunch({
          url: '/pages/user/Login'
        });
      } else {
        // 其他错误码，显示错误信息
        uni.showToast({
          title: res.message || '请求失败',
          icon: 'none'
        });
      }
      
      return Promise.reject(new Error(res.message || '请求失败'));
    } else {
      return res;
    }
  },
  error => {
    console.error('响应错误：', error);
    
    // 处理网络错误
    let errorMessage = '网络错误，请稍后重试';
    
    // 尝试从错误对象中获取更详细的错误信息
    if (error.response) {
      // 服务器返回了错误状态码
      errorMessage = error.response.data?.message || `请求失败，状态码: ${error.response.status}`;
    } else if (error.request) {
      // 请求发送了但没有收到响应
      errorMessage = '服务器无响应，请检查网络连接';
    } else if (error.message) {
      // 请求配置错误
      errorMessage = error.message;
    }
    
    uni.showToast({
      title: errorMessage,
      icon: 'none'
    });
    
    return Promise.reject(error);
  }
);

/**
 * 封装GET请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function get(url, params = {}, options = {}) {
  return service.get(url, {
    params,
    ...options
  });
}

/**
 * 封装POST请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function post(url, data = {}, options = {}) {
  return service.post(url, data, options);
}

/**
 * 封装PUT请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function put(url, data = {}, options = {}) {
  return service.put(url, data, options);
}

/**
 * 封装DELETE请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function del(url, params = {}, options = {}) {
  return service.delete(url, {
    params,
    ...options
  });
}

export default service; 