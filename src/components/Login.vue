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
      <a class="button is-primary" v-bind:onclick="login">Login</a>

    </div>
  </div>

</template>

<script>
  import axios from "../auth/axios";

  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        axios.post(`http://localhost:8080/login`, this.$data).then(response => {
          // JSON responses are automatically parsed.
          console.log(response.header('Authorization '))
        })
          .catch(e => {
            this.errors.push(e)
          })
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
