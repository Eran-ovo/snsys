<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';

// 学生实验成绩数据
const studentScores = ref([
  { id: 1, name: '学生A', automatedScore: 85, virtualScore: 90 },
  { id: 2, name: '学生B', automatedScore: 88, virtualScore: 92 }
]);

// 待批阅的学生报告名单
const pendingReports = ref([
  { id: 1, studentName: '学生A', reportId: 'R001' },
  { id: 2, studentName: '学生B', reportId: 'R002' }
]);

// 当前待评分的报告
const currentReport = ref(null);

// 评分输入框
const score = ref('');

// 处理评分逻辑
const handleScore = () => {
  if (!currentReport.value || score.value.trim() === '') {
    ElMessage.error('请选择一个报告并输入评分！');
    return;
  }
  // 这里可以添加实际的评分逻辑，比如调用 API 提交评分
  ElMessage.success(`对报告 ${currentReport.value.reportId} 评分为 ${score.value} 分`);
  score.value = ''; // 清空评分框
  currentReport.value = null; // 清空当前报告
};

// 处理点击评分按钮
const rateReport = (report) => {
  currentReport.value = report;
};

// 处理登录后的界面显示
const router = useRouter();
const showMainContent = ref(false);

const handleLogin = () => {
  showMainContent.value = true; // 登录成功，显示主内容
  router.push({ name: 'main' }); // 跳转到主页面
};
</script>

<template>
  <div>
    <!-- 登录页面 -->
    <div v-if="!showMainContent">
      <el-form class="login-form" :model="{ teacherId, password }" ref="form" label-width="120px">
        <label>登录</label>
        <el-form-item label="教师编号" prop="teacherId" required>
          <el-input v-model="teacherId" placeholder="请输入教师编号" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input
              type="password"
              v-model="password"
              placeholder="请输入密码"
              show-password
              style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 主页面 -->
    <div v-else class="main-content">
      <!-- 学生成绩表 -->
      <div class="score-table">
        <h3>学生实验成绩</h3>
        <el-table :data="studentScores" style="width: 100%">
          <el-table-column prop="name" label="学生姓名" width="180"></el-table-column>
          <el-table-column prop="automatedScore" label="自动化实验成绩" width="180"></el-table-column>
          <el-table-column prop="virtualScore" label="虚拟化实验成绩" width="180"></el-table-column>
        </el-table>
      </div>

      <!-- 待批阅的学生报告名单 -->
      <div class="report-table" style="margin-top: 40px;">
        <h3>待批阅的学生报告</h3>
        <el-table :data="pendingReports" style="width: 100%">
          <el-table-column prop="studentName" label="学生姓名" width="180"></el-table-column>
          <el-table-column prop="reportId" label="报告编号" width="180"></el-table-column>
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button
                  type="primary"
                  @click="rateReport(scope.row)"
              >
                评分
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 评分输入框 -->
      <div v-if="currentReport" class="rating-section" style="margin-top: 40px;">
        <h3>评分 - 报告编号: {{ currentReport.reportId }}</h3>
        <el-form :model="{ score }" ref="scoreForm" label-width="120px">
          <el-form-item label="评分" prop="score" required>
            <el-input v-model="score" placeholder="请输入评分（百分制）" type="number" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleScore">提交评分</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.main-content {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 1200px;
  margin: 20px auto;
}

.score-table, .report-table {
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.el-table {
  width: 100%;
}

.el-button {
  font-size: 14px;
}
</style>
