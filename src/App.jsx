import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <nav class="padChild topHeader">




        <div class="brand">Brian</div>
        <div class='flex-space-btw*'>
            <a href="#about">About me</a>
            <a href="#portfolio">Portfolios </a>
            <a href="#contact">Contact me</a>

        </div>
    </nav>





    
    <main>
     
        <img id="brianpic" src="./images/IMG_2501.JPG" alt="avatar of myself"/>
        <div class="container">
            <section class="grid2 aboutSection">

                <div class="centered">
                    <div id="about">
                        <h2>Hi, I'm Brian Aguilar</h2>
                        <p class='paragraph'>I am a professional Software
                            Engineer and designer with UCB berkeley with 1 year of experience building small
                            to large scale web applications using modern technologies
                            for both front and back-facing (database
                            driven applications).

                        </p>
                    </div>
                </div>
             
            </section>


            <div class="container experience-section">
                <section>
                    <h2>Experience</h2>
                    <div class="flex-wrap">
                        <div class='duplicateThisDiv'> 
                        
                               
                         
                        </div>
                      
                            <p>2023 - present</p>
                    </div>
                </section>
            </div>
            <div class="container portfolio-section" id="portfolio">
                <section>
                    <h2>Portfolio</h2>
                    <p> My first project (A mockup of the Horiseon website)

                    </p>
                    <div id="project-container">
                        <div id="project-1">
                            <a class="duplicateThisTag" href="https://bswagy.github.io/first-homework-repo/">
                                <img id="project1" src="images/horiseon0.png" />

                            </a>
                        </div>
                        <div id="project-2">
                            <p> (A secondary image of the Horiseon mockup)

                            </p> <a href="https://bswagy.github.io/first-homework-repo/">

                                <img id="project2" src="images/horiseon1.png" /> 
                             </a>
                        </div>
                        <div id="project-3">
                            <p>
                                (Third image from mockup)
                            </p>
                            <a href="https://bswagy.github.io/first-homework-repo/">
                                <img id="project3" src="images/horiseon2.png" />
                            </a>
                        </div>

                    </div>
                </section>
            </div>
            <div> <a href="#" class="accentColor bold 
            resume">View Resume</a>

            </div>
            </div>
    </main>

    <footer id="contact">
      
        <div class="flex-space-btw">
                    <a class="centered logo">Brian</a>
                    <a href=" mailto:Brian.aguilar235@gmail.com">Brian.aguilar235@gmail.com</a>

        </div>
    </footer>
    </>
  )
}

export default App
