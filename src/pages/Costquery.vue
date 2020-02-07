<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="费用查询">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-list theme="4">
      <yd-list-item v-for="(item, key) in list" :key="key">
        <img slot="img" :src="item.img" />
        <span slot="title">{{item.title}}</span>
        <yd-list-other slot="other">
          <div>
            <div class="demo-list-price">
              <em>¥</em>
              {{item.price}}
            </div>
            <div class="demo-list-del-price">¥{{item.w_price}}</div>
          </div>
          <!-- <div>content</div> -->
        </yd-list-other>
      </yd-list-item>
    </yd-list>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题111标题标题标题标题",
          price: 156.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "标题222标题标题标题标题",
          price: 256.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "标题333标题标题标题标题",
          price: 356.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "标题444标题标题标题标题",
          price: 456.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "标题555标题标题标题标题",
          price: 556.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "标题666标题标题标题标题",
          price: 656.23,
          w_price: 89.36
        }
      ]
    };
  },
  activated() {
    this.$router.back = true;
  }
};
</script>

<style>
</style>