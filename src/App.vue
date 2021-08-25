<template>
<div id="main">

    <open-menu> </open-menu>
   <left-header :imgProps="profilePicture">  </left-header>

   <router-view v-slot="{ Component } ">
     <transition 
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in">
     <component :is="Component" />
     </transition>
     </router-view>
   
</div>

</template>

<script>

import LeftHeader from './components/LeftHeader';
import openMenu from './components/OpenMenu';


export default {

  data() {
        return {
           profilePicture: require('./assets/pp.jpg'),
           aboutPp: require('./assets/about-pp.png'),
          
        }
    },

    
   
  components: {
    leftHeader : LeftHeader,
    openMenu : openMenu
  }

}
</script>

<style>

:root {
  --colorBack: #231e23;
  --otherCol: #39a6a3;
  --borderCol: hsl(178, 49%, 29%);
}

* {
  padding:0;
  margin: 0;
}

body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  height: 100vh;
  background-color: var(--colorBack);
  overflow-x: hidden;
  
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: var(--colorBack);
}

::-webkit-scrollbar-thumb {
  background: var(--otherCol);
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}


#main {
  display: flex;
  flex-direction: row3-
}

.fade-enter-from,
.fade-leave-to {
  opacity:0;

}

.fade-enter-active,
.fade-leave-active {

  transition: opacity 0.5s ease-out;
}


</style>
