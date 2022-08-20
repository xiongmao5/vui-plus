<template>
  <div>
    <div style="width: 400px">
      <v-swiper height="200px" :loop="false" @change="handleChange">
        <v-swiper-item v-for="item in 4" :key="item" class="demo-swiper">
          <div class="demo-swiper-item">{{ item }}</div>
        </v-swiper-item>
      </v-swiper>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange (index, name) {
      console.log('当前下标', index, name)
    }
  }
}
</script>

<style lang="scss">
.demo-swiper {
  &:nth-child(odd) .demo-swiper-item {
    background: #999;
  }

  .demo-swiper-item {
    width: 100%;
    height: 200px;
    text-align: center;
    line-height: 200px;
    background: #ccc;
  }
}
</style>
