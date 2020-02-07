<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="就诊攻略">
      <router-link to="/strategy/three" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-step :current="4">
      <yd-step-item>
        <span slot="bottom">步骤一</span>
      </yd-step-item>
      <yd-step-item>
        <span slot="bottom">步骤二</span>
      </yd-step-item>
      <yd-step-item>
        <span slot="bottom">步骤三</span>
      </yd-step-item>
      <yd-step-item>
        <span slot="bottom">步骤四</span>
      </yd-step-item>
    </yd-step>

    <p>步骤四：拿药--服务热线：400-123-1234</p>
    <yd-button size="large" type="primary" @click.native="next">点击返回首页</yd-button>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    next() {
      this.$router.push("/");
    }
  },
  activated() {
    this.$router.back = true;
  }
};
</script>

<style>
</style>