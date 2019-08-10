

<template>
<!--  eslint-disable  -->
 <div v-if="allFonts" class="md-layout">
<font-picker :api-key="'AIzaSyC4xQCYKx3yedrK_ANpQl_4h1HZFv_jwe4'" :options="{}" :active-font="fontFamily" @change="myFunc"></font-picker>

<p class="apply-font" >TEST TEST TEST TESTTEST TESTTEST TEST</p>

  </div>

</template>

<script>
/* eslint-disable */
import FontPicker from 'font-picker-vue';

export default {
  name: "Fonts",
  props: {
    msg: String
  },
  components: {
    'font-picker': FontPicker
  },
  data() {
    return {
      allFonts: [],
      groupedFonts: [],
      fontFamily: 'Roboto'
    }
  },
  computed: {
    fonts() {
   if (this.allFonts) {
      for (const key in this.allFonts) {
        console.log(key);
        if (this.allFonts.hasOwnProperty(key)) {
          const element = this.allFonts[key];
        }
      }

        return this.allFonts.slice(0,10)
      }
      return {}
    }
  },
  methods: {
    myFunc($event) {
      console.log($event.family);

      this.fontFamily = $event.family


    }
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
