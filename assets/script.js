// var APIKey = 'ba6658a90dae379b2924f0159443e270';

$(document).ready(function() {
    // Function to fetch weather data for a given city
    function fetchWeatherData(city) {
        var apiKey = 'ba6658a90dae379b2924f0159443e270';
        var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
        var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;
        

// Search for a city
// Press search
// City is pulled up
// Todays weather: City name, date, temp, humidity, wind speed, uv index
// 5 Day forcast: Date, weather icon, temp, wind, humidity

// Create a function that will display the citys weather information after you type a city and press the search button
// Create a function that will do the same thing ^ after you type a city and press enter 
// Clear the input field
// Use JSON.parse to pull search history from local storage
// Search history be cleared when you refresh the page

// Add event listener to search button

