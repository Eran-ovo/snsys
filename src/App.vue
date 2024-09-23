<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="background">
    <RouterView/>
  </div>
</template>

<style scoped>
.background {
  background-image: url('img/background.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh; /* 视窗高度 */
  overflow: hidden;
}
</style>
