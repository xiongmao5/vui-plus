<template>
  <div>
    <div>
      <v-button>
        默认按钮
      </v-button>
      <v-button class="v-button is-primary">
        主要按钮
      </v-button>
      <v-button class="v-button is-success">
        成功按钮
      </v-button>
      <v-button class="v-button is-info">
        信息按钮
      </v-button>
      <v-button class="v-button is-warning">
        警告按钮
      </v-button>
      <v-button class="v-button is-danger">
        危险按钮
      </v-button>
    </div>

    <div>
      <v-button class="is-radio">
        默认按钮
      </v-button>
      <v-button class="v-button is-primary is-radio">
        主要按钮
      </v-button>
      <v-button class="v-button is-success is-radio">
        成功按钮
      </v-button>
      <v-button class="v-button is-info is-radio">
        信息按钮
      </v-button>
      <v-button class="v-button is-warning is-radio">
        警告按钮
      </v-button>
      <v-button class="v-button is-danger is-radio">
        危险按钮
      </v-button>
    </div>
    <div>
      <v-button class="is-radio el-icon-search" round>
      </v-button>
      <v-button class="v-button is-primary is-radio el-icon-edit" round>
      </v-button>
      <v-button class="v-button is-success is-radio el-icon-check" round>
      </v-button>
      <v-button class="v-button is-info is-radio el-icon-message" round>
      </v-button>
      <v-button class="v-button is-warning is-radio el-icon-star-off" round>
      </v-button>
      <v-button class="v-button is-danger is-radio el-icon-delete" round>
      </v-button>
    </div>
    <div>
      <v-button class="is-disabled">
        默认按钮
      </v-button>
      <v-button class="v-button is-primary is-disabled">
        主要按钮
      </v-button>
      <v-button class="v-button is-success is-disabled">
        成功按钮
      </v-button>
      <v-button class="v-button is-info is-disabled">
        信息按钮
      </v-button>
      <v-button class="v-button is-warning is-disabled">
        警告按钮
      </v-button>
      <v-button class="v-button is-danger is-disabled">
        危险按钮
      </v-button>
    </div>
    <div>
      <v-button>
        默认按钮
      </v-button>
      <v-button class="is-medium">
        中等按钮
      </v-button>
      <v-button class="is-small">
        中等按钮
      </v-button>
      <v-button class="is-mini">
        超小按钮
      </v-button>
    </div>
    <div>
      <v-button class="is-radio">
        默认按钮
      </v-button>
      <v-button class="is-radio is-medium">
        中等按钮
      </v-button>
      <v-button class="is-radio is-small">
        中等按钮
      </v-button>
      <v-button class="is-radio is-mini">
        超小按钮
      </v-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VBotton'
}
</script>
<style lang="scss" scoped>
div {
  margin-top: 10px;
}
.v-button {
  margin-right: 10px;
}
</style>
