<template>

  <div class="hello" >
    <div class="container" >
      <div class="field">
        <p class="control has-icons-left ">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
           <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
           <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <a class="button is-primary" >Login</a>

    </div>
  </div>

</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
  .field{
    margin: auto;
    max-width: 420px;
    margin-bottom: 10px;
  }
</style>
