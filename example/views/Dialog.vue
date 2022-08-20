<template>
  <v-button @click="dialogshow = true">打开对话框</v-button>
  <v-dialog class="dialog" title="提示" width="30%" v-model="dialogshow">
    <span>这是一个段落</span>
    <template #slot-foot>
      <span>
        <v-button>取消</v-button>
        <v-button>确认</v-button>
      </span>
    </template>
  </v-dialog>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data () {
    return {
      dialogshow: false
    }
  }
}
</script>
