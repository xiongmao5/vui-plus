<template>
  <label
    class="v-checkbox"
    :class="{
      'is-active': isChecked,
      'is-disabled': computedDisabled,
      'is-border': computedBorder,
      'is-small': computedSmall
    }"
    @click="handleClick"
  >
    <div class="v-checkbox-item">
      <i class="el-icon-check"></i>
    </div>
    <div class="v-checkbox-text">
      <slot v-if="!!$slots.default"></slot>
      <template v-else>{{ label }}</template>
    </div>
  </label>
</template>
<script>
export default {
  name: 'VCheckbox',
  inject: ['parent'],
  props: {
    label: [String, Number, Boolean],
    modelValue: [String, Number, Boolean],
    disabled: null,
    border: null,
    size: String,
    checked: null,
    trueLabel: {
      type: [Boolean, Number, String],
      default: true
    },
    falseLabel: {
      type: [Boolean, Number, String],
      default: false
    }
  },
  computed: {
    isChecked () {
      if (typeof this.checked === 'boolean') {
        return this.checked
      }

      if (this.parent?.modelValue) {
        return this.parent?.modelValue.includes(this.label)
      }

      return this.modelValue === this.trueLabel
    },
    computedBorder () {
      return typeof this.border === 'boolean' ? this.border : this.parent?.border
    },
    computedDisabled () {
      return typeof this.disabled === 'boolean' ? this.disabled : this.parent?.disabled
    },
    computedSmall () {
      if (this.size === 'small') {
        return true
      }
      return false
    }
  },
  methods: {
    handleClick () {
      this.parent?.handleChange(this.label)
      this.$emit('update:modelValue', this.isChecked ? this.falseLabel : this.trueLabel)
    }
  }
}
</script>
