<template>
  <div class="hello">
    <h2>Ecosystem</h2>
    <h2 v-bind="msg"></h2>
  </div>
</template>

<script>
    export default {
        name: "Test",

      data() {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
    }
</script>

<style>

</style>
