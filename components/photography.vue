<template>
  <div>
    <div class="display-2">Gallery</div>
    <div :class="[mobile ? 'mobilegrid':'grids','my-5']">
      <div v-for="(p,index) in images" :key="index" :class="'grid grid-'+ p.grid ">
        <img :src="p.src" alt class="image" @click="viewPhoto(index)" />
      </div>
    </div>
    <v-dialog v-model="dialog">
      <img :src="fullImage" style="object-fit:contain; max-height:75vh" />
    </v-dialog>
  </div>
</template>

<script>
import image1 from "~/static/img/photography/20180908_151847-01.jpeg";
import image2 from "~/static/img/photography/20181028_163359-02.jpeg";
import image3 from "~/static/img/photography/IMG_20180130_085228-02.jpeg";
import image4 from "~/static/img/photography/IMG_20180519_155921-01.jpeg";
import image5 from "~/static/img/photography/IMG_20180617_122638-01.jpeg";
import image6 from "~/static/img/photography/IMG_20180711_161753-01.jpeg";
import image7 from "~/static/img/photography/IMG_20190413_180507-01.jpeg";
import image8 from "~/static/img/photography/PSX_20180525_114348.jpg";
import image10 from "~/static/img/photography/IMG_20180502_133237-01.jpeg";
import image12 from "~/static/img/photography/IMG_20190429_164846-01.jpeg";
import image13 from "~/static/img/photography/IMG_20190220_192002-01.jpeg";
export default {
  data() {
    return {
      images: [
        { src: image13, grid: "4r" },
        { src: image6, grid: "" },
        { src: image10, grid: "" },
        { src: image5, grid: "1-3r" },
        { src: image3, grid: "3r" },
        { src: image4, grid: "" },
        { src: image8, grid: "3r" },
        { src: image1, grid: "3r" },
        { src: image2, grid: "2-5c" },
        { src: image12, grid: "1-3r" },
        { src: image7, grid: "4r" }
      ],
      dialog: false,
      imageIndex: 0
    };
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs;
    },
    fullImage() {
      return this.images[this.imageIndex].src;
    }
  },
  methods: {
    viewPhoto(i) {
      console.log("viewing photo");
      this.dialog = true;
      this.imageIndex = i;
    }
  }
};
console.log("hello");
</script>

<style  lang="scss" scoped>
.grid img {
  object-fit: cover;
  height: 100%;
}

.grids {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 150px);
  width: 100%;
  grid-gap: 10px;
  justify-content: space-around;
  .grid-1-3r {
    grid-row: 1/3;
  }
  .grid-2-5c {
    grid-column: 2/5;
    grid-row: 1/3;
  }
  .grid-3r {
    grid-row: 4/6;
  }
  .grid-4r {
    grid-row: 3/6;
  }
}

.mobilegrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 10px;
  .grid img {
    height: 250px;
    object-fit: cover;
    transition: all 2s ease;
    object-position: center;
  }
}
</style>