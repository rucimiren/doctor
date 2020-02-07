<template>
  <yd-layout>
    <yd-navbar slot="navbar" fontsize="0.5rem" title="报告列表">
      <router-link to="/" replace slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="order" v-for="(item,index) in orderList" :key="index">
      <div>
        <span>病人姓名:</span>
        <div class="you">{{item.patientname}}</div>
      </div>

      <div>
        <span>化验项目:</span>
        <div class="you">{{item.checkname}}</div>
      </div>

      <div>
        <span>化验时间:</span>
        <div class="you">{{item.checktime}}</div>
      </div>

      <div v-if="item.checkstate==1" style="height: 2rem;">
        <span>报告状态:</span>
        <span class="you" style="height:1rem">报告已出</span>
        <yd-button style="margin:0" size="large" type="primary">查看结果</yd-button>
      </div>

      <div v-else style="height: 2rem;">
        <span>报告状态:</span>
        <span class="you" style="height:1rem">化验中...</span>

        <yd-button style="margin:0;" size="large" type="disabled" disabled>查看结果</yd-button>
      </div>
    </div>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {
      orderList: []
    };
  },

  activated() {
    this.$router.back = true;

    if (this.$route.params.data) {
      this.orderList = this.$route.params.data;
    } else {
      this.$dialog.toast({
        mes: "报告异常,请重新查询",
        timeout: 1500,
        icon: "error",
        callback: () => {
          this.$router.replace("/report");
        }
      });
    }
  }
};
</script>

<style>
.order {
  font-size: 0.33rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-bottom: 0.5rem;
}
.order > div {
  height: 1rem;
  line-height: 1rem;
}
.order > div > span {
  margin-right: 0.2rem;
}
</style>