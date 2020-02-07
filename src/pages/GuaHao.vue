<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="预约挂号" fontsize="0.5rem">
      <router-link to="/" replace slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-cell-group>
      <yd-cell-item arrow @click.native="select('/keshi')">
        <yd-icon name="home-outline" slot="icon" color="#1c98fc"></yd-icon>
        <span slot="left">{{orderfu.keshi}}</span>
        <span slot="right">(必选)</span>
      </yd-cell-item>

      <yd-cell-item arrow @click.native="select('/doctorlist')">
        <yd-icon name="ucenter-outline" slot="icon" color="#1c98fc"></yd-icon>
        <span slot="left">{{orderfu.doctorName}}</span>
        <span slot="right">(必选)</span>
      </yd-cell-item>

      <yd-cell-item>
        <yd-icon name="time" slot="icon" color="#1c98fc"></yd-icon>
        <span slot="left">选择挂号时间:</span>
        <mu-date-input
          slot="right"
          @change="change"
          v-model="timeInput"
          label="选择日期"
          label-float
          full-width
        ></mu-date-input>
      </yd-cell-item>
      <yd-cell-item>
        <img
          slot="icon"
          style="width:0.5rem;height:0.5rem;"
          src="http://tools.yufenghen.cn/mock/vueserver/image/guahao/renminbi.png"
          alt
        />
        <span slot="left">挂号费</span>
        <span slot="right" style="color:#1c98fc">{{order.fee}}元</span>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group>
      <yd-cell-item>
        <yd-icon name="ucenter-outline" slot="icon" color="#1c98fc"></yd-icon>
        <yd-input
          style="background-color:#ccc;border-radius:0.3rem;height:80%;padding-left:0.2rem"
          slot="right"
          v-model="order.name"
          placeholder="请填写就诊人姓名(必填)"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item type="label">
        <img
          style="width:0.5rem;height:0.5rem;"
          slot="icon"
          src="http://tools.yufenghen.cn/mock/vueserver/image/guahao/gender.png"
          alt
        />
        <select slot="right" v-model="order.gender" style="font-size:0.35rem" @click="xingbie">
          <option value>请选择性别</option>
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </yd-cell-item>

      <yd-cell-item>
        <img
          slot="icon"
          style="width:0.5rem;height:0.5rem;"
          src="http://tools.yufenghen.cn/mock/vueserver/image/guahao/usercare.png"
          alt
        />
        <yd-input
          style="background-color:#ccc;border-radius:0.3rem;height:80%;padding-left:0.2rem"
          slot="right"
          v-model="order.cardID"
          placeholder="请输入身份证号码(必填)"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <yd-icon name="phone3" slot="icon" color="#1c98fc"></yd-icon>
        <yd-input
          style="background-color:#ccc;border-radius:0.3rem;height:80%;padding-left:0.2rem"
          slot="right"
          v-model="order.mobile"
          placeholder="请输入手机号(必填)"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <yd-icon name="feedback" slot="icon" color="#1c98fc"></yd-icon>
        <yd-input
          style="background-color:#ccc;border-radius:0.3rem;height:80%;padding-left:0.2rem"
          slot="right"
          v-model="order.des"
          placeholder="请简单描述病情(必填)"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <hr />
    <div style="font-size:0.5rem;padding:0 0.2rem">
      <span style="color:red">温馨提示:</span>
      <span>如果就诊当日未到医院就诊,挂号费用不予退回!!!</span>
    </div>
    <yd-button v-if="guahaoboo" size="large" type="disabled" disabled>我要挂号</yd-button>
    <yd-button v-else size="large" type="primary" @click.native="sendgua">我要挂号</yd-button>
  </yd-layout>
</template>

<script>
import { getfee, saveGuaHaoInfo } from "../url/getData";
export default {
  data() {
    return {
      timeInput: "",
      guahaoboo: true,
      order: {
        mobile: "",
        doctorId: "",
        time: "",
        fee: "",
        name: "",
        cardID: "",
        guaHaoMobile: "",
        des: "", //描述
        gender: "" //性别
      },
      orderfu: {
        keshi: "选择科室",
        doctorName: "选择医生"
      }
    };
  },
  watch: {
    orderfu: {
      handler() {
        if (
          this.orderfu.keshi != "选择科室" &&
          this.orderfu.doctorName != "选择医生"
        ) {
          getfee(this.order.doctorId).then(data => {
            // console.log(data.data);
            if (data.data.code == 200) {
              this.order.fee = data.data.data;
            }
          });
        }

        if (
          this.orderfu.keshi != "选择科室" &&
          this.orderfu.doctorName != "选择医生" &&
          this.order.time != "" &&
          this.order.fee != "" &&
          this.order.name != "" &&
          this.order.cardID != "" &&
          this.order.mobile != "" &&
          this.order.des != "" &&
          this.order.gender != ""
        ) {
          this.guahaoboo = false;
        } else {
          this.guahaoboo = true;
        }
      },
      deep: true
    },
    order: {
      handler() {
        if (
          this.orderfu.keshi != "选择科室" &&
          this.orderfu.doctorName != "选择医生" &&
          this.order.time != "" &&
          this.order.fee != "" &&
          this.order.name != "" &&
          this.order.cardID != "" &&
          this.order.mobile != "" &&
          this.order.des != "" &&
          this.order.gender != ""
        ) {
          this.guahaoboo = false;
        } else {
          this.guahaoboo = true;
        }
      },
      deep: true
    }
  },
  activated() {
    this.$router.back = true;
    this.init();
  },
  methods: {
    xingbie() {
      // console.log(this.order.gender);
    },
    init() {
      this.order.fee = "";
      if (this.$route.params.keshi) {
        this.orderfu.keshi = this.$route.params.keshi;
      }
      if (this.$route.params.name) {
        this.orderfu.doctorName = this.$route.params.name;
        this.order.doctorId = this.$route.params.id;
      }
      //   console.log(this.order, this.orderfu);
    },
    change(val) {
      //   console.log(val, this.order.time);
      let d = new Date(val);
      let year = d.getFullYear();
      let mon = d.getMonth() + 1;
      let day = d.getDate();
      mon = mon < 10 ? "0" + mon : mon;
      day = day < 10 ? "0" + day : day;
      this.order.time = year + "-" + mon + "-" + day;
      //   console.log(this.order);
    },
    select(path) {
      this.$router.back = false;
      this.$router.push(path);
    },
    sendgua() {
      this.order.guaHaoMobile = sessionStorage.getItem("username");
      Object.assign(this.order, this.orderfu);
      // console.log(this.order);
      let str = JSON.stringify(this.order);
      // console.log(str);
      saveGuaHaoInfo(str).then(data => {
        // console.log(data.data);
        if (data.data.code == 200) {
          this.$dialog.toast({
            mes: data.data.msg,
            timeout: 1500,
            icon: "success",
            callback: () => {
              this.$router.back = false;
              this.$router.replace("/registration");
              (this.order = {
                mobile: "",
                doctorId: "",
                time: "",
                fee: "",
                name: "",
                cardID: "",
                guaHaoMobile: "",
                des: "", //描述
                gender: "" //性别
              }),
                (this.orderfu = {
                  keshi: "选择科室",
                  doctorName: "选择医生"
                });
            }
          });
        }
      });
    }
  }
};
</script>

<style>
</style>