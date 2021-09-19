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

.page_content {
  width: 100%;
  height: 100%;
}

</style>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: {Navigation}
}
</script>