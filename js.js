var apiKey = "fc84e84054743826a16e748c04f0e5c1";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Add "?q=" here

var input = document.querySelector("input");
var btnS = document.querySelector(".search");
var cloud = document.querySelector(".cloud");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.ok) {
            var data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".Speed").innerHTML = data.wind.speed + "km/h";
        } else {
            console.error("Failed to fetch weather data");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

    if(data.weather[0].main == "Clouds"){
        cloud.src ="https://cdn-icons-png.flaticon.com/512/252/252035.png"
    }
    else if(data.weather[0].main == "Clear"){
        cloud.src ="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png"
    }else if(data.weather[0].main == "Rain"){
        cloud.src ="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png"
    }else if(data.weather[0].main == "Drizzle"){
        cloud.src ="https://cdn-icons-png.flaticon.com/512/4837/4837678.png"
    }else if(data.weather[0].main == "Mist"){
        cloud.src ="https://i.pinimg.com/originals/5a/c5/9a/5ac59aecdd524aef993f81de331096ad.png"
    }
}

btnS.addEventListener('click', () => {
    checkWeather(input.value);
    console.log("hi");
});
