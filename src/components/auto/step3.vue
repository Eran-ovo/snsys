<script setup>
import { ref } from 'vue';
import router from "../../../router/index.js";

// 定义数据变量
const vacuum = ref('');
const T1 = ref('');

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
            装置真空度达目标值，此时的真空度为:
            <el-input v-model="vacuum" class="input"></el-input> Pa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
            接通冷凝水，打开加热装置，待蒸馏水沸腾后，降慢供热速度，直到温度传感器读数稳定，记录此次数据T1:
            <el-input v-model="T1" class="input"></el-input> ℃
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
  width: 150px; /* 控制输入框宽度 */
  margin-left: 10px;
}
</style>