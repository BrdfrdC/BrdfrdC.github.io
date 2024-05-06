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
        <div class="projects-container">
            <div class="project-item-container">
                <h1 class="project-title">K&M Awnings</h1>
                <h2 class="project-text">Local business website built using Microsoft's ASP.NET framework.</h2>
                <h2 class="project-text">Programmed with HTML, CSS, JavaScript, and C#.</h2>
                <h2 class="project-text">https://www.km-awnings.com/</h2>
            </div>
            <div class="project-item-container">
                <h1 class="project-title">Azure for Nextcloud</h1>
                <h2 class="project-text">JavaScript application built for NextCloud platform that interacts with Microsoft Azure's REST API.</h2>
                <h2 class="project-text">Programmed with HTML, CSS, and JavaScript in Node.js environment.</h2>
                <h2 class="project-text">https://github.com/BrdfrdC/azure-nextcloud</h2>
            </div>
            <div class="project-item-container">
                <h1 class="project-title">Minimal Recipes</h1>
                <h2 class="project-text">Website that uses data scraped by a Python script.</h2>
                <h2 class="project-text">Programmed with HTML, CSS, and JavaScript in Node.js environment.</h2>
                <h2 class="project-text">https://github.com/BrdfrdC/minimal-recipes</h2>
            </div>
            <div class="project-item-container">
                <h1 class="project-title">IMDB Classifier</h1>
                <h2 class="project-text">Machine learning classifier using a support vector machine algorithm.</h2>
                <h2 class="project-text">Programmed with Python using pandas, numpy, nltk, sklearn, and matplotlib libraries.</h2>
                <h2 class="project-text">https://github.com/BrdfrdC/IMDB-Classifier</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.projects-container {
    display: flex;
    flex-direction: column;
}

.project-title {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
    font-size: 2vw;
}

.project-text {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 1vw;
}

</style>