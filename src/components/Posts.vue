<template>
  <div class="container" >

  <input v-model="username" class="input" type="text" placeholder="Tag">
  <button class="button is-primary" v-on:click="test">Login</button>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post}}</strong></p>
    </li>
  </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import store from '../token'
  let config = {
    headers: {

    }
  }
  export default {
    name: 'Login',
    data () {
      return {
        tag:'',
        header: '',
        posts: [],
        username: '',
        password: ''
      }
    }, created() {
      axios.get(`http://localhost:8080/api2/getposts`)
        .then(response => {
          this.headers = response.headers
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  methods: {

      test: function(event){

        axios.get(`http://localhost:8080/api2/getpost`,
          {params: {
              tagName: this.tag
          }})
          .then(response => {
            this.posts = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      loginFailed() {
        console.log("logi2n3")
      }

    }
  }
</script>

<style scoped>

</style>
