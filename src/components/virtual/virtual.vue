<template>
  <div class="quiz-container">
    <h2 style="margin-top: 250px">液体饱和蒸汽压的测定实验知识点测试(总分30分)</h2>

    <!-- 选择题 -->
    <el-card class="card">
      <h3>一、选择题 (每题 4 分)</h3>
      <p>1. 纯液体饱和蒸气压随温度上升而增加，两者的关系遵循克-克方程，其微分式正确的是哪个选项？</p>
      <el-radio-group v-model="answers.q1">
        <el-radio label="A">
          A:
          <span class="formula" v-html="latexA"></span>
        </el-radio>
        <el-radio label="B">
          B:
          <span class="formula" v-html="latexB"></span>
        </el-radio>
        <el-radio label="C">
          C:
          <span class="formula" v-html="latexC"></span>
        </el-radio>
      </el-radio-group>

      <p>2. 当我们读得与装置连通的数字式真空仪为Ph，已知当前大气压为P气，装置内的压力为多少？</p>
      <el-radio-group v-model="answers.q2">
        <el-radio label="A">
          A:
          <span class="formula" v-html="latex2A"></span>
        </el-radio>
        <el-radio label="B">
          B:
          <span class="formula" v-html="latex2B"></span>
        </el-radio>
        <el-radio label="C">
          C:
          <span class="formula" v-html="latex2C"></span>
        </el-radio>
      </el-radio-group>

      <p>3. 本实验中我们采用什么方法进行实验的？</p>
      <el-radio-group v-model="answers.q3">
        <el-radio label="A">A: 动态法</el-radio>
        <el-radio label="B">B: 静态法</el-radio>
      </el-radio-group>
    </el-card>

    <!-- 填空题 -->
    <el-card class="card">
      <h3>二、填空题 (每空 3 分)</h3>
      <p>1. 在测量液体的饱和蒸气压时，我们使用动态法进行实验，是指在不同的
      <el-input v-model="answers.q4_1" placeholder="外界压力" class="small-input"/>
      条件，测定
      <el-input v-model="answers.q4_2" placeholder="液体沸点" class="small-input"/>
      的数据。而静态法是指在不同的
      <el-input v-model="answers.q4_3" placeholder="温度" class="small-input"/>
      条件，从而测定
      <el-input v-model="answers.q4_4" placeholder="液体饱和蒸气压" class="small-input"/>
      的数据。</p>
    </el-card>

    <!-- 判断题 -->
    <el-card class="card">
      <h3>三、判断题 (每题 3 分)</h3>
      <p>1. 在使用动态法进行实验时，若使用水银温度计进行对温度的测量，不需要进行校正。</p>
      <el-radio-group v-model="answers.q5">
        <el-radio label="true">对</el-radio>
        <el-radio label="false">错</el-radio>
      </el-radio-group>

      <p>2. 在使用动态法进行实验时，若发生空气倒灌，会导致压强的测量结果变大。</p>
      <el-radio-group v-model="answers.q6">
        <el-radio label="true">对</el-radio>
        <el-radio label="false">错</el-radio>
      </el-radio-group>
    </el-card>

    <!-- 提交按钮 -->
    <div class="button-container">
      <el-button type="primary" @click="submit">提交答案</el-button>
    </div>

    <!-- 分数显示 -->
    <!-- 得分结果弹窗 -->
    <el-dialog v-model="dialogVisible" align-center>
      <template #header>
        <h3>得分结果</h3>
      </template>
      <h3>您的得分是：{{ result }} / 30</h3>
      <div class="button-container">
      <el-button type="primary" @click="virtual">进入虚拟实验室</el-button>
    </div>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue';
const dialogVisible = ref(false) // 控制对话框显示
const answers = ref({
  q1: '',
  q2: '',
  q3: '',
  q4_1: '',
  q4_2: '',
  q4_3: '',
  q4_4: '',
  q5: '',
  q6: ''
});
const latexA = ref(`\\( \\frac{d\\ln\\left(\\frac{p}{\\text{Pa}}\\right)}{dT} = \\frac{\\Delta_l^g H_m}{RT^2} \\)`)
const latexB = ref(`\\( \\frac{d\\ln\\left(\\frac{p}{\\text{Pa}}\\right)}{dT} = -\\frac{\\Delta_l^g H_m}{RT^2} \\)`)
const latexC = ref(`\\( \\frac{d\\ln\\left(\\frac{p}{\\text{Pa}}\\right)}{dT} = \\frac{\\Delta_l^g H_m}{RT} \\)`)
const latex2A = ref(`\\( p = p_{\\text{大气}} - p_h \\)`)
const latex2B = ref(`\\( p = p_{\\text{大气}} + p_h \\)`)
const latex2C = ref(`\\( P = P_h \\)`)
const renderMath = () => {
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
}

// 页面加载时渲染公式
onMounted(() => {
  nextTick(() => {
    renderMath()
  })
})

const correctAnswers = {
  q1: 'A',
  q2: 'B',
  q3: 'A',
  q4_1: '外界压力',
  q4_2: '液体沸点',
  q4_3: '温度',
  q4_4: '液体饱和蒸气压',
  q5: 'false',
  q6: 'true'
};

const result = ref(null);

const submit = () => {
  console.log("提交按钮被点击了");
  dialogVisible.value = true;
  let score = 0;

  if (answers.value.q1 === correctAnswers.q1) score += 4;
  if (answers.value.q2 === correctAnswers.q2) score += 4;
  if (answers.value.q3 === correctAnswers.q3) score += 4;
  if (answers.value.q4_1 === correctAnswers.q4_1) score += 3;
  if (answers.value.q4_2 === correctAnswers.q4_2) score += 3;
  if (answers.value.q4_3 === correctAnswers.q4_3) score += 3;
  if (answers.value.q4_4 === correctAnswers.q4_4) score += 3;
  if (answers.value.q5 === correctAnswers.q5) score += 3;
  if (answers.value.q6 === correctAnswers.q6) score += 3;

  result.value = score;

  nextTick(() => {
    renderMath(); // 重新渲染公式
  });
};


const virtual = () => {

}
</script>
<style scoped>
.quiz-container {
  padding: 20px;
  background-color: white; /* 背景图片 */
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card {
  max-width: 1200px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result {
  margin-top: 20px;
  background-color: #f0f9eb;
  color: #67c23a;
  text-align: center;
  font-size: 1.5em;
}

h2, h3 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 10px;
}

el-input, el-radio-group {
  margin-bottom: 20px;
}

.small-input {
  width: 120px; /* 调整输入框的宽度 */
  display: inline-block;
  margin: 0 5px;
}
el-button {
  display: block;
  width: 100%;
  margin-top: 20px;
}
.button-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  margin-top: 20px;
}
el-dialog {
  z-index: 2000; /* 增加层级 */
}
</style>
