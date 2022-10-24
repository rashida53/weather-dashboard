# weather-dashboard

This repository has the HTML, CSS and JavaScript code for the Server Side API Challenge for Module 6. It is a weather dashboard that displays the current weather and the 5 day forecast for a city entered in it's searchbar through the `openweathermap` API.

## Components of the JavaScript code

- The `API key` has been generated on openweathermap and stored in a variable in order to make the fetch request.
- The first fetch call is made using the city name from the search input and the second fetch call is made using the coordinates we get from the first call.
- The function `saveCity` creates an empty array to store the city names using local storage. The city names are passed in as a parameter from the fetch call. It only saves a city name if it isn't already included in the local storage array.
- The function `renderCityName` creates buttons and appends them to the search history using `localstorage.getItem`
- The function `historyClicked` enables the user to click on a city from search history to display the city weather and forecast using `event.target`

## Features and Validations

- The image icon has been coded to print differently for day and night.
- The search history button populates the city name from the API data to render it correctly in the search button and to adjust it to upper case.
- If a user enters an incorrect name it will not return any results but will also not be stored in the search history.
- The search buttons are coded to return results upon being clicked.

### The following image shows the web application's appearance and functionality:

![screenshot](https://github.com/rashida53/weather-dashboard/blob/main/weather-dashboard.png?raw=true)

## Deployment

This website has been deployed to this [URL](https://rashida53.github.io/weather-dashboard) using Github pages.