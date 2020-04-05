<template>
  <div id="app">
    <div>
      <router-link to="/" >
        <i class="material-icons home">home</i>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Arapey|Cormorant+Garamond|Jim+Nightshade|Uncial+Antiqua|Vidaloka|ZCOOL+XiaoWei&display=swap');
*{
  margin:0px;
  padding: 0px;
}
  .home{
    z-index: 1000;
    position: fixed;
    top:50%;
    right: 10px;
    font-size: 3rem;
    color:white;
    cursor: pointer;
    background-color: transparent;
    visibility: hidden;
  }
#app{
  background: #32457c;
  max-width: 100vw;
  overflow: hidden;
}
/* font-family: 'Jim Nightshade', cursive;
font-family: 'Cormorant Garamond', serif;
font-family: 'Vidaloka', serif;
font-family: 'Uncial Antiqua', cursive;
font-family: 'ZCOOL XiaoWei', serif;
font-family: 'Arapey', serif; */

</style>