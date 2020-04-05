<template>
    <div id="contact">
            <div class="card center">
                <div class="card-title">
                    <h2>
                    text me before calling
                    </h2>
                </div>
                <div class="details">
                    <div class="address">
                        Address :   ittachhen-15, Bhaktapur, Nepal
                    </div>
                    <div class="phone">
                        Phone   :   9860678131
                    </div>
                    <div class="email">
                        E-mail  :   desemaru77@gmail.com
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
    height: 75vh;
}
.card{
    height: 100%;
    background-image: url("./images/20181028_163359-02.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 10px 20px black;
    display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    h2{
        margin: 0;
        text-transform: capitalize;
        padding: 20px;
    }
    .details{
        display: flex;
        flex-direction: column;
        height: 70%;
        justify-content: space-evenly;
        div{
            border: 2px solid black;
            width: 50%;
            height: 40px;
            margin: 0 auto;
            font-size: 1.4rem;
        }
        div:hover{
            border: 2px solid red outset;
            transition: all 0.5s ease;
            background: black;
            color: white;
            transform: scale(1.2,1.2);
        }
    } 
    .links{
        a{
            padding: 15px;
            color: green;
        }
        i:hover{
            transition: all 0.5s ease;
            color: rgb(255, 51, 0);
            transform: rotate(1turn);
        }
    }
}
</style>