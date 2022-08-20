<template>
  <div>
    <transition name="fade">
      <div v-if="modelValue && modal" class="v-dialog-mask" @click="handleClose"></div>
    </transition>
    <transition name="dialog">
      <div
        v-if="modelValue"
        class="v-dialog"
        :style="[computedWH, {'margin-top': top}]"
      >
        <div class="v-diglog-head" :style="computedCenter">
          <span v-if="title">{{ title }}</span>
          <slot v-else name="slot-title"></slot>
          <button class="v-diglog-close" v-if="showClose" @click="handleClose" @keydown.enter="handleClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="v-diglog-body">
          <slot></slot>
        </div>
        <div class="v-diglog-foot" :style="computedCenter">
          <slot name="slot-foot"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VDialog',
  props: {
    modelValue: Boolean,
    title: String,
    width: {
      type: [String, Number],
      default: '50%'
    },
    fullscreen: Boolean,
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: true
    },
    appendToBody: Boolean,
    lockScroll: {
      type: Boolean,
      default: true
    },
    customClass: String,
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    destroyOnClose: Boolean
  },
  data () {
    return {
      vWidth: 0,
      vHeight: 0,
      confirm: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:modelValue', false)
    },
    keyup (e) {
      if (e.keyCode === 27 && this.modelValue) {
        this.handleClose()
      }
    }
  },
  computed: {
    computedWH () {
      if (this.fullscreen) {
        return {
          width: this.vWidth,
          height: this.vHeight
        }
      } else {
        return {
          width: this.width
        }
      }
    },
    computedCenter () {
      if (this.center) {
        return {
          textAlign: 'center'
        }
      }
      return ''
    }
  },
  mounted () {
    this.vWidth = document.body.clientWidth
    this.vHeight = document.body.clientHeight

    document.addEventListener('keyup', this.keyup)
  },
  beforeUnmount () {
    document.removeEventListener('keyup', this.keyup)
  }
}
</script>
