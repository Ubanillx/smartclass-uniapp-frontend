# 智云星课微信小程序

智云星课是一个基于UniApp开发的智慧教育微信小程序，旨在提供便捷、高效的在线教育服务。通过该小程序，用户可以进行课程学习、智能对话、社交互动以及个人学习管理等操作。

## 技术栈

- Vue 3 + Composition API
- TypeScript
- UniApp框架
- FirstUI组件库
- Axios (网络请求)
- Iconfont (图标管理)

## 主要功能

- 课程学习：浏览、搜索和学习各类课程内容
- 智能对话：通过AI辅助学习和解答问题
- 社交圈子：与其他学习者进行交流和分享
- 个人中心：管理个人信息、学习记录和学习计划

## 目录结构

```
/src
  /pages         - 小程序页面
    /user        - 用户相关页面(登录、注册)
    /home        - 首页和功能页面(公告、课程、搜索等)
    /chat        - 智能对话页面
    /circle      - 社交圈子相关页面
    /profile     - 个人中心相关页面
  /components    - 组件目录
    /firstui     - FirstUI组件库
    /home        - 首页相关组件
  /api           - API接口相关
    /generated   - 自动生成的API代码
  /utils         - 工具函数目录
  /static        - 静态资源目录
```

## 开发环境设置

### 环境要求
- Node.js (建议 v16+)
- 微信开发者工具

### 安装依赖
```bash
npm install
```

### 开发命令
```bash
# 开发模式运行(微信小程序)
npm run dev:mp-weixin

# 构建生产版本
npm run build:mp-weixin

# 生成API接口代码
npm run generate-api
```

## 开发规范

- 页面组件使用 PascalCase 命名
- 组件属性使用小驼峰命名法
- 统一使用 Composition API 和 `<script setup>` 进行开发
- 页面结构应使用 `<base-layout>` 包装，确保统一的页面结构
- 网络请求使用自动生成的API服务
- 图标使用Iconfont

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 版本历史

- v1.0.0 - 初始版本

## 相关链接

- [UniApp官方文档](https://uniapp.dcloud.io/)
- [Vue 3官方文档](https://v3.cn.vuejs.org/)
- [FirstUI组件库](https://fui.firstui.cn/)
