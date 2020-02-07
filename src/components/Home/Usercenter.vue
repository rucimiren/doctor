<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="个人中心"></yd-navbar>

    <div id="myhead">
      <img src="http://static.yufenghen.cn/vueserver/resource/img/touxiang.png" alt />
      <span>{{username}}</span>
    </div>

    <div class="white">
      <yd-icon name="ucenter" slot="icon" color="#FF685D"></yd-icon>
      <span>就诊人管理</span>
      <div class="you">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </div>
    </div>
    <div class="white" @click="registration">
      <yd-icon name="feedback" slot="icon" color="#FF685D"></yd-icon>
      <span>就诊记录查询</span>
      <div class="you">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </div>
    </div>
    <div class="white">
      <yd-icon name="verifycode" slot="icon" color="#1c98fc"></yd-icon>
      <span>账号管理</span>
      <div class="you">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </div>
    </div>

    <div class="white" @click="logout">
      <yd-icon name="setting" slot="icon" color="#FF685D"></yd-icon>

      <span>帮助与设置</span>
      <div class="you">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </div>
    </div>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  activated() {
    this.$emit("change", 2);
    if (sessionStorage.getItem("username")) {
      this.username = sessionStorage.getItem("username");
    } else {
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
    //注销页面
    logout() {
      this.$router.push("/logout");
    },
    //挂号列表
    registration() {
      this.$router.push("/registration");
    }
  }
};
</script>

<style>
#myhead {
  height: 2.5rem;
  border-bottom: 1px solid #000;
  line-height: 2.5rem;
  padding-left: 0.5rem;
}
#myhead img {
  width: 2rem;
  margin: 0.2rem;
}
#myhead span {
  vertical-align: 1rem;
  font-size: 0.6rem;
}
.white {
  background: #fff;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.white span {
  color: #333;
  font-size: 0.3rem;
  margin-left: 0.2rem;
  vertical-align: 0.1rem;
}
.you {
  height: 100%;
}
</style>