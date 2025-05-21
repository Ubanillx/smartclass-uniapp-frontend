<template>
  <base-layout
    title="学习圈子"
    :showTabBar="true"
    activeTab="circle"
    @tabChange="handleTabChange"
  >
    <view class="content">
      <view class="search-bar">
        <view class="search-input" @click="navigateToSearch">
          <text class="search-icon iconfont icon-sousuo"></text>
          <text class="search-placeholder">搜索圈子、话题</text>
        </view>
      </view>
      
      <view class="category-list">
        <view class="category-item" v-for="(item, index) in categories" :key="index" @click="selectCategory(item)">
          <text class="category-icon iconfont" :class="item.icon"></text>
          <text class="category-name">{{ item.name }}</text>
        </view>
      </view>
      
      <view class="community-list">
        <view class="section-title">热门圈子</view>
        <view class="community-item" v-for="(item, index) in communityList" :key="index" @click="enterCommunity(item)">
          <view class="community-header">
            <text class="community-icon iconfont" :class="item.icon"></text>
            <view class="community-info">
              <text class="community-name">{{ item.name }}</text>
              <text class="community-members">{{ item.members }}位成员</text>
            </view>
            <view class="join-btn" :class="{ 'joined': item.joined }" @click.stop="toggleJoin(index)">
              {{ item.joined ? '已加入' : '加入' }}
            </view>
          </view>
          <text class="community-desc">{{ item.description }}</text>
          <view class="topic-preview" v-if="item.topics && item.topics.length > 0">
            <text class="topic-title">热门话题：</text>
            <text class="topic-content">{{ item.topics[0] }}</text>
          </view>
        </view>
      </view>
    </view>
  </base-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 分类列表
const categories = ref([
  { name: '英语', icon: 'icon-yingyu' },
  { name: '数学', icon: 'icon-shuxue' },
  { name: '语文', icon: 'icon-yuwen' },
  { name: '物理', icon: 'icon-wuli' },
  { name: '化学', icon: 'icon-huaxue' },
  { name: '生物', icon: 'icon-shengwu' },
  { name: '政治', icon: 'icon-zhengzhi' },
  { name: '地理', icon: 'icon-dili-' }
]);

// 模拟圈子列表
const communityList = ref([
  {
    name: '英语口语进阶圈',
    icon: 'icon-yingyu',
    members: 1289,
    description: '专注于英语口语的学习与提高，分享地道表达与口语技巧。',
    joined: true,
    topics: ['如何克服英语口语紧张问题？', '英语口语中最常见的10个错误']
  },
  {
    name: '高考数学讨论组',
    icon: 'icon-shuxue',
    members: 2547,
    description: '针对高考数学难点、解题技巧分享与讨论，每日一题挑战。',
    joined: false,
    topics: ['高考数学压轴题解析', '函数与导数的综合应用']
  },
  {
    name: '物理实验探究',
    icon: 'icon-wuli',
    members: 876,
    description: '分享中学物理实验的探究过程、数据分析与实验改进方法。',
    joined: false,
    topics: ['探究小球下落的加速度', '自制简易电动机实验分享']
  },
  {
    name: '作文提升俱乐部',
    icon: 'icon-yuwen',
    members: 1532,
    description: '从素材积累到构思立意，全方位提升作文水平。',
    joined: true,
    topics: ['如何写好议论文开头', '素材积累与灵活运用的技巧']
  }
]);

// 选择分类
const selectCategory = (category: any) => {
  uni.showToast({
    title: `已选择${category.name}分类`,
    icon: 'none'
  });
  // 这里可以根据分类筛选圈子列表
};

// 进入圈子
const enterCommunity = (community: any) => {
  uni.showToast({
    title: `进入${community.name}`,
    icon: 'none'
  });
  // 这里可以跳转到圈子详情页面
};

// 切换加入状态
const toggleJoin = (index: number) => {
  communityList.value[index].joined = !communityList.value[index].joined;
  
  uni.showToast({
    title: communityList.value[index].joined ? '已加入圈子' : '已退出圈子',
    icon: 'none'
  });
};

// 跳转到搜索页面
const navigateToSearch = () => {
  uni.navigateTo({
    url: '/pages/home/Search?type=community'
  });
};

// 处理标签变更
const handleTabChange = (tab: string) => {
  console.log('切换到标签:', tab);
};
</script>

<style lang="scss">
@import '@/static/icons/iconfont.css';

.content {
  flex: 1;
  padding: 30rpx;
}

.search-bar {
  margin-bottom: 30rpx;
}

.search-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 16rpx 30rpx;
  border-radius: 40rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.search-icon {
  font-size: 32rpx;
  color: #999;
  margin-right: 10rpx;
}

.search-placeholder {
  font-size: 28rpx;
  color: #999;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40rpx;
}

.category-item {
  width: 160rpx;
  height: 120rpx;
  background-color: #fff;
  border-radius: 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.05);
}

.category-icon {
  font-size: 48rpx;
  color: #3370ff;
  margin-bottom: 10rpx;
}

.category-name {
  font-size: 24rpx;
  color: #333;
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}

.community-list {
  margin-bottom: 100rpx;
}

.community-item {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
}

.community-header {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.community-icon {
  font-size: 48rpx;
  color: #3370ff;
  margin-right: 16rpx;
}

.community-info {
  flex: 1;
}

.community-name {
  font-size: 30rpx;
  font-weight: 500;
  color: #333;
  display: block;
}

.community-members {
  font-size: 24rpx;
  color: #999;
}

.join-btn {
  display: inline-block;
  padding: 8rpx 20rpx;
  font-size: 24rpx;
  color: #fff;
  background-color: #3370ff;
  border-radius: 30rpx;
}

.join-btn.joined {
  background-color: #ccc;
}

.community-desc {
  font-size: 26rpx;
  color: #666;
  margin-bottom: 16rpx;
  line-height: 1.5;
}

.topic-preview {
  display: flex;
  background-color: #f8f8f8;
  padding: 16rpx;
  border-radius: 8rpx;
}

.topic-title {
  font-size: 24rpx;
  color: #666;
  margin-right: 10rpx;
}

.topic-content {
  font-size: 24rpx;
  color: #333;
  flex: 1;
}
</style> 