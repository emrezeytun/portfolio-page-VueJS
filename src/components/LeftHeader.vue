<template>
<div class="left">

<img :src="imgProps" alt="">


<ul>
  <li> <router-link to="/" >   <i class="fas fa-address-card"></i> About</router-link> </li> 
   <li> <router-link to="/experience" >    <i class="fas fa-briefcase"></i> Experience</router-link> </li> 
   <li> <router-link to="/portfolio" >    <i class="fas fa-briefcase"></i> Portfolio</router-link> </li> 
   <li> <router-link to="/contact" >    <i class="fas fa-briefcase"></i> Contact</router-link> </li> 
</ul>



</div>
</template>

<script>

export default {
    props: ["imgProps"],

    data() {
        return {
            
        }
    }
}

</script>


<style scoped>



.left {
   display: flex;
   flex-direction: column;
   height: 100vh;
   width: 250px;
   max-width: 250px;
   align-items: center;
   text-align: center;
   justify-content: center;
   background-color: var(--colorBack);
   border-right: 1px solid var(--borderCol);
}

ul li {
    
    list-style: none;
    padding: 0.2rem;
}

ul li a {
    font-weight: 400;
    width: 300px;
    color: #deeeea;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
}

img {
    border-radius: 50%;
    border: 0.33rem solid var(--borderCol);
    width:12rem;
    height: auto;
    margin-bottom: 1rem;
}

ul li i {
    color: #deeeea;
    font-size: 1rem;
    
}

@media screen and (max-width: 750px) {

.left {
  display: none;
  
}

  
}



</style>