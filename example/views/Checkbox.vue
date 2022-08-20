<template>
  <div>
    <v-checkbox v-model="value" label="1">
    </v-checkbox>
    <v-checkbox v-model="value2" label="2">
    </v-checkbox>
  </div>
  <div>
    <v-checkbox-group v-model="value3" @click="handleClick">
      <v-checkbox label="1">
      </v-checkbox>
      <v-checkbox label="2">
      </v-checkbox>
    </v-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true,
      value2: false,
      value3: []
    }
  },
  methods: {
    handleClick () {
      console.log(this.value3)
    }
  }
}
</script>
