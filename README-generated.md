# **Weather dashboard**

## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## This repository has the HTML, CSS and JavaScript code for the Server Side API Challenge for Module 6. It is a weather dashboard that displays the current weather and the 5 day forecast for a city entered in it's searchbar through the `openweathermap` API.


>## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## [**Installation**](#table-of-contents)

To install this aplication on your device, please follow these instructions:

To begin with, you can clone the git repository from this [folder](https://github.com/rashida53/weather-dashboard). Then open the local copy on VS code using the terminal. Any changes can be made on this text editor.


## [**Usage**](#table-of-contents)
The function `saveCity` creates an empty array to store the city names using local storage. The city names are passed in as a parameter from the fetch call. It only saves a city name if it isn't already included in the local storage array./n The function `renderCityName` creates buttons and appends them to the search history using `localstorage.getItem` /n  The function `historyClicked` enables the user to click on a city from search history to display the city weather and forecast using `event.target`


## [**License**](#table-of-contents)
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## [**Contributing**](#table-of-contents)
If you wish to contribute to this project, you can visit my [github](https://github.com/rashida53) and add to this application!

## [**Testing**](#table-of-contents)

To run tests on this application, use the following command:

In order to test this application, we performed API calls in postman. Each individual component was also tested through ```console.log```  in the browser.

## [**Questions**](#table-of-contents)

If you have any questions regarding this repo, feel free to reachout on [github](https://github.com/rashida53) or via [email](rashidamk21@gmail.com).


