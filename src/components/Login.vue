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

    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      SignIn: function (event) {
        console.log('login clicked')
        let data = JSON.stringify({
          password: this.password,
          username: this.username
        })

        axios.post('http://localhost:8080/login', data, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:8081'

            }
          }
        ).then(request => this.loginSuccessful(request))
          .catch(() => this.loginFailed())
      },


      login: function (event) {
        console.log("login")
        axios.post(`http://localhost:8080/login`, {username: this.username, password: this.password})
          .then(request => this.loginSuccessful(request))
          .catch(() => this.loginFailed())
      },
      loginSuccessful(req) {
        console.log("log")
        console.log(req.headers);
        console.log(req.status);
        console.log(req.statusText);
        console.log(req.headers);
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
