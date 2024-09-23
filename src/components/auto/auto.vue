<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 使用 Vue Router 进行跳转
const router = useRouter()
const activeIndex = ref('1'); // 默认激活的菜单项

// 处理菜单项点击事件
const handleSelect = (key: string) => {
  activeIndex.value = key; // 更新菜单的活动项
  router.push({ name: `step${key}` }); // 跳转到对应的步骤
};

// 步骤列表
const steps = [
  { index: '1', name: '步骤1' },
  { index: '2', name: '步骤2' },
  { index: '3', name: '步骤3' },
  { index: '4', name: '步骤4' },
  { index: '5', name: '步骤5' },
  { index: '6', name: '数据拟合' },
  { index: '7', name: '误差分析' }
];

// “下一步”按钮的逻辑
const next = () => {
  const currentIndex = parseInt(activeIndex.value);
  const nextIndex = (currentIndex + 1).toString();
  activeIndex.value = nextIndex;
  router.push({ name: `step${nextIndex}` });
}

</script>

<template>
  <div style="background: rgba(255,255,255)">
  <!-- 菜单栏 -->
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      style="width: 1262px;position: absolute;top: 13%"
  >
    <el-menu-item
        v-for="step in steps"
        :key="step.index"
        :index="step.index"
        style="margin: auto 20px"
    >
      {{ step.name }}
    </el-menu-item>
  </el-menu>

  <!-- 路由视图和按钮 -->
  <div>
    <RouterView/>

    <!-- 动态显示按钮，根据当前步骤进行切换 -->
    <el-button
        v-if="activeIndex < 5"
        type="primary"
        style="float: right; margin-top: 10px;"
        @click="next"
    >
      下一步
    </el-button>

    <el-button
        v-else-if="activeIndex==5"
        type="success"
        style="float: right; margin-top: 10px;"
        @click="next"
    >
      数据拟合
    </el-button>
    <el-button
        v-else-if="activeIndex==6"
        type="success"
        style="float: right; margin-top: 10px;"
        @click="next"
    >
      误差分析
    </el-button>
  </div>
  </div>
</template>

<style scoped>

</style>
