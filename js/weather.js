let weather = {
    apiKey: "57d63e83d484177c2110ffbd1ac592c1",                                 // Openweathermap apiKey
    fetchWeather: function (city) {                                             // Säähaun funktio
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=" +
            this.apiKey +
            "&units=metric"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {                                // Funktio sään näyttämiselle.
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;                                   // Asettaa halutun paikan nimen.
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";      // Asettaa openweathermapin kuvakirjastosta oikean sääkuvan.
        document.querySelector(".description").innerText = description;                                     // Asettaa millainen keli on (clear sky, cloudy etc..).
        document.querySelector(".temp").innerText = temp + "°C";                                            // Asettaa lämpötilan.
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";                      // Asettaa kosteustason.
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " m/s";                        // Asettaa tuulen nopeuden.

        document.querySelector(".weather").classList.remove("loading");
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

// Hakee eri kampusten säätiedot.
function karamalmi () {
    weather.fetchWeather("Karamalmi");
}
function myyrmaki () {
    weather.fetchWeather("Myyrmäki");
}
function arabia () {
    weather.fetchWeather("Arabianranta");
}
function myllypuro () {
    weather.fetchWeather("Myllypuro");
}
function helsinki () {
    weather.fetchWeather("Helsinki");
}