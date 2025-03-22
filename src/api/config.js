/**
 * API地址配置文件
 */

// 基础URL，使用提供的API地址
const BASE_URL = 'http://10.0.124.181:12345/api';

// API接口地址
const API = {
  // 用户相关
  USER: {
    LOGIN: '/user/login', // 登录
    REGISTER: '/user/register', // 用户名注册
    PHONE_REGISTER: '/user/register/phone', // 手机号注册
    FORGET_PASSWORD: '/user/forget-password', // 忘记密码
    GET_PROFILE: '/user/current', // 获取当前登录用户信息
    UPDATE_PROFILE: '/user/update', // 更新用户信息
    LOGOUT: '/user/logout', // 退出登录
  },
  
  // 课程相关
  COURSE: {
    LIST: '/course/list', // 课程列表
    DETAIL: '/course/get', // 课程详情
    RECOMMEND: '/course/recommend', // 推荐课程
  },
  
  // 验证码相关
  VERIFY: {
    SEND_SMS: '/sms/send', // 发送短信验证码
  }
};

// API响应码
const CODE = {
  SUCCESS: 0, // 成功
  ERROR: 50000, // 一般错误
  UNAUTHORIZED: 40100, // 未授权
};

export default {
  BASE_URL,
  API,
  CODE
}; 