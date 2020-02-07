<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="健康百科">
      <router-link to="/" slot="left">
        <yd-navbar-back-icon color="#1c98fc"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="4" slot="list">
        <yd-list-item v-for="(item, key) in list" :key="key">
          <img slot="img" :src="item.image" />
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price">{{item.publishtime}}</span>
            </div>
            <div>摘自:{{item.auth}}</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip" style="font-size:0.5rem;color:#e4393c">到底部了~~</span>

      <!-- 加载中提示，不指定，将显示默认加载中图标 -->

      <!-- <span slot="loadingTip">加载中...</span> -->
      <span class="yd-btn-rolling yd-btn-rolling-large">
        <i slot="loadingTip"></i>
      </span>
    </yd-infinitescroll>
  </yd-layout>
</template>

<script>
import { getHealth } from "../url/getData";
export default {
  data() {
    return {
      page: 1,
      pageSize: 7,
      list: []
    };
  },
  activated() {
    this.$router.back = true;
  },
  methods: {
    loadList() {
      this.page++;
      getHealth(this.page, this.pageSize).then(response => {
        const _list = response.data;

        this.list = [...this.list, ..._list];

        if (_list.length < this.pageSize) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone");
          return;
        }

        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad");
      });
    }
  },
  mounted() {
    getHealth(this.page, this.pageSize).then(data => {
      //   console.log(data.data);
      this.list = data.data;
    });
  }
};
</script>

<style>
</style>