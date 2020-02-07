<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="满意度调查">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div style="font-size:0.7rem">满意度调查正在开发中......</div>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {};
  },

  activated() {
    this.$router.back = true;
  }
};
</script>

<style>
</style>