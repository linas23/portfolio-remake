<template>
        <!-- Mxy git -->
    <div id="github">
        <!-- <vue-typed-js :strings="['Projects in GitHub']" :loop="true" :fadeOut="true" :typeSpeed="100">
            <h2 class="typing"></h2>
        </vue-typed-js> -->
            <h2>Projects in Github</h2>
            <!-- <vue-typer text='' :erase-on-complete='false' :repeat="infinity"></vue-typer> -->
            <br>
            <div class="projects">
                <div class="card tooltipped" v-for="(project,index) in projects" :key="index" data-position="bottom" data-tooltip="Do visit once">
                        <img class="card-img" v-bind:src="project.img"  alt="">
                        <div class="card-title">{{project.title}}</div>
                        <div class="card-content">
                            <a v-bind:href="project.github" class="link">{{project.github}}</a> 
                            <p>
                                {{project.description}}
                            </p>
                        </div>  
                </div>  
                    <img src="../assets/images/undraw_developer_activity_bv83.svg" class="illustration" alt=""> 
            </div>
    </div>
</template>

<script>

import M from 'materialize-css/dist/js/materialize.min'

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems,{
        margin:-1
    });
    instances();
  });


import thcards from './images/projects/13cards.png';
import findAnother from './images/projects/findanother.png';
import rk from './images/projects/Rk.com.png';
import laughoutloud from './images/projects/laughoutloud.png'
import bunchofapis from './images/projects/bunchofapis.png'
import oldportfolio from './images/projects/oldportfolio.png'
import bmc from './images/projects/Annotation 2020-04-05 232219.png'
import frontend from './images/projects/Annotation 2020-04-05 232441.png'
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
                description:'Get a match and try to win the game.',
                github:'https://github.com/linas23/findAnother',
            },
            {
                img:rk,
                title:'Rajamati Kumati',
                description:'A dream project.',
                github:'Sorry not available in Github yet.'
            },
            {
                img:laughoutloud,
                title:'A joke for you',
                description:'please smile for a while.',
                github:'https://laughoutloud23.herokuapp.com/'
            },
            {
                img:bunchofapis,
                title:'API use',
                description:'get news, word definitions and play videos from youtube. Some of the functionality may not work due to the need of updating API keys.',
                github: 'https://wordapp23.herokuapp.com/'
            },
            {
                img:bmc,
                title:'BMC accounting',
                description:'A simple record management system which was a proposed project work in college for System Analysis and Design.',
                github: 'https://github.com/linas23/bmcaccounting' 
            },
            {
                img:frontend,
                title:'100 projects of frontend',
                description:'An extended version of #100DaysOfCode challenge. Practicing the frontend code daily.',
                github:'https://frontend23.now.sh/' 
            },
            {
                img:oldportfolio,
                title:'My old portfolio',
                description:'here is my old portfolio.',
                github: 'https://linas23.github.io/myportfolio23/' 
            },
        ]
        }
    }
}
</script>   
<style lang="scss" scoped>


#github{
    width:90%;
    margin:0px auto;
    font-family: 'ZCOOL XiaoWei', serif;
    padding: 0 100px;
}
h2{
    color:#410093;
}
.projects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap:wrap;
}
.illustration{
    width:30%
}
.card{
    width: 30%;
    margin: 30px 0px;
    box-shadow: 0px 0px 10px black;
    min-height:300px;
    padding-bottom: 20px;
    border-bottom-width: 0px;
    border-bottom-color: #410093;
    border-bottom-style: solid;
    transition: all 0.5s ease-in;
    img{
        width:100%;
    }
    p{
        font-size: 1.1rem;
    }
    .card-title{
        font-size: 1.5rem;
        padding: 0px;
    }
    .card-title,.card-content{
        padding: 0px 20px;
    }
    .link{
        font-size: 1.2rem;
        word-break: break-all;
    }
    &:hover{
        transform: scale(1.1);
        border-bottom-width: 2px;
    }
}

@media screen and (max-width:1200px){
    .card{
        width:45%;
    }
    .illustration{
        width:100%;
        transform: scale(0.8);
    }
}
@media screen and (max-width:900px){
    .card{
        width:100%;
    }
    .illustration{
        width:100%;
    }
}

@media screen and (max-width:576px){
    #github{
        padding: 0px;
    }
    .projects{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        flex-wrap:wrap;
    }
    h2{
        font-size: 2.5rem;
    }
    .illustration{
        width:90%
    }
    .card{
        width: 90%;
        padding-bottom: 20px;
        img{
            width:100%;
            padding: 5px;
        }
        .card-title{
            font-size: 2rem;
        }
        .card-title,.card-content{
            font-size: 1.5rem;
        }
        .link{
            font-size: 1.3rem;
        }
    }
}
</style>