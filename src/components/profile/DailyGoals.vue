<template>
  <view class="daily-goals">
    <fui-checkbox-group name="goals" v-model="checkedValues" @change="change">
      <view class="goal-item" v-for="(goal, index) in goals" :key="index">
        <fui-label>
          <view class="fui-align__center">
            <fui-checkbox 
              :value="String(index)"
              :checked="checkedValues.includes(String(index))"
              color="#007AFF"
              borderColor="#DDDDDD"
              borderRadius="50%"
              scaleRatio="0.8"
            />
            <text class="goal-text">{{ goal.text }}</text>
          </view>
        </fui-label>
      </view>
    </fui-checkbox-group>
  </view>
</template>

<script>
import fuiCheckbox from '@/components/firstui/FirstUI-vue/components/firstui/fui-checkbox/fui-checkbox.vue'
import fuiCheckboxGroup from '@/components/firstui/FirstUI-vue/components/firstui/fui-checkbox-group/fui-checkbox-group.vue'
import fuiLabel from '@/components/firstui/FirstUI-vue/components/firstui/fui-label/fui-label.vue'

export default {
  name: 'DailyGoals',
  components: {
    fuiCheckbox,
    fuiCheckboxGroup,
    fuiLabel
  },
  data() {
    return {
      checkedValues: [],
      goals: [
        { text: '完成每日单词打卡', completed: true },
        { text: '听力练习15分钟', completed: true },
        { text: '完成一节口语课程', completed: false },
        { text: '阅读英语文章一篇', completed: true },
        { text: '复习昨日语法知识点', completed: false }
      ]
    }
  },
  created() {
    // 初始化选中值，将 completed 为 true 的项的索引添加到 checkedValues 中
    this.initCheckedValues();
  },
  methods: {
    initCheckedValues() {
      this.checkedValues = this.goals
        .map((goal, index) => goal.completed ? String(index) : null)
        .filter(value => value !== null);
    },
    change(e) {
      const checkedValues = e.detail.value;
      // 更新 goals 中的 completed 状态
      this.goals.forEach((goal, index) => {
        goal.completed = checkedValues.includes(String(index));
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.daily-goals {
  padding: 20rpx;
  
  .goal-item {
    margin-bottom: 30rpx;
  }

  .fui-align__center {
    display: flex;
    align-items: center;
  }
  
  .goal-text {
    font-size: 28rpx;
    color: #333;
    margin-left: 16rpx;
  }
}
</style> 