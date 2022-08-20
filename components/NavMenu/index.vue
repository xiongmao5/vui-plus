<template>
  <div class="v-nav-menu"
    :style="computedStyle"
    :class="{
        [`is-${type}`]: !!type
      }"
  >
    <v-dropdown :list=3
      v-for="(item, index) in list"
      :key="item"
      :hover=hover
      :menu=menu
      class="is-noborder"
      @click="handleClick(index)"
      :class="current === index ? 'active' : ''"
     >
      {{ item.name }}
    </v-dropdown>
  </div>
</template>

<script>
export default {
  name: 'VNavMenu',
  props: {
    vwidth: {
      type: Number,
      default: 400
    },
    vheight: {
      type: Number,
      default: 40
    },
    collapse: {
      type: Boolean,
      default: false
    },
    menu: {
      type: String,
      default: 'hover'
    },
    hover: {
      type: Boolean,
      default: false
    },
    list: Array
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    handleClick (index) {
      this.current = index
    }
  },
  computed: {
    computedStyle () {
      if (this.collapse) {
        return {
          width: '50px',
          height: this.vheight + 'px'
        }
      } else {
        return {
          width: this.vwidth + 'px',
          height: this.vheight + 'px'
        }
      }
    }
  }
}
</script>
