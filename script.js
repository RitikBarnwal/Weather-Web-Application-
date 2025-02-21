const ApiKey = "24aa8418b7aed64509587647f5a263bc";
    const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    async function checkWeather(city) {
        try {
            const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
            if (!response.ok) throw new Error("City not found");
            
            const data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        } catch (error) {
            console.error(error.message);
            alert("Error: " + error.message);
        }
    }

    searchBtn.addEventListener("click", () => {
        const city = searchBox.value;
        if (city) {
            checkWeather(city);
        } else {
            alert("Please enter a city name!");
        }
    });

    // Optional: Set a default city
    checkWeather("Delhi");