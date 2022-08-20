<template>
  <a
    class="v-link"
    :class="{
      [`is-${type}`]: !!type,
      [`is-${disabled}`]: !!disabled,
      [`is-${underline}`]: !!underline
    }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VLink',
  props: {
    type: String
  }
}
</script>
