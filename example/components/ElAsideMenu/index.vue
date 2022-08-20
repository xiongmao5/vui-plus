<template>
  <div>
    <h3 class="mb-2">
      组件跳转
    </h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      text-color="#000"
      active-text-color="#409eff"
      :collapse="isCollapse"
    >
      <el-menu-item v-for="item in list" :index="item" :key="item"
        @click="handleClick(item)"
      >
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'ElAsideMenu',
  data () {
    return {
      list: [
        {
          name: '按钮',
          path: '/button'
        },
        {
          name: '分页',
          path: '/pagination'
        },
        {
          name: '走马灯',
          path: '/carousel'
        },
        {
          name: '下拉菜单',
          path: '/dropdown'
        },
        {
          name: '连接',
          path: '/link'
        },
        {
          name: '菜单栏',
          path: '/navmenu'
        },
        {
          name: '轮播图',
          path: '/swiper'
        },
        {
          name: '单选框',
          path: '/radio'
        },
        {
          name: '复选框',
          path: '/checkbox'
        },
        {
          name: '评分',
          path: '/rate'
        },
        {
          name: '开关',
          path: '/switch'
        },
        {
          name: '对话框',
          path: '/dialog'
        },
        {
          name: '表单',
          path: '/input'
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      this.$router.push(item.path)
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  height: 100%;
  border: none;
  background: mix(#fff, lightblue, 20%);
  h3 {
    color: #000;
    line-height: 48px;
    text-align: center;
    font-size: 14px;
  }
  .el-menu {
    background: mix(#fff, lightblue, 20%);
    border: 1px solid #545c64;
  }
  .el-menu-item {
    background: mix(#fff, lightblue, 20%);
    justify-content: center;
  }
  .el-menu-item:hover {
    background: #fff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px;
}
</style>
