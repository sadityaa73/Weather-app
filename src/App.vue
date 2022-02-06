<template>
  <div id="weatherApp">
    <component :is="selected"></component>
  </div>
</template>

<script>
import WeatherApp from "./components/WeatherApp.vue";
export default {
  name: "App",
  components: { WeatherApp },
  data: function () {
    return {
      selected: "WeatherApp",
    };
  },
};
</script>

<style></style>
