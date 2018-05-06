<template>
  <div class="hello">
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post}}</strong></p>
        </li>
      </ul>

      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
      <ul v-if="headers && headers.length">
        <li v-for="header of headers">
          <p><strong>{{header.toString()}}</strong></p>
        </li>
      </ul>
    <h1>{{ string }}</h1>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
        name: "Test",

      data() {
        return {
          posts: [],
          errors: [],
          headers: [],
          string: '',
          msg: 'Welcome to Your Vue.js App'
        }
      },
      created() {
        axios.get(`http://localhost:8080/api2/tester`)
          .then(response => {
            axios.defaults.headers.common['Authorization']   ='';
            this.headers = response.headers
            this.posts = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
      }
</script>

<style>

</style>
