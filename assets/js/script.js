var APIkey = "7b4d4ebcc51933b5da1e380d1d12fc0e";
var date = moment().format("MM/DD/YYYY");

var hour = moment().format("H");


var cityName = document.querySelector('#cityName');
var searchBtn = document.querySelector('#search-btn');
var userFormEl = document.querySelector('#user-form');
var currentCity = document.querySelector('#currentCity');
var currentDate = document.querySelector('#currentDate');

var tempEl = document.querySelector('#temp1');
var windEl = document.querySelector('#wind1');
var humidityEl = document.querySelector('#humidity1');

var containerEl = $('#card-deck');
var buttons = $('#buttons-list');
var weatherPanelEl = $('#weather-panel');


weatherPanelEl.hide();

var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityNameEl = cityName.value.trim();

    if (cityNameEl) {
        getWeatherInfo(cityNameEl);
        cityNameEl.value = '';
    } else {
        alert('Please enter a city name!');
    }

    saveCity();

};

renderCityName();

userFormEl.addEventListener('submit', formSubmitHandler);

function getWeatherInfo(city) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIkey + '&units=imperial';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayCurrentWeather(data);
                    displayWeather(data.coord.lat, data.coord.lon);
                });
            }
        }
        )
};

var displayCurrentWeather = function (data) {

    currentCity.textContent = data.name;
    currentDate.textContent = date;

    tempEl.textContent = data.main.temp;
    windEl.textContent = data.wind.speed;
    humidityEl.textContent = data.main.humidity;

    weatherPanelEl.show();

};

var displayWeather = function (lat, lon) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIkey + '&units=imperial';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                        containerEl.empty();
                        for (var i = 0; i < 40; i += 8) {
                            var image = data.list[i].weather[0].icon;
                            var newImage = parseInt(hour) > 9 && parseInt(hour) < 21 ? image.slice(0, -1) + 'd' : image.slice(0, -1) + 'n';
                            var html =
                                ` <div class="card" style="width: 18rem;">
                                <div class="card-body content-card">
                                    <h5 class="card-title">Date:${moment.unix(data.list[i].dt).format('MM/DD/YYYY')}</h5>
                                    <img src="http://openweathermap.org/img/wn/${newImage}@2x.png">
                                    <p class="card-text">Temp: ${data.list[i].main.temp}</p>
                                    <p class="card-text">Wind: ${data.list[i].wind.speed}</p>
                                    <p class="card-text">Humidity: ${data.list[i].main.humidity}</p>
                                </div>
                            </div>`
                            containerEl.append(html);
                        }
                    });
            }
        })
}

function saveCity() {
    var cityNameEl = cityName.value.trim();
    var key = "cityName";
    var valueToSave = cityNameEl;
    var history = localStorage.getItem(key);

    if (history === null) {
        localStorage.setItem(key, JSON.stringify("[]"));
        history = "[]";
    }
    var currentHistory = JSON.parse(history);
    if (!history.includes(valueToSave)) {
        currentHistory.push(valueToSave);
        localStorage.setItem(key, JSON.stringify(currentHistory));
    }
    renderCityName();
}

function renderCityName() {
    var keyToDisplay = "cityName";
    var history = localStorage.getItem(keyToDisplay);
    if (history === null) {
        return;
    }
    var cities = JSON.parse(localStorage.getItem(keyToDisplay));

    buttons.empty();

    for (var i = 0; i < cities.length; i++) {
        var cityItemButton = cities[i];

        var button = $('<button>');
        button.text(cityItemButton);
        button.addClass('cityButton btn btn-outline-dark btn-sm');
        button.attr("id", cities[i]);
        button.on('click', historyClicked);
        buttons.append(button);

    }
}

function historyClicked(event) {
    event.preventDefault();
    var buttonClicked = event.target;
    getWeatherInfo(buttonClicked.id);
}
