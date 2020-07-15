<template>
  <div>
    <div class="display-1 pa-0">Let's do something exciting !</div>
    <v-row class="my-3">
      <v-col cols="12" md="4" v-for="(c,index) in connect" :key="index" class="text-center pa-0">
        <div>
          <v-icon large color="secondary">{{c.icon}}</v-icon>
          <div class="title lowercase">{{c.text}}</div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1" v-for="(link,index) in links" :key="index">
        <v-btn large icon :href="link.link" class="link">
          <v-icon color="accent">{{link.icon}}</v-icon>
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
</style>