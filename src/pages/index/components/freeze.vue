<template>
  <div class="freeze">
    <transition
      leave-active-class="animate_animated animate__fadeOutTopLeft"
      enter-active-class="animate_animated animate__fadeInTopLeft"
    >
      <img src="@/assets/img/1-fb951c06.png" v-show="isshow" />
    </transition>
    <transition
      leave-active-class="animate_animated animate__fadeOutTopRight"
      enter-active-class="animate_animated animate__fadeInTopRight"
    >
      <img src="@/assets/img/2-2088c525.png" v-show="isshow" />
    </transition>
    <transition
      leave-active-class="animate_animated animate__fadeOutBottomLeft"
      enter-active-class="animate_animated animate__fadeInBottomLeft"
    >
      <img src="@/assets/img/3-3893137d.png" v-show="isshow" />
    </transition>
    <transition
      leave-active-class="animate_animated animate__fadeOutBottomRight"
      enter-active-class="animate_animated animate__fadeInBottomRight"
    >
      <img src="@/assets/img/4-7f21d04b.png" v-show="isshow" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
      lock: false,
    };
  },
  watch: {
    isshow(a, b) {
      if (!a) {
        setTimeout(() => {
          this.lock = true;
          this.fn1();
          setTimeout(() => {
            this.lock = true;
          }, 3000);
        }, 10000);
      }
    },
  },
  methods: {
    fn1() {
      if (this.lock) {
        this.lock = false;
        this.isshow = !this.isshow;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.lock = true;
      this.fn1();
      setTimeout(() => {
        this.lock = true;
      }, 3000);
    }, 10000);
  },
};
</script>

<style scoped>
.freeze {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  /* 阻止用户的点击动作产生任何效果 */
  pointer-events: none;
  min-width: 1280px;
  z-index: 999;
}
.freeze img {
  position: absolute;
  animation-duration: 3s;
  /* 保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。处理图片失真问题。 */
  object-fit: cover;
  /* background-color: transparent; */
}
.freeze img:nth-of-type(1) {
  top: 0;
  left: 0;
  width: 58.125%;
  height: 49.537%;
}
.freeze img:nth-of-type(2) {
  top: 0;
  right: 0;
  width: 41.875%;
  height: 49.537%;
}
.freeze img:nth-of-type(3) {
  bottom: 0;
  left: 0;
  width: 58.125%;
  height: 50.463%;
}
.freeze img:nth-of-type(4) {
  bottom: 0;
  right: 0;
  width: 41.875%;
  height: 50.463%;
}
</style>