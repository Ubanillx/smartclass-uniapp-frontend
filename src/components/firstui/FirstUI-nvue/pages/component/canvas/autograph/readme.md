### 温馨提示

目前nvue android 端使用会出现以下错误，可暂时忽略！

```js
reportJSException >>>> exception function:gcanvas setBackGround for android view, exception:WX_RENDER_ERR_TEXTURE_SETBACKGROUND: TextureView doesn't support displaying a background drawable!
```

### 建议

在App端，从性能来讲，由于通讯阻塞的问题，nvue的canvas性能不可能达到使用renderjs的vue页面的canvas。在App端，推荐使用vue的canvas。

具体详见 [uni-app canvas 介绍](https://uniapp.dcloud.net.cn/component/canvas.html#)

### 其他

- 目前android端 gcanvas `toTempFilePath` API 在部分机型可能出现不触发回调的问题，需等官方进行修复！
- 部分 android机 使用 gcanvas 可能导致闪退
- 部分 android机 使用 gcanvas 绘制中文可能不显示


综上问题，涉及`绘制并生成图片`等操作目前 android端不建议使用nvue的gcanvas，需等uni-app官方优化！