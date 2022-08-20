<template>
  <div>
    <ul class="pagination">
      <button
      @click="handleLeft"
      :disabled="current===0"
      class="el-icon-arrow-left"
      :style="computedStyle"
      ></button>
      <li
        v-for="( item, index ) in total"
        :class="current === index ? 'active' : ''"
        :key="item"
        @click="handleClick(index)"
        :style="computedStyle"
      >
        {{ item }}
      </li>
      <button
      @click="handleRight"
      :disabled="current===(total - 1)" class="el-icon-arrow-right"
      :style="computedStyle"
      ></button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VPagination',
  props: {
    total: Number,
    background: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // list: Number,
      current: 0
    }
  },
  methods: {
    handleClick (index) {
      this.current = index
    },
    handleLeft () {
      this.handleClick(this.current - 1)
    },
    handleRight () {
      this.handleClick(this.current + 1)
    }
  },
  computed: {
    computedStyle () {
      if (this.disabled && this.background) {
        return {
          background: '#f4f4f5',
          borderRadius: '2px',
          cursor: 'not-allowed',
          color: 'rgba(16, 16, 16, 0.3)'
        }
      }
      if (this.background) {
        return {
          background: '#f4f4f5',
          borderRadius: '2px'
        }
      }
      if (this.disabled) {
        return {
          cursor: 'not-allowed',
          color: 'rgba(16, 16, 16, 0.3)'
        }
      }
      return ''
    }
  }
}
</script>
