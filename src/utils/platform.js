/**
 * 平台工具函数
 * 用于处理不同平台的特性和兼容性
 */

/**
 * 是否微信小程序环境
 */
export const isWeChatMP = () => {
  // #ifdef MP-WEIXIN
  return true;
  // #endif
  
  // #ifndef MP-WEIXIN
  return false;
  // #endif
}

/**
 * 获取当前平台信息
 */
export const getPlatformInfo = () => {
  const platform = {
    isWechat: isWeChatMP(),
    // #ifdef MP-WEIXIN
    name: 'mp-weixin',
    // #endif
    
    // #ifdef H5
    name: 'h5',
    // #endif
    
    // #ifdef APP-PLUS
    name: 'app',
    // #endif
    
    // 其他平台可以依次类推
  };
  
  return platform;
}

/**
 * 平台特定的分享功能
 * @param {Object} options 分享参数
 */
export const shareContent = (options = {}) => {
  // #ifdef MP-WEIXIN
  // 微信小程序分享
  uni.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline']
  });
  // #endif
  
  // #ifdef APP-PLUS
  // App分享逻辑
  uni.share({
    provider: 'weixin',
    scene: 'WXSceneSession',
    type: 0,
    title: options.title || '分享标题',
    summary: options.summary || '分享摘要',
    imageUrl: options.imageUrl || '',
    href: options.href || '',
    success: function() {
      console.log('分享成功');
    },
    fail: function() {
      console.log('分享失败');
    }
  });
  // #endif
}

/**
 * 微信小程序特定API调用（带容错处理）
 * @param {Function} wxApi 微信API函数
 * @param {Object} options 参数
 */
export const callWxApi = (wxApi, options = {}) => {
  // #ifdef MP-WEIXIN
  if (typeof wxApi === 'function') {
    return wxApi(options);
  } else {
    console.error('微信API不可用');
    return Promise.reject(new Error('微信API不可用'));
  }
  // #endif
  
  // #ifndef MP-WEIXIN
  console.warn('当前不是微信小程序环境，无法调用微信特定API');
  return Promise.reject(new Error('非微信小程序环境'));
  // #endif
} 