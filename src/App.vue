<template>
  <div id="app" style="height:100%">
    <transition :name="transition">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transition: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      var back = this.$router.back;
      if (back) {
        //点击了返回
        this.transition = "slide-right";
      } else {
        this.transition = "slide-left";
      }
      this.$router.back = false;
    }
  }
};
</script>

<style>
@import url("animate.css");
@import url("../static/init.css");
.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: all 0.5s linear;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
