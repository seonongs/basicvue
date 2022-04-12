<template>
  <Menu/>
  <router-view/>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: 'App',
  components: { Menu, }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
