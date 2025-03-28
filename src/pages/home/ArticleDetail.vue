<template>
  <view class="article-detail-page">
    <!-- 头部 -->
    <view class="header">
      <view class="back-icon" @tap="goBack">
        <text>&lt;</text>
      </view>
      <text class="header-title">美文详情</text>
      <view class="action-icon" @tap="toggleFavorite">
        <text :class="{'favorited': isFavorite}">{{ isFavorite ? '♥' : '♡' }}</text>
      </view>
    </view>
    
    <!-- 文章内容 -->
    <scroll-view scroll-y class="article-content">
      <view class="article-header">
        <text class="article-title">{{ article.title }}</text>
        <view class="article-meta">
          <text class="article-category" :style="{backgroundColor: article.categoryColor}">{{ article.category }}</text>
          <text class="article-info">{{ article.duration }}分钟 · {{ article.level }}</text>
        </view>
      </view>
      
      <image class="article-image" :src="article.image" mode="widthFix" />
      
      <view class="article-text">
        <text class="article-paragraph" v-for="(paragraph, index) in article.content" :key="index">{{ paragraph }}</text>
      </view>
      
      <view class="article-actions">
        <view class="action-btn" @tap="handleLike">
          <text class="action-icon" :class="{'active': article.isLiked}">👍</text>
          <text class="action-text">{{ article.likes }}</text>
        </view>
        <view class="action-btn" @tap="handleComment">
          <text class="action-icon">💬</text>
          <text class="action-text">{{ article.comments }}</text>
        </view>
        <view class="action-btn" @tap="handleShare">
          <text class="action-icon">📤</text>
          <text class="action-text">分享</text>
        </view>
      </view>
      
      <!-- 相关推荐 -->
      <view class="related-section">
        <text class="section-title">相关推荐</text>
        <view class="related-list">
          <view class="related-item" v-for="(item, index) in relatedArticles" :key="index" @tap="loadArticle(item)">
            <image class="related-image" :src="item.image" mode="aspectFill" />
            <view class="related-info">
              <text class="related-title">{{ item.title }}</text>
              <text class="related-brief">{{ item.brief }}</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;
declare const getApp: any;

import { ref, onMounted } from 'vue';

// 文章收藏状态
const isFavorite = ref(false);

// Mock 文章详情数据
const article = ref({
  title: 'The Power of Positive Thinking',
  category: '励志',
  categoryColor: '#ff6b6b',
  duration: 5,
  level: '初级',
  image: '/static/demo.png',
  isLiked: false,
  likes: 128,
  comments: 32,
  content: [
    '积极思考的力量在于它能够改变我们看待世界的方式。当我们选择关注积极的一面，我们的大脑就会开始寻找支持这种观点的证据，从而创造出更多积极的经历和结果。',
    '研究表明，乐观主义者通常比悲观主义者更健康、更成功、更快乐。这不仅仅是因为他们的态度更好，还因为他们更愿意采取行动解决问题，而不是陷入负面情绪的循环中。',
    '培养积极思维并不意味着忽视生活中的挑战和困难。相反，它意味着以建设性的方式应对这些挑战，相信自己有能力克服困难，并从中学习成长。',
    '以下是培养积极思维的几个实用技巧：',
    '1. 关注感恩：每天花几分钟思考你感激的事物，无论大小。',
    '2. 挑战负面想法：当消极念头出现时，质疑它们的真实性和有用性。',
    '3. 培养积极的自我对话：注意你对自己说的话，用鼓励和支持的语言代替批评。',
    '4. 寻找机会：在每个挑战中寻找学习和成长的机会。',
    '5. 与积极的人相处：周围的人对我们的思维方式有很大影响。',
    '通过有意识地培养积极思维习惯，你可以逐渐改变自己的思维模式，创造出更幸福、更成功的生活体验。记住，积极思考不是忽视现实，而是选择以最有建设性的方式应对现实。'
  ]
});

// Mock 相关推荐
const relatedArticles = ref([
  {
    title: 'Mindfulness and Mental Wellbeing',
    brief: 'How staying present can improve your mental health',
    image: '/static/demo.png'
  },
  {
    title: 'Building Resilience in Difficult Times',
    brief: 'Strategies for bouncing back from setbacks',
    image: '/static/demo.png'
  }
]);

// 获取文章信息
onMounted(() => {
  // 从URL参数获取文章标题
  const eventChannel = getApp().globalData.eventChannel;
  const title = uni.getSystemInfoSync().platform === 'devtools' ? 
    decodeURIComponent(location.href.split('title=')[1]) : '';
  
  console.log('加载文章:', title || article.value.title);
  // TODO: 根据标题获取文章详情
});

// 返回上一页
const goBack = () => {
  uni.navigateBack();
};

// 切换收藏状态
const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  uni.showToast({
    title: isFavorite.value ? '已收藏' : '已取消收藏',
    icon: 'none'
  });
};

// 点赞
const handleLike = () => {
  article.value.isLiked = !article.value.isLiked;
  article.value.likes += article.value.isLiked ? 1 : -1;
};

// 评论
const handleComment = () => {
  uni.showToast({
    title: '评论功能开发中',
    icon: 'none'
  });
};

// 分享
const handleShare = () => {
  uni.showShareMenu({
    withShareTicket: true,
    success() {
      console.log('显示分享菜单成功');
    },
    fail(err) {
      console.error('显示分享菜单失败:', err);
      uni.showToast({
        title: '分享功能开发中',
        icon: 'none'
      });
    }
  });
};

// 加载其他文章
const loadArticle = (item: any) => {
  uni.navigateTo({
    url: `/pages/home/ArticleDetail?title=${encodeURIComponent(item.title)}`
  });
};
</script>

<style lang="scss" scoped>
.article-detail-page {
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  
  .header {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #ffffff;
    
    .back-icon, .action-icon {
      width: 60rpx;
      height: 60rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      
      text {
        font-size: 40rpx;
        color: #333;
        
        &.favorited {
          color: #ff4757;
        }
      }
    }
    
    .header-title {
      flex: 1;
      text-align: center;
      font-size: 32rpx;
      font-weight: 500;
      color: #333;
    }
  }
  
  .article-content {
    flex: 1;
    
    .article-header {
      padding: 30rpx;
      
      .article-title {
        font-size: 40rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 20rpx;
        display: block;
      }
      
      .article-meta {
        display: flex;
        align-items: center;
        gap: 16rpx;
        
        .article-category {
          padding: 4rpx 12rpx;
          border-radius: 4rpx;
          font-size: 24rpx;
          color: #fff;
        }
        
        .article-info {
          font-size: 24rpx;
          color: #999;
        }
      }
    }
    
    .article-image {
      width: 100%;
    }
    
    .article-text {
      padding: 30rpx;
      
      .article-paragraph {
        font-size: 28rpx;
        color: #333;
        line-height: 1.8;
        margin-bottom: 30rpx;
        display: block;
      }
    }
    
    .article-actions {
      display: flex;
      justify-content: space-around;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 20rpx 0;
      margin: 0 30rpx 30rpx;
      
      .action-btn {
        display: flex;
        align-items: center;
        gap: 10rpx;
        
        .action-icon {
          font-size: 36rpx;
          color: #666;
          
          &.active {
            color: #007AFF;
          }
        }
        
        .action-text {
          font-size: 24rpx;
          color: #666;
        }
      }
    }
    
    .related-section {
      padding: 30rpx;
      
      .section-title {
        font-size: 32rpx;
        font-weight: 500;
        color: #333;
        margin-bottom: 20rpx;
        display: block;
      }
      
      .related-list {
        display: flex;
        flex-direction: column;
        gap: 20rpx;
        
        .related-item {
          display: flex;
          gap: 16rpx;
          
          .related-image {
            width: 160rpx;
            height: 120rpx;
            border-radius: 8rpx;
          }
          
          .related-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            .related-title {
              font-size: 28rpx;
              font-weight: 500;
              color: #333;
            }
            
            .related-brief {
              font-size: 24rpx;
              color: #999;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style> 