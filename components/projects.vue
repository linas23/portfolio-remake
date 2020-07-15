<template>
  <div id="github">
    <div class="display-2">Projects showcase</div>
    <v-row>
      <v-col cols="12" md="6">
        <div v-for="(project,index) in projects" :key="index">
          <v-btn text @click="changeProjectDetail(index)">{{project.title}}</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="details">
        <project-details :project="project"></project-details>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import thcards from "~/static/img/projects/13cards.png";
import findAnother from "~/static/img/projects/findanother.png";
import frontend from "~/static/img/projects/Annotation 2020-04-05 232441.png";
export default {
  data() {
    return {
      showDetails: false,
      projects: [
        {
          img: thcards,
          title: "13 Cards",
          description: "A page displaying various css transformations.",
          link: "https://linas23.github.io/13-cards/"
        },
        {
          img: findAnother,
          title: "Finding Another",
          description: "Get a match and try to win the game.",
          link: "https://linas23.github.io/findAnother/"
        },
        {
          img: frontend,
          title: "100 projects of frontend",
          description:
            "An extended version of #100DaysOfCode challenge. Practicing the frontend code daily.",
          link: "https://frontend23.now.sh/"
        },
        {
          img: thcards,
          title: "13 Cards",
          description: "A page displaying various css transformations.",
          link: "https://linas23.github.io/13-cards/"
        },
        {
          img: findAnother,
          title: "Finding Another",
          description: "Get a match and try to win the game.",
          link: "https://linas23.github.io/findAnother/"
        },
        {
          img: frontend,
          title: "100 projects of frontend",
          description:
            "An extended version of #100DaysOfCode challenge. Practicing the frontend code daily.",
          link: "https://frontend23.now.sh/"
        }
      ],
      currentProjectIndex: 0
    };
  },
  computed: {
    project() {
      return this.projects[this.currentProjectIndex];
    }
  },
  methods: {
    changeProjectDetail(i) {
      this.currentProjectIndex = i;
    }
  }
};
</script>   
<style lang="scss" scoped>
#github {
  height: 100vh;
}
</style>
