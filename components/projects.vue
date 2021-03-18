<template>
  <div id="github">
    <div class="text-sm-h3 text-h4">Portfolio</div>
    <v-row class="my-5">
      <v-col cols="12" md="6" class="details">
        <project-details :project="project"></project-details>
      </v-col>
      <v-col cols="12" md="6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="mb-5"
          data-aos="slide-left"
          :data-aos-delay="(index + 1) * 100"
        >
          <div
            :class="['title', highlightClass(index)]"
            text
            @click="changeProjectDetail(index)"
          >
            {{ project.title }}
          </div>
        </div>
        <v-btn
          target="href_blank"
          link
          href="https://drive.google.com/file/d/1XEmS3xT8jnFA_fbvSeRR-ZLGbtNdpY1b/view?usp=sharing"
          class="secondary"
        >
          Get my CV
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import thcards from "~/static/img/projects/13cards.png";
import findAnother from "~/static/img/projects/findanother.png";
import frontend from "~/static/img/projects/frontend.png";
import htdt from "~/static/img/projects/htdt.png";
import cv19 from "~/static/img/projects/cv-19.png";
import moviedb from "~/static/img/projects/moviedb.png";
import bible from "~/static/img/projects/bible.png";

export default {
  data() {
    return {
      showDetails: false,
      projects: [
        {
          img: thcards,
          title: "13 Cards",
          description: "A page displaying various css transformations.",
          link: "https://linas23.github.io/13-cards/",
        },
        {
          img: findAnother,
          title: "Finding Another",
          description: "Get a match and try to win the game.",
          link: "https://linas23.github.io/findAnother/",
        },
        {
          img: frontend,
          title: "100 projects of frontend",
          description:
            "An extended version of #100DaysOfCode challenge. Practicing the frontend code daily.",
          link: "https://frontend23.now.sh/",
        },
        {
          img: htdt,
          title: "How to do things",
          description: "starting with small components of web.",
          link: "https://htdt-23.netlify.app/",
        },
        {
          img: cv19,
          title: "Covid-19 chart",
          description: "A covid-19 details in chart and a table. Be safe.",
          link: "https://cv-19-23.netlify.app/",
        },
        {
          img: moviedb,
          title: "Movie review",
          description: "Review a movie.",
          link: "https://themoviedb-23.netlify.app/",
        },
        {
          img: bible,
          title: "A holy book",
          description: "Read a bible.",
          link: "https://jc-23.herokuapp.com/",
        },
      ],
      currentProjectIndex: 0,
    };
  },
  computed: {
    project() {
      return this.projects[this.currentProjectIndex];
    },
  },
  methods: {
    changeProjectDetail(i) {
      this.currentProjectIndex = i;
    },
    highlightClass(i) {
      return this.currentProjectIndex == i ? "info--text" : "secondary--text";
    },
  },
  mounted() {
    setInterval(() => {
      if (this.currentProjectIndex >= this.projects.length - 1) {
        this.currentProjectIndex = 0;
      } else {
        this.currentProjectIndex++;
      }
    }, 5000);
  },
};
</script>
<style lang="scss" scoped>
#github {
  min-height: 70vh;
}
.title {
  cursor: pointer;
  font-family: "Playfair Display", serif !important;
  font-weight: 777;
}
.v-application {
  .text-h4 {
    font-family: "Playfair Display", serif !important;
  }
}
</style>
