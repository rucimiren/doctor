<template>
  <div id="home" style="height:100%">
    <yd-layout>
      <keep-alive>
        <router-view @change="change"></router-view>
      </keep-alive>
      <Footer :footer="footerNum"></Footer>
    </yd-layout>
  </div>
</template>

<script>
import Footer from "../components/base/Footer";
export default {
  components: { Footer },
  data() {
    return {
      footerNum: 0
    };
  },
  methods: {
    change(num) {
      this.footerNum = num;
      // console.log(num);
    }
  },
  activated() {}
};
</script>

<style>
</style>