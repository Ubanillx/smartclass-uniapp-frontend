<template>
  <view class="course-list">
    <!-- 搜索栏 -->
    <view class="search-section">
      <fui-search-bar
        :placeholder="'搜索课程'"
        :radius="'true'"
        :background="'#ffffff'"
        :padding="'24rpx 30rpx'"
        :height="'72rpx'"
        :border="false"
        @search="handleSearch"
        @clear="handleClear"
      />
    </view>

    <!-- 标签页 -->
    <view class="tabs-section">
      <fui-tabs 
        :tabs="tabs" 
        :scroll="true"
        :alignLeft="true"
        @change="handleTabChange"
      ></fui-tabs>
    </view>

    <!-- 筛选区域 -->
    <view class="filter-section">
      <view class="filter-right">
        <fui-dropdown-menu 
          :size="28" 
          :selectedColor="'#465CFF'" 
          :options="gradeOptions" 
          @click="handleGradeSelect" 
          @close="handleGradeClose" 
          ref="gradeDropdown"
        >
          <view class="filter-item" @tap="showGradeDropdown">
            <text>{{selectedGrade}}</text>
            <view class="filter-icon" :class="{'icon-rotate': isGradeDropdownShow}">
              <text class="icon">▼</text>
            </view>
          </view>
        </fui-dropdown-menu>
      </view>
    </view>

    <!-- 课程内容区域 -->
    <view class="course-content">
      <view class="course-grid">
        <view class="course-item" v-for="(course, index) in courseList" :key="index">
          <image class="course-image" :src="course.image" mode="aspectFill" />
          <view class="course-info">
            <view class="course-title">{{ course.title }}</view>
            <view class="course-desc">{{ course.description }}</view>
            <view class="course-meta">
              <text class="course-grade">{{ course.grade }}</text>
              <text class="course-duration">{{ course.duration }}分钟</text>
              <text class="course-students">{{ course.students }}人在学</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// 声明uni类型
declare const uni: any;

import { ref } from 'vue'
import fuiSearchBar from "../../components/firstui/FirstUI-vue/components/firstui/fui-search-bar/fui-search-bar.vue"
import fuiTabs from "../../components/firstui/FirstUI-vue/components/firstui/fui-tabs/fui-tabs.vue"
import fuiDropdownMenu from "../../components/firstui/FirstUI-vue/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"

// 标签页数据
const tabs = ref([
  { name: '推荐' },
  { name: '语文' },
  { name: '数学' },
  { name: '英语' },
  { name: '物理' },
  { name: '化学' },
  { name: '生物' },
  { name: '历史' },
  { name: '地理' }
])

// 年级选项
const gradeOptions = ref([
  { text: '全部年级', value: 0 },
  { text: '一年级', value: 1 },
  { text: '二年级', value: 2 },
  { text: '三年级', value: 3 },
  { text: '四年级', value: 4 },
  { text: '五年级', value: 5 },
  { text: '六年级', value: 6 }
])

// 当前选中的年级
const selectedGrade = ref('全部年级')
const isGradeDropdownShow = ref(false)
// 定义下拉菜单ref
const gradeDropdown = ref<{
  show: () => void;
  close: () => void;
} | null>(null)

// 课程列表数据
const courseList = ref([
  {
    title: '趣味英语口语进阶',
    description: '通过游戏和动画学习日常英语对话，让学习更有趣',
    grade: '三年级',
    duration: 30,
    students: 1234,
    image: '/static/demo.png'
  },
  {
    title: '趣味英语口语进阶',
    description: '通过游戏和动画学习日常英语对话，让学习更有趣',
    grade: '三年级',
    duration: 30,
    students: 1234,
    image: '/static/demo.png'
  }
])

// 标签页切换事件
const handleTabChange = (e: any) => {
  console.log('当前选中的标签：', e.index)
  // TODO: 根据选中的标签加载对应的课程列表
}

// 年级选择相关
const showGradeDropdown = () => {
  isGradeDropdownShow.value = true
  gradeDropdown.value?.show()
}

const handleGradeSelect = (e: any) => {
  selectedGrade.value = e.text
  isGradeDropdownShow.value = false
  // TODO: 根据选中的年级筛选课程
}

const handleGradeClose = () => {
  isGradeDropdownShow.value = false
}

// 搜索相关
const handleSearch = (e: any) => {
  console.log('搜索内容：', e.value)
  // TODO: 实现搜索逻辑
}

const handleClear = () => {
  console.log('清空搜索')
  // TODO: 实现清空逻辑
}
</script>

<style lang="scss" scoped>
.course-list {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20rpx;

  .search-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  }

  .tabs-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  }

  .filter-section {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);

    .filter-right {
      display: flex;
      justify-content: flex-end;
    }

    .filter-item {
      display: flex;
      align-items: center;
      gap: 8rpx;
      
      .filter-icon {
        transition: transform 0.3s;
        
        &.icon-rotate {
          transform: rotate(180deg);
        }

        .icon {
          font-size: 24rpx;
          color: #666;
        }
      }
    }
  }

  .course-content {
    padding: 20rpx 0;
    
    .course-grid {
      display: flex;
      flex-direction: column;
      gap: 40rpx;
      padding: 0 20rpx;

      .course-item {
        background-color: #ffffff;
        border-radius: 16rpx;
        overflow: hidden;
        box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
        position: relative;

        .course-image {
          width: 100%;
          height: 280rpx;
          display: block;
          /* #ifdef APP-NVUE */
          border-radius: 16rpx 16rpx 0 0;
          /* #endif */
        }

        /* #ifndef APP-NVUE */
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 300rpx;
          border-radius: 16rpx 16rpx 0 0;
          overflow: hidden;
          pointer-events: none;
        }
        /* #endif */

        .course-info {
          padding: 20rpx;

          .course-title {
            font-size: 28rpx;
            font-weight: 500;
            color: #333;
            margin-bottom: 12rpx;
          }

          .course-desc {
            font-size: 24rpx;
            color: #666;
            margin-bottom: 16rpx;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .course-meta {
            display: flex;
            align-items: center;
            gap: 16rpx;
            flex-wrap: wrap;

            text {
              font-size: 22rpx;
              color: #999;
              
              &.course-grade {
                color: #465CFF;
                background-color: rgba(70, 92, 255, 0.1);
                padding: 4rpx 12rpx;
                border-radius: 4rpx;
              }
            }
          }
        }
      }
    }
  }
}
</style> 