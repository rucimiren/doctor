<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="报告查询" fontsize="0.5rem">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">就诊人姓名:</span>
        <yd-input
          slot="right"
          v-model="inputName"
          required
          :show-success-icon="false"
          :show-error-icon="false"
          placeholder="请输入就诊人姓名"
          style="height:1.2rem;"
        ></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">就诊人ID:</span>
        <yd-input
          slot="right"
          v-model="inputId"
          required
          :show-success-icon="false"
          :show-error-icon="false"
          placeholder="请输入就诊人病历号"
          style="height:1.2rem;"
        ></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button
      v-show="showBoo"
      v-if="boo"
      size="large"
      type="disabled"
      disabled
      style="font-size:0.4rem"
    >我要查询</yd-button>
    <yd-button
      v-show="showBoo"
      v-else
      size="large"
      type="primary"
      style="font-size:0.4rem"
      @click.native="rebort"
    >我要查询</yd-button>
    <yd-button
      v-show="loadingBoo"
      size="large"
      type="primary"
      :loading="true"
      loading-txt="正在查询..."
    >primary</yd-button>
  </yd-layout>
</template>

<script>
import { getReport } from "../url/getData";
export default {
  data() {
    return {
      inputName: "",
      inputId: "",
      boo: true,
      loadingBoo: false,
      showBoo: true,
      order: []
    };
  },
  activated() {
    this.init();
  },
  watch: {
    inputName(newVal, oldVal) {
      if (newVal.length > 0 && this.inputId.length > 0) {
        this.boo = false;
      } else {
        this.boo = true;
      }
    },
    inputId(newVal, oldVal) {
      if (newVal.length > 0 && this.inputName.length > 0) {
        this.boo = false;
      } else {
        this.boo = true;
      }
    }
  }, //监听结尾
  methods: {
    rebort() {
      this.loadingBoo = true;
      this.showBoo = false;
      getReport(this.inputName, this.inputId).then(data => {
        // console.log(data.data);
        if (data.data.code == 4444) {
          this.$dialog.toast({
            mes: data.data.msg,
            timeout: 1500,
            icon: "error",
            callback: () => {
              this.loadingBoo = false;
              this.showBoo = true;
            }
          });
        } else {
          this.order = data.data;
          this.$dialog.toast({
            mes: "查询成功",
            timeout: 1500,
            icon: "success",
            callback: () => {
              this.$router.back = false;
              this.loadingBoo = false;
              this.showBoo = true;
              this.$router.replace({
                name: "reportlist",
                params: {
                  data: this.order
                }
              });
            }
          });
        }
      });
    },
    init() {
      this.$router.back = true;
      (this.inputName = ""),
        (this.inputId = ""),
        (this.boo = true),
        (this.loadingBoo = false);
      this.showBoo = true;
    }
  } //methods结尾
};
</script>

<style>
</style>