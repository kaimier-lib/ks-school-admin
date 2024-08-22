<template>
    <div>
      <el-button type="primary" @click="showAddStudentForm">添加学生</el-button>
      <el-table :data="students" style="width: 100%">
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄" width="50"></el-table-column>
        <el-table-column prop="gender" label="性别" width="50"></el-table-column>
        <el-table-column prop="department" label="系别"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          @current-change="handlePageChange">
        </el-pagination>
      </div>
      
      <!-- <AddStudentForm v-if="isAddStudentFormVisible" :visible="isAddStudentFormVisible" @close="isAddStudentFormVisible = false" @refresh="refreshStudents" /> -->
      <add-student-form v-model:dialogVisible="isDialogVisible" />
  
    </div>
    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  import AddStudentForm from '../components/AddStudentForm.vue';
  
  const students = ref([
    { id: 1, name: '张三', age: 18, gender: '男', department: '计算机科学系', email: 'zhangsan@example.com', phone: '12345678901' },
    { id: 2, name: '李四', age: 19, gender: '女', department: '数学系', email: 'lisi@example.com', phone: '12345678902' },
    { id: 3, name: '王五', age: 20, gender: '男', department: '物理系', email: 'wangwu@example.com', phone: '12345678903' },
  ]);
  const currentPage = ref(1);
  const pageSize = ref(10);
  const total = ref(0);
  const isDialogVisible = ref(false);
  
  const fetchStudents = async (page, size) => {
    try {
      const response = await fetch(`http://localhost:8080/api/students?page=${page}&size=${size}`);
      const data = await response.json();
      students.value = data.records;
      total.value = data.total;
      currentPage.value = data.current + 1; // 后端返回的 current 是从 0 开始的
      pageSize.value = data.size;
    } catch (error) {
      ElMessage.error('获取学生信息失败');
    }
  };
  
  const handlePageChange = (page) => {
    fetchStudents(page - 1, pageSize.value); // 将页码转成从 0 开始
  };
  
  const showAddStudentForm = () => {
    isDialogVisible.value = true;
  };
  
  const refreshStudents = () => {
    fetchStudents(currentPage.value - 1, pageSize.value);
  };
  
  // onMounted(() => {
  //   fetchStudents(currentPage.value - 1, pageSize.value); // 初始加载第一页数据
  // });
  
  </script>
  
  <style>
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  