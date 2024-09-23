<script setup>
import { ref } from 'vue';
import router from "../../../router/index.js";

// 定义数据变量
const pAtmosphere = ref(''); // 大气压输入
const roomTemperature = ref(''); // 室温输入

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
            第一步，组装装置，启动真空泵预热，连接并启动温度、真空度传感器 获得环境参数：
            <br>
            大气压 p：
            <el-input v-model="pAtmosphere" class="input"></el-input> Pa&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            室温 t0：
            <el-input v-model="roomTemperature" class="input"></el-input> ℃
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