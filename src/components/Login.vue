<template>

  <div class="hello" >
    <div class="container" >
      <div class="field">
        <p class="control has-icons-left ">
          <input v-model="username" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
           <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="password" class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
           <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <button class="button is-primary" v-on:click="login">Login</button>
      <button class="button is-primary" v-on:click="test">test</button>
      <ul v-if="headers && headers.length">
        <li v-for="header of headers">
          <p><strong>{{header}}</strong></p>
        </li>
      </ul>
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <p><strong>{{post}}</strong></p>
        </li>
      </ul>
    </div>
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
        header: '',
        posts: [],
        username: '',
        password: ''
      }
    },
    methods: {
      login: function (event) {
        console.log("login")
        axios.post(`http://localhost:8080/login`, {username: this.username, password: this.password})
          .then(request => this.loginSuccessful(request))
          .catch(() => this.loginFailed())
      },
      loginSuccessful: function (req) {
        localStorage.setItem("auth", req.headers.authorization)
        config.headers.authorization = req.headers.authorization
        this.header = req.headers.authorization
        console.log(localStorage.getItem('auth'))
        console.log({'authorization: ': localStorage.getItem('auth')})
        console.log("log")
        console.log(req.headers.authorization);
        console.log(req.status);
        console.log(req.statusText);
      },
      test: function(event){
        axios.get(`http://localhost:8080/api/tester2`, config.headers.authorization=localStorage.getItem('auth'))
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
  .field{
    margin: auto;
    max-width: 420px;
    margin-bottom: 10px;
  }
</style>
