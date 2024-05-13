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
        <div class="contact-container">
            <a class="contact-item email" href="mailto:bradleyconsuegra@gmail.com" target="_blank">bradleyconsuegra@gmail.com</a>
            <a class="contact-item phone" href="tel:7867152063" target="_blank">786-715-2063</a>
            <div class="contact-item-row">
                <a href="https://www.linkedin.com/in/bradley-consuegra-4aa435232/" class="contact-item linkedin" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </a>
                <a href="https://github.com/BrdfrdC" class="contact-item github" target="_blank">
                    <svg width="1024" height="1024" viewBox="0 0 1052 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                    </svg>
                </a>
            </div>
            
            <router-link to="/" class="home-link fromBottom">BACK</router-link>
        </div>
    </div>
</template>
    
  <script setup>
  const particlesLoaded = async container => {
      console.log("Particles container loaded", container);
  };
  </script>
    
<style scoped>

.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
}

.contact-item {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
}

.email {
    font-size: 6vw;
}

.phone {
    font-size: 5vw;
}

.contact-item-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
}

.linkedin {
    width: 10vw;
    height: 10vw;
}

.github {
    width: 10vw;
    height: 10vw;
}

svg {
    width: 100%;
    height: 100%;
    fill: white;
}

@media screen and (max-width: 720px) {
    .contact-container {
        justify-content: center;
    }

    .email {
        font-size: 6.5vw;
        margin-bottom: 3vh;
    }

    .phone {
        font-size: 9vw;
    }

    .contact-item-row {
        width: 60vw;
    }

    .linkedin {
        width: 150vw;
        height: 50vw;
    }

    .github {
        width: 150vw;
        height: 50vw;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: white;
    }
}

</style>