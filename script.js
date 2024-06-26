// const API_KEY = "826f5203875cb5ae371a91108fa14179";
//
// function renderWeatherInfo(data)
// {
//     let newPara = document.createElement("p");
//     newPara.textContent = `${data?.main?.temp.toFixed(2)} Celsius`;
//     document.body.appendChild(newPara);
// }
//
// async function fetchWeatherDetails()
// {
//     try
//     {
//         let city = "hyderabad";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//         const data = await response.json();
//         console.log("Weather data -> ", data);
//         renderWeatherInfo(data);
//     }
//     catch (error)
//     {
//         console.log("Error");
//     }
// }
//
// async function getCustomWeatherDetails()
// {
//     try
//     {
//         let latitude = 16.4734303;
//         let longitude = 80.612922;
//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
//         let data = await result.json();
//         console.log(data);
//     }
//     catch (error)
//     {
//         console.log("Error");
//     }
//
// }
//
// function switchTab(clickedTab) {
//     apiErrorContainer.classList.remove("active");
//     if (clickedTab !== currentTab) {
//         currentTab.classList.remove("current-tab");
//         currentTab = clickedTab;
//         currentTab.classList.add("current-tab");
//         if (!searchForm.classList.contains("active")) {
//             userInfoContainer.classList.remove("active");
//             grantAccessContainer.classList.remove("active");
//             searchForm.classList.add("active");
//         } else {
//             searchForm.classList.remove("active");
//             userInfoContainer.classList.remove("active");
//             getFromSessionStorage();
//         }
//         // console.log("Current Tab", currentTab);
//     }
// }
//
// function getLocation()
// {
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         console.log("No geoLocation Support");
//     }
// }
//
// function showPosition(position)
// {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     console.log(latitude);
//     console.log(longitude);
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(
    ".grant-location-container"
);
const searchForm = document.querySelector("[data-searchForm ]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "826f5203875cb5ae371a91108fa14179";

// Setting default tab
currentTab.classList.add("current-tab");

function switchTab(clickedTab)
{
    if (clickedTab !== currentTab)
    {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active"))
        {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else
        {
            searchForm.classList.add("active");
            userInfoContainer.classList.add("active");
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () =>{
    switchTab(userTab);
});

searchTab.addEventListener("click", () =>{
    switchTab(searchTab);
});

// check if coordinates are already present in session storage.
function getFromSessionStorage()
{
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if (!localCoordinates)
    {
        grantAccessContainer.classList.add("active");
    }
    else
    {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates)
{
    const {latitude, longitude} = coordinates;

    // make grand container invisible
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // API Call
    try
    {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.class.add("active");
        renderWeatherInfo(data);
    }
    catch (error)
    {
        loadingScreen.classList.remove("active");
        console.log("Error");
    }
}

// Render weather Info In UI
function renderWeatherInfo(weatherInfo)
{
    // fetch the elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


}










