<template>
  <nav class="nav">

    <div class="logo">
      <img
          class="logo"
          src="../assets/Smartmetrics@2x.png"
      alt="App logo in navigation bar"
      >
    </div>

    <div class="company_logo">
      <img
          src="../assets/ikea_logo.png"
          alt="Company logo in navigation bar"
          >
      <div>
        IKEA <br> insights
      </div>
      <div>
        v
      </div>

    </div>

    <ul>
      <li>
        <router-link
            class="selected_route"
            to="/"
        >Overview</router-link>
      </li>
      <li>
        <router-link to="/campaigns">Campaigns</router-link>
      </li>
      <li>
        <router-link to="/sentimentanalyses">Sentiment analysis</router-link>
      </li>
      <li>
        <router-link to="/brandcomparison">Brand comparison</router-link>
      </li>
      <li>
        <router-link to="/settings">Settings</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
/**
 *
 * @param [string] Nameofprop - description
 * @example
 * <Navigation
 * props=""/>
 * */
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">

.nav {
  background-color: var(--color-main-500);
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: white;
  font-size: 20px;
}

ul {
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;

  a {
    color: white;
    text-decoration: none;
  }

  .selected_route {
    color: #00FFB4;
  }

  li {
    padding-top: 48px;
  }
}

.logo {
  width: 250px;
  margin: 48px 0 24px 0;

  img {
    width: 100%;
  }
}

.company_logo {
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px 12px 12px;
  background-color: rgba(255, 255, 255, .25);
  border-radius: 25px;

  img {
    width: 124px;
    padding: 12px;
  }
}

</style>