<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">欢迎登录</h3>
      </div>
      <el-form-item>
        <el-input 
          v-model="username" 
          placeholder="请输入用户名"
        >
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input 
          v-model="password" 
          placeholder="请输入密码"
          :type="passwordVisible?'text':'password'"
        >
          <template #prefix>
            <el-icon><Lock /></el-icon>
          </template>
          <template #suffix>
            <!-- <el-icon @click="togglePasswordVisibility"> -->
            <el-icon @click="togglePasswordVisibility">
              <span v-if="passwordVisible"><View /></span>
              <span v-else><EyeClosed /><Hide /></span>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import Layout from '@/layout/index.vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')

const passwordVisible = ref(false)
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}

const router = useRouter()

const login = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', {
      username: username.value,
      password: password.value
    });
    const token = response.data.token;
    console.log('登录成功', token);

    localStorage.setItem('token', token); // 存储Token
    router.push({ name: 'Layout' }); // 重定向到首页
  } catch (error) {
    console.error('登录失败', error);
    ElMessage.error('用户名或密码错误');
  }
}
</script>


<style lang="scss" scoped>
.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
  width: 100vw;
  height: 100vh;
  overflow: hidden; // 防止内容溢出和强制隐藏滚动条

  .login-form{
    position: relative;
    width: 520px;
    max-width: 100%;
    // margin: 0 auto;
    padding: 0 35px;
    overflow: hidden;
    margin-top: -300px;

    .title-container{
      display: flex;
      justify-content: center;
      align-content: center;
      height: 47px;
      margin-bottom: 40px;
      
      .title{
        color: #fff;
        font-size: 26px;
      }
    }

    :deep(.el-input__wrapper) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 47px;

      appearance: none; 
      box-shadow: none;

    }

    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 100%;


      input{
        background: transparent;
        border: 0px;
        appearance: none; 
        border-radius: 0px;
        height: 47px;
        color: #fff;
        border-radius: 10px;


      }


    }
      /* 添加光标变化样式 */
      :deep(.el-icon) {
        cursor: pointer;
      }
  }

}
</style>
