<template>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<style>
@font-face {
  font-family: 'Futura Book';
  src: url('./assets/fonts/Futura Book font.ttf');
}

@font-face {
  font-family: 'Futura Medium';
  src: url('./assets/fonts/futura medium bt.ttf');
}

body {
  background-color: #335791;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #335791;
  z-index: 10;
  position: relative;
  align-self: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home-link {
  position: relative;
  color: white;
  font-family: 'Futura Book';
  font-size: 2vw;
}

@media screen and (max-width: 720px) {
  .home-link {
    position: relative;
    color: white;
    font-family: 'Futura Book';
    font-size: 6vw;
  }
}

</style>
