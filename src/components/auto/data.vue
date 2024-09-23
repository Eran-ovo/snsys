<script setup>
// 引入所需的模块
import { ref } from 'vue';

// 模拟数据，预留实际大气压和温度值的地方
const atmosphericPressure = ref([
  { group: 1, theoretical: null, actual: null },
  { group: 2, theoretical: null, actual: null },
  { group: 3, theoretical: null, actual: null },
  { group: 4, theoretical: null, actual: null },
  { group: 5, theoretical: null, actual: null },
  { group: 6, theoretical: null, actual: null },
  { group: 7, theoretical: null, actual: null },
  { group: 8, theoretical: null, actual: null },
  // 继续添加其他组
]);

const temperature = ref([
  { group: 1, theoretical: null, actual: null },
  { group: 2, theoretical: null, actual: null },
  { group: 3, theoretical: null, actual: null },
  { group: 4, theoretical: null, actual: null },
  { group: 5, theoretical: null, actual: null },
  { group: 6, theoretical: null, actual: null },
  { group: 7, theoretical: null, actual: null },
  { group: 8, theoretical: null, actual: null },
  // 继续添加其他组
]);

// 图像显示控制
const currentChart = ref('');

// 切换拟合图函数
const showChart = (type) => {
  currentChart.value = type;
};
</script>

<template>
  <div class="container">
    <!-- 表格区域 -->
    <div class="tables">
      <el-row>
        <el-col :span="12">
          <h3>大气压对比</h3>
          <el-table :data="atmosphericPressure">
            <el-table-column prop="group" label="组别"></el-table-column>
            <el-table-column prop="theoretical" label="理论值 (Pa)"></el-table-column>
            <el-table-column prop="actual" label="实际值 (Pa)"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <h3>温度对比</h3>
          <el-table :data="temperature">
            <el-table-column prop="group" label="组别"></el-table-column>
            <el-table-column prop="theoretical" label="理论值 (℃)"></el-table-column>
            <el-table-column prop="actual" label="实际值 (℃)"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <!-- 拟合图区域 -->
    <div class="charts">
      <el-button @click="showChart('experiment')">实验值拟合图</el-button>
      <el-button @click="showChart('theory')">理论值拟合图</el-button>
      <el-button @click="showChart('mix')">混合图像</el-button>

      <div v-if="currentChart === 'experiment'">
        <h3>实验值拟合图</h3>
        <!-- 这里预留实验值拟合图 -->
      </div>
      <div v-if="currentChart === 'theory'">
        <h3>理论值拟合图</h3>
        <!-- 这里预留理论值拟合图 -->
      </div>
      <div v-if="currentChart === 'mix'">
        <h3>混合图像</h3>
        <!-- 这里预留混合图像 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: -37px;
  width: 1262px;
  height: 650px
}

.tables {
  margin: 40px;
}

.charts {
  margin-left: 20px;
}
</style>
