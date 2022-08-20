<template>
  <div class="v-checkbox-grouo">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VCheckboxGroup',
  provide () {
    return {
      parent: this
    }
  },
  props: {
    modelValue: Array,
    disabled: null,
    border: null
  },
  methods: {
    handleChange (value) {
      let newValue = this.modelValue.slice(0)
      if (newValue.includes(value)) {
        newValue = newValue.filter((item) => item !== value)
      } else {
        newValue.push(value)
      }
      this.$emit('update:modelValue', newValue)
    }
  }
}
</script>
