<template>
    <div>
        <div class="aboutme container card">
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
                    in near future. So, wish me luck. Apart from these, i am passionate about photography, cycling.
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
 @mixin easeOut {
    transition: all 0.7s ease;
}
.aboutme{
    margin: 0 auto;
    margin-top: 100px;
    padding: 75px;
    h3{
        margin: 0;
    }
    .card-content{
        font-size: 1.2rem;
    }
}
</style>