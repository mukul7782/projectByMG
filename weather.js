document.addEventListener("DOMContentLoaded", () => {

    let cityInput = document.getElementById("city-input");
    let getButton = document.getElementById("get-weather-btn");

    let info = document.getElementById("weather-info");
    let cityName = document.getElementById("city-name");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");

    let errorMsg = document.getElementById("error-message");

    const apiKey = "e0ba5cc1241eda14591bc447283ad447";

    getButton.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        const response = await fetch(url);
        console.log(typeof response);
       
        if (!response.ok) {
            throw new Error("City not found");
        }
       
        const data= await response.json();
        return data;
       
    }

    function displayWeatherData(data) {
        console.log(data);
        errorMsg.classList.add("hidden");
        info.classList.remove("hidden");

        const { name,main,weather}=data;
        cityName.textContent=name;
        temperature.textContent=`temprature:${main.temp}`;
         description.textContent=`weather:${weather[0].description}`;
    }

    function showError() {
        info.classList.add("hidden");
        errorMsg.classList.remove("hidden");
    }
});
