<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="登录">
      <router-link :to="mypath" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
      <div slot="right" @click="zhuce">
        <span style="color:#1c98fc;">注册</span>
      </div>
    </yd-navbar>

    <div class="logo">
      <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt />
    </div>

    <yd-cell-group style="margin-top:1rem;background-color:#fff;">
      <yd-cell-item style="padding-bottom:0.2rem;">
        <span slot="left">手机号：</span>
        <yd-input slot="right" v-model="mobileInput" regex="mobile" placeholder="请输入手机号"></yd-input>
      </yd-cell-item>
      <yd-cell-item style="padding-bottom:0.2rem;padding-top:0.1rem">
        <span slot="left">密&nbsp;&nbsp;&nbsp;码：</span>
        <yd-input slot="right" type="password" v-model="pwdInput" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
      <yd-button
        style="font-size:0.6rem;font-weight:900"
        size="large"
        type="primary"
        bgcolor="rgb(2, 113, 188)"
        color="rgb(255, 255, 255)"
        @click.native="login"
      >登录</yd-button>
    </yd-cell-group>
  </yd-layout>
</template>

<script>
import { getLogin } from "../url/getData";
export default {
  data() {
    return {
      mypath: "/",
      mobileInput: "",
      pwdInput: ""
    };
  },
  activated() {
    this.$router.back = true;
    if (sessionStorage.getItem("regusername")) {
      this.mobileInput = sessionStorage.getItem("regusername");
      sessionStorage.removeItem("regusername");
    }
    this.pwdInput = "";
  },
  methods: {
    mobile() {
      if (/^1[3-9]\d{9}$/.test(this.mobileInput)) {
        return true;
      } else {
        this.$dialog.toast({
          mes: "手机号格式错误",
          timeout: 1500,
          icon: "error",
          callback: () => {}
        });
        return false;
      }
    },
    pwd() {
      if (/^\w{6,}$/.test(this.pwdInput)) {
        return true;
      } else {
        this.$dialog.toast({
          mes: "密码格式错误",
          timeout: 1500,
          icon: "error",
          callback: () => {}
        });
        return false;
      }
    },
    login() {
      if (this.mobile() && this.pwd()) {
        let data = new URLSearchParams();
        data.append("mobile", this.mobileInput);
        data.append("password", this.pwdInput);
        this.$axios({
          url: "http://tools.yufenghen.cn/mock/vueserver/login.php",
          method: "post",
          data: data
        }).then(data => {
          if (data.data.code == 4444) {
            this.$dialog.toast({
              mes: data.data.msg + "请检查手机号和密码是否正确",
              timeout: 1500,
              icon: "error",
              callback: () => {
                this.pwdInput = "";
              }
            });
          } else {
            sessionStorage.setItem("username", this.mobileInput);
            this.$dialog.toast({
              mes: data.data.msg,
              timeout: 1500,
              icon: "success",
              callback: () => {
                this.$router.replace(sessionStorage.getItem("path"));
              }
            });
          }
        });

        /* getLogin(this.mobileInput, this.pwdInput).then(data => {
          // console.log(data.data);
          if (data.data.code == 4444) {
            this.$dialog.toast({
              mes: data.data.msg + "请检查手机号和密码是否正确",
              timeout: 1500,
              icon: "error",
              callback: () => {
                this.pwdInput = "";
              }
            });
          } else {
            sessionStorage.setItem("username", this.mobileInput);
            this.$dialog.toast({
              mes: data.data.msg,
              timeout: 1500,
              icon: "success",
              callback: () => {
                this.$router.replace(sessionStorage.getItem("path"));
              }
            });
          }
        }); */
      }
    },
    zhuce() {
      this.$router.back = false;
      this.$router.replace("/register");
    }
  }
};
</script>

<style>
.logo {
  height: 3rem;
  background-color: #fff;
  line-height: 3rem;
  text-align: center;
}
.logo img {
  width: 3rem;
}
</style>