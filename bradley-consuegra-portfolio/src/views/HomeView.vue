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
    <div class="home-container">
        <div class="wrapper" id="wrapper">
            <router-link to="/about" class="about-title" name="subtitle">ABOUT</router-link>
            <div class="home-row">
                <router-link to="/projects" class="projects-title" name="subtitle">PROJECTS</router-link>
                <h1 class="name-title">BRADLEY CONSUEGRA</h1>
                <router-link to="/contact" class="contact-title" name="subtitle">CONTACT ME</router-link>
            </div>
            <router-link to="/work-experience" class="experience-title" name="subtitle">WORK EXPERIENCE</router-link>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

onMounted(() => {
    const subtitleElements = document.getElementsByName("subtitle");

    subtitleElements.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            element.style.opacity = "100%";
            element.style.transition = "0.3s";
        });

        element.addEventListener('mouseout', (e) => {
            element.style.opacity = "20%";
            element.style.transition = "0.3s";
        });
    })
});
</script>

<style scoped>
.home-container {
    position: relative;
    z-index: 10;
    width: 98vw;
    height: 98vh;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
}

.wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-content: space-around;
}

.home-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.name-title {
    position: relative;
    font-size: 5vw;
    color: white;
    font-family: 'Futura Medium';
}

.about-title {
    position: relative;
    font-size: 3vw;
    color: white;
    font-family: 'Futura Book';
    opacity: 20%;
}

.projects-title {
    position: relative;
    font-size: 2.5vw;
    color: white;
    font-family: 'Futura Book';
    opacity: 20%;
}

.experience-title {
    position: relative;
    font-size: 2.5vw;
    color: white;
    font-family: 'Futura Book';
    opacity: 20%;
}

.contact-title {
    position: relative;
    font-size: 2.5vw;
    color: white;
    font-family: 'Futura Book';
    opacity: 20%;
}
</style>