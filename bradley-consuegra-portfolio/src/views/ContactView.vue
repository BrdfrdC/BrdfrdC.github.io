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
            <a class="contact-item email" href="mailto:bradleyconsuegra@gmail.com">bradleyconsuegra@gmail.com</a>
            <a class="contact-item phone" href="tel:7867152063">786-715-2063</a>
            <div class="contact-item-row">
                <div class="contact-item linkedin"></div>
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
    font-size: 3vw;
}

.phone {
    font-size: 3vw;
}

.contact-item-row {
    display: flex;
    flex-direction: row;
}

</style>