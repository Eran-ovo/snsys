<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  // 在这里根据 key 值进行路由跳转
  switch (key) {
    case '1':
      router.push({name: 'home'});
      break;
    case '2':
      router.push({name: 'grade'});
      break;
    case '3':
      router.push({name: 'report'});
      break;
    case '4':
      router.push({name: 'teacher'});
      break;
    default:
      break;
  }
};
const dialogFormVisible = ref(false);
const registerDialogVisible = ref(false);

const formLabelWidth = '120px';

const loginForm = ref({
  username: '',
  password: ''
});

const registerForm = ref({
  name:'',
  username: '',
  password: '',
  confirmPassword: '',
  teacher: ''
});

const loginRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};

const registerRules = {
  name: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirmPassword: [{ required: true, message: '请确认密码', trigger: 'blur' }],
  teacher: [{ required: true, message: '请输入任课老师', trigger: 'blur' }]
};

const loginFormRef = ref(null);
const registerFormRef = ref(null);

const showRegister = () => {
  dialogFormVisible.value = false;
  registerDialogVisible.value = true;
};
</script>

<template>
  <div class="common-layout">
    <el-container class="contianer">
      <el-header class="head">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            style="height: 80px"
        ><img src="../img/虚拟实验室.png" class="logo">
          <el-menu-item index="1" style="margin-left: 30%">首页</el-menu-item>
          <el-menu-item index="2">成绩查询</el-menu-item>
          <el-menu-item index="3">报告上传</el-menu-item>
          <el-menu-item index="4">教师端</el-menu-item>
          <el-button type="primary" style="float: right;font-size: 15px;margin: auto 0" @click="dialogFormVisible = true">
            登录&nbsp;&nbsp;/&nbsp;&nbsp;注册
          </el-button>
        </el-menu>
      </el-header>
      <el-main class="main">
        <div>
          <RouterView/>
        </div>
      </el-main>
      <el-footer class="foot">@2024 版权所有</el-footer>
    </el-container>
    <el-dialog v-model="dialogFormVisible"  title="欢迎登录" center class="dialog" width="25%" align-center>
      <el-form :model="loginForm"
               ref="loginFormRef"
               :rules="loginRules"
               :label-position="'right'"
               class="form-center"
               label-width="auto"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="Login" style="margin-left: 80%">登录</el-button>
        </el-form-item>

        <el-form-item>
          <el-button link @click="showRegister" type="warning" style="margin: auto">还没有账号？前往注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog v-model="registerDialogVisible" width="30%" align-center center>
      <template v-slot:title>
        <span>注册新账号</span>
      </template>

      <el-form
          :model="registerForm"
          ref="registerFormRef"
          :rules="registerRules"
          :label-position="'right'"
          class="form-center"
          label-width="auto"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="registerForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="registerForm.confirmPassword"  type="password"></el-input>
        </el-form-item>

        <el-form-item label="任课老师" prop="teacher">
          <el-input v-model="registerForm.teacher" ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="Register" style="margin-left: 80%">注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
@import "../assets/index.css";
</style>