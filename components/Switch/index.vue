<template>
  <div
    class="v-switch"
    :class="{
      'is-disabled': this.disabled
    }"
    @click="handleClick"
  >
    <span
      v-if="activeText"
      class="v-switch-text"
      :class="{
        'text-is-true': !this.modelValue
      }"
    >
      {{ activeText }}
    </span>
    <div class="v-switch-floor"
      :style="computedColor"
    >
      <span class="v-switch-span"
        :class="{
          'is-true': this.modelValue,
          'is-false': !this.modelValue
        }"
      ></span>
    </div>
    <span
      v-if="inactiveText"
      class="v-switch-text"
      :class="{
        'text-is-true': this.modelValue
      }"
    >
      {{ inactiveText }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'VSwitch',
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    width: {
      type: Number,
      default: 40
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveColor: {
      type: String,
      default: '#C0CCDA'
    },
    activeValue: {
      type: [Boolean, Number, String],
      default: true
    },
    inactiveValue: {
      type: [Boolean, Number, String],
      default: false
    }
  },
  computed: {
    computedColor () {
      if (this.modelValue === this.activeValue) {
        return {
          width: this.width + 'px',
          background: this.activeColor
        }
      } else {
        return {
          width: this.width + 'px',
          background: this.inactiveColor
        }
      }
    }
  },
  methods: {
    handleClick () {
      if (this.disabled) {
        return
      }
      this.$emit('update:modelValue', this.modelValue ? this.inactiveValue : this.activeValue)
    }
  }
}
</script>
