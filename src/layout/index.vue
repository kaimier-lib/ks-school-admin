<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>
  
  <script setup>
  import Sidebar from './components/Sidebar.vue';
  import Navbar from './components/Navbar.vue';
  import AppMain from './components/AppMain.vue';
  </script>
  
  <style lang="scss" scoped>
  @import "@/styles/variables.scss";

  .app-wrapper {
    display: flex;
    height: 100vh;
  }
  .sidebar-container {
    width: $sideBarWidth;
    background-color: #545c64;
  }
  
  .main-container {
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    // background-color: #f0f2f5;
    
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  </style>
  