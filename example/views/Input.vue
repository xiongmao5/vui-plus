<template>
  <v-input placeholder="请输入内容" autofocus type="input" suffix-icon="el-icon-date" v-model="value" @click="handleClick" prefix-icon="el-icon-search">
    <template v-slot:prepend>Http://</template>
    <template v-slot:append>.com</template>
  </v-input>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleClick () {
      console.log(this.value)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-input {
  width: 400px;
}
</style>
