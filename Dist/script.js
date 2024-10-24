const apiKey = "4330d982e481526bae65e99c8ad2b5bf";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector("#search input"); // Use #search instead of .search
        const searchBtn = document.querySelector("#search button"); // Use #search instead of .search

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.getElementById("Humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

