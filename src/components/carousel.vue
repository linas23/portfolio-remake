<template>
    <div id="carousel">
        <header class="">
            <vue-typed-js :strings="['Some of the photographs.']" :loop="true" :fadeOut="true" :typeSpeed="100">
            <h2 class="typing"></h2>
            </vue-typed-js>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim placeat perferendis obcaecati. Deserunt nam beatae similique libero sit nihil molestiae, quod soluta consequuntur quas nisi, non nostrum aperiam atque tempore.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim placeat perferendis obcaecati. Deserunt nam beatae similique libero sit nihil molestiae, quod soluta consequuntur quas nisi, non nostrum aperiam atque tempore.
            </p>
        </header>
        
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

//  vue lightbox
// import VuePureLightbox from 'vue-pure-lightbox'

import image1 from './images/img/20180908_151847-01.jpeg';
import image2 from './images/img/20180908_152939-01.jpeg';
import image3 from './images/img/20181028_083311-01.jpeg';
import image4 from './images/img/20190416_152725-01-01.jpeg';
import image5 from './images/img/IMG_20180130_085228-02.jpeg';
import image6 from './images/img/IMG_20180519_155921-01.jpeg';
import image7 from './images/img/IMG_20180519_155921-01.jpeg';
export default {

    data(){
        return{
            images:[
                {
                    src:image1
                },
                {
                    src:image2
                },
                {
                    src:image3
                },
                {
                    src:image4
                },
                {
                    src:image5
                },
                {
                    src:image6
                },
                {
                    src:image7
                }
            ]
        }
    },
    components: {
        // VuePureLightbox,
    }

}
</script>

<style lang="scss">
    #carousel{
        width: 90%;
        margin: 0 auto;
        height: 100vh;
        margin-bottom: 10vh;
        h3{
            padding: 0px 100px;
        }
        .carousel{
            height: 80%;
            overflow: hidden;
            img{
                height: auto;
                transform: scale(1.5);
            }
        }
    }
    
    @media screen and (max-width:576px){
        #carousel{
            width: 100%;
            padding-bottom: 20vh;
            margin-bottom: 20vh;
            h2{
                font-size: 2.3rem;
                min-height: 2.5rem;
            }
            h2,p{
                padding: 0px 25px;
            }
            .carousel{
                height: 80%;
                overflow: hidden;
            }
        }
    }
</style>