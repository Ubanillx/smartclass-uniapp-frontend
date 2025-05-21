/**
 * 环境变量工具类
 * 统一管理项目中的环境变量
 */

// API基础地址
export const API_BASE_URL = 'http://10.16.62.100:12345'

// OpenAPI文档地址
export const OPENAPI_URL = 'http://10.16.62.100:12345/api/v2/api-docs'

// APP标题
export const APP_TITLE = '智课小程序'

// 获取完整的API URL
export function getApiUrl(path = '') {
  return `${API_BASE_URL}${path}`
}

// 默认环境变量配置
export default {
  API_BASE_URL,
  OPENAPI_URL,
  APP_TITLE,
  getApiUrl
} 