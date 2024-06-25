const API_KEY = "826f5203875cb5ae371a91108fa14179";

function renderWeatherInfo(data)
{
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} Celsius`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails()
{
    try
    {
        let city = "hyderabad";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json();
        console.log("Weather data -> ", data);
        renderWeatherInfo(data);
    }
    catch (error)
    {
        console.log("Error");
    }
}

async function getCustomWeatherDetails()
{
    try
    {
        let latitude = 16.4734303;
        let longitude = 80.612922;
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        let data = await result.json();
        console.log(data);
    }
    catch (error)
    {
        console.log("Error");
    }

}

function switchTab(clickedTab) {
    apiErrorContainer.classList.remove("active");
    if (clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
        // console.log("Current Tab", currentTab);
    }
}

function getLocation()
{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position)
{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
}