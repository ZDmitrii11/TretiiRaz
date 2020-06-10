<template>
  <div id="app">
    <router-view/>
    <HeroSelection></HeroSelection>
    <Main></Main>
  </div>
</template>

<script>

import Header from "./components/Header";
import HeroSelection from "@/components/HeroSelection";
import Main from "./components/Main/Main";

  export default {
  name: 'App',
    components: {
    Header,
      HeroSelection,
      Main

    }
}
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: #2487ce;
}

a:hover {
  color: #469fdf;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  display: none;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}

.back-to-top i {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #2487ce;
  color: #fff;
  transition: all 0.4s;
}

.back-to-top i:hover {
  background: #3e9bdd;
  color: #fff;
}
</style>
