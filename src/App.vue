<template>
  <div id="app">
    <Navigation/>

    <div class="page_content">
    <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

// Variables
:root {
  --color-main-500: #0A2756;

  --color-secondary-500: #3BBA7D;

  --color-tertiary-500: #FEA70E;

  --color-danger-500: #D96581;

  --headline-font: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  height: 100vh;
  font-family: var(--headline-font);
}

h1 {
  font-weight: normal;
  padding-bottom: 48px;
}

.page_content {
  padding: 72px 48px 48px 48px;
}

#app {
  display: flex;
  height: 100vh;
}

.page_content {
  width: 100%;
  height: 100%;
}

</style>
<script>
import Navigation from "@/components/Navigation";
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default {
  components: {Navigation}
}
</script>