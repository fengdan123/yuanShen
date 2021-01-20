<template>
  <div class="video" v-if="isshow" @click="isshow = false">
    <div>
      <video
        :src="$store.state.index_video_url"
        controls="controls"
        autoplay="autoplay"
      ></video>
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

<style scoped>
.video {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  left: 0;
  top: 0;
}
.video > div {
  width: 896px;
  height: 504px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.video > div > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /*outline外部轮廓，起突出作用*/
  outline: none;
}
</style>