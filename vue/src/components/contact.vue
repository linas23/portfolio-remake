<template>
    <div id="contact">
                <div class="title">
                    <h2>
                        Reach me !
                    </h2>
                </div>
                <div class="details">
                    <div class="address">
                        <i class="fas fa-map-marker-alt"></i>
                         ittachhen-15, Bhaktapur, Nepal
                    </div>
                    <div class="phone">
                        <i class="fas fa-mobile "></i>
                        9860678131
                    </div>
                    <div class="email">
                        <i class="fas fa-envelope"></i>
                        desemaru77@gmail.com
                    </div>
                </div>
                <div class="links">  
                    <a href="https://www.facebook.com/linas23"><i class="fab fa-2x fa-facebook" ></i></a>
                    <a href="https://twitter.com/sanil_desemaru"><i class="fab fa-2x fa-twitter"></i></a>
                    <a href="https://www.instagram.com/sanil_23"><i class="fab fa-2x fa-instagram"></i></a>
                    <a href="https://github.com/linas23"><i class="fab fa-2x fa-github"></i></a>
                </div>
        </div>
</template>


<style lang="scss" scoped>
@mixin easeOut {
    transition: all 0.7s ease;
}
#contact{
    font-family: 'ZCOOL XiaoWei', serif;
    min-height: 20vh;
    width: 80%;
    margin: 0px auto;
    padding: 20px 0;
}
.title{
    color: #410093;
    h2{
        margin: 0px;
    }
}
    .details{
        margin:5vh 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div{
            i{
                margin-right: 15px;
                color: rgb(60, 23, 146);
            }
            font-size: 1.6rem;
        }
    }  
    .links{
        text-align: center;
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
@media screen and (max-width:768px){
    .details{
            flex-direction: column;
        div{
            display: flex;
            align-items: center;
            margin:10px 0;
            i{
                    width: 10%;
                    margin-right: 0px;
            }
        }
    }
}
@media screen and (max-width:576px){
     #contact{
        width: 90%;
     }
     .title{
         h2{
                font-size: 2.5rem;
         }
     }
        .details{
            flex-direction: column;
            div{
                width: 100%;
                display: flex;
                align-items: center;
                i{
                    width: 10%;
                    margin-right: 0px;
                }
                margin: 5px 0;
            }
        }  
    }   
    .links{
        a{
            padding: 15px 15px;
            color: rgb(5, 155, 255);
            i{
                font-size: 2.5rem;
            }
        }
        i:hover{
            transition: all 0.75s ease;
            color: rgb(51, 51, 105);
            transform: rotate(1turn);
        }
}
@media screen and (max-width:320px){
    #contact{
        margin-top: 15vh;
    }
}
</style>