<template>
        <!-- Mxy git -->
    <div id="github">
            <h2 class="black-text">Some of my projects in GitHub</h2>
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
                description:'here is my old portfolio',
                github: 'https://linas23.github.io/myportfolio23/' 
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
#github{
    width:90%;
    margin:0px auto;
    font-family: 'ZCOOL XiaoWei', serif;
    padding: 0 100px;
}

.projects{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap:wrap;
}

.card{
    *{
        padding: 0px;
    }
    max-width: 30%;
    margin: 30px 0px;
    box-shadow: 0px 0px 10px black;
    min-height:300px;
    padding-bottom: 20px;
    transition: all 0.5s ease-in;
    img{
        width:100%;
    }
    .card-title{
        font-size: 1.4rem;
        padding: 0px;
    }
    .card-title,.card-content{
        padding: 0px 20px;
    }
    .link{
        font-size: 0.8rem;
    }
    &:hover{
        transform: scale(1.1);
    }
}

</style>