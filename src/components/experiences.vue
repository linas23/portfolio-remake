<template>
  <div class="experience">
            <h2 class="black-text ">
                Experiences on...
            </h2>
            <div class="carousel">
                <div class="carousel-item"  v-for="(image,index) in images" :key="index" >
                    <img :src="image.src" alt="">
                </div>
            </div>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        dist:-50,
        padding:30,
        numVisible:5
    });
    instances();
  });
export default {
        data() {
            return {
                images: this.$store.getters.skills
            }
        }
    }
</script>

<style scoped lang="scss">
.experience{
        display: flex;
        width: 90%;
        margin: 0px auto;
        flex-direction: column;
        justify-content: space-around;
    }
    h2{
        padding: 0px 100px;
    }
   
</style>