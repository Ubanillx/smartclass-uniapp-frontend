/**
 * 小程序环境的兼容性补丁
 * 为小程序环境提供FormData等浏览器API的兼容实现
 */

// 如果没有FormData，提供一个简单的实现
if (typeof FormData === 'undefined') {
  console.log('正在添加FormData兼容实现');
  
  class MiniFormData {
    constructor() {
      this._data = {};
    }
    
    append(key, value) {
      this._data[key] = value;
    }
    
    // 获取数据对象
    getData() {
      return this._data;
    }
  }
  
  // 全局添加FormData
  global.FormData = MiniFormData;
}

// 导出检查函数
export function checkPolyfills() {
  return {
    formDataSupported: typeof FormData !== 'undefined',
    axiosSupported: typeof axios !== 'undefined'
  };
} 