<template>
  <button
    class="v-button"
    :class="{
      [`is-${size}`]: !!size,
      [`is-${type}`]: !!type,
      [`is-${radio}`]: !!radio,
      [`is-${disabled}`]: !!disabled
    }"
    :style="computedRound"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    round: Boolean,
    size: String,
    type: String,
    radio: String,
    disabled: Boolean
  },
  computed: {
    computedRound () {
      if (this.round) {
        return {
          borderRadius: '50%',
          width: 40 + 'px',
          height: 40 + 'px',
          padding: 12 + 'px'
        }
      }
      return ''
    }
  }
}
</script>
