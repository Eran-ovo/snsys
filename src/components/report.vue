<script setup>
import { ref } from 'vue';
import { ElMessageBox, ElUpload, ElButton } from 'element-plus';

// 实验类型选择
const experimentType = ref('automated'); // 默认选择自动化实验

// 上传报告的处理函数
const handleFileUpload = (file) => {
  console.log('上传的文件:', file);
  // 这里可以添加实际的文件上传逻辑
  ElMessageBox.alert('文件上传成功！', { title: '上传结果' });
};

// 上传报告按钮的处理函数
const uploadReport = () => {
  // 这里可以添加实际的上传报告逻辑
  ElMessageBox.alert('请上传实验报告。', { title: '上传报告' });
};
</script>

<template>
  <div class="container">
    <!-- 上传报告 -->
    <div class="upload">
      <el-upload
          class="upload-demo"
          drag
          action="#"
          accept=".pdf, .doc, .docx"
          :on-change="handleFileUpload"
          :show-file-list="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">点击或拖拽文件上传</div>
      </el-upload>
      <el-button type="primary" @click="uploadReport" style="margin-top: 20px; float: right">上传实验报告</el-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 1100px;
  height: 600px;
  margin: 20px auto;
}


el-upload {
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  cursor: pointer;
}

.el-upload__text {
  font-size: 16px;
  color: #409EFF;
  height: 450px;
}

.el-button {
  font-size: 14px;
}
</style>
