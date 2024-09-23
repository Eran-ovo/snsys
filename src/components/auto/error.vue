<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

// 模拟学生信息和实验数据
const studentName = ref('张三');
const studentClass = ref('实验班级A');
const score = ref(92); // 百分制

// 模拟理论值和实验值，后续可从数据库中获取
const theoreticalTemperature = [100, 102, 105, 107, 110, 112, 115, 118];
const experimentalTemperature = [99, 101, 104, 106, 109, 111, 113, 116];

const theoreticalPressure = [101325, 101300, 101280, 101250, 101220, 101200, 101170, 101150];
const experimentalPressure = [101310, 101290, 101270, 101240, 101210, 101190, 101160, 101140];

// 计算相对误差
const calculateRelativeError = (theoretical, experimental) => {
  return Math.abs((theoretical - experimental) / theoretical * 100).toFixed(2);
};

// 计算平均相对误差
const calculateAverageError = (theoreticalValues, experimentalValues) => {
  let totalError = 0;
  for (let i = 0; i < theoreticalValues.length; i++) {
    totalError += parseFloat(calculateRelativeError(theoreticalValues[i], experimentalValues[i]));
  }
  return (totalError / theoreticalValues.length).toFixed(2);
};

// 计算温度和大气压的平均相对误差
const avgTemperatureError = ref(calculateAverageError(theoreticalTemperature, experimentalTemperature));
const avgPressureError = ref(calculateAverageError(theoreticalPressure, experimentalPressure));

// 模拟各部分得分
const operationScore = ref(28); // 实验操作评估 30%
const fittingScore = ref(27); // 数据拟合评估 30%
const reportScore = ref(37); // 实验报告评估 40%

// 查看成绩详情按钮的处理函数
const viewScoreDetails = () => {
  ElMessageBox.alert(`
    <strong>学生姓名：</strong>${studentName.value} <br/>
    <strong>班级：</strong>${studentClass.value} <br/>
    <strong>总成绩：</strong>${score.value} 分 <br/>
    <br/>
    <strong>温度数据对比：</strong><br/>
    理论值：${theoreticalTemperature.join(', ')} <br/>
    实验值：${experimentalTemperature.join(', ')} <br/>
    平均相对误差：${avgTemperatureError.value}% <br/>
    <br/>
    <strong>大气压数据对比：</strong><br/>
    理论值：${theoreticalPressure.join(', ')} Pa<br/>
    实验值：${experimentalPressure.join(', ')} Pa<br/>
    平均相对误差：${avgPressureError.value}% <br/>
    <br/>
    <strong>各部分得分情况：</strong><br/>
    实验操作评估（30%）：${operationScore.value} 分<br/>
    数据拟合评估（30%）：${fittingScore.value} 分<br/>
    实验报告评估（40%）：${reportScore.value} 分<br/>
  `, {
    title: '本次实验成绩：',
    dangerouslyUseHTMLString: true
  });
};
</script>

<template>
  <div class="container">
    <!-- 平均相对误差显示 -->
    <div class="relative-error">
      <h3><br>平均相对误差：</h3>
      (相对误差=|理论值-实验值|/理论值*100%)
      <p>温度平均相对误差：{{ avgTemperatureError }}%</p>
      <p>大气压平均相对误差：{{ avgPressureError }}%</p>
    </div>

    <!-- 可能造成误差的原因 -->
    <div class="error-reason">
      <h3>可能造成误差的原因：</h3>
      <label>原因1：<br><br>原因2：<br><br>原因3：<br><br>原因4：<br><br></label>
    </div>

    <!-- 实验成绩 -->
    <div class="experiment-score">
      <h3>你本次实验的成绩为：{{ score }} 分</h3>
    </div>

    <!-- 查看成绩详情按钮 -->
    <div class="view-score-details">
      <el-button type="primary" @click="viewScoreDetails" style="float: right;margin-right: 100px">查看成绩详情</el-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: -69px;
  height: 650px;
  width: 1262px;
}

.relative-error,
.error-reason,
.experiment-score {
  margin: 40px;
}

.view-score-details {
  margin-top: 20px;
}
</style>
