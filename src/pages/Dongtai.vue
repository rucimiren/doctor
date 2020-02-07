<template>
  <div id="dongtai">
    <h1>我是动态页面</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  activated() {
    this.$emit("change", 1);
  }
};
</script>

<style>
#dongtai {
  font-size: 1rem;
}
</style>