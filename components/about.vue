<template>
  <div>
    <div class="text-sm-h3 text-h4">
      I work with
      <typical
        class="info--text"
        :steps="types"
        :wrapper="'span'"
        :loop="Infinity"
      ></typical>
    </div>
    <v-row justify="space-around" class="my-sm-12">
      <v-col
        cols="2"
        v-for="(tool, index) in tools"
        data-aos="slide-up"
        :data-aos-delay="(index + 1) * 100"
        :key="index"
      >
        <v-img :src="tool" alt height="15vh" class="img" contain />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import typical from "vue-typical";

import vuejs from "~/static/img/tools/vuejs-1175052.png";
import css from "~/static/img/tools/css.jpg";
import html from "~/static/img/tools/html.png";
import js from "~/static/img/tools/js.jpg";
import nodejs from "~/static/img/tools/nodejs-logo.png";
import pptr from "~/static/img/tools/pptr.png";

export default {
  data() {
    return {
      tools: [html, css, js, vuejs, nodejs, pptr],
      types: [
        "HTML",
        2000,
        "CSS",
        2000,
        "JS",
        2000,
        "Vue js",
        2000,
        "Node js",
        2000,
        "Puppeteer",
        2000,
      ],
    };
  },
  components: {
    typical,
  },
};
</script>

<style lang="scss" scoped>
.img {
  filter: grayscale(1);
  transition: all 0.5s ease;
  &:hover {
    filter: grayscale(0);
  }
}
.v-application {
  .text-h4 {
    font-family: "Playfair Display", serif !important;
  }
}
</style>
