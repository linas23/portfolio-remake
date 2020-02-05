import Vue from 'vue'
import Vuex from 'vuex'
import vuejs from '@/assets/images/vuejs-1175052.png'
import css from '@/assets/images/css.jpg'
import html from '@/assets/images/html.png'
import js from '@/assets/images/js.jpg'
import nodejs from '@/assets/images/nodejs-logo.png'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[
      {   
          src:html,
          skill:{
            width:'75%'
          }
      },
      {
          src:css,
          skill:{
            width:'80%'
          }
      },
      {
          src:js,
          skill:{
            width:'75%'
          }
      },
      {
          src: vuejs,
          skill:{
            width:'70%'
          }
      },
      {   
          src:nodejs,
          skill:{
            width:'10%'
          }
      },
    ]
  },
  getters:{
      skills(state){
        return state.images
      }
  }
})
