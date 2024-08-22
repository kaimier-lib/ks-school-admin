<template>
  <section class="app-main">
    <router-view />
  </section>
</template>

<script setup>

</script>

<style scoped>
.app-main {
  width: 100%;
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 80px;
}
</style>