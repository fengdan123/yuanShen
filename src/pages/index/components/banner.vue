<template>
  <div :class="$style.banner">
    <div>
      <div>
        <ul id="banner">
          <li v-for="(item,index) in list" :key="index">
            <img
              :src="item"
            />
          </li>
        </ul>
      </div>
      <div @click.stop="page2_banner.isshow = false"></div>
    </div>
    <div @click.stop="right"></div>
    <div @click.stop="left"></div>
  </div>
</template>

<script>
export default {
  props: ["page2_banner","list"],
  data() {
    return {
      n: 1,
      timer: null,
      geshu: 0,
      kaig: true,
    };
  },
  mounted() {
    let geshu = this.$("#banner").children().length;
    this.n = this.page2_banner.banner_id + 1;
    this.$("#banner")
      .children()
      .eq(0)
      .clone()
      .insertAfter(
        this.$("#banner")
          .children()
          .eq(geshu - 1)
      );
    this.$("#banner")
      .children()
      .eq(geshu - 1)
      .clone()
      .insertBefore(this.$("#banner").children().eq(0));
    this.geshu = this.$("#banner").children().length;
    this.$("#banner").css(
      "left",
      -this.n * this.$("#banner").children().width()
    );
    this.dshiq();
  },
  methods: {
    right() {
      if (this.kaig) {
        this.kaig = false;
        clearInterval(this.timer);
        this.n++;
        if (this.n >= this.geshu) {
          this.n = 2;
          this.$("#banner").css("left", -this.$("#banner").children().width());
        }
        this.$("#banner").animate(
          { left: -this.n * this.$("#banner").children().width() },
          300,
          () => {
            this.kaig = true;
            this.dshiq();
          }
        );
      }
    },
    left() {
      if (this.kaig) {
        this.kaig = false;
        clearInterval(this.timer);
        this.n--;
        if (this.n <= -1) {
          this.n = this.geshu - 3;
          this.$("#banner").css(
            "left",
            -(this.geshu - 2) * this.$("#banner").children().width()
          );
        }
        this.$("#banner").animate(
          { left: -this.n * this.$("#banner").children().width() },
          300,
          () => {
            this.kaig = true;
            this.dshiq();
          }
        );
      }
    },
    dshiq() {
      this.timer = setInterval(() => {
        this.n++;
        if (this.n >= this.geshu) {
          this.n = 2;
          this.$("#banner").css("left", -this.$("#banner").children().width());
        }
        this.$("#banner").animate(
          { left: -this.n * this.$("#banner").children().width() },
          300
        );
      }, 10000);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped module>
.banner {
  width: 100vw;
  height: 100vh;
  min-width: 1280px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
}
.banner > div:nth-of-type(1) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10.25em;
  height: 7.1em;
}
.banner > div > div:nth-of-type(1) {
  width: 9.55em;
  height: 7.1em;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.banner > div > div > ul {
  height: 7.1em;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  left: -100%;
  top: 0;
}
.banner > div > div ul > li > img {
  width: 9.55em;
}
.banner > div > div:nth-of-type(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.7em;
  height: 0.7em;
  cursor: pointer;
  background: url(@/assets/img/page2_close.png) 50% / contain no-repeat;
}
.banner > div:nth-of-type(2) {
  position: absolute;
  width: 0.82em;
  height: 0.97em;
  outline: 0;
  cursor: pointer;
  top: 50%;
  right: 0;
  transform: translate(-400%, -50%);
  background: url(@/assets/img/image28.png) 50% / contain no-repeat;
}
.banner > div:nth-of-type(2):hover {
  background: url(@/assets/img/image29.png) 50% / contain no-repeat;
}
.banner > div:nth-of-type(3) {
  position: absolute;
  width: 0.82em;
  height: 0.97em;
  outline: 0;
  cursor: pointer;
  top: 50%;
  left: 0;
  transform: translate(330%, -50%);
  background: url(@/assets/img/image26.png) 50% / contain no-repeat;
}
.banner > div:nth-of-type(3):hover {
  background: url(@/assets/img/image27.png) 50% / contain no-repeat;
}
</style>