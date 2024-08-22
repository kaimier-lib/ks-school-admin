<template>
  <el-dialog :model-value="dialogVisible" title="添加学生信息" @close="closeDialog" @update:model-value="updateDialogVisible">
    <el-form :model="student">
      <el-form-item label="姓名">
        <el-input v-model="student.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="student.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="student.gender">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="系别">
        <el-input v-model="student.department"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="student.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="student.phone"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="submitForm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios'; // 确保引入 axios

export default {
  name: 'AddStudentForm',
  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const student = ref({
      name: '',
      age: '',
      gender: '',
      department: '',
      email: '',
      phone: ''
    });

    const submitForm = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/students', student.value, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        ElMessage.success('学生信息添加成功');
        emit('close');
        emit('refresh');
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        ElMessage.error('添加学生信息失败');
      }
    };

    const closeDialog = () => {
      emit('close');
    };

    watch(() => props.visible, (newVal) => {
      if (!newVal) {
        student.value = {
          name: '',
          age: '',
          gender: '',
          department: '',
          email: '',
          phone: ''
        };
      }
    });

    return {
      student,
      submitForm,
      closeDialog
    };
  }
};
</script>
