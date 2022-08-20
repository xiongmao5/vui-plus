<template>
  <v-nav-menu vwidth="500" vheight="40" hover :list=list>
  </v-nav-menu>
  <v-nav-menu class="is-dark" hover :list=list>
  </v-nav-menu>
  <v-nav-menu class="is-column" :collapse="isCollapse" vwidth="200" menu="click" vheight="300" :list=list>
  </v-nav-menu>
  <v-nav-menu class="is-column is-dark" :collapse="isCollapse" vwidth="200"  menu="click" vheight="300" :list=list>
  </v-nav-menu>
  <br />
  <v-button @click="handleClick()">改变大小</v-button>
</template>

<style lang="scss" scoped>
.v-nav-menu {
  margin: 10px;
}
</style>
<script>
export default {
  methods: {
    handleClick () {
      this.isCollapse = !this.isCollapse
    }
  },
  data () {
    return {
      isCollapse: false,
      list: [
        {
          name: '菜单一',
          list: [
            {
              name: '二级菜单一'
            },
            {
              name: '二级菜单二'
            },
            {
              name: '二级菜单三'
            }
          ]
        },
        {
          name: '菜单二',
          list: [
            {
              name: '二级菜单一'
            },
            {
              name: '二级菜单二'
            },
            {
              name: '二级菜单三'
            }
          ]
        },
        {
          name: '菜单三',
          list: [
            {
              name: '二级菜单一'
            },
            {
              name: '二级菜单二'
            },
            {
              name: '二级菜单三'
            }
          ]
        }
      ]
    }
  }
}
</script>
