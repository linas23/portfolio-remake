<template>
  <div class="experience">
            <h2 >
                Experiences on...
            </h2>
            <p>
                It's almost two years now getting into the field of web development. Within this time, i've experienced working with different tools.
                They are listed below
                <ul>
                    <li>HTML5,CSS3,JS,Bootstrap</li>
                    <li>Vue js with Vuex, Vue Router, Vue CLI</li>
                    <li>Working with different APIs</li>
                    <li>Basic of Nuxt js</li>
                    <li>Basic of Node js and express framework (Creating web server, managing API, Server side rendering)</li>
                    <li>Working with npm and npm modules</li>
                    <li>Version control tools like Git </li>
                </ul>
            </p>   
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
        font-family: 'ZCOOL XiaoWei', serif;
        display: flex;
        width: 90%;
        margin: 0px auto;
        flex-direction: column;
        justify-content: space-around;
    }
    h2,p{
        padding: 0px 100px;
    }
    h2{
        color:#410093;
    }
    p{
        width:70%;
        font-size:1.5rem;
        font-family: 'Lora', serif;
    }
    ul{
        li{
            list-style-type: disc;
            font-size:1.2rem;
        }
    }
   @media screen and (max-width:576px){
       .experience{
        display: flex;
        width: 100%;
        margin: 0px auto;
        flex-direction: column;
        justify-content: space-around;
    }
    h2{
        padding: 0px 25px ;
        font-size: 2.5rem;
    }
    p{
        padding: 0px 25px;
        width:100%;
        font-size:1.35rem;
    }
   }
   @media screen and (max-width:1200px){
    p{
        width:100%;
    }
}

</style>