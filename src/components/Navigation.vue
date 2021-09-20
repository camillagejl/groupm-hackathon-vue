<template>
  <nav class="nav">
    <div class="top">
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
      <div class="arrow">
        &#748;
      </div>
    </div>

    <div class="search_terms">
    <div>
    Analysis terms: <strong>IKEA</strong>
    </div>
    <div>
      Media: <strong>any</strong>
    </div>
    <div>
    Date span: <strong>01-09-2020 - 01-09-2021</strong>
    </div>
    </div>

    <hr>

    <ul>
      <li>
        <router-link
            :class="{ 'selected_route': (currentRouteName === 'Overview' || currentRouteName === '') }"
            to="/overview"
        >
          Overview
          </router-link>
      </li>
      <li>
        <router-link
            to="/platform_analytics"
            :class="{ 'selected_route': (currentRouteName === 'PlatformAnalytics') }"
        >
          Platform analytics
        </router-link>
      </li>
      <li>
        <router-link
            to="/mention_analytics"
            :class="{ 'selected_route': (currentRouteName === 'MentionAnalytics') }"
        >
          Mention analytics
        </router-link>
      </li>
      <li>
        <router-link
            to="/compare_analytics"
            :class="{ 'selected_route': (currentRouteName === 'CompareAnalytics') }"
        >
          Compare analytics
        </router-link>
      </li>
    </ul>
      <hr>
    </div>
    <ul>
      <li>
        <router-link
            to="/new_analysis"
            :class="{ 'selected_route': (currentRouteName === 'NewAnalysis') }"
        >
          New analysis
        </router-link>
      </li>
      <li>
        <router-link
            to="/analysis_library"
            :class="{ 'selected_route': (currentRouteName === 'AnalysisLibrary') }"
        >
          Analysis library
        </router-link>
      </li>
      <li>
        <router-link
            to="/settings"
            :class="{ 'selected_route': (currentRouteName === 'Settings') }"
        >
          Settings
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
  font-size: 16px;
  min-width: 300px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

hr {
  border-color: grey;
  margin-top: 48px;
}

.search_terms {
  font-size: 14px;
  line-height: 24px;
  margin-top: 24px;
}

ul {
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0;

  a {
    color: white !important;
    text-decoration: none;
  }

  .selected_route {
    color: #00FFB4 !important;
  }

  li {
    padding-top: 48px;
  }
}

.logo {
  width: 250px;
  margin: 0 0 24px 0;

  img {
    width: 100%;
  }
}

.company_logo {
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px 12px 12px;
  background-color: rgba(255, 255, 255, .25);
  border-radius: 25px;

  img {
    width: 124px;
    padding: 12px;
  }
}

.arrow {
  font-size: 32px;
  padding-bottom: 24px;
  padding-left: 6px;
}

</style>