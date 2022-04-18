<template>
  <div>
    <p>UserDetail</p>
    <p>ID: {{ user.id}}</p>
    <p>NAME: {{ user.name}}</p>
    <p>PHONE: {{ user.phone}}</p>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "UserDetail",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
    }),
  },
  created() {
    const seq = this.$route.params.seq;
    this.$store.dispatch('FETCH_USER_DETAIL', seq);
  },

}

</script>

<style scoped>

</style>
