/**
 * 适配uni-app环境的Axios适配器
 */
import type { AxiosAdapter, AxiosResponse } from 'axios';

/**
 * uni-app请求适配器
 * 将axios请求转换为uni.request
 */
export const uniappAdapter: AxiosAdapter = (config) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    uni.request({
      url: config.url,
      method: config.method?.toUpperCase() as any,
      data: config.data,
      header: config.headers,
      timeout: config.timeout,
      responseType: (config.responseType === 'arraybuffer' ? 'arraybuffer' : 'text') as any,
      dataType: config.responseType === 'json' ? 'json' : 'string',
      success: (res) => {
        resolve({
          data: res.data,
          status: res.statusCode,
          statusText: '',
          headers: res.header,
          config,
          request: null
        });
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};

export default uniappAdapter;
