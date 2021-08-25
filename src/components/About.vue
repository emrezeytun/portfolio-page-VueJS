<template>
<div class="about-main">
    <div class="about">
    <h1>Hi, I'm <span> John  </span></h1> 
    <p>Hi, im computer engineer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus adipisci veniam eum vel. Error autem assumenda quas odit. Fuga, distinctio minima? Voluptates, repudiandae incidunt maiores earum sed neque vero facere fugiat eveniet deserunt suscipit eos voluptatem totam modi inventore harum dolorem accusamus, nobis cupiditate voluptate molestias ipsa, adipisci numquam! </p>
      <h1 class="mobile_none">What <span> I do? </span></h1> 
      <div class="dis_flex mobile_none"> 
          
         <div class="dis_block">
       <div class="do">
         
         <h2 class="dis_flex"> <div class="square"><div class="inline"></div></div> Front end development</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis neque ipsa recusandae, sunt nihil non optio ullam repellat eveniet eligendi.</p>
      </div>
   
          <div class="do">
         
         <h2 class="dis_flex"> <div class="square"><div class="inline"></div></div> Back end development</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis neque ipsa recusandae, sunt nihil non optio ullam repellat eveniet eligendi.</p>
      </div>
      </div>

<div class="dis_block">
       <div class="do">
         
         <h2 class="dis_flex"> <div class="square"><div class="inline"></div></div> Front end development</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis neque ipsa recusandae, sunt nihil non optio ullam repellat eveniet eligendi.</p>
      </div>
   
          <div class="do">
         
         <h2 class="dis_flex"> <div class="square"><div class="inline"></div></div> Back end development</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis neque ipsa recusandae, sunt nihil non optio ullam repellat eveniet eligendi.</p>
      </div>
      </div>
      </div>

      
    </div>
    
    <div  class="profile animate__animated animate__zoomInUp mobile_none ">
        <h1>Education</h1>
        <p>Bornova Anatolian High School(1990-1994)</p>
        <div class="education">
        <div class="point"></div>
        <div class="line"></div>
        <div class="point"></div>
        <p>Bogazici University (1994-1998)</p>
         <p style="font-style: italic; font-size: 0.9rem; padding:0; margin:0;">Department: Computer Engineering</p>
        </div>
        <div class="education">
        <div class="point"></div>
        <div class="line"></div>
        <div class="point"></div>
        <p>University of England (1998-2000)</p>
        <p style="font-style: italic; font-size: 0.9rem; padding:0; margin:0;">Department: Computer Science</p>
        </div>
    </div>

</div>
</template>


<script>

export default {
    props: ["imgProps"],
}

</script>

<style scoped>

.dis_flex {
    display: flex;
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
    align-items: center;
    justify-content: center;
    padding-top: 8rem;
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
}

h1 span {
    font-weight: 700;
    color: var(--otherCol);
}

.point {
    width: 0.7rem;
    height: 0.7rem;
    display: flex;
        margin-left: 50%;
    transform: translate(-50%);
    background-color: var(--otherCol);
    border-radius: 50%;
}

.line {
    display: flex;
    margin-left: 50%;
    transform: translate(-50%);
    height: 10rem;
    width: 0.1rem;
    background-color: var(--otherCol);
}

.inline {
    display: flex;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    height: 0.5rem;
    width: 0.5rem;
    background-color:#231e23; 
    border-radius: 50%;
}

.profile {
    
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   justify-content: center;
   margin-right: 0.8rem;
   
   

   
    
}

.profile p {
    display: flex;
    text-align: center;
    padding: 5px;
    margin: 0;
   
    
}

.profile h1 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
   
}

.education {
    padding-top: 1rem;
}

.do {
    width: 320px;
    background-color: #231e23;
    margin: 0.4rem 0.6rem;
    border: 1px solid var(--borderCol);
}

.do p {
    padding: 0.1rem 1.2rem 1.5rem 1.2rem;
    margin: 0;
    color: #deeeea;
    
}

.do h2 {
    color: var(--otherCol);
    padding: 0.8rem 0.5rem;
    font-size: 1.3rem;
}

.square {
    height: 2rem;
    margin-left: 0.3rem;
    width: 2rem;
    background-color: var(--otherCol);
    margin-right: 0.3rem;
}

.dis_block {
    display: flex;
    flex-direction:column;
}

@media screen and (max-width: 750px) {

    .mobile_none {
        display: none;
    }

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
  
}





</style> 