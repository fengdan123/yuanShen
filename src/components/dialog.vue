<template>
  <div :class="$style.dialog" v-if="isshow" @click.self.stop="isshow = false">
    <div>
      <div></div>
      <div @click.stop="isshow = false"></div>
      <div @click.stop="isshow = false"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false,
    };
  },
};
</script>

<style scoped module>
.dialog {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 0;
  top: 0;
  min-width: 1280px;
}
.dialog > div {
  width: 650px;
  height: 308px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dialog > div > div:nth-of-type(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/dialog.png) 50% / cover no-repeat;
}
.dialog > div > div:nth-of-type(2) {
    position: absolute;
    top: .13em;
    right: .13em;
    width: .23em;
    height: .23em;
    cursor: pointer;
    background: url(@/assets/img/dialog_close.png) 50%/cover no-repeat;
}
.dialog > div > div:nth-of-type(3) {
        position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,40px,0);
    transform: translate3d(-50%,40px,0);
    width: 200px;
    height: 50px;
    cursor: pointer;
    background: url(@/assets/img/dialog_sure.png) 50%/cover no-repeat;
}
</style>