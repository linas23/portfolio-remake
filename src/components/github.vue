<template>
        <!-- Mxy git -->
    <div id="github">
            <h2 class="center white-text">Some of my projects in GitHub</h2>
            <div class="projects">
                <div class="card" v-for="(project,index) in projects" :key="index">
                        <img class="card-img" v-bind:src="project.img"  alt="">
                        <div class="card-title">{{project.title}}</div>
                        <div class="card-content">
                            <a v-bind:href="project.github">{{project.github}}</a> 
                            <p>
                                {{project.description}}
                            </p>
                        </div>  
                </div>   
            </div>
    </div>
</template>

<script>
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
    width: 30%;
    margin: 20px 0px;
    box-shadow: 0px 0px 10px black;
    min-height:300px;
    img{
        width:100%;
    }
    .card-title,.card-content{
        padding: 0px 20px;
    }
}
</style>