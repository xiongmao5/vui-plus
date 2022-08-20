<!--<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>-->
<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <el-aside-menu></el-aside-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ElAsideMenu from './components/ElAsideMenu'

export default {
  components: {
    ElAsideMenu
  }
}
</script>

<style lang="scss">
html, body {
  // background: rgb(240, 240, 240);
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
