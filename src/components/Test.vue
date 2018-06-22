<template>
  <div class="hello">
      <ul v-if="posts && posts.length">
        <li v-for="post of posts">
          <div class="container">

          <section class="articles">
          <div class="card article">
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-centered">
                  <p class="title article-title">{{post.title}}</p>
                  <div class="tags has-addons level-item">
                    <span class="tag is-rounded is-info">Tags</span>
                    <span class="tag is-rounded">
                        <li v-for="tag of post.tags">
                          {{tag.name + ", "}}
                        </li>
                    </span>
                  </div>
                </div>
              </div>
              <div class="content article-body">
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                  Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                <h3 class="has-text-centered">How to properly center tags in bulma?</h3>
                <p> Proper centering of tags in bulma is done with class: <pre>level-item</pre>
                Voluptat ut farmacium tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie.
                Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.</p>
              </div>
            </div>
          </div>
          </section>
          </div>
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
        axios.get(`http://localhost:8080/api2/getposts`)
          .then(response => {
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
