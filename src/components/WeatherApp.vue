<template>
  <div id="weatherComponent">
    <div class="weatherApp-wrap">
      <div class="search-bar">
        <input
          type="text"
          class="search"
          placeholder="search..."
          v-model="search"
          @keypress="fetchWeather"
        />
      </div>
      <div class="wrap-search" v-if="typeof weather.main != 'undefined'">
        <div class="location">{{ weather.name }},{{ weather.sys.country }}</div>
        <div class="time-day-date">
          <div class="time-day">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="Weather-degree">
            {{ Math.round(weather.main.temp) }}<span>&#176;C</span>
          </div>
        </div>
        <div class="Weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  data: function () {
    return {
      api_key: "cc07c4fee0d11e279b3b5b22cb0d0d5f",
      url_base: "https://api.openweathermap.org/data/2.5/",
      search: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.search}&units=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
      this.search = "";
    },
    dateBuilder() {
      var d = new Date();
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "july",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${date} ${month} ${day} ${year}`;
    },
  },
};
</script>
<style scoped>
#weatherComponent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(97, 7, 133);
  height: 100vh;
}
.weatherApp-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80");
  height: 478px;
  width: 486px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  border: none;
  box-shadow: 0px 5px 29px 13px midnightblue;
}
.wrap-search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search-bar {
  padding: 20px;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 20px;
  font-family: monospace;
  text-align: center;
  appearance: none;
  height: 45px;
  width: 339px;
  border: none;
  border-radius: 0px 16px 0px 16px;
  box-shadow: 1px 5px 14px 5px midnightblue;
}
.search:focus {
  border-radius: 16px 0px 16px 0px;
  height: 50px;
  width: 345px;
}
.location {
  color: white;
  color: white;
  font-size: 46px;
  font-family: monospace;
  text-shadow: 0px 3px 7px whitesmoke;
}
.Weather-degree {
  color: black;
  font-size: 50px;
  font-style: normal;
  font-family: monospace;
  text-shadow: 0px 3px 7px whitesmoke;
}
.time-day {
  color: white;
  font-size: 20px;
  font-family: monospace;
  font-style: italic;
  text-shadow: 0px 3px 7px whitesmoke;
  margin-top: 6px;
  margin-bottom: 5px;
}
.weather-box {
  display: flex;
  border: 1px red;
  margin-bottom: 13px;
  box-shadow: -1px 10px 12px 4px;
  border-radius: 14px;
  margin-top: 13px;
  width: 163px;
  background-color: white;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  height: 98px;
}
.Weather {
  color: white;
  font-size: 46px;
  font-family: monospace;
  text-shadow: 0px 3px 7px whitesmoke;
}
</style>
