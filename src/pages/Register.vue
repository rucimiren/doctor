<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="注册">
      <router-link to="/login" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <div class="logo">
      <img src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" alt />
    </div>

    <yd-cell-group style="margin-top:1rem;background-color:#fff;">
      <yd-cell-item>
        <yd-icon slot="icon" name="phone3" size="0.5rem"></yd-icon>
        <yd-input slot="right" v-model="mobileInput" regex="mobile" placeholder="请输入手机号码"></yd-input>
        <yd-button v-if="issend" slot="right" type="warning" @click.native="getNote">获取短信验证码</yd-button>
        <yd-button v-else slot="right" type="disabled" disabled>{{num}}秒后重新获取</yd-button>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">验证码：</span>
        <yd-input slot="right" v-model="yanInput" placeholder="请输入验证码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-checkbox-group v-model="checkbox" style="padding-left:0.2rem">
      <yd-checkbox val="我同意"></yd-checkbox>
      <span class="zhuce_a" @click="fuwu">《用户服务协议》</span>
    </yd-checkbox-group>
    <yd-button
      style="font-size:0.5rem;"
      size="large"
      type="primary"
      bgcolor="rgb(2, 113, 188)"
      color="rgb(255, 255, 255)"
      @click.native="regis"
    >注册</yd-button>
  </yd-layout>
</template>

<script>
import { getNoteCode, isMobile } from "../url/getData";
export default {
  data() {
    return {
      num: 10,
      issend: true,
      mobileInput: "",
      yanInput: "",
      noteYanCode: "",
      checkbox: [],
      isNote: false
    };
  },
  activated() {
    this.$router.back = true;
  },
  methods: {
    fuwu() {
      this.$router.back = false;
      this.$router.push("/mustknow");
    },
    //判断手机号是否注册以及获取短信验证码接口
    isMobile() {
      isMobile(this.mobileInput).then(data => {
        // console.log(data.data);
        if (data.data.code == 200) {
          getNoteCode(this.mobileInput).then(data => {
            // console.log(data.data);
            if (data.data.code == 200) {
              this.issend = false;
              let time = setInterval(() => {
                this.num--;
                this.num = this.num < 10 ? "0" + this.num : this.num;
                if (this.num < 1) {
                  this.issend = true;
                  this.num = 10;
                  clearInterval(time);
                }
              }, 1000);
              this.isNote = true;
              this.noteYanCode = data.data.data;
              this.$dialog.alert({
                mes: "验证码是:" + data.data.data + ",内部测试,记住了就关闭弹窗"
              });
            }
          });
        } else {
          this.$dialog.toast({
            mes: "手机号已注册,请尝试登录",
            timeout: 1500,
            icon: "error",
            callback: () => {}
          });
        }
      });
    },
    //判断手机格式事件
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
    //验证码按钮事件
    getNote() {
      if (this.mobile()) {
        this.isMobile();
      }
    },
    //判断验证码是否正确
    isYan() {
      if (this.yanInput == this.noteYanCode) {
        return true;
      } else {
        this.$dialog.toast({
          mes: "请检查验证码是否输入正确",
          timeout: 1500,
          icon: "error",
          callback: () => {}
        });
        return false;
      }
    },
    //注册按钮事件
    regis() {
      if (this.isNote) {
        if (this.isYan()) {
          if (this.checkbox[0] == "我同意") {
            this.$dialog.toast({
              mes: "注册成功",
              timeout: 1500,
              icon: "success",
              callback: () => {
                this.$router.back = false;
                this.$router.replace({
                  name: "setpwd",
                  params: {
                    mobile: this.mobileInput
                  }
                });
              }
            });
          } else {
            this.$dialog.toast({
              mes: "还未阅读用户协议",
              timeout: 1500,
              icon: "error",
              callback: () => {}
            });
          }
        }
      } else {
        this.$dialog.toast({
          mes: "还未发送短信验证码",
          timeout: 1500,
          icon: "error",
          callback: () => {}
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
.zhuce_a {
  font-size: 0.5rem;
  color: #00f;
}
</style>