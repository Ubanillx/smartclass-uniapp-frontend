/**
 * FormData兼容性辅助函数
 * 用于解决微信小程序环境中没有FormData的问题
 * 主要辅助生成的API代码使用
 */

// 检查当前环境是否支持FormData
export const isFormDataSupported = () => {
  return typeof FormData !== 'undefined';
};

// 创建一个兼容的FormData对象
export const createCompatibleFormData = () => {
  if (isFormDataSupported()) {
    return new FormData();
  } else {
    // 返回一个模拟的FormData对象
    return {
      _data: {},
      append(key, value, filename) {
        this._data[key] = value;
      },
      getHeaders() {
        return { 'Content-Type': 'multipart/form-data' };
      },
      // 获取内部数据，用于实际发送请求
      getData() {
        return this._data;
      }
    };
  }
};

// 辅助函数 - 将FormData对象转换为uni.uploadFile可用的格式
export const convertFormDataForUpload = (formData) => {
  if (formData._data) {
    return formData._data;
  }
  
  // 如果是原生FormData，在浏览器环境中，无法直接获取其内容
  // 在小程序环境中一般不会走到这里，因为已经使用了模拟的FormData
  console.warn('无法直接转换原生FormData为小程序上传格式，请使用兼容模式');
  return {};
}; 