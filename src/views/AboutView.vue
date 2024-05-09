<template>
    <div>
        <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#335791'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'slow'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 125,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 300
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
        />
        <div class="about-container">
            <div class="about-container-row">
                <div class="about-left">
                    <h1 class="about-title">ABOUT ME</h1>
                    <h2 class="about-item">Graduated from Florida International University in December 2023</h2>
                    <h2 class="about-item">Bachelor of Science in Computer Science</h2>
                    <h2 class="about-item">GPA: 3.55</h2>
                </div>
                <div class="about-right">
                    <h1 class="skills-title">PROFICIENCIES & SKILLS</h1>
                    <div class="skills-column-container">
                        <div class="skills-column">
                            <h2 class="skill">HTML</h2>
                            <h2 class="skill">CSS</h2>
                            <h2 class="skill">JavaScript</h2>
                            <h2 class="skill">Node.js</h2>
                            <h2 class="skill">Vue.js</h2>
                            <h2 class="skill">Express.js</h2>
                        </div>
                        <div class="skills-column">
                            <h2 class="skill">C</h2>
                            <h2 class="skill">C#</h2>
                            <h2 class="skill">ASP.NET</h2>
                            <h2 class="skill">Java</h2>
                            <h2 class="skill">Python</h2>
                            <h2 class="skill">PostgreSQL</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
            <router-link to="/" class="home-link">BACK</router-link>
        </div>
    </div>
</template>
  
<script setup>
const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>
  
<style scoped>

.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    overflow: hidden;
    height: 100vh;
}

.about-container-row {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
    overflow: hidden;
}

.about-left {
    display: flex;
    flex-direction: column;
    width: 40vw;
    animation: slideFromLeft 1s ease-in-out;
}
.about-right {
    display: flex;
    flex-direction: column;
    width: 40vw;
    animation: slideFromRight 1s ease-in-out;
}

@keyframes slideFromLeft {
    0% {opacity: 0%; transform: translateX(-100%);}
    100% {opacity: 100%; transform: translateX(0%);}
}

@keyframes slideFromRight {
    0% {opacity: 0%; transform: translateX(100%);}
    100% {opacity: 100%; transform: translateX(0%);}
}

.about-title {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
    font-size: 6vw;
}

.about-item {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 2vw;
}

.skills-title {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
    font-size: 3.37vw;
}

.skills-column-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.skills-column {
    display: flex;
    flex-direction: column;
}

.skill {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 2vw;
}

@media screen and (max-width: 720px) {
    .about-container-row {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        justify-content: space-evenly;
        overflow: hidden;
    }

    .about-left {
        display: flex;
        flex-direction: column;
        width: 80vw;
        animation: slideFromLeft 1s ease-in-out;
    }
    .about-right {
        display: flex;
        flex-direction: column;
        width: 80vw;
        animation: slideFromRight 1s ease-in-out;
    }

    .about-title {
        position: relative;
        color: white;
        font-family: 'Futura Medium';
        font-size: 12vw;
        margin: 0 0 0 0;
    }

    .about-item {
        position: relative;
        color: white;
        font-family: 'Futura Book';
        font-size: 5vw;
    }

    .skills-title {
        position: relative;
        color: white;
        font-family: 'Futura Medium';
        font-size: 6vw;
    }

    .skills-column-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .skills-column {
        display: flex;
        flex-direction: column;
    }

    .skill {
        position: relative;
        color: white;
        font-family: 'Futura Book';
        font-size: 4vw;
    }
}

</style>