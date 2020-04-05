<template>
    <div id="carousel">
        <header class="center white-text">
            <h3>Some of the photographs</h3>
        </header>
        <carousel>
            <slide v-for="(image,index) in images" :key="index">
                <img :src="image.src" :alt="image.title">
            </slide>
        </carousel>
    </div>
</template>

<script>
// import image1 from './images/img/20180908_151847-01.jpeg';
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
                    src:image5
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
        display: grid;
        grid-template-rows: 15% 85%;
        justify-content: space-between;
        align-items: center;
        height:100vh;
        .VueCarousel{
            .VueCarousel-slide{
                height:500px;
                width:450px; 
                img{
                    // padding: 50px 0px;
                    height:100%;
                    width:100%;    
                    object-fit: contain;
                }
            }
        }
    }
</style>