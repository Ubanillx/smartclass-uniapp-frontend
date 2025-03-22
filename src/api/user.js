/**
 * 用户相关API
 */
import { post, get } from '../utils/request';
import apiConfig from './config';

/**
 * 用户登录
 * @param {object} data {username: 用户名, password: 密码}
 * @returns {Promise}
 */
export function login(data) {
  const params = {
    userAccount: data.username,
    userPassword: data.password
  };
  return post(apiConfig.API.USER.LOGIN, params);
}

/**
 * 用户注册
 * @param {object} data 注册信息
 * @returns {Promise}
 */
export function register(data) {
  if (data.type === 'username') {
    // 用户名注册
    const params = {
      userAccount: data.username,
      userPassword: data.password,
      checkPassword: data.confirmPassword || data.password, // 确认密码
      userName: data.nickname
    };
    return post(apiConfig.API.USER.REGISTER, params);
  } else if (data.type === 'phone') {
    // 手机号注册
    const params = {
      userPhone: data.phone,
      userPassword: data.password,
      checkPassword: data.confirmPassword || data.password, // 确认密码
      code: data.code
    };
    return post(apiConfig.API.USER.PHONE_REGISTER, params);
  }
  
  throw new Error('无效的注册类型');
}

/**
 * 发送短信验证码
 * @param {object} data {phone: 手机号}
 * @returns {Promise}
 */
export function sendSmsCode(data) {
  return post(apiConfig.API.VERIFY.SEND_SMS, {
    phone: data.phone
  });
}

/**
 * 忘记密码
 * @param {object} data {phone: 手机号, code: 验证码, password: 新密码}
 * @returns {Promise}
 */
export function forgetPassword(data) {
  return post(apiConfig.API.USER.FORGET_PASSWORD, {
    phone: data.phone,
    code: data.code,
    newPassword: data.password,
    checkPassword: data.confirmPassword || data.password
  });
}

/**
 * 获取用户信息
 * @returns {Promise}
 */
export function getUserProfile() {
  return get(apiConfig.API.USER.GET_PROFILE);
}

/**
 * 更新用户信息
 * @param {object} data 需要更新的用户信息
 * @returns {Promise}
 */
export function updateUserProfile(data) {
  return post(apiConfig.API.USER.UPDATE_PROFILE, data);
}

/**
 * 用户登出
 * @returns {Promise}
 */
export function logout() {
  return post(apiConfig.API.USER.LOGOUT);
} 