<template>
  <yd-layout>
    <yd-navbar fontsize="0.5rem" slot="navbar" title="选择科室"></yd-navbar>

    <yd-accordion>
      <yd-accordion-item v-for="(value,key) in order" :key="key" :title="key">
        <div
          style="padding: .24rem;background-color:cyan"
          v-for="(item,index) in value"
          :key="index"
          @click="select(item)"
        >
          <p style="font-size:0.3rem">{{item}}</p>
        </div>
      </yd-accordion-item>
    </yd-accordion>
  </yd-layout>
</template>

<script>
import { getKeshi } from "../url/getData";
export default {
  data() {
    return {
      order: {}
    };
  },
  activated() {
    this.$router.back = true;
    this.init();
  },
  methods: {
    init() {
      getKeshi().then(data => {
        // console.log(data.data);
        this.order = data.data;
      });
    },
    select(item) {
      this.$router.replace({
        name: "guahao",
        params: {
          keshi: item
        }
      });
    }
  }
};
</script>

<style>
</style>