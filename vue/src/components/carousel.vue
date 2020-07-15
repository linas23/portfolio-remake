<template>
  <div id="photography">
    <header class>
      <!-- <vue-typed-js :strings="['Some of the photographs.']" :loop="true" :fadeOut="true" :typeSpeed="100">
            <h2 class="typing"></h2>
      </vue-typed-js>-->
      <h2>Photography section</h2>
      <p>
        <b>One day, you click a photo of a stranger, Bamm! A perspective changes.</b>
        <br />That's the funny story happened to me in the beginning of my photography journey. Time and perspective
        has never been same since.
        <br />
        <b>Surprises awaits for you in life.</b>
      </p>
    </header>
    <div class="carousel">
      <div class="carousel-item" v-for="(image,index) in images" :key="index">
        <img :src="image.src" alt />
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize.min";
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    dist: -50,
    padding: 30,
    numVisible: 5
  });
  instances();
});

//  vue lightbox
// import VuePureLightbox from 'vue-pure-lightbox'

import image1 from "./images/img/20180908_151847-01.jpeg";
import image2 from "./images/img/20180908_152939-01.jpeg";
import image3 from "./images/img/IMG_20180130_085228-02.jpeg";
import image4 from "./images/img/20190416_152725-01-01.jpeg";
import image5 from "./images/img/IMG_20180531_072149-01.jpeg";
import image6 from "./images/img/IMG_20180519_155921-01.jpeg";
import image7 from "./images/img/IMG_20180617_122638-01.jpeg";
import image8 from "./images/img/IMG_20180708_122011-01.jpeg";
import image9 from "./images/img/IMG_20180711_161753-01.jpeg";
import image10 from "./images/img/IMG_20181001_122305-02.jpeg";
import image11 from "./images/img/IMG_20190413_180507-01.jpeg";
import image12 from "./images/img/PSX_20180525_114348.jpg";
import image13 from "./images/img/received_2134659036790048-01.jpeg";
import image14 from "./images/img/IMG_20180502_133237-01.jpeg";
import image17 from "./images/img/IMG_20190730_184208-01.jpeg";
import image18 from "./images/img/IMG_20190429_164846-01.jpeg";
import image19 from "./images/img/IMG_20190220_192002-01.jpeg";
export default {
  data() {
    return {
      images: [
        { src: image1 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image2 },
        { src: image6 },
        { src: image7 },
        { src: image8 },
        { src: image9 },
        { src: image10 },
        { src: image11 },
        { src: image12 },
        { src: image13 },
        { src: image14 },
        { src: image17 },
        { src: image18 },
        { src: image19 }
      ]
    };
  },
  components: {
    // VuePureLightbox,
  }
};
</script>

<style lang="scss" scoped>
#photography {
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  font-family: "ZCOOL XiaoWei", serif;
  h2,
  p {
    padding: 0px 100px;
    color: #410093;
  }
  p {
    text-align: center;
    color: black;
    font-size: 1.75rem;
  }
  .carousel {
    min-height: 60%;
    // overflow: hidden;
    img {
      height: auto;
      transform: scale(1.5);
    }
  }
}

@media screen and (max-width: 576px) {
  #photography {
    width: 100%;
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
    h2,
    p {
      padding: 0px 25px;
    }
    .carousel {
      height: 60%;
    }
    img {
      height: auto;
      transform: scale(0.8);
    }
  }
}
</style>