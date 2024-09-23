<script setup>
import { ref } from 'vue';
import router from "../../../router/index.js";

// 定义数据变量
const t1 = ref('');
const t2 = ref('');
const t3 = ref('');
const t4 = ref('');
const t5 = ref('');
const t6 = ref('');
const t7 = ref('');
const t8 = ref('');
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <div class="common-layout">
          <el-container>
            <el-aside width="800px">
              <img src="../../img/实验装置.jpg" alt="实验装置" >
            </el-aside>
            <el-main style="margin-left: -50px">
              <span>温度传感器：<br></span>
              <img src="../../img/温度传感器.png" alt="温度传感器" style="width: 80%">
              <br>
              <span>压力传感器：<br></span>
              <img src="../../img/真空度传感器.png" alt="压力传感器" style="width: 80%">
              <br>
            </el-main>
          </el-container>
        </div>
      </el-main>
      <el-footer>
        <div class="footer-form">
          <h1 style="line-height: 1.5;margin: 20px">
            记录实验数据ti（i=2,3,4...，且i≤n）数据收集完毕后，请关闭温度、真空度传感器、加热装置，关闭冷却水，点击按钮开始分析数据
            <br>
            t1:
            <el-input v-model="t1" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t2:
            <el-input v-model="t2" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t3:
            <el-input v-model="t3" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t4:
            <el-input v-model="t4" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t5:
            <el-input v-model="t5" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t6:
            <el-input v-model="t6" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t7:
            <el-input v-model="t7" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
            t8:
            <el-input v-model="t8" class="input"></el-input> ℃&nbsp;&nbsp;&nbsp;
          </h1>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.footer-form{
  margin-top: -30px;
  background: white;
  height: 70px;
}
.input {
  width: 50px; /* 控制输入框宽度 */
  margin-left: 10px;
}
</style>