<template>
  <div>
    <div style="width: 400px">
      <v-carousel height="200px" :autoplay="false" @change="handleChange">
        <v-carousel-item v-for="item in 4" :key="item" class="demo-carousel">
          <div class="demo-carousel-item">
            {{ item }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div style="width: 600px">
      <v-carousel height="300px" trigger="click" direction="vertical" :loop="false">
        <v-carousel-item v-for="item in 4" :key="item" class="demo-carousel">
          <div class="demo-carousel-item">
            {{ item }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange (index) {
      console.log('当前下标', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-carousel {
  &:nth-child(odd) .demo-carousel-item {
    background: #d3dce6;
  }
  .demo-carousel-item {
    width: 100%;
    height: 300px;
    text-align: center;
    line-height: 300px;
    background: #99a9bf;
  }
}
</style>
