<template>
  <div
    class="v-rate"
    :class="{
      'is-disabled': disabled
    }"
  >
    <span
      v-for="item in max"
      :key="item"
    >
      <i
        class="v-rate-icon"
        :class="[{
          [`${voidIconClass}`]: handleVoidIconClass(item),
        }, getClass(item)]"
        :style="getColor(item)"
        @mouseenter="handleHove(item)"
        @mouseleave="handleLeave"
        @click="handleIndex(item)"
      >
      </i>
    </span>
    <span v-if="showText">{{ texts[computedText] }}</span>
  </div>
</template>
<script>
export default {
  name: 'VRate',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    allowHalf: Boolean,
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    colors: {
      type: [Array, Object],
      default: () => {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      }
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7'
    },
    iconClasses: {
      type: [Array, Object],
      default: () => {
        return ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
      }
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on'
    },
    showText: Boolean,
    showScore: Boolean,
    textColor: {
      type: String,
      default: '#1F2D3D'
    },
    texts: {
      type: Array,
      default: () => {
        return ['极差', '失望', '一般', '满意', '惊喜']
      }
    },
    scoreTemplate: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      hoverNumber: null
    }
  },
  computed: {
    computedText () {
      if (this.hoverNumber) {
        return this.hoverNumber - 1
      }
      if (this.modelValue) {
        return this.modelValue
      }
      return ''
    }
  },
  watch: {
    modelValue: {
      handler (val) {
        this.hoverNumber = val || 0
      },
      immediate: true
    }
  },
  methods: {
    handleVoidIconClass (index) {
      if (this.hoverNumber < index) {
        return true
      }
    },
    getClass (index) {
      if (this.hoverNumber < index) {
        return false
      }
      if (this.hoverNumber <= this.lowThreshold && this.hoverNumber >= index) {
        return this.iconClasses[0]
      } else if (this.hoverNumber >= this.highThreshold && this.hoverNumber >= index) {
        return this.iconClasses[2]
      } else {
        return this.iconClasses[1]
      }
    },
    getColor (index) {
      if (this.hoverNumber < index) {
        return {
          color: this.voidColor
        }
      }
      if (this.hoverNumber <= this.lowThreshold && this.hoverNumber >= index) {
        return {
          color: this.colors[0]
        }
      } else if (this.hoverNumber >= this.highThreshold && this.hoverNumber >= index) {
        return {
          color: this.colors[2]
        }
      } else {
        return {
          color: this.colors[1]
        }
      }
    },
    handleIndex (index) {
      if (this.disabled) {
        return
      }
      this.$emit('update:modelValue', index)
    },
    handleHove (index) {
      if (!this.disabled) {
        this.hoverNumber = index
      }
    },
    handleLeave () {
      this.hoverNumber = this.modelValue || 0
    }
    // handleIconColor (index) {
    //   if (index <= this.hoverNumber) {
    //     return {
    //       color: this.colors
    //     }
    //   }
    //   return {
    //     color: this.voidColor
    //   }
    // }
  }
}
</script>
