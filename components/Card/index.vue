<template>
  <div class="v-card"
    :class="{
      [`is-${type}`]: !!type
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'VCard'
}
</script>
