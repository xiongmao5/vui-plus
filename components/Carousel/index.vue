<template>
  <div class="v-carousel" @mouseenter="isArrowShow = true" @mouseleave="isArrowShow = false">
    <div class="v-carousel-container" :style="{ height }">
      <transition name="slide-from-left">
        <button
          v-if="arrow !== 'never' && direction !== 'vertical'"
          v-show="isArrowShow || arrow === 'always'"
          class="v-carousel-btn is-left"
          @click="prev"
        >
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <transition name="slide-from-right">
        <button
          v-if="arrow !== 'never' && direction !== 'vertical'"
          v-show="isArrowShow || arrow === 'always'"
          class="v-carousel-btn is-right"
          @click="next"
        >
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
      <div class="v-carousel-item-box">
        <slot></slot>
      </div>
      <ul
        class="v-carousel-indicator"
        v-if="!['outside', 'none'].includes(indicatorPosition)"
        :style="computedUl"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'is-active' : index === current}"
          class="v-carousel-indicator-item"
          @mouseenter="handleHover(index)"
          @click="handleClick(index)"
          :style="computedLi"
        >
          <i class="v-carousel-indicator-item-inner" :style="computedLii"></i>
        </li>
      </ul>
    </div>
    <div class="v-acrousel-indicator-outer">
      <ul class="v-carousel-indicator" v-if="indicatorPosition === 'outside'">
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ 'is-active' : index === current}"
          class="v-carousel-indicator-item"
          @mouseenter="handleHover(index)"
          @click="handleClick(index)"
        >
          <i class="v-carousel-indicator-item-inner"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCarousel',
  provide () {
    return {
      parent: this
    }
  },
  data () {
    return {
      isArrowShow: false,
      items: [],
      current: 0,
      moveDirection: 0,
      timer: null
    }
  },
  props: {
    height: String,
    initialIndex: {
      type: Number,
      default: 0
    },
    trigger: String,
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    arrow: {
      type: String,
      default: 'hover'
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    computedUl () {
      if (this.direction === 'vertical') {
        return {
          left: 'auto',
          bottom: 'auto',
          right: '6px',
          top: '50%',
          transform: 'translate(0, -50%)'
        }
      }
      return ''
    },
    computedLi () {
      if (this.direction === 'vertical') {
        return {
          display: 'block',
          padding: '4px 12px'
        }
      }
      return ''
    },
    computedLii () {
      if (this.direction === 'vertical') {
        return {
          width: '2px',
          height: '30px'
        }
      }
      return ''
    }
  },
  methods: {
    handleClick (index) {
      if (this.trigger === 'click') {
        this.setActiveItem(index)
      }
    },
    handleHover (index) {
      if (this.trigger !== 'click') {
        this.setActiveItem(index)
      }
    },
    setActiveItem (index) {
      const length = this.items.length

      this.items.forEach((item, i) => {
        let nextOffset = i - this.current
        const isOver = Math.abs(nextOffset) >= length / 2

        if (isOver) {
          if (this.moveDirection >= 0 && nextOffset < 0) {
            nextOffset += length
          } else if (this.moveDirection <= 0 && nextOffset > 0) {
            nextOffset -= length
          }
        }

        item.offset = nextOffset
        item.transition = false
      })
      this.moveDirection = 0

      setTimeout(() => {
        const moveDiff = this.items[this.current].offset - this.items[index].offset
        this.current = index
        this.items.forEach((item, i) => {
          item.offset += moveDiff
          item.transition = true
        })
        this.$emit('change', this.current)
      }, 10)
    },
    prev () {
      let index = this.current - 1
      if (index < 0) {
        if (!this.loop) {
          return
        }
        index = this.items.length - 1
      }
      this.moveDirection = -1
      this.setActiveItem(index)
    },
    next () {
      let index = this.current + 1
      if (index === this.items.length) {
        if (!this.loop) {
          return
        }
        index = 0
      }
      this.moveDirection = 1
      this.setActiveItem(index)
    }
  },
  mounted () {
    this.current = this.initialIndex
    this.items.forEach((item, i) => {
      item.offset = i - this.current
    })

    if (this.autoplay) {
      this.timer = setInterval(() => {
        this.next()
      }, this.interval)
    }
  },
  beforeUnmount () {
    clearInterval(this.timer)
  }
}
</script>
