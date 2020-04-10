<template>
<div>
    <div id="about_me">
        <div class="thisIsMe">
            <div>
                <h2>
                    Who Am I ?
                </h2>
                <div class="content">
                    <h5>
                        Namaste,
                    </h5>
                    A self taught developer from Bhaktapur, Nepal.
                    <br>
                    I am interested in web development and have been more focused on it lately.
                    Learning from online sources, practicing and consistentcy is now a part of me.
                    I believe that all the hardwork will be worth it one day. Moreover, i enjoy this process of learning 
                    and implementing. 

                    <br><br>
                    As a Computer Science student, college has been a great help with it's courses
                    and is backing me up from the core knowledge of the different aspects of the fields in Computer Science.
                    I am quite interested in the world of programming too and wish to become a full-stack web developer and hopefully, a software engineer.
                    So, wish me luck :) 
                    <br><br>
                    Some of the projects i have worked on are 
                    in <a href="#github">my github</a> section of this portfolio.
                    
                    <br>
                    Apart from these, i am passionate about photography. Have a look at a 
                    <a href="#photography">Photography</a> section below. 
                    <br>
                    <strong>
                        PS: My photo gallery website will be available soon. 
                    </strong>
                    <br>
                    <div class="btn red">
                        <a href="https://drive.google.com/open?id=14D3_p-Cs59ho9dB5oYObpGMSi96r4gos" class="white-text">Get my updated CV</a>
                    </div>
                </div>
            </div>
            <div>
                <!-- <img src="../assets/images/undraw_developer_activity_bv83.svg" alt=""> -->
                <img src="./images/pngguru.com (2).png" class="ullu" alt="">
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
    .btn{
        margin:20px 0px;
    }
    #about_me {
        font-family: 'Lora', serif;
        width:90%;
        margin: 0 auto;
        color: black;
        padding: 0px 100px ;
        margin-top: 5vh;
    }
    .ullu{
        transform:scale(0.9)
    }
    h2{
        font-family: 'ZCOOL XiaoWei', serif;
        color:#410093;
        font-size:2.5rem;
    }
    .thisIsMe{
        display:grid;
        grid-template-columns: 60% 40%;
        align-items:center;
        img{
            width:100%;
        }
        .content{
            font-size: 1.3rem;
            word-spacing: 0.3em;
            line-height: 1.75em;
        }
    }
    
@media screen and (max-width:576px){
    #about_me {
        padding: 0px ;
    }
    h2{
        font-size:2.5rem;
        color:#410093;
    }
    .thisIsMe{
        display:flex;
        flex-direction: column;
        img{
            transform: scale(0.75);
            width:100%;
        }
        .content{
            text-align: justify;
            font-size: 1.1rem;
            word-spacing: 0em;
            line-height: 1.5em;
        }
    }
}
@media screen and (max-width:1200px){
    h2{
        font-size:3rem;
    }
    .thisIsMe{
        display:flex;
        flex-direction: column;
        img{
            transform: scale(0.75);
            width:100%;
        }
        .content{
            text-align: justify;
            font-size: 1.25rem;
            word-spacing: 0em;
            line-height: 1.5em;
        }
    }
}
</style>