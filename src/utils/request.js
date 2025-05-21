/**
 * 网络请求工具类
 */
import ajax from 'uni-ajax'
import { API_BASE_URL } from './env'

// 创建请求实例
const instance = ajax.create({
  // 使用环境变量中的基础URL
  baseURL: API_BASE_URL,
  timeout: 10000,
  header: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送前对请求数据进行处理
    const token = uni.getStorageSync('token')
    if (token) {
      config.header['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log('请求错误拦截', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    const res = response.data
    
    // 这里可以根据后端接口规范统一处理响应
    if (res.code !== 0 && res.code !== 200) {
      // 处理各种错误状态码
      uni.showToast({
        title: res.message || '请求失败',
        icon: 'none',
        duration: 2000
      })
      
      // 401: 未登录或token过期
      if (res.code === 401) {
        // 可以在这里处理登出逻辑
        setTimeout(() => {
          uni.navigateTo({
            url: '/pages/user/Login'
          })
        }, 1500)
      }
      
      return Promise.reject(res)
    }
    
    return res
  },
  error => {
    // 对响应错误做些什么
    console.log('响应错误拦截', error)
    const errMsg = error.message || '请求失败，请稍后重试'
    uni.showToast({
      title: errMsg,
      icon: 'none',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

/**
 * 封装GET请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function get(url, params = {}, options = {}) {
  return instance.get(url, {
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
  return instance.post(url, data, options);
}

/**
 * 封装PUT请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function put(url, data = {}, options = {}) {
  return instance.put(url, data, options);
}

/**
 * 封装DELETE请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} options 可选配置项
 * @returns {Promise}
 */
export function del(url, params = {}, options = {}) {
  return instance.delete(url, {
    params,
    ...options
  });
}

export default instance 