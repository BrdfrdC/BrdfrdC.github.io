<template>
  <router-view/>
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 10;
  position: relative;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
