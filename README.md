# weather-dashboard

This repository has the HTML, CSS and JavaScript code for the Server Side API Challenge for Module 6. It is a weather dashboard that displays the current weather and the 5 day forecast for a city entered in it's searchbar through the `openweathermap` API.

## Contents

The files have the following contents -

- index.html - Has the HTML code and it contains CDNs for `bootstrap`, `jquery` and `moment.js` 
- style.css - Has the CSS code for the html page containing styles for the entire application. (This application also uses styles from bootstrap)
- script.js - Contains the JavaScript code written in order to execute the functionality of the weather dashboard.

## Components of the JavaScript code

- The `API key` has been generated on openweathermap and stored in a variable in order to make the fetch request.
- The first fetch call is made using the city name from the search input and the second fetch call is made using the coordinates we get from the first call.
- The function `saveCity` creates an empty array to store the city names using local storage. The city names are passed in as a parameter from the fetch call. It only saves a city name if it isn't already included in the local storage array.
- The function `renderCityName` creates buttons and appends them to the search history using `localstorage.getItem`
- The function `historyClicked` enables the user to click on a city from search history to display the city weather and forecast using `event.target`

## How to get a copy of this repository

- Clone the git repository from this [folder](https://github.com/rashida53/work-day-scheduler)
- Open the local copy on VS code using the terminal
- Any changes can be made on this text editor

## Using terminal to upload on Github

- Use `git add .` to add files to the repository
- Use `git commit` to describe the changes made
- Use `git push origin main` to push up the changes to github

### The following image shows the web application's appearance and functionality:

![screenshot](https://github.com/rashida53/weather-dashboard/blob/main/weather-dashboard.png?raw=true)

## Deployment

This website has been deployed to this [URL](https://rashida53.github.io/weather-dashboard) using Github pages.