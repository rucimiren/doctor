<template>
  <yd-layout>
    <yd-navbar slot="navbar" fontsize="0.5rem" title="选择医生"></yd-navbar>

    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="4" slot="list">
        <yd-list-item
          v-for="(item, key) in list"
          :key="key"
          @click.native="selectDoctor(item.name,item.id)"
        >
          <img slot="img" :src="item.img" />
          <span slot="title">{{item.des}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price">{{item.name}}</span>
            </div>
            <div>{{item.keshi}}</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <span class="yd-btn-rolling yd-btn-rolling-large">
        <i slot="loadingTip"></i>
      </span>
    </yd-infinitescroll>
  </yd-layout>
</template>

<script>
import { getDoctorList } from "../url/getData";
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      list: []
    };
  },
  activated() {
    this.page = 1;
    this.$router.back = true;
    this.init();
  },
  methods: {
    init() {
      getDoctorList(this.page, this.pageSize).then(data => {
        // console.log(data.data);
        this.list = data.data;
      });
    },
    loadList() {
      this.page++;
      getDoctorList(this.page, this.pageSize).then(data => {
        const _list = data.data;

        this.list = [...this.list, ..._list];

        if (_list.length < this.pageSize || this.page == 3) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone");
          return;
        }

        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad");
      });
    },
    selectDoctor(name, id) {
      this.$router.replace({
        name: "guahao",
        params: {
          name: name,
          id: id
        }
      });
    }
  }
};
</script>

<style>
</style>