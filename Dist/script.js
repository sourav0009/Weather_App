const apiKey = "4330d982e481526bae65e99c8ad2b5bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function chakeWeather() {
    const responce = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await responce.json();
    console.log(data)
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
    document.getElementById("Humidity").innerHTML = data.main.humidity;
    document.getElementById("wind").innerHTML = data.wind.speed;

}
chakeWeather();
