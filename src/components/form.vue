<template>
    <div class="form ">
        <div class="card ">
            <div class="card-title center ">
                <h2>
                Hello There ☺
                </h2>
            </div>
            <div class="card-content">
                <form @submit.prevent="sendInfo">
                    <div class="input_field">
                        <div class="material-icons">person</div>
                        <input type="text" placeholder="enter your name" v-model="name">
                    </div>
                    <div class="input-field">
                        <div class="material-icons">email</div>
                        <input type="email" placeholder="enter your email" v-model="email">
                    </div>
                    <p v-if="feedback" v-html="feedback"></p>
                    <div class="card-actions">
                        <button class="btn red" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-console */
import {    db     } from '@/firebase/init';
export default {
    data(){
        return{
            email:null,
            name:null,
            feedback:null
        }
    },
    methods:{
        sendInfo(){
            console.log('sending informations');
            console.log(this.email,this.name);
            if(!this.name){
                this.feedback='please enter your name'
            }
            if(this.name&&this.email){
                db.collection("emails").add({
                    name:this.name,
                    email:this.email,
            }).then(()=>{
                console.log('data submitted');
                this.feedback=null;
            }).catch(err=>{
                this.feedback=null;
                this.feedback=err;
            })
            }
    }
    }
}
</script>
<style lang="scss">
    .form{
        margin: 100px 0px;
        .card{
            width: 600px;
            margin: 0 auto;
            .card-title{
                padding: 5px;
            }
        }
    }
</style>