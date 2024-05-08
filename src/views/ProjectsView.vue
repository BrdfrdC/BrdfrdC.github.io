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
                <div class="project-item-row">
                    <h2 id="kmLeft" class="project-text left">Local business website built using Microsoft's ASP.NET framework.</h2>
                    <h1 id="kmTitle" class="project-title">K&M Awnings</h1>
                    <h2 id="kmRight" class="project-text right">Programmed with HTML, CSS, JavaScript, and C#.</h2>
                </div>
                <a id="kmDown" class="project-text down" href="https://www.km-awnings.com/" target="_blank">https://www.km-awnings.com/</a>
            </div>
            <div class="project-item-container">
                <div class="project-item-row">
                    <h2 id="azureLeft"class="project-text left">JavaScript application built for NextCloud platform that interacts with Microsoft Azure's REST API.</h2>
                    <h1 id="azureTitle" class="project-title">Azure for Nextcloud</h1>
                    <h2 id="azureRight" class="project-text right">Programmed with HTML, CSS, and JavaScript in Node.js environment.</h2>
                </div>
                <a id="azureDown" class="project-text down" href="https://github.com/BrdfrdC/azure-nextcloud" target="_blank">https://github.com/BrdfrdC/azure-nextcloud</a>
            </div>
            <div class="project-item-container">
                <div class="project-item-row">
                    <h2 id="miniLeft" class="project-text left">Website that uses data scraped by a Python script.</h2>
                    <h1 id="miniTitle" class="project-title">Minimal Recipes</h1>
                    <h2 id="miniRight" class="project-text right">Programmed with HTML, CSS, and JavaScript in Node.js environment.</h2>
                </div>
                <a id="miniDown" class="project-text down" href="https://github.com/BrdfrdC/minimal-recipes" target="_blank">https://github.com/BrdfrdC/minimal-recipes</a>
            </div>
            <div class="project-item-container">
                <div class="project-item-row">
                    <h2 id="imdbLeft" class="project-text left">Machine learning classifier using a support vector machine algorithm.</h2>
                    <h1 id="imdbTitle" class="project-title">IMDB Classifier</h1>
                    <h2 id="imdbRight" class="project-text right">Programmed with Python using pandas, numpy, nltk, sklearn, and matplotlib libraries.</h2>
                </div>
                <a id="imdbDown" class="project-text down" href="https://github.com/BrdfrdC/IMDB-Classifier" target="_blank">https://github.com/BrdfrdC/IMDB-Classifier</a>
            </div>
            <router-link to="/" class="home-link">BACK</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    const kmTitle = document.getElementById('kmTitle');
    const azureTitle = document.getElementById('azureTitle');
    const miniTitle = document.getElementById('miniTitle');
    const imdbTitle = document.getElementById('imdbTitle');

    let left;
    let right;
    let down;

    kmTitle.addEventListener("mouseover", (e) => {
        left = document.getElementById('kmLeft');
        right = document.getElementById('kmRight');
        down = document.getElementById('kmDown');
        over(left, right, down);
    });

    kmTitle.addEventListener("mouseout", (e) => {
        left = document.getElementById('kmLeft');
        right = document.getElementById('kmRight');
        out(left, right);
    });

    azureTitle.addEventListener("mouseover", (e) => {
        left = document.getElementById('azureLeft');
        right = document.getElementById('azureRight');
        down = document.getElementById('azureDown');
        over(left, right, down);
    });

    azureTitle.addEventListener("mouseout", (e) => {
        left = document.getElementById('azureLeft');
        right = document.getElementById('azureRight');
        out(left, right);
    });

    miniTitle.addEventListener("mouseover", (e) => {
        left = document.getElementById('miniLeft');
        right = document.getElementById('miniRight');
        down = document.getElementById('miniDown');
        over(left, right, down);
    });

    miniTitle.addEventListener("mouseout", (e) => {
        left = document.getElementById('miniLeft');
        right = document.getElementById('miniRight');
        out(left, right);
    });

    imdbTitle.addEventListener("mouseover", (e) => {
        left = document.getElementById('imdbLeft');
        right = document.getElementById('imdbRight');
        down = document.getElementById('imdbDown');
        over(left, right, down);
    });

    imdbTitle.addEventListener("mouseout", (e) => {
        left = document.getElementById('imdbLeft');
        right = document.getElementById('imdbRight');
        out(left, right);
    });

    function over(left, right, down) {
        left.style.opacity = "100%";
        left.style.left = "0%"
        left.style.transition = "0.3s ease-in-out";

        right.style.opacity = "100%";
        right.style.right = "0%"
        right.style.transition = "0.3s ease-in-out";

        down.style.opacity = "100%";
        down.style.bottom = "0%"
        down.style.transition = "0.3s ease-in-out";
        down.style.pointerEvents = "auto";
    }

    function out(left, right) {
        left.style.opacity = "0%";
        left.style.left = "35%"
        left.style.transition = "0.3s ease-in-out";

        right.style.opacity = "0%";
        right.style.right = "35%"
        right.style.transition = "0.3s ease-in-out";
    }
});

</script>

<style scoped>

.projects-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
}

.project-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-item-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.project-title {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
    font-size: 4vw;
    margin: 0 2vw 3vh 2vw;
    z-index: 10;
    cursor: pointer;
    text-decoration-line: underline;
}

.project-text {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 1.5vw;
    opacity: 0%;
    margin: 0 0 0 0;
}

.left {
    left: 35%;
    max-width: 25vw;
}

.right{
    right: 35%;
    max-width: 25vw;
}

.down{
    bottom: 50%;
    pointer-events: none;
}

</style>