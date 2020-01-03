<template>
    <div>
        <!-- My git -->
        <div id="github-container">
            <h2 class="center">Some of my projects in GitHub</h2>
            <div class="projects center">
                <div class="card container" v-for="(project,index) in projects" :key="index">
                    <img v-bind:src="project.img"  alt="">
                <div class="relative">
                        <div class="title">{{project.title}}</div>
                        <div class="link">
                            GitHub : <a v-bind:href="project.github">{{project.github}}</a> 
                        </div> 
                        <div class="description">{{project.description}}</div>  
                </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
import thcards from './images/projects/13cards.png';
import calc from './images/projects/calculator.png';
import findAnother from './images/projects/findanother.png';
import rk from './images/projects/Rk.com.png';
import wastingtime from './images/projects/wastingtime.png';
export default {
    data(){
        return{
             projects:[
            {
                img:thcards,
                title:'13 Cards',
                description:'A page displaying various css transitions.',
                github:'https://github.com/linas23/13-cards'
            },
            {
                img:findAnother,
                title:'Finding Another',
                description:'Get a match and try to win the game',
                github:'https://github.com/linas23/findAnother',
            },
            {
                img:rk,
                title:'Rajamati Kumati',
                description:'A dream project',
                github:'Sorry not available in Github yet.'
            },
            {
                img:calc,
                title:'A Calculator',
                description:'Helps you in math',
                github:'Sorry not available in Github yet.'
            },
            {
                img:wastingtime,
                title:'Waste your time',
                description:'Not completed.',
                github:'Sorry not available in Github yet.'
            },
        ]
        }
    }
}
</script>   
<style lang="scss" scoped>
@mixin easeOut {
    transition: all 0.7s ease;
}

.card{
    width: 100%;
    margin: 0 auto;
    // text-align: center;
    img{
        width:100%;
        opacity: 1;
        position: relative;
        // margin: 0;
    }
    .relative{
        padding: 10px;
        opacity: 0;
        position: absolute;
        top: 40%;
        left:30%;
        color: white;
        // height: 200px;
        // width: 400px;
        background: black;
        .title{
            font-size: 2rem;
        }
        .link{
            font-size: 1.6rem;
            a{
                color: white;
            }
        }
        .description{
            font-size: 1.4rem;
        }
    }
    .relative:hover{
        opacity: 1;
    }
    img:hover~.relative{
        transition: all 0.5s ease;
        opacity: 1;
    }
    img:hover{
        @include easeOut();
        opacity: 0.8;
    }
}
</style>