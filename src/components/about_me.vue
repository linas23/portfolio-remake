<template>
<div>
    <div id="about_me">
        <div class="thisIsMe">
            <div>
                <h3>
                    Who Am I ?
                </h3>
                <div class="content">
                    Namaste,
                    <br>
                    A self taught developer from Bhaktapur.
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
                    <br>
                    <strong>
                        PS: My photo gallery website will be available soon.
                    </strong>
                </div>
            </div>
            <div>
                <img src="../assets/images/undraw_developer_activity_bv83.svg" alt="">
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
    

    
</script>

<style lang="scss" scoped>
    @mixin easeOut {
        transition: all 0.7s ease;
    }
    #about_me {
        font-family: 'Arapey', serif;
        width:90%;
        margin: 0 auto;
        color: black;
        padding: 0px 100px ;
    }
    .thisIsMe{
        display:grid;
        grid-template-columns: 60% 40%;
        align-items:center;
        img{
            width:100%;
        }
    }
    

</style>