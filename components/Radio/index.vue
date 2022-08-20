<template>
  <label
    class="v-radio"
    :class="{
      'is-disabled': finalDisabled,
      'is-active': finalValue === label,
      'is-border': border,
      'is-small': size
    }"
    @click="handleClick"
  >
    <div class="v-radio-item">
      <i class="v-radio-item-dot"></i>
    </div>
    <div class="v-radio-text">
      <slot v-if="!!$slots.default"></slot>
      <template v-else>{{ label }}</template>
    </div>
  </label>
</template>

<script>
export default {
  name: 'VRadio',
  inject: ['radioGroup'],
  props: {
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
    disabled: null,
    border: Boolean,
    size: String
  },
  computed: {
    finalDisabled () {
      return typeof this.disabled === 'boolean' ? this.disabled : this.radioGroup?.disabled
    },
    finalSize () {
      return this.size || this.radioGroup?.size || 'normal'
    },
    finalValue () {
      return this.modelValue || this.radioGroup?.modelValue
    },
    finalSmall () {
      if (this.size === 'small') {
        return true
      }
      return false
    }
  },
  methods: {
    handleClick () {
      if (this.finalDisabled) {
        return
      }
      this.radioGroup?.handleChange(this.label)
      this.$emit('update:modelValue', this.label)
    }
  }
}
</script>
