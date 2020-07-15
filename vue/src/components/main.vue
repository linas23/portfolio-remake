<template>
    <div>
        <div id="main">
            <div class="me">
                <sequential-entrance  fromLeft> 
                    <div class="fcard">
                        <img src="./images/profileimg.jpeg" alt="">
                        <div class="card-title">
                            Sanil Desemaru
                        </div>
                        <div class="card-content">
                            <p>
                                A student of Computer Science Information Technology (6th semester) from Bhaktapur Multiple
                                Campus. <b>🦉</b>
                            </p>
                        </div>
                    </div>
                </sequential-entrance>
                <sequential-entrance  fromRight> 
                    <div class="tabs_left">
                            <div v-for="(tab,index) in tabs" :key="index">
                                <a :href="'#' +tab.linkTo">
                                    <div class="btn-floating black pulse ">
                                        <i :class="tab.icon"></i>
                                    </div>
                                    <br>
                                    <span>
                                        {{tab.title}}
                                    </span>
                                </a>
                            </div>
                    </div>
                </sequential-entrance>
            </div>
             <sequential-entrance fromTop>
                <div class="links">
                    <a href="https://www.facebook.com/linas23"><i class="fab fa-2x fa-facebook"></i></a>
                    <a href="https://twitter.com/sanil_desemaru"><i class="fab fa-2x fa-twitter"></i></a>
                    <a href="https://www.instagram.com/sanil_23"><i class="fab fa-2x fa-instagram"></i></a>
                    <a href="https://github.com/linas23"><i class="fab fa-2x fa-github"></i></a>
                </div>
             </sequential-entrance>
             <sequential-entrance fromRight>
                <div class="rumpum">
                    <img src="./images/rumpum1.jpg" alt="">
                </div>
             </sequential-entrance>
        </div>
        <compAboutMe></compAboutMe>
        <experiences></experiences>
        <compGithub></compGithub>
        <compCarousel></compCarousel>
        <footer>
            <!-- <compForm></compForm> -->
            <compContact></compContact>
        </footer>
    </div>
</template>


<script>
    import compCarousel from '@/components/carousel.vue'
    // import compForm from '@/components/form.vue';
    import compGithub from '@/components/github';
    import compContact from '@/components/contact';
    import compAboutMe from '@/components/about_me';
    import experiences from '@/components/experiences'
    export default {
        components: {
            compCarousel,
            // compForm,
            compGithub,
            compContact,
            compAboutMe,
            experiences

        },
        data() {
            return {
                tabs: [{
                        title: 'About me',
                        icon: 'fas fa-2x fa-user',
                        linkTo: 'about_me'
                    },
                    {
                        title: 'Github',
                        icon: 'fab fa-2x fa-github',
                        linkTo: 'github'
                    },
                    {
                        title: 'Contact',
                        icon: 'fas fa-2x fa-address-card',
                        linkTo: 'contact'
                    }
                ],

            }
        },
        filters: {
            capitalize(value) {
                return value.toUpperCase();
            }
        }
    }
</script>
<style lang="scss" scoped>
    #main {
        width:80%;
        height: 100vh;
        margin:0 auto;
        display: grid;
        grid-template-columns: 45% 5% 50%;
        align-items: center;
        .links {
            display: flex;
            flex-direction: column;
            a {
                padding: 15px 10px;
                color: rgb(5, 155, 255);
            }
            a:hover {
                transition: all 0.75s ease;
                transform: rotate(1turn);
                color: rgb(51, 51, 105);
            }
        }
    }

    .me {
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        .fcard {
            width:80%;
            margin:0 auto;
            box-shadow: 5px 5px 10px rgb(73, 73, 73);
            .card-title {
                padding:0 20px;
                font-size:2rem;
                font-weight:700;
                margin:5px 0px;
                font-family: 'Cormorant Garamond', serif;
            }
            .card-content {
                padding:0px 20px 15px 20px;
                p {
                    text-align: justify;
                    font-size: 1.1rem;
                    font-family: 'Vidaloka', serif;
                }
            }
            img {
                width: 100%;
                transition:all 1s ease;
            }
        }
        .tabs_left {
            padding-top: 20px;
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            span {
                color: black;
                font-size: 1.2rem;
                padding: 10px;
                font-family: 'Vidaloka', serif;
            }
        }
    }
    .rumpum {
        width: 100%;
            height:100%;
            img{
                transform: scale(0.85);
                width: 100%;
                box-shadow: 5px 5px 0px rgba(219, 218, 218,0),5px 5px 5px rgb(54, 52, 52);
                transition: all 1s ease;
                &:hover {
                    transform: rotateY(180deg) scale(0.85) ;
                }
            } 
        }

    footer{
        background: rgba(211, 210, 210, 0.527);
        background-image: url('./images/pngguru.com (4).png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
    }
    @media (max-width:768px){
        .rumpum{
            display: none;
        }
        #main {
            width:90%;
            margin:0 auto;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 25px 0px;
            .links {
                display: none;
            }
        }
    }
    
     @media screen and (max-width:576px) {
        #main {
            width:90%;
            margin:0 auto;
            display: block;
            .links {
                display: none;
            }
        }

    .me {
        padding: 25px 0;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        .fcard {
            width:100%;
            box-shadow: 5px 5px 10px rgb(73, 73, 73);
            .card-title {
                padding:0 20px;
                font-size:2rem;
                font-weight:700;
                margin:5px 0px;
                font-family: 'Cormorant Garamond', serif;
            }
            .card-content {
                padding:0px 20px 15px 20px;
                p {
                    text-align: justify;
                    font-size: 1.1rem;
                    font-family: 'Vidaloka', serif;
                }
            }
            img {
                width: 100%;
                transition:all 1s ease;
            }
        }
        .tabs_left {
            padding-top: 15px;
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            span {
                color: black;
                font-size: 1.2rem;
                padding: 10px;
                font-family: 'Vidaloka', serif;
            }
        }
    }
        
    .rumpum {
        display: none;
        }
    }

</style>