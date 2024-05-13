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
        <div class="work-container">
            <div class="work-item-container fromTop">
                <div class="work-left">
                    <h1 class="work-role">Programmer</h1>
                    <h2 class="work-company">Freelance</h2>
                    <h2 class="work-location">Remote</h2>
                    <h2 class="work-period">November 2023 - Present</h2>
                </div>
                <div class="work-right">
                    <li class="work-list">
                        <ul class="work-list-item">Communicated with clients to define project goals and relay project progress.</ul>
                        <ul class="work-list-item">Designed and wrote both backend and frontend web architectures to match client's specifications.</ul>
                        <ul class="work-list-item">Collaborated with other freelance programmers to further flesh out client websites' functionalities.</ul>
                    </li>
                </div>
            </div>
            <hr>
            <div class="work-item-container">
                <div class="work-left fromLeft">
                    <h1 class="work-role">Front Service Clerk</h1>
                    <h2 class="work-company">Publix Super Markets</h2>
                    <h2 class="work-location">Miami, FL</h2>
                    <h2 class="work-period">June 2019 - April 2020</h2>
                </div>
                <div class="work-right fromRight">
                    <li class="work-list">
                        <ul class="work-list-item">Engaged actively with customers to ensure a personalized shopping experience.</ul>
                        <ul class="work-list-item">Organized products that customers had returned to our store.</ul>
                        <ul class="work-list-item">Conducted cleaning operations after store hours with coworkers.</ul>
                        <ul class="work-list-item">Collected shopping carts from parking lots and inspected their cleanliness and functionality.</ul>
                    </li>
                </div>
            </div>
            <hr>
            <div class="work-item-container fromBottom">
                <div class="work-left">
                    <h1 class="work-role">Volunteer</h1>
                    <h2 class="work-company">Fit Kids of America</h2>
                    <h2 class="work-location">Miami, FL</h2>
                    <h2 class="work-period">June 2018 - August 2018</h2>
                </div>
                <div class="work-right">
                    <li class="work-list">
                        <ul class="work-list-item">Communicated with counselors and other volunteers to arrange activities and events for children.</ul>
                        <ul class="work-list-item">Supervised children's indoor learning activities and outdoor physical sports.</ul>
                        <ul class="work-list-item">Provided supplies and equipment during activities and events to ensure smooth operations.</ul>
                    </li>
                </div>
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

ul {
    display: list-item;
    list-style-type: disc;
}

hr {
    border-top: 8px solid white;
    opacity: 80%;
    width: 90vw;
    border-radius: 5px;
}

.work-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-evenly;
    overflow: hidden;
}

.work-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.work-left {
    width: 40vw;
    text-align: left;
    height: 100%;
}

.work-right {
    width: 40vw;
    height: 100%;
}

.work-role {
    position: relative;
    color: white;
    font-family: 'Futura Medium';
    font-size: 3.5vw;
    margin: 0 0 0 0;
}

.work-company {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 2.5vw;
    margin: 0 0 0 0;
}

.work-location {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 2vw;
    margin: 0 0 0 0;
}
.work-period {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 2vw;
    margin: 0 0 0 0;
}

.work-list {
    height: inherit;
    text-align: left;
    display: flex;
    flex-direction: column;
}

.work-list-item {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 1.1vw;
}

.fromTop {
    animation: slideFromTop 1s ease-in-out;
}

@keyframes slideFromTop {
    0% {opacity: 0%; transform: translateY(-100%);}
    100% {opacity: 100%; transform: translateY(0%);}
}

.fromBottom {
    animation: slideFromBottom 1s ease-in-out;
}

@keyframes slideFromBottom {
    0% {opacity: 0%; transform: translateY(100%);}
    100% {opacity: 100%; transform: translateY(0%);}
}

.fromLeft {
    animation: slideFromLeft 1s ease-in-out;
}

@keyframes slideFromLeft {
    0% {opacity: 0%; transform: translateX(-100%);}
    100% {opacity: 100%; transform: translateX(0%);}
}

.fromRight {
    animation: slideFromRight 1s ease-in-out;
}

@keyframes slideFromRight {
    0% {opacity: 0%; transform: translateX(100%);}
    100% {opacity: 100%; transform: translateX(0%);}
}

@media screen and (max-width: 720px) {
    hr {
        border-top: 3px solid white;
        opacity: 80%;
        width: 90vw;
        border-radius: 5px;
    }

    .work-container {
        height: fit-content;
        margin: 2vh 0 2vh 0
    }

    .work-item-container {
        flex-direction: column;
    }

    .work-left,
    .work-right {
        width: 80vw;
        text-align: center;
    }

    .work-role {
        font-size: 8vw;
    }

    .work-company {
        font-size: 6.5vw;
    }

    .work-location {
        font-size: 6.5vw;
    }
    .work-period {
        font-size: 5vw;
    }

    .work-list {
        height: inherit;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    .work-list-item {
        font-size: 4vw;
    }
}

</style>