<template>
  <div class="ui container">
    <Navbar></Navbar>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
