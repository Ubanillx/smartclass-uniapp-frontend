# 基础布局组件使用指南

## 简介

`BaseLayout` 是一个全局基础布局组件，用于统一项目中所有页面的布局结构，包含：
- 顶部导航栏（状态栏、标题栏、返回按钮）
- 内容区域
- 可选的底部标签栏

通过使用这个组件，可以确保所有页面具有一致的外观和交互体验，同时简化页面开发。

## 组件结构

```vue
<base-layout
  title="页面标题"
  :showBack="true/false"
  :showTabBar="true/false"
  :activeTab="当前激活的标签"
  :textColor="文字颜色"
  :backBtnBgColor="返回按钮背景色"
  :customBackFn="自定义返回方法"
  @tabChange="标签变更处理方法"
>
  <!-- 页面内容 -->
  <view class="your-content">
    <!-- 自定义内容 -->
  </view>
  
  <!-- 顶部导航栏右侧插槽（可选） -->
  <template #navRight>
    <!-- 右侧按钮等 -->
  </template>
</base-layout>
```

## 组件属性

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| title | String | '' | 页面标题 |
| showBack | Boolean | true | 是否显示返回按钮 |
| showTabBar | Boolean | false | 是否显示底部标签栏 |
| activeTab | String | 'home' | 当前激活的标签（仅当showTabBar为true时有效） |
| textColor | String | '#333333' | 文字颜色 |
| backBtnBgColor | String | 'rgba(255, 255, 255, 0.2)' | 返回按钮背景色 |
| customBackFn | Function | null | 自定义返回方法，不传则执行默认返回上一页逻辑 |

## 组件事件

| 事件名 | 说明 | 返回值 |
|-------|------|-------|
| tabChange | 底部标签变更时触发 | 变更后的标签名 |

## 使用场景

### 1. 带返回按钮的普通页面

```vue
<template>
  <base-layout
    title="页面标题"
    :showBack="true"
    :showTabBar="false"
  >
    <!-- 页面内容 -->
    <view class="your-content">
      <!-- 自定义内容 -->
    </view>
  </base-layout>
</template>
```

### 2. 主页面（带底部标签栏）

```vue
<template>
  <base-layout
    :title="getTabTitle()"
    :showBack="false"
    :showTabBar="true"
    :activeTab="activeTab"
    @tabChange="handleTabChange"
  >
    <!-- 根据activeTab切换显示不同内容 -->
    <view class="content-area">
      <!-- 主页内容 -->
      <view v-if="activeTab === 'home'" class="page-content">
        <home-content />
      </view>
      
      <!-- 对话内容 -->
      <view v-if="activeTab === 'message'" class="page-content">
        <ai-list />
      </view>
      
      <!-- 其他标签页内容 -->
    </view>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'home'
    };
  },
  methods: {
    handleTabChange(tab) {
      this.activeTab = tab;
    },
    getTabTitle() {
      const titles = {
        'home': '智云星课',
        'message': '智慧对话',
        'course': '课程中心',
        'profile': '个人中心'
      };
      return titles[this.activeTab] || '智云星课';
    }
  }
};
</script>
```

### 3. 登录/注册页面

```vue
<template>
  <base-layout
    title="登录"
    :showBack="false"
    :showTabBar="false"
    textColor="#333333"
  >
    <!-- 登录表单内容 -->
    <view class="login-content">
      <!-- 登录表单 -->
    </view>
  </base-layout>
</template>
```

## 注意事项

1. 内容区域样式设置：
   - BaseLayout 组件已经处理了顶部状态栏高度和底部导航的间距
   - 内容区域的 paddingTop 已经设置为状态栏高度 + 90rpx
   - 内容区域的 paddingBottom 根据是否显示底部标签栏自动调整

2. 全局注册：
   - BaseLayout 组件已在 pages.json 中全局注册，可以直接在任何页面中使用
   - 使用方式：`<base-layout>...</base-layout>`

3. 内容区域的滚动：
   - 如果页面内容需要滚动，请在 BaseLayout 的内容插槽中使用 `<scroll-view>` 组件
   - 滚动区域高度可以设置为 `calc(100vh - 200rpx)` 来适配顶部导航栏

4. 右侧插槽的使用：
   - 如果需要在顶部导航栏右侧添加按钮等元素，请使用命名插槽 `#navRight`

## 如何迁移现有页面

1. 删除页面中的顶部导航栏代码
2. 移除自定义的状态栏高度处理逻辑
3. 用 `<base-layout>` 组件包裹页面主要内容
4. 设置适当的组件属性（title, showBack 等）
5. 调整内容区域的样式，移除冗余的 padding 和 margin

## 示例

以下是一个已迁移的页面示例：

**迁移前：**
```vue
<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="nav-header">
      <text class="back-icon" @click="handleBack">←</text>
      <text class="page-title">页面标题</text>
    </view>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 页面内容 -->
    </view>
  </view>
</template>
```

**迁移后：**
```vue
<template>
  <base-layout
    title="页面标题"
    :showBack="true"
    :showTabBar="false"
  >
    <!-- 内容区域 -->
    <view class="content">
      <!-- 页面内容 -->
    </view>
  </base-layout>
</template>
``` 