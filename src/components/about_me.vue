<template>
        <div class="aboutme">
            <div class="card-title">
                <h3>
                Who Am I ?
                </h3>
            </div>
            <div class="card-content">
                    Hello everyone,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                        &nbsp;&nbsp;    
                    I am Sanil Desemaru from ittachhen-15,Bhaktapur,Nepal.
                    It's been a while, learning the different tools for the
                    web development, i've become preety confident working in front-end 
                    part of the web based projects. You can view some of the projects i have completed 
                    in <router-link to="github">my github</router-link> section of this portfolio.<br>
                    Here are the lists of tools and programming languages i learned so far: <br>
                    <li>HTML, CSS, Bootstrap, SCSS, JavaScript</li>
                    <li>A front-end framework "Vue js" </li>
                    <li>Git, npm</li>
                    <li>Basics of C, C++, Python, Php</li>    
                    Being a student of computer science, i am quite interested in 
                    the world of programming. I wish to become a full-stack web developer and hopefully a software engineer 
                    in near future. So, wish me luck. Apart from these, i am passionate about photography.
                    <span>
                        <a href="#">click here to visit my photo gallery</a>
                    </span>
            </div>
        <div class="center">
            <h1 >
                Experiences on...
            </h1>
            <ul>
                <li class="card" v-for="(image,index) in images" :key="index">
                    <img :src="image.src" alt="">
                        <div class="progress">
                            <div class="determinate" :style="image.skill" ></div>
                        </div>
                    
                </li>
            </ul>
        </div>
        <footer>
            <div class="center">
                <h3>linas23</h3>
                <b>🦉</b>
                 <b>🐺</b>
            </div>
        </footer>
    </div>

</template>
<script>
export default {
    data(){
        return{
            images: this.$store.getters.skills
        }
    }
}
</script>

<style lang="scss">
    
 @mixin easeOut {
    transition: all 0.7s ease;
}
.card{
    margin:0;
}
.aboutme{
    font-family: 'Arapey', serif; 
    margin: 0 auto;
    padding: 75px;
    color: white;
    background: #273c75;
    h3{
        margin: 0;
    }
    .card-content{
        font-size: 1.2rem;
    }
}
ul{ 
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
    li{
        width: 30%;
        height:55%;
        padding:50px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .card{
        /* height: 500px; */
        margin: 10px;
    }
    .card:hover{
        background: rgb(52, 60, 172);
    }
}
.progressbar{
    /* position: absolute; */
}
footer{
    b{
        font-size: 3rem;
    }
}

</style>