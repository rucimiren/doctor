<template>
  <yd-layout>
    <yd-navbar slot="navbar" fontsize="0.5rem" title="注销">
      <router-link to="/usercenter" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-button style="font-size:0.5rem;" @click.native="openConfrim" size="large" type="danger">注销</yd-button>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  activated() {
    this.$router.back = true;
    if (!sessionStorage.getItem("username")) {
      this.$dialog.toast({
        mes: "还未登录",
        timeout: 1500,
        icon: "error",
        callback: () => {
          this.$router.push("/login");
          // sessionStorage.setItem("path", mypath);
        }
      });
    }
  },
  methods: {
    openConfrim() {
      this.$dialog.confirm({
        title: "提示!",
        mes: "确定要注销吗",
        opts: () => {
          sessionStorage.removeItem("username");
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style>
</style>