<template>
  <router-link to="/"><span class="menu">Home</span></router-link>
  <router-link to="/user"><span class="menu">User</span></router-link>
  <span class="time">{{ realTime }}</span>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      realTime: '',
    }
  },
  created() {
    setInterval(() => {
      this.realTime = new Date().toLocaleString();
    }, 1000);
  },
}
</script>

<style scoped>
  .menu {
    color: red;
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
  .time {
    text-align: left;
  }
</style>
