<template>
  <div :class="$style.leftNav">
    <div>
      <span></span>
      <span></span>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
    <div>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.leftNav {
  position: fixed;
  left: 0.44em;
  top: 50%;
  margin-top: -2.6em;
  width: 1.05em;
  height: 3.15em;
  flex-direction: column;
  justify-content: space-between;
}
.leftNav > div {
  position: relative;
  cursor: pointer;
}
.leftNav > div > span:nth-of-type(1) {
  width: 0.11em;
  height: 0.11em;
  background: url(@/assets/img/image57.png) 50% / contain no-repeat;
}
.leftNav > div > span:nth-of-type(2) {
  margin-left: 0.2em;
  width: 0.72em;
  height: 0.17em;
  background: url(@/assets/img/image56.png) 0 / contain no-repeat;
}
</style>