<template>
  <div class="v-swiper-item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VSwiperItem',
  inject: ['parent'],
  props: {
    name: String
  },
  data () {
    return {
      offset: 0,
      width: 0,
      height: 0
    }
  },
  computed: {
    style () {
      if (this.parent.direction === 'vertical') {
        return {
          transform: `translate(0, ${this.offset * this.height}px)`,
          transition: this.transition ? 'transform .2s' : 'none'
        }
      }
      return {
        transform: `translate(${this.offset * this.width}px, 0)`,
        transition: this.transition ? 'transform .2s linear' : 'none'
      }
    }
  },
  mounted () {
    this.width = this.$el.clientWidth
    this.height = this.$el.clientHeight
  },
  created () {
    this.parent.items.push(this)
  },
  beforeUnmount () {
    this.parent.items.slice(this.parent.items.indexOf(this), 1)
  }
}
</script>
