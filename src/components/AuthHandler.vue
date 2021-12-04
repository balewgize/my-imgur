<template>
    <div>Just a moment...</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        this.finalizeLogin();
    }
}
</script>