<template>
  <div>
    <v-radio v-model="value1" label="1"></v-radio>
    <v-radio v-model="value1" label="2" size="small"></v-radio>
  </div>
  <div>
    <v-radio-group v-model="value2">
      <v-radio label="选项一"></v-radio>
      <v-radio label="选项二" size="small"></v-radio>
      <v-radio label="选项三"></v-radio>
    </v-radio-group>
  </div>
  <div>
    <v-radio v-model="value3" label="1" border></v-radio>
    <v-radio v-model="value3" label="2" border size="small"></v-radio>
  </div>
  <div>
    <v-radio-group v-model="value4" :disabled="true">
      <v-radio label="选项一"></v-radio>
      <v-radio label="选项二"></v-radio>
      <v-radio label="选项三"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  margin-right: 20px;
}
</style>
