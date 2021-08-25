<template>
    <div class="about-main">
    <div class="about">
    <h1>Get in <span> Touch </span></h1> 

    <ul>
        <li class="animate__animated animate__flipInX animate__delay-1 "> <i class="fas fa-map-marker"></i> İzmir / Türkiye</li>
        <li class="animate__animated animate__flipInX animate__delay-2 "> <i class="fas fa-mobile-alt"></i> +90 000 000 00 00</li>
        <li class="animate__animated animate__flipInX animate__delay-3 "> <i class="fas fa-envelope"></i> johndoe@johndoe.com</li>

        <li class="animate__animated animate__flipInX animate__delay-4 "><a  class="button-contact"> Download CV </a> </li>
    </ul>

    <ul class="social">
        <li class="animate__animated animate__flipInX animate__delay-5 "> <a href=""> <i class="fab fa-linkedin-in"></i> </a> </li>
        <li class="animate__animated animate__flipInX animate__delay-6 "> <a href="">  <i class="fab fa-whatsapp"></i>  </a> </li>
    </ul>
    
    </div>
    
   

</div>


</template>


<script>

export default ({

    data() {
        
    }
    
})
</script>



<style scoped>

.about-main {
    display: flex;
    justify-content: center;
    width: calc(100vw - 251px);
    align-items: center;
    text-align: center;
}

.about-main h1 {
    color: #fff;
}

li i {
    color: #fff;
    font-size: 1.8rem;
    padding-right: 0.3rem;
}

ul {
    padding: 1rem 0rem;
}

li {
    padding: 0.5rem 0rem;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

ul li a {
    text-decoration: none;
}

.social {
    display: flex;
    text-align: center;
    justify-content: center;
}



.social i {
    background-color: var(--otherCol);
    border-radius: 40%;
    padding: 1rem;
    border: 1px solid transparent;
   margin: 0rem 1rem;
   transition: .6s;
}

.social i:hover {
    background-color: transparent;
    border: 1px solid var(--borderCol);
    border-radius: 40%;
    padding: 1rem;
}

.button-contact {
    background: transparent;
    color: #fff;
    border: 1px solid var(--borderCol);
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    position: relative;
}



.button-contact::before {

    position: absolute;
    left:50%;
    right:50%;
    top: 0;
    bottom: 0;
    background-color: var(--otherCol);
    opacity: 0;
    transition: .6s;
    content: '';
    z-index: -1;

}

.button-contact:hover::before {

    left:0%;
    right:0%;
    top: 0;
    bottom: 0;
    border-radius: 1rem;
    border: none;
    opacity: 1;

}

span {
    color: var(--otherCol);
}



ul {
    list-style: none;
}

@media screen and (max-width: 750px) {
    .about-main {
    width: 100vw;
    height: 100vh;
}
    .about {
    padding-top: 1rem;
    width: 100vw;
    background-color: #231e23;
}
}



</style>