<template>
    <div class="form ">
        <div class="">
            <div class="center">
                <h3>
                Got some messages ? <span class="emoji"> 🙂</span>
                </h3>
            </div>
            <div class="row">
                <!-- -->
                <form  class="col s12">
                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="name" type="text" v-model="name">
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s6">
                        <div class="material-icons prefix">email</div>
                        <input type="email" id="email" v-model="email">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <div class="material-icons prefix">message</div>
                        <textarea id="message" class="materialize-textarea" v-model="message"></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <p v-if="feedback" v-html="feedback" class="red-text"></p>
                    <div class="card-actions center">
                        <a class="btn black-text waves-effect waves-light" @click.prevent="sendInfo" >
                            Send
                        </a>
                    </div>
                     <!-- <div id="modal" class="modal" v-show="feedback">
                        <div class="modal-content" v-html="feedback">
                        
                        </div>
                        <div class="modal-footer">
                        <a class="modal-close waves-effect waves-teal btn-flat">Close</a>
                        </div>
                    </div> -->
                </form>
            </div>
        </div>
    </div>
</template>
<script>
 /*  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("textarea#message").characterCounter();
  }); */
import M from 'materialize-css/dist/js/materialize.min'

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    instances();
  });
/* eslint-disable no-console */
import {    db     } from '@/firebase/init';
export default {
    data(){
        return{
            email:'',
            name:'',
            message:'',
            feedback:'',
        }
    },
    methods:{
        sendInfo(){
            console.log('sending informations');
            this.feedback = '';
            if(!this.name){
                this.feedback += '<span> please enter your name.</span>'
            }
            if(!this.email){
                this.feedback += '<span> Please provide your email address.</span>'
            }
            if(this.email){
                const email = this.email;
                if(email.indexOf("@") == -1){
                    this.feedback += '<span> Please enter a valid email address.</span>';
                }
            }
            if(!this.message){
                this.feedback += '<span>The least you can do is say me a hello</span>'
            }
            if(this.name&&this.email&&this.message){
                db.collection("messages").add({
                    name:this.name,
                    email:this.email,
                    message:this.message
            }).then(()=>{
                this.feedback=`<span>I got your message. Get in touch with you soon.</span>`;
                setTimeout(() => {
                    this.feedback = null;
                    this.reset();
                    return;
                    }, 2000);
                
            }).catch(err=>{
                console.log(err)
                this.feedback=`<p>Oops! something went wrong. Please try again.</p>`;
            })
            }
            setTimeout(() => {
                this.feedback = null;
                this.reset();
            }, 3000);
        },
        reset(){
            this.name = this.email = this.message = null;
        }
    }
}
</script>
<style lang="scss">
     .form{
         height: 50vh;
         width: 100%;
        font-family: 'ZCOOL XiaoWei', serif;
        background-image: url('./images/pngguru.com (4).png');
        background-repeat: no-repeat;
        background-size: contain;
        background-color: rgba(211, 208, 212, 0.8);
        background-position: right;
        .btn{
            text-transform: capitalize;
        }
    } 
    @media screen and (max-width:576px){
     .form{
        height: 50vh;
        width: 100vw;
     }
     .emoji{
         display: none;
     }
     h3{
         font-size: 2.3rem;
     }
    }
</style>