<template>
  <div>
    <yd-navbar slot="navbar">
      <img slot="center" src="http://static.yufenghen.cn/vueserver/resource/img/logo.png" />
    </yd-navbar>

    <yd-slider autoplay="1500">
      <yd-slider-item>
        <a href="javaScript:;">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new1.jpg" />
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="javaScript:;">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new2.jpg" />
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="javaScript:;">
          <img src="http://static.yufenghen.cn/vueserver/resource/img/new3.jpg" />
        </a>
      </yd-slider-item>
    </yd-slider>
    <yd-grids-group :rows="2">
      <yd-grids-item type="link" :link="mylink" @click.native="isUser('/guahao')">
        <yd-icon name="phone2" slot="icon" color="#1c98fc"></yd-icon>
        <span slot="text">预约挂号</span>
      </yd-grids-item>
      <yd-grids-item type="link" :link="mylink" @click.native="isUser('/report')">
        <yd-icon name="search" slot="icon" color="#1c98fc"></yd-icon>
        <span slot="text">报告查询</span>
      </yd-grids-item>
    </yd-grids-group>
    <yd-grids-group :rows="3">
      <yd-grids-item type="link" :link="mylink" @click.native="isUser('/costquery')">
        <yd-icon name="home-outline" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">费用查询</span>
      </yd-grids-item>
      <yd-grids-item type="link" link="/strategy">
        <yd-icon name="good" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">就诊攻略</span>
      </yd-grids-item>
      <yd-grids-item type="link" link="/health">
        <yd-icon name="like" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">健康百科</span>
      </yd-grids-item>
      <yd-grids-item type="link" link="/location">
        <yd-icon name="location" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">医院导航</span>
      </yd-grids-item>
      <yd-grids-item type="link" link="/hospitaldesc">
        <yd-icon name="shield" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">医院介绍</span>
      </yd-grids-item>
      <yd-grids-item type="link" :link="mylink" @click.native="isUser('/satis')">
        <yd-icon name="question" slot="icon" color="#FF685D"></yd-icon>
        <span slot="text">满意度调查</span>
      </yd-grids-item>
    </yd-grids-group>
  </div>
</template>

<script>
export default {
  activated() {
    this.$emit("change", 0);
  },
  data() {
    return {
      mylink: null
    };
  },
  methods: {
    isUser(mypath) {
      if (!sessionStorage.getItem("username")) {
        this.$dialog.toast({
          mes: "还未登录",
          timeout: 1500,
          icon: "error",
          callback: () => {
            this.$router.push("/login");
            sessionStorage.setItem("path", mypath);
          }
        });
      } else {
        // this.mylink = mypath;
        this.$router.push(mypath);
      }
    }
  }
};
</script>

<style>
</style>