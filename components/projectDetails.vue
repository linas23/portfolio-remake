<template>
  <transition name="slide">
    <v-card tile>
      <v-img :src="project.img" alt />
      <v-card-title>{{project.title}}</v-card-title>
      <v-card-subtitle>{{project.description}}</v-card-subtitle>
      <v-card-text>
        Live:
        <a :href="project.link" target="href_blank">{{project.link}}</a>
      </v-card-text>
    </v-card>
  </transition>
</template>

<script>
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
.slide-enter-to {
  border: 1px solid red;
}
</style>