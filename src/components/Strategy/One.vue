<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="就诊攻略">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-step :current="1">
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
    <p>步骤一: 挂号</p>

    <yd-button size="large" type="primary" @click.native="next">点击下一步</yd-button>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  activated() {
    this.$router.back = true;
  },
  methods: {
    next() {
      this.$router.push("/strategy/two");
    }
  }
};
</script>

<style>
</style>