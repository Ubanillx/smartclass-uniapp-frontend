<script>
import { setupAPI } from './api/axios-adapter';
import { apiConfig } from './api/config';

// 立即初始化API配置
try {
  const userInfo = uni.getStorageSync('userInfo');
  const token = userInfo ? (userInfo.token || userInfo.userToken) : '';
  setupAPI(apiConfig.baseUrl, token);
  console.log('API初始化成功');
} catch (error) {
  console.error('API初始化失败:', error);
}

export default {
  globalData: {
    statusBarHeight: 44,
    safeAreaTop: 0
  },
  onLaunch: function () {
    console.log('App Launch');
    // 初始化检查登录状态
    this.checkLoginStatus();
    
    // 获取系统信息，设置状态栏高度
    this.setStatusBarHeight();
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  methods: {
    // 检查登录状态
    checkLoginStatus() {
      // 获取当前页面路由
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const currentRoute = currentPage ? currentPage.route : '';
      
      // 获取存储的用户信息
      const userInfo = uni.getStorageSync('userInfo');
      
      // 免登录页面列表
      const noAuthPages = ['pages/user/Login', 'pages/user/Register', 'pages/user/Forget'];
      
      // 如果当前页面需要登录，但没有用户信息，则跳转到登录页
      if (!userInfo && currentRoute && !noAuthPages.includes(currentRoute)) {
        uni.reLaunch({
          url: '/pages/user/Login'
        });
      }
    },
    
    // 设置状态栏高度
    setStatusBarHeight() {
      // 获取系统信息
      uni.getSystemInfo({
        success: (res) => {
          // 设置状态栏高度，加上安全边距
          const statusBarHeight = res.statusBarHeight || 20;
          const safeAreaTop = res.safeArea ? res.safeArea.top : 0;
          
          // 保存到全局数据
          this.globalData.statusBarHeight = statusBarHeight;
          this.globalData.safeAreaTop = safeAreaTop;
          
          // 保存到Storage便于组件访问
          uni.setStorageSync('statusBarHeight', statusBarHeight);
          uni.setStorageSync('safeAreaTop', safeAreaTop);
        }
      });
    }
  }
}
</script>

<style>

</style>
