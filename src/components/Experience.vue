<template>
<div class="about-main">
    <div class="about">
        <div class="dis_flex mobile_flex">
            <div>
    <h1>My<span> Experience </span></h1> 
         <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-code-branch"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>1998-2000</h3>
                <h2>Back End Dev. - Yahoo</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit.</p>
            </div>
        </div>

        <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-code-branch"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>2000-2003</h3>
                <h2>System Engineer - Linkedin</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit.</p>
            </div>
        </div>

        <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-code-branch"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>2003-2005</h3>
                <h2>App. Management - Microsoft</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit.</p>
            </div>
        </div>

        <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-code-branch"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>2005-2010</h3>
                <h2>Front End Dev. - Twitter</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, impedit.</p>
            </div>
        </div>

       


      </div>
      
        <div class="mobile_top">
    <h1>My<span> Education </span></h1> 
        

        <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-university"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>1994-1998</h3>
                <h2>Bogazici University</h2>
                <p>Department: Computer Engineering</p>
            </div>
        </div>

        <div class="dis_flex work">
            <div class="graph">
                <div class="round"><i class="fas fa-university"></i></div>
                <div class="roundLine"></div>
            </div>
            <div class="textWork">
                <h3>1998-2000</h3>
                <h2>University of England</h2>
                <p>Department: Computer Science</p>
            </div>
        </div>

      

       


      </div>

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
    justify-content:space-evenly;
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
}

h1 span {
    font-weight: 700;
    color: var(--otherCol);
}


.dis_block {
    display: flex;
    flex-direction:column;
}

.round {
    width: 3.5rem;
    height: 3.5rem;
    background-color: var(--otherCol);
    border-radius: 100%;

}

.roundLine {
    height: 4.5rem;
    width: 1px;
    background-color: var(--borderCol);
    margin-left: 50%;
    transform: translate(-50%);
}

.round i {
    color: #deeeea;
    font-size: 2rem;
    margin: 50%;
    transform: translate(-50%, -50%);
}

.textWork h3 {
    font-size: 0.8rem;
    color: #deeeea;
    background-color: rgba(0,0,0,0.3);
    width: 5rem;
    border-radius: 1rem;
    padding: 0.2rem;
    padding-left:0.7rem;
}

.textWork h2 {
    color: #fff;
}



.textWork p {
    padding: 0;
    margin: 0;
    width: 25rem;
}

.textWork {
    padding-left: 0.6rem;
    padding-top: 0.6rem;
}

.work {
    padding-top: 1rem;
}


@media screen and (max-width: 750px) {

 .about-main {
    height: auto;
    width: 100vw;
    background-color: var(--colorBack);
    padding-top: 5.5rem;
    

}

.mobile_top {
    padding-top: 3rem;
}

.about {
   padding-top: 1rem;
   width: 100vw;
    padding: 1rem 1rem;
    max-width: 100vw;
    flex-wrap: wrap;

   
}

p {
    padding: 1rem 2rem 0.7rem 2rem;
    text-align: justify;
}

h1 {
    text-align: left;
}

.mobile_flex {
    display: flex;
    flex-direction: column;
}

h2 {
 width: 55vw;
}
  
}





</style> 