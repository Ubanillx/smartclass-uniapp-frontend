#!/usr/bin/env node

/**
 * OpenAPI客户端代码生成脚本
 * 用法：
 *   1. 默认使用环境变量: node scripts/generate-api.js
 *   2. 命令行参数指定: node scripts/generate-api.js http://example.com/swagger.json
 *   3. 环境变量指定: VITE_OPENAPI_URL=http://example.com/swagger.json node scripts/generate-api.js
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// 加载环境变量（按优先级从低到高）
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

// 获取OpenAPI URL（按优先级从高到低）
const args = process.argv.slice(2);
const swaggerUrl = args[0] || process.env.VITE_OPENAPI_URL || process.env.API_URL || 'http://10.16.62.100:12345/api/v2/api-docs';

// 输出目录
const outputDir = path.resolve(__dirname, '../src/api/generated');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 提示使用的OpenAPI URL
console.log(`
===============================================================
🚀 开始从以下地址生成API客户端代码：
   ${swaggerUrl}
===============================================================
`);

// 构建命令
const command = `npx openapi-typescript-codegen --input ${swaggerUrl} --output ${outputDir} --client axios --useOptions --useUnionTypes`;

// 执行命令
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ 执行出错: ${error.message}`);
    console.error(`\n请检查OpenAPI URL是否正确: ${swaggerUrl}`);
    console.error('可通过以下方式指定OpenAPI URL:');
    console.error('1. 命令行参数: npm run generate-api http://example.com/swagger.json');
    console.error('2. 环境变量: VITE_OPENAPI_URL=http://example.com/swagger.json npm run generate-api');
    console.error('3. .env 文件: VITE_OPENAPI_URL=http://example.com/swagger.json');
    return;
  }
  
  if (stderr) {
    console.error(`⚠️ 错误信息: ${stderr}`);
    return;
  }
  
  console.log(`
===============================================================
✅ API客户端代码已成功生成!
   生成目录: ${outputDir}
   基于OpenAPI文档: ${swaggerUrl}
===============================================================
`);

  console.log(`📝 使用示例:`);
  console.log(`import { ApiService } from '@/api/generated';
import { API_BASE_URL } from '@/utils/env';

// 创建API服务实例
const apiService = new ApiService({
  BASE: API_BASE_URL,
  TOKEN: () => uni.getStorageSync('token')
});

// 使用生成的API
async function fetchData() {
  try {
    const result = await apiService.endpoint.getData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}`);

  console.log(`\n🔄 下一步：
1. 在API服务中导入并使用生成的客户端
2. 更新请求配置以适配uni-app环境
3. 在组件中使用API服务`);
});

// 创建适配器文件
const adapterFilePath = path.resolve(outputDir, 'adapter.ts');
const adapterContent = `/**
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
`;

// 等待主命令执行完成后创建适配器文件
setTimeout(() => {
  fs.writeFile(adapterFilePath, adapterContent, (err) => {
    if (err) {
      console.error(`❌ 创建适配器文件失败: ${err.message}`);
      return;
    }
    console.log(`✅ uni-app适配器文件已创建: ${adapterFilePath}`);
  });
}, 2000); 