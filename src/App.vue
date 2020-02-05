<template>
  <div id="app">
    <router-link to="/" class="material-icons home">
      home
    </router-link>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey|Cormorant+Garamond|Jim+Nightshade|Uncial+Antiqua|Vidaloka|ZCOOL+XiaoWei&display=swap');
*{
    background: #32457c;
}
  .home{
    z-index: 1000;
    position: fixed;
    top:50%;
    right: 40px;
    font-size: 3rem;
    color:red;
    cursor: pointer;
  }
/* font-family: 'Jim Nightshade', cursive;
font-family: 'Cormorant Garamond', serif;
font-family: 'Vidaloka', serif;
font-family: 'Uncial Antiqua', cursive;
font-family: 'ZCOOL XiaoWei', serif;
font-family: 'Arapey', serif; */
</style>