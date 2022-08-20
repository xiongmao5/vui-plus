<template>
  <v-switch v-model="value"></v-switch>
  <v-switch v-model="value2" disabled active-color="#13ce66" inactive-color="#ff4949"></v-switch>
</template>
<script>
export default {
  data () {
    return {
      value: true,
      value2: true
    }
  }
}
</script>
