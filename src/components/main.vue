<template>
    <div id="main">
        <div class="top">
        <div class="left">
            <div class="card">
                <!-- <div class="img"> -->
                    <img src="./images/profileimg.jpeg" alt="">
                <!-- </div> -->
                <div class="card-title">
                    <h3>LINAS23</h3>
                </div>
                <div class="card-content">
                    <p>
                        A student of Computer Science Information Technology (5th semester) from Bhaktapur Multiple Campus. Welcome to my portfolio.
                    </p>
                </div>
            </div>
        
        <div class="tabs left">
            <div v-for="(tab,index) in tabs" :key="index">
                    <router-link :to="tab.linkTo">
                        <div class="btn-floating indigo pulse ">
                            <i :class="tab.icon"></i>
                        </div>
                        <br>
                        <span>
                            {{tab.title}}
                        </span>
                    </router-link>
            </div>
        </div>
        </div>
        <div class="right"> 
            <div class="card center">
                <img src="./images/IMG_20180130_085228-02.jpeg" alt="">
             <div class="blah center white-text">
            <div class="title">
                <h2>Grassland</h2>
            </div>
            <div class="caption">
                Favorite place
            </div>
            </div>
            </div>
        </div>
        </div>
        <div class="links">
                <a href="https://www.facebook.com/linas23"><i class="fab fa-3x fa-facebook" ></i></a>
                <a href="https://twitter.com/sanil_desemaru"><i class="fab fa-3x fa-twitter"></i></a>
                <a href="https://www.instagram.com/sanil_23"><i class="fab fa-3x fa-instagram"></i></a>
                <a href="https://github.com/linas23"><i class="fab fa-3x fa-github"></i></a>
                <a href="#"><i class="fab fa-3x fa-pinterest"></i></a>
        </div>
        <threeImages></threeImages>
        <compForm></compForm>
    </div>
   
</template>
<script>
import threeImages from '@/components/threeimages.vue';
import compForm from '@/components/form.vue';
export default {
    components:{
        threeImages,
        compForm
    },
    data(){
        return{
            tabs:[
                {
                    title:'About me',
                    icon:'fas fa-2x fa-user',
                    linkTo:'about_me'
                },
                {
                    title:'Github',
                    icon:'fab fa-2x fa-github',
                    linkTo:'github'
                },
                {
                    title:'contact',
                    icon:'fas fa-2x fa-address-card',
                    linkTo:'contact'
                }
            ],
            
        }
    },
    filters:{
        capitalize(value){
            return value.toUpperCase();
        }
    }
}
</script>
<style lang="scss">
    #main{
        // background: black;
        // height: 100vh;
        padding: 10px 100px;
        .top{
            display: flex;
        }
        .links{
            display: flex;
            flex-direction: column;
            position:absolute;
            top: 20%;
            left:38%;
            a{
                padding: 15px 10px;
            }
            a:hover{
                transition: all 0.5s ease;
                transform: rotate(2turn);
                color: red;
            }
        }
    }
    .left{
        .card{
             width: 60%;
            box-shadow: 0px 0px 15px black;

            .card-title{
                h3{
                margin: 0;
                padding: 10px 20px;
                }
            }
            .card-content{
                p{
                    text-align: justify;
                    font-size: 1.1rem;
                }
            }
            img{
                width: 100%
            }
            img:hover{
                transition: all 0.5s ease;
                border-radius: 50%;
                border: 2px solid red;
            }
        }
    }
    .right{
        display: inline-block;
        .card{
            height: 100vh;
            width: 90%;
            position: relative;
            overflow:hidden;
            box-shadow: 0px 0px 15px black;
            img{
            // padding: 10px;
                width: 100%;
                height: 115%;
            }
        .blah{
            position: absolute;
            top: 65%;
            left: 35%;
            // opacity: 0;
        }
        }
    }
    .tabs{
        padding: 10px;
        max-width: 60%;
        display: flex; 
        justify-content: space-around;
        margin-top:30px;
        height:100px;
        // align-items: center;
        text-align: center;
        overflow:hidden;
        span{
            font-size: 1.3rem;
            color: black;
            padding: 10px;
        }
    }
</style>