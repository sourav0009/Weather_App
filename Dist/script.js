const apiKey = "4330d982e481526bae65e99c8ad2b5bf";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector("#search input"); // Use #search instead of .search
        const searchBtn = document.querySelector("#search button"); // Use #search instead of .search
        const weatherIcon = document.querySelector("#weather-icon")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.getElementById("Humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "./images/clouds.png";
            } else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "./images/clear.png";
            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./images/rain.png";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "./images/drizzle.png";
            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "./images/rain.png";
            }


        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

