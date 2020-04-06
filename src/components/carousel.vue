<template>
    <div id="carousel">
        <header class="">
            <h3>Some of the photographs</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim placeat perferendis obcaecati. Deserunt nam beatae similique libero sit nihil molestiae, quod soluta consequuntur quas nisi, non nostrum aperiam atque tempore.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim placeat perferendis obcaecati. Deserunt nam beatae similique libero sit nihil molestiae, quod soluta consequuntur quas nisi, non nostrum aperiam atque tempore.
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
            // border:1px solid green;
            height: 80%;
            // padding: 100px 0px;
            overflow: hidden;
            img{
                height: auto;
                transform: scale(1.5);
            }
        }
    }
</style>