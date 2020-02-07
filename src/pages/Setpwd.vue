<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="设置密码"></yd-navbar>

    <div class="logo">
      <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt />
    </div>

    <yd-cell-group style="margin-top:1rem;background-color:#fff;">
      <yd-cell-item>
        <span slot="left">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
        <yd-input slot="right" type="password" v-model="input1" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">确认密码：</span>
        <yd-input slot="right" type="password" v-model="input2" placeholder="再次输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button
      style="font-size:0.5rem;margin-top:0.5rem;"
      size="large"
      type="primary"
      bgcolor="rgb(2, 113, 188)"
      color="rgb(255, 255, 255)"
      @click.native="setp"
    >立即设置</yd-button>
  </yd-layout>
</template>

<script>
import { reg } from "../url/getData";
export default {
  data() {
    return {
      mobile: "",
      input1: "",
      input2: ""
    };
  },
  mounted() {
    if (!this.$route.params.mobile) {
      this.$dialog.toast({
        mes: "注册账号异常,请重新注册",
        timeout: 1500,
        icon: "error",
        callback: () => {
          this.$router.push("/register");
        }
      });
    }
  },
  activated() {
    this.$router.back = true;
    this.mobile = this.$route.params.mobile;
  },
  methods: {
    inputone() {
      if (/^\w{6,}$/.test(this.input1)) {
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
    inputtwo() {
      if (this.input2 == this.input1) {
        return true;
      } else {
        this.$dialog.toast({
          mes: "两次密码不一致",
          timeout: 1500,
          icon: "error",
          callback: () => {}
        });
        return false;
      }
    },
    setp() {
      if (this.inputone() && this.inputtwo()) {
        reg(this.mobile, this.input1).then(data => {
          //   console.log(data.data);
          if (data.data.code == 200) {
            sessionStorage.setItem("regusername", data.data.data);
            this.$dialog.toast({
              mes: "密码设置成功",
              timeout: 1500,
              icon: "success",
              callback: () => {
                this.$router.replace("/login");
              }
            });
          }
        });
      }
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