<template>
  <div>
    <p>User</p>
    <button>add</button>
  </div>

  <div v-for="item in users.content" v-bind:key="item.seq">
    <div>
      <router-link :to="`/user/${ item.seq }`">
        {{ item.name }}
      </router-link>
    </div>
  </div>

</template>

<script>

import { mapState } from "vuex";

export default {
  name: "User",
  created() {
    this.$store.dispatch('FETCH_USER_LIST');
  },
  computed: {
    ...mapState({
      users: state => state.users,
    }),
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
