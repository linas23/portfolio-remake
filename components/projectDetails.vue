<template>
  <v-card tile>
    <v-img :src="project.img" alt />
    <v-card-title class="font-weight-bold">{{ project.title }}</v-card-title>
    <v-card-subtitle class="font-weight-black">{{
      project.description
    }}</v-card-subtitle>
    <v-card-text class="font-weight-bold">
      Live:
      <a :href="project.link" target="href_blank">{{ project.link }}</a>
    </v-card-text>
  </v-card>
</template>

<script>
import AOS from "aos";
export default {
  name: "projectDetails",
  props: {
    project: {
      type: Object,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Playfair Display", serif !important;
}
</style>
