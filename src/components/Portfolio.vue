<template>
<div class="about-main">
    <div class="about t_center">
       
           
           <h1>My <span> Portfolio </span></h1>

            <ul class="dis_flex mobile_portfolio_ul">
                <li @click="showWeb" :class="{'active' : webShow == 1}" >Web Development</li>
                <li @click="showMobile"  :class="{'active' : mobileShow == 1}" >Mobile Development</li>
                <li @click="showDesktop"  :class="{'active' : desktopShow == 1}">Desktop Development</li>
            </ul>


           <div v-if="webShow"  class="front port">
               <div  v-for="(data,index) in portfolio.web" :key="index"> 
                    <div class="element" :data-description="data.description">
                        <img :src="data.src " alt=""> 
                    </div>     
               </div>
           </div>

            <div v-if="mobileShow"  class="front port">
               <div  v-for="(data,index) in portfolio.mobile" :key="index"> 
                    <div class="element" :data-description="data.description">
                        <img :src="data.src " alt=""> 
                    </div>     
               </div>
           </div>

            <div v-if="desktopShow"   class="front port">
               <div  v-for="(data,index) in portfolio.desktop" :key="index"> 
                    <div class="element" :data-description="data.description">
                        <img :src="data.src " alt=""> 
                    </div>     
               </div>
           </div>

           

       

           <div class="back"></div>
           <div class="graphic"></div>

     
    
</div>
      </div>


    
  
</template>


<script>

export default {
    props: ["imgProps"],
    data() {
        return {
            portfolio: {
                web: [
                     { description: '1.Web project', src: require("../assets/sample.jpg")},
                     { description: '2. Web project', src: require("../assets/sample.jpg")},
                     { description: '3. Web project', src: require("../assets/sample.jpg")},
                ],
                mobile: [
                     { description: '1. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '2. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '3. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '4. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '5. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '6. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '7. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '8. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '9. Mobile project', src: require("../assets/mobile.jpg")},
                     { description: '10. Mobile project', src: require("../assets/mobile.jpg")},
                ],
                desktop: [
                     { description: '1. Desktop project', src: require("../assets/desktop.jpg")},
                     { description: '2. Desktop project', src: require("../assets/desktop.jpg")},
                     { description: '3. Desktop project', src: require("../assets/desktop.jpg")},
                     { description: '4. Desktop project', src: require("../assets/desktop.jpg")},
                     { description: '5. Desktop project', src: require("../assets/desktop.jpg")},
                ],
            },
            webShow : 1,
            mobileShow : 0,
            desktopShow : 0,
        }
    },
    methods: {
        showWeb() {
            this.mobileShow = 0;
            this.desktopShow = 0;
            this.webShow = 1;
        },
        showMobile() {
            this.mobileShow = 1;
            this.desktopShow = 0;
            this.webShow = 0;
        },
        showDesktop() {
            this.mobileShow = 0;
            this.desktopShow = 1;
            this.webShow = 0;
        }
    }
}

</script>

<style scoped>

.dis_flex {
    display: flex;
    justify-content:center;
}

.about-main {
    width: calc(100vw - 251px);
    background-color: var(--colorBack);
    height: 100vh;
    display:flex;
    flex-direction: row;
    overflow: scroll;
    overflow-x: hidden;
}

.about {
    display: flex;
    flex-direction: column;
   
    padding-top: 1rem;
    width: calc(100vw - 251px);
    background-color: #231e23;
}

p {
    padding: 1rem 6rem;
    color: #deeeea;
}

h1 {
 
    color:#deeeea;
    font-size: 2rem;
    padding-bottom: 1rem;
}

h1 span {
    font-weight: 700;
    color: var(--otherCol);
}


.dis_block {
    display: flex;
    flex-direction:column;
}

.t_center {
    text-align: center;
}

ul {
    list-style: none;
}

li {
    color: #deeeea;
    padding: 1rem;
    border: 1px solid var(--borderCol);
    cursor: pointer;
    border-radius: 1rem;
    margin: 0 0.4rem;
    transition: .2s ease;
}

li:hover {
    color: var(--otherCol);
 
}

li.active {
    color: var(--otherCol);
 
}

.port {
    display:flex;
    padding-top: 1rem;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0 1rem;
   cursor: context-menu !important;
}

.port {
    position: relative;
    
}

.front img {
    width: 200px;
    height: 200px;
}
.element {
    margin: 1rem 1rem;
  
}

.element::before {
        position: absolute;
        content: '';
        color: var(--otherCol);
        background-color: var(--otherCol);
        transition: .7s;
        width:12.5rem;
        height: 0px;
}

.element:hover::before {
    content: attr(data-description);
    font-size: 1rem;
    color: #deeeea;
    transition: .6s;
    width:12.5rem;
    height: 12.5rem;
    opacity: .9;
    display:grid;
    place-items: center;
}


@media screen and (max-width: 750px) {

    .about-main {
    height: auto;
    width: 100vw;
    background-color: var(--colorBack);
    padding-top: 5.5rem;

}



.about {
   padding-top: 1rem;
   width: 100vw;
   
}

p {
    padding: 1rem 2rem 0.7rem 2rem;
    text-align: justify;
}

h1 {
    text-align: center;
}

.mobile_portfolio_ul {
    display: flex;
    flex-direction: column;
}

.mobile_portfolio_ul li {
    margin: 0.7rem;
}
  
}







</style> 