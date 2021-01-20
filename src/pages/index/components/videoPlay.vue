<template>
  <div>
      <img src="@/assets/img/image1.png" v-if="isshow">
      <img src="@/assets/img/image2.png" v-else>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isshow:true
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>