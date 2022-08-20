<template>
  <ul class="v-dropdown"
    @mouseenter="handleHover()"
    @mouseleave="handleHover()"
    :class="{
      [`is-${type}`]: !!type,
      [`is-${size}`]: !!size
    }"
  >
    <li class="first-dropdown" @click="handleClick()">
      <slot></slot>
    </li>
    <transition name="zoom">
      <div v-show="isShow" class="cartoon" type="animatio" :style="computedHeight">
        <div class="triangle" v-show="list"></div>
        <li class="dropdown" v-for="item in list"
          :key="item"
        >
          {{ item }}
        </li>
      </div>
    </transition>
  </ul>
</template>
<script>
export default {
  name: 'VDropdown',
  data () {
    return {
      isShow: false,
      height: 0
    }
  },
  mounted () {
    this.height = this.$el.clientHeight
  },
  props: {
    list: {
      type: Number,
      default: 5
    },
    menu: {
      type: String,
      default: 'hover'
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick () {
      if (this.menu === 'click') {
        this.isShow = !this.isShow
      }
    },
    handleHover () {
      if (this.menu === 'hover') {
        this.isShow = !this.isShow
      }
    }
  },
  computed: {
    computedHeight () {
      if (this.hover) {
        return {
          top: this.height + 2 + 'px'
        }
      } else {
        return ''
      }
    }
  }
}
</script>
