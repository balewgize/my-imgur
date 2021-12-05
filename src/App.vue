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

// const CLIENT_ID = '5dbfaa9b405b7f8'
// const CLIENT_SECRET = '4f07be1d9ddc3bb9335bb4a450460f55cf7be865'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
