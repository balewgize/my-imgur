<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item"> ImageUpload </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="actions">
        <router-link to="/" class="ui item"> Gallery </router-link>
        <router-link to="/upload" class="ui item"> Upload </router-link>
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
