<template>
    <div id="contact">
            <div class="cards center">
                <div class="card-title">
                    <h3>
                    text me before calling <span class="emoji"> 😜</span>
                    </h3>
                </div>
                <div class="details">
                    <div class="address">
                        Address :ittachhen-15, Bhaktapur, Nepal
                    </div>
                    <div class="phone">
                        Phone   :9860678131
                    </div>
                    <div class="email">
                        E-mail  :desemaru77@gmail.com
                    </div>
                </div>
                <div class="links">  
                    <a href="https://www.facebook.com/linas23"><i class="fab fa-2x fa-facebook" ></i></a>
                    <a href="https://twitter.com/sanil_desemaru"><i class="fab fa-2x fa-twitter"></i></a>
                    <a href="https://www.instagram.com/sanil_23"><i class="fab fa-2x fa-instagram"></i></a>
                    <a href="https://github.com/linas23"><i class="fab fa-2x fa-github"></i></a>
                </div>
            </div>
        </div>
</template>


<style lang="scss" scoped>
@mixin easeOut {
    transition: all 0.7s ease;
}
#contact{
    font-family: 'ZCOOL XiaoWei', serif;
    height: 50vh;
}
.cards{
    padding: 0px 0px 40px 20px;
    height: 100%;
    background-image: url("./images/20181028_163359-02.jpeg");
    background-size: 110% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    h2{
        text-transform: capitalize;
        padding: 0px;
    }
    .details{
        div{
            height: 40px;
            margin: 0 auto;
            font-size: 1.4rem;
        }
    }  
    .links{
        a{
            padding: 15px;
            color: rgb(5, 155, 255);
        }
        i:hover{
            transition: all 0.75s ease;
            color: rgb(51, 51, 105);
            transform: rotate(1turn);
        }
    }
    
}
@media screen and (max-width:576px){
     #contact{
        width: 100vw;
     }
     .cards{
        padding: 0px 0px 40px 20px;
        background-image: url("./images/20181028_163359-02.jpeg");
        background-size: 105% 100%;
        h3{
            text-transform: capitalize;
            padding: 0px;
            .emoji{
                display: none;
            }
        }
        .details{
            div{
                height: 40px;
                margin: 0 auto;
                font-size: 1.4rem;
            }
        }  
        .links{
            font-size: 1.3rem;
            a{
                padding: 15px;
                color: rgb(5, 155, 255);
            }
            i:hover{
                transition: all 0.75s ease;
                color: rgb(51, 51, 105);
                transform: rotate(1turn);
            }
        }
        
    }   
    }
</style>