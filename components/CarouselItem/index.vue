<template>
  <div class="v-carousel-item" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCarouselItem',
  inject: ['parent'],
  data () {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },
  computed: {
    computedStyle () {
      if (this.parent.direction === 'vertical') {
        return {
          transform: `translate(0, ${this.offset * this.height}px)`,
          transition: this.transition ? 'transform .2s' : 'none'
        }
      }
      return {
        transform: `translate(${this.offset * this.width}px, 0)`,
        transition: this.transition ? 'transform .2s' : 'none'
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
