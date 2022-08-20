<template>
  <div class="v-radio-grouo">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    modelValue: String,
    size: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
