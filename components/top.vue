<template>
  <div>
    <v-row id="top" align-content-sm="center">
      <!-- <particles-bg type="polygon" :bg="true" /> -->
      <v-col cols="12" sm="5">
        <img src="img/profileimg.jpeg" alt />
      </v-col>
      <v-col cols="12" sm="7">
        <div class="text-md-h1 text-h2 primary--text text-uppercase">Sanil Desemaru</div>
        <div class="display-1 mt-4">
          I'm a
          <typical :steps="types" :wrapper="'span'" :loop="Infinity"></typical>
        </div>
        <div class="dash accent mt-4"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import typical from "vue-typical";
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: { typical, ParticlesBg },
  data() {
    return {
      types: [
        "Web Enthusiast",
        1000,
        "Self taught developer",
        1000,
        "Photographer",
        1000,
        "Night owl 🦉",
        1000
      ]
    };
  }
};
</script>
<style lang="scss">
#top {
  height: 100vh;
}
img {
  width: 100%;
}
.dash {
  height: 5px;
  width: 40%;
}
</style>
