<template>
  <div class="div1">
    <label class="p">“液体饱和蒸气压的测定”</label>
    <div class="div">
      <el-button link class="btn" @click="auto">自动化实验</el-button>
      <el-button link class="btn" @click="virtual">虚拟化实验</el-button>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/home.css";
</style>

<script setup lang="ts">
import router from "../../router/index.js";
const auto =  () => {
  router.push({name: 'auto'});
}
const virtual =  () => {
  router.push({name: 'virtual'});
}
</script>