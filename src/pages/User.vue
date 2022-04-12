<template>
  <div>
    <p>User</p>
  </div>

  <ul>
    <li v-for="item in users" v-bind:key="item.id">
      <a :href="`users/${item.id}`"> {{ item.name }} / {{ item.email }} </a>
    </li>
  </ul>
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
