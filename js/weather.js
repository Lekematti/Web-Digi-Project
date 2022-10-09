let weather = {
    apiKey: "57d63e83d484177c2110ffbd1ac592c1",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=" +
            this.apiKey +
            "&units=metric"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " m/s";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Hakee säätiedot klikkaamalla "Search" nappia
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

// Hakee säätiedot myös painamalla Enteriä
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

function karamalmi () {
    weather.fetchWeather("Karamalmi");
}
function myyrmaki () {
    weather.fetchWeather("Myyrmäki");
}
// Hakee Arábian sään. EI HELSINGIN ARABIAN.
function arabia () {
    weather.fetchWeather("Arabianranta");
}
function myllypuro () {
    weather.fetchWeather("Myllypuro");
}
function helsinki () {
    weather.fetchWeather("Helsinki");
}

// Hakee kyseisen kaupungin säätiedot oletuksena kun sivun lataa.
//weather.fetchWeather("Karamalmi");


/* "https://api.openweathermap.org/data/2.5/weather?lat=60.22407&lon=24.75854&appid=57d63e83d484177c2110ffbd1ac592c1&units=metric" */