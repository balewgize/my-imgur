<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item"> ImageUpload </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="actions">
        <a class="ui item"> Gallery </a>
        <a class="ui item"> Upload </a>
        <a class="ui item" @click="logout"> Logout </a>
      </div>
      <a v-else class="ui item" @click="login"> Login </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  }
};
</script>

<style scoped>
.actions {
  display: flex;
}
</style>
