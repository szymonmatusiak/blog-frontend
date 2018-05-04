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
          msg: 'Welcome to Your Vue.js App'
        }
      },
      created() {
        axios.get(`http://localhost:8080/api2/tester`)
          .then(response => {
            // JSON responses are automatically parsed.
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
