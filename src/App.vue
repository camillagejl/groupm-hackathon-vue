<template>
  <div id="app">
    <Navigation/>

    <router-view/>
  </div>
</template>

<style lang="scss">

// Variables
:root {
  --color-main-500: #0A2756;

  --headline-font: 'Montserrat', sans-serif;

}

body {
  margin: 0;
  height: 100vh;
  font-family: var(--headline-font);
}

#app {
  display: flex;
  height: 100vh;
}

</style>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: {Navigation}
}
</script>