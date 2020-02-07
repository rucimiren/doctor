<template>
  <yd-layout>
    <yd-navbar slot="navbar" fontsize="0.5rem" title="挂号列表">
      <router-link to="/usercenter" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="order" v-for="(item,index) in orderList" :key="index">
      <div>
        <span>{{item.keshi}}</span>
        <span>{{item.doctorname}}</span>
        <div class="you">
          <yd-navbar-next-icon></yd-navbar-next-icon>
        </div>
      </div>

      <div>
        <span>就诊人姓名:</span>
        <div class="you">{{item.name}}</div>
      </div>

      <div>
        <span>就诊时间:</span>
        <div class="you">{{item.time}}</div>
      </div>

      <div>
        <span>就诊ID:</span>
        <div class="you">{{item.id}}</div>
      </div>

      <div>
        <span>就诊状态:</span>
        <div class="you" v-if="item.state==1">
          <span class="yd-input-success">预约成功</span>
        </div>
        <div class="you" v-else>
          <span class="yd-input-error">预约失败</span>
        </div>
      </div>
    </div>
  </yd-layout>
</template>

<script>
import { getGuaHaoOrder } from "../url/getData";
export default {
  data() {
    return {
      orderList: []
    };
  },

  activated() {
    this.$router.back = true;
    this.orderList = [];
    getGuaHaoOrder(sessionStorage.getItem("username")).then(data => {
      // console.log(data.data);
      //Array.isArray(对象)
      //   console.log(Array.isArray(data.data));
      if (Array.isArray(data.data)) {
        this.orderList = data.data;
      } else {
        this.orderList = [];
      }
    });
  }
};
</script>

<style>
/* .yd-input-success:after {
  content: "\E601";
  color: #09bb07;
  font-size: 0.4rem;
} */
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
.yd-input-success {
  color: #09bb07;
}
.yd-input-error {
  color: #f43530;
}
</style>