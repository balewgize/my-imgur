<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item"> ImageUpload </a>
    <div class="right menu">
      <a class="ui item" @click="login"> Login </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Navbar",
  methods: {
    ...mapActions(['login']),
  }
};
</script>

<style scoped>
/* nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
} */
</style>
