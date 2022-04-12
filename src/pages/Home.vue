<template>
  <div class="common-layout">
    <p>Home</p>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },

  created() {
  },
  computed: {
  },

  data() {
    return {
      winterUrl: require('@/images/winter.png'),
      finalDigit: 0,
      input: 10,
      oldDigit: 0,
    }
  },
  methods: {
    add() {
      this.finalDigit += this.input
    },
    reset() {
      this.finalDigit = 0
    }
  },
  watch: {
    finalDigit(newDigit, oldDigit) {
      console.log(newDigit, oldDigit);
      this.oldDigit = oldDigit
    },
  },
}
</script>

<style scoped>

</style>
