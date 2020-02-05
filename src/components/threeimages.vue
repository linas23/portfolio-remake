<template>
    <div>
        <div class="header center">
            <h1>
            Blissed Moments
            </h1>
        </div>
        <div id="images">
            <div class="cardd" v-for="(image,index) in images" :key="index">
                    <!-- <img src="./images/img/received_2134659036790048-01.jpeg" alt=""> -->
                <img :src="image.src" alt="">
                <!-- {{image.src}} -->
                <div class="relative ">
                    <span class="title">
                        {{image.title}}
                    </span>
                    <br>
                    <span class="caption">
                        {{image.caption}}
                    </span>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import image1 from './images/img/received_2134659036790048-01.jpeg';
import image2 from './images/img/20180908_151847-01.jpeg';
import image3 from './images/img/IMG_20180617_123843-01.jpeg';
export default {
    data(){
        return{
            images:[
            {
                src:image1,
                title:'Wolves',
                caption:'Understanding the life'
            },
            {
                src:image2,
                title:'Blessed Day',
                caption:'Wish to relive this moment'
            },
            {
                src:image3,
                title:'Nagarkot',
                caption:'One fine college day'
            },

            ]
        }
    }
}
</script>

<style lang="scss">
.header{
    h1{
        font-family: 'ZCOOL XiaoWei', serif;
        padding: 20px;
        }
}
    #images{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:600px;
        .cardd{
            // height: 500px;
            // border:2px solid black;
            width: 30%;
            // padding: 10px;
            position: relative;
            text-align: center;
            img{
            box-shadow: 0px 0px 10px black;
                transform: scale(1.05);
                width: 100%;
                height:100%;
            }
            img:hover ~.relative{
                transition: all 0.5s ease;
                opacity: 1;
            }
            img:hover{
                transition: all 0.5s ease;
                transform: scale(1);

            }
            .relative{
                position: absolute;
                top: 75%;
                left: 10%;
                color: white;
                opacity: 0;
                .title{
                    // text-align: center;
                    font-size:2.3rem;
                }
                .caption{
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>