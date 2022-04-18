<template>
  <div class="btn">
    <router-link to="/"><span class="menu">Home</span></router-link>
    <router-link to="/user"><span class="menu">User</span></router-link>
    <span class="menu">{{ realTime }}</span>
  </div>
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
  .btn {
    margin-top: 10px;
  }
  .menu {
    color: red;
    border: 1px solid black;
    margin-right: 5px;
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
</style>
