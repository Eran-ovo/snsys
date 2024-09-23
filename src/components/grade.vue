<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

// 模拟用户的自动化实验成绩和虚拟化实验成绩数据
const automatedScores = ref([
  { id: 1, experimentName: '自动化实验1', score: 85 },
  { id: 2, experimentName: '自动化实验2', score: 90 }
]);

const virtualScores = ref([
  { id: 1, experimentName: '虚拟化实验1', score: 88 },
  { id: 2, experimentName: '虚拟化实验2', score: 92 }
]);

// 模拟详细成绩单数据
const getDetails = (experiment) => {
  return `
    <strong>实验名称：</strong>${experiment.experimentName} <br/>
    <strong>实验得分：</strong>${experiment.score} 分 <br/>
    <br/>
    <strong>各部分得分情况：</strong><br/>
    实验操作评估（30%）：${(experiment.score * 0.3).toFixed(1)} 分<br/>
    数据拟合评估（30%）：${(experiment.score * 0.3).toFixed(1)} 分<br/>
    实验报告评估（40%）：${(experiment.score * 0.4).toFixed(1)} 分<br/>
  `;
};

// 查看成绩详情按钮的处理函数
const viewScoreDetails = (experiment) => {
  ElMessageBox.alert(getDetails(experiment), {
    title: '成绩详情',
    dangerouslyUseHTMLString: true
  });
};
</script>

<template>
  <div class="container">
    <!-- 成绩表格容器 -->
    <div class="tables-wrapper">
      <!-- 自动化实验成绩表格 -->
      <div class="score-table">
        <h3>自动化实验成绩</h3>
        <el-table :data="automatedScores" style="width: 100%">
          <el-table-column prop="experimentName" label="实验名称" width="180"></el-table-column>
          <el-table-column prop="score" label="成绩" width="100"></el-table-column>
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button type="primary" @click="viewScoreDetails(scope.row)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 虚拟化实验成绩表格 -->
      <div class="score-table">
        <h3>虚拟化实验成绩</h3>
        <el-table :data="virtualScores" style="width: 100%">
          <el-table-column prop="experimentName" label="实验名称" width="180"></el-table-column>
          <el-table-column prop="score" label="成绩" width="100"></el-table-column>
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button type="primary" @click="viewScoreDetails(scope.row)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white; /* 增加白色背景 */
  padding: 40px; /* 增加内边距，使布局更宽松 */
  border-radius: 8px; /* 让背景有圆角，视觉更舒适 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果，提升层次感 */
  width: 1100px; /* 设置最大宽度，居中显示 */
  height: 600px;
  margin: 20px auto; /* 上下和左右居中 */
}

.tables-wrapper {
  display: flex; /* 使用 Flexbox 布局，使表格并排 */
  justify-content: space-between; /* 让两个表格有空间分开 */
}

.score-table {
  width: 48%; /* 每个表格占据 48% 的宽度 */
}

h3 {
  font-size: 24px;
  margin-bottom: 20px; /* 标题和表格之间的距离 */
}

.el-table {
  width: 100%;
}

.el-button {
  font-size: 14px;
}
</style>
