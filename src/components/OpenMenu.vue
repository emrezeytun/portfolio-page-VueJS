<template>
    <div class="openMenuMob">

       <ul>
  <li> <router-link to="/" >   <i class="fas fa-address-card"></i> </router-link> </li> 
   <li> <router-link to="/experience" >    <i class="fas fa-briefcase"></i> </router-link> </li> 
    <li> <router-link to="/portfolio" >    <i class="fas fa-briefcase"></i> </router-link> </li> 
   <li> <router-link to="/contact"> <i class="fas fa-envelope"></i>  </router-link> </li>
</ul>



    </div>
</template>


<style scoped>

.openMenuMob {
    display:none;
}

@media screen and (max-width: 750px) {



.openMenuMob {
    z-index: 5;
    width: 100vw;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 0rem;
    background-color: var(--colorBack);
    border-bottom: 1px solid var(--borderCol);
}

ul {
    display: flex;
    list-style: none;
  
}

ul li {
    margin: 0rem 1rem;
      
}

ul li i {
    font-size: 2rem;
    color: #fff;
    background-color: var(--otherCol);
    padding: 1rem;
    border-radius: 50%;
}}
</style>