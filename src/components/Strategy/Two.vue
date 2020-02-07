<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="就诊攻略">
      <router-link to="/strategy" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-step :current="2">
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

    <p>步骤二: 看病</p>

    <yd-button size="large" type="primary" @click.native="next">点击下一步</yd-button>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    next() {
      this.$router.push("/strategy/three");
    }
  }
};
</script>

<style>
</style>