<template>
  <v-rate v-model="value1" show-text :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></v-rate>
  <v-rate v-model="value2" show-text :iconClasses="['el-icon-error', 'el-icon-remove', 'el-icon-success']"></v-rate>
  <v-rate disabled v-model="value3"></v-rate>
</template>

<script>
export default {
  data () {
    return {
      value1: null,
      value2: null,
      value3: 3
    }
  }
}
</script>
