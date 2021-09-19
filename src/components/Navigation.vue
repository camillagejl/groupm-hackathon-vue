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

    <div>
    <b>Analysis terms:</b> [IKEA]
    </div>
    <br>
    <div>
      <b>Media:</b> [any]
    </div>
    <br>
    <div>
    <b>Date span:</b> [01-09-2020 - 01-09-2021]
    </div>

    <ul>
      <li>
        <router-link
            :class="{ 'selected_route': (currentRouteName === 'Campaigns') }"
            to="/"
        >
          Overview
          </router-link>
      </li>
      <li>
        <router-link
            to="/campaigns"
            :class="{ 'selected_route': (currentRouteName === 'Campaigns') }"
        >
          Media analytics
        </router-link>
      </li>
      <li>
        <router-link
            to="/sentimentanalyses"
            :class="{ 'selected_route': (currentRouteName === 'SentimentAnalyses') }"
        >
          Mention analytics
        </router-link>
      </li>
      <li>
        <router-link
            to="/sentimentanalyses"
            :class="{ 'selected_route': (currentRouteName === 'SentimentAnalyses') }"
        >
          Brand comparison
        </router-link>
      </li>
      <br>
      <br>
      <li>
        <router-link
            to="/brandcomparison"
            :class="{ 'selected_route': (currentRouteName === 'BrandComparison') }"
        >
          New analysis
        </router-link>
      </li>
      <li>
        <router-link
            to="/settings"
            :class="{ 'selected_route': (currentRouteName === 'Setting') }"
        >
          Settings
        </router-link>
      </li>
      <li>
        <router-link
            to="/settings"
            :class="{ 'selected_route': (currentRouteName === 'Setting') }"
        >
          Sign out
        </router-link>
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
  name: 'Navigation',
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
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
  margin: 24px 0 24px 0;

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