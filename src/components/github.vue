<template>
        <!-- Mxy git -->
    <div>
        <div class="container">
            <h2 class="center">Some of my projects in GitHub</h2>
            <div class="projects center">
                <div class="card" v-for="(project,index) in projects" :key="index">
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
import laughoutloud from './images/projects/laughoutloud.png'
import bunchofapis from './images/projects/bunchofapis.png'
import oldportfolio from './images/projects/oldportfolio.png'

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
            {
                img:laughoutloud,
                title:'A joke for you',
                description:'please smile',
                github:'https://laughoutloud23.herokuapp.com/'
            },
            {
                img:bunchofapis,
                title:'API use',
                description:'get news and play videos from youtube',
                github: 'https://wordapp23.herokuapp.com/'
            },
            {
                img:oldportfolio,
                title:'My old portfolio',
                description:'here is my old portfolio',
                github: 'https://linas23.github.io/myportfolio23/' 
            }
        ]
        }
    }
}
</script>   
<style lang="scss" scoped>
@mixin easeOut {
    transition: all 0.7s ease;
}
.container{
    h2{
        margin: 0px;
        padding: 30px;
        color: white;
        font-family: 'Uncial Antiqua', cursive;
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: rgba(rgb(58, 43, 196),0.7)
    }
    padding: 10px;
}
.projects{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    width:100%
}

.card{
    width: 45%;
    margin: 20px;
    padding: 10px;
    box-shadow: 0px 0px 10px ;
    img{
        width:100%;
        opacity: 1;
        position: relative;
    }
    .relative{
        padding: 10px;
        opacity: 0;
        position: absolute;
        min-height: 100px;
        width: 100%;
        top: 25%;
        left:0%;
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
        transition: all 1s ease;
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