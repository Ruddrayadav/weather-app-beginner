const inputbox = document.querySelector(".input");
const btn = document.querySelector(".search-btn");
const cityName = document.querySelector(".showdetails h3");
const temp = document.querySelector(".showdetails h2");
const weather = document.querySelector(".showdetails p");
const API_KEY = "5368e30a313140c283790716250504";



btn.addEventListener("click",function(){
    let city = document.querySelector(".input").value;
    if (city) {
        getWeather(city)
    }
})
const weatherIcons = {
    Clear: "☀️",
    Sunny: "☀️",
    Clouds: "☁️",
    Cloudy: "☁️",
    Rain: "🌧️",
    Showers: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Thunder: "⛈️",
    Drizzle: "🌦️",
    Mist: "🌫️",
    Fog: "🌫️",
    Overcast: "⛅️"
  };



async function getWeather(city) {
    try {
      let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city},IN`);
      let data = await response.json();
  
      document.querySelector(".city").innerText = data.location.name;
      document.querySelector(".temp").innerText = `${data.current.temp_c}°C`;
  
      let weatherCondition = data.current.condition.text;
      let symbolKey = Object.keys(weatherIcons).find(key => weatherCondition.includes(key)) || "❓";
  
      document.querySelector(".weather").innerText = `${weatherCondition} ${weatherIcons[symbolKey]}`;
    } catch (error) {
      console.log("Error fetching weather:", error);
      document.querySelector(".city").innerText = "City not found";
      document.querySelector(".temp").innerText = "--";
      document.querySelector(".weather").innerText = "-- ❌";
    }
  }
  





