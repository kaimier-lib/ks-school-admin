<template>
  <div class="navbar">
    <div class="right-menu">
        <el-dropdown class="avatar-container">
            <span class="el-dropdown-link">
            Dropdown List
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <router-link to="/">
                    <el-dropdown-item>Home</el-dropdown-item>
                </router-link>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);


    .right-menu {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;

        .avatar-container {
            margin-right: 30px;

            .el-dropdown-link{
                display: flex;
                align-items: center;  /* 垂直居中对齐 */
                cursor: pointer;
                color: var(--el-color-primary);
                outline: none;
            }
            .el-dropdown-link:focus {
                outline: none; /* 移除键盘焦点时的轮廓 */
            }
        }
    }
}
</style>