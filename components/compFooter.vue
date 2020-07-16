<template>
  <div class="mt-10">
    <div class="text-sm-h3 text-h5  pa-0">
      Let's do something exciting !
    </div>
    <v-row class="my-5">
      <v-col
        cols="12"
        md="4"
        v-for="(c, index) in connect"
        :key="index"
        class="text-center pa-0"
      >
        <div>
          <v-icon large color="secondary" class="my-5">{{ c.icon }}</v-icon>
          <div class="text-h5">{{ c.text }}</div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="2" sm="1" v-for="(link, index) in links" :key="index">
        <v-btn large icon :href="link.link" class="link">
          <v-icon color="accent">{{ link.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connect: [
        {
          text: "Ittachhen-15, Bhaktapur, Nepal",
          icon: "mdi-home"
        },
        {
          text: "9860678131",
          icon: "mdi-phone"
        },
        {
          text: "desemaru77@gmail.com",
          icon: "mdi-email"
        }
      ],
      links: [
        { link: "https://www.facebook.com/linas23", icon: "mdi-facebook" },
        { link: "https://twitter.com/sanil_desemaru", icon: "mdi-twitter" },
        { link: "https://www.instagram.com/sanil_23", icon: "mdi-instagram" },
        { link: "https://github.com/linas23", icon: "mdi-github" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.link:hover {
  transform: rotate(1turn);
}
.v-application .text-h5 {
  font-size: 2.1rem !important;
  font-family: "Sacramento", cursive !important;
}
</style>
