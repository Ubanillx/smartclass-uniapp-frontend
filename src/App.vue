<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
    // 初始化检查登录状态
    this.checkLoginStatus();
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
      
      // 获取存储的token
      const token = uni.getStorageSync('token');
      
      // 免登录页面列表
      const noAuthPages = ['pages/user/Login', 'pages/user/Register', 'pages/user/Forget'];
      
      // 如果当前页面需要登录，但没有token，则跳转到登录页
      if (!token && currentRoute && !noAuthPages.includes(currentRoute)) {
        uni.reLaunch({
          url: '/pages/user/Login'
        });
      }
    }
  }
}
</script>

<style>
/*每个页面公共css */
</style>
