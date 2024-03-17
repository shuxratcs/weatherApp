const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather() {

    fetch('http://localhost:8080/weather')

        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                console.log(data)

                document.querySelector(".city").innerHTML = entry.city + "";
                document.querySelector(".tempurature").innerHTML = Math.round(entry.temperature) + "°c";
                document.querySelector(".pressure").innerHTML = entry.pressure + " mbar";
                document.querySelector(".feeling").innerHTML = Math.round(entry.feeling) + "°c";
                document.querySelector(".humidity").innerHTML = entry.humidity + "%";
                document.querySelector(".wind").innerHTML = entry.wind + " km/h";

                if (entry.weather == "Clouds") {
                    weatherIcon.src = "src/main/front/images/clouds.png";
                }
                else if (entry.weather == "Clear") {
                    weatherIcon.src = "src/main/front/images/clear.png";
                }
                else if (entry.weather == "Drizzle") {
                    weatherIcon.src = "src/main/front/src/main/front/images/drizzle.png";
                }
                else if (entry.weather == "Mist") {
                    weatherIcon.src = "src/main/front/images/mist.png";
                }
                else if (entry.weather == "Rain") {
                    weatherIcon.src = "src/main/front/images/rain.png";
                }
                else if (entry.weather == "Snow") {
                    weatherIcon.src = "src/main/front/images/snow.png";
                }
            });
        })
        .catch(error => console.error('Error:', error));

}

checkWeather();