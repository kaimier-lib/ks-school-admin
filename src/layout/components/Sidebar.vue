<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/">首页</el-menu-item>
      
      <el-sub-menu index="2">
        <template #title>
          <span>学生管理</span>
        </template>
        
        <el-menu-item-group title="学生管理">
          <el-menu-item index="/students">学生信息列表</el-menu-item>
          <el-menu-item index="/option2">学生成绩</el-menu-item>
          <el-menu-item index="/option3">出勤记录</el-menu-item>

        </el-menu-item-group>
      </el-sub-menu>

      <!-- 用户管理 -->
      <el-sub-menu index="4">
        <template #title>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/users">用户列表</el-menu-item>
        <el-menu-item index="/option8">角色管理</el-menu-item>
        <el-menu-item index="/option9">权限管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

const handleMenuSelect = (index) => {
  router.push(index);
};
</script>