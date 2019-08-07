

<template>
<!--  eslint-disable  -->
  <!-- <div class="hello">
    <div v-for="font in fonts.items">
      <div>
        {{ font.family }}
      </div>
    </div>
  </div> -->

 <div class="md-layout">
    <md-card  v-for="font in fonts.items.slice(0,10)" class="md-layout-item md-primary">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{font.family}}</div>
          <div class="md-subhead ">TEST TEXT </div>
        </md-card-header-text>

        <md-card-media>
          <!-- <img src="/assets/examples/avatar-2.jpg" alt="Avatar"> -->
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

  </div>

</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.3.4"></script>
<script>
/* eslint-disable */
export default {
  name: "Fonts",
  props: {
    msg: String
  },
  data() {
    return {
      fonts: []
    }
  },
  mounted() {

    this.$http
      .get(
        "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyC4xQCYKx3yedrK_ANpQl_4h1HZFv_jwe4"
      )
      .then(
        response => {
          // get body data
          this.fonts = response.data;
          console.log(response
          );

        },
        response => {
          // error callback
        }
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
