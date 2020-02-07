<template>
  <yd-tabbar active-color="#1c98fc" slot="tabbar" :fixed="true">
    <yd-tabbar-item title="首页" type="link" link="/" :active="footer==0?true:false">
      <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="动态" type="link" link="/dongtai" :active="footer==1?true:false">
      <yd-icon name="feedback" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item
      title="个人中心"
      type="link"
      :active="footer==2?true:false"
      @click.native="isUser('/usercenter')"
    >
      <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</template>

<script>
export default {
  props: ["footer"],
  data() {
    return {};
  },

  methods: {
    isUser(mypath) {
      if (!sessionStorage.getItem("username")) {
        this.$dialog.toast({
          mes: "还未登录",
          timeout: 1500,
          icon: "error",
          callback: () => {
            this.$router.push("/login");
            sessionStorage.setItem("path", mypath);
          }
        });
      } else {
        // this.mylink = mypath;
        this.$router.replace(mypath);
      }
    }
  },
  mounted() {}
};
</script>

<style>
</style>