const response = fetch("https://restcountries.com/v3.1/all");
response
    .then(function(response) {
        return response.json(); // Parse JSON asynchronously
    })
    .then(function(countries) {
        
        displayCountries(countries);
    })
    .catch(function(error) {
        console.error("Error fetching countries:", error);
    });
    

function displayCountries(countries) {
    const countryCardsContainer = document.getElementById("countryCards");
    
    countries.forEach(country=>{
         
        const card = document.createElement("div");
        card.classList.add("col-sm-6","col-md-4","col-lg-4","col-xl-4");
        card.innerHTML = `
    
                <div class="card h-100">
                
                <div class="card-header">${country.name.common}</div>
                <div class="card-body">
                <div class="card-text">
                <p><img src="${country.flags.png}" class="card-img-top" alt="top"  height="150vmax" width="150vmax"></p>
                    <p>Capital: ${country.capital }</p>
                    <p> Region: ${country.region }</p>
                    <p> population:${country.population }<p>
                    
                    <p>Country Codes: ${country.cca3}</p>
                    
                    <button class="btn btn-primary" onclick="fetchWeather('${country.name.common}','${country.latlng[0]}', '${country.latlng[1]}')">Click for Weather</button>

            </div>
            </div>
            </div>
            </div>
            </div>  
            
        `;
       countryCardsContainer.appendChild(card);
     
    });
}
function fetchWeather(city,latitude, longitude) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e46b716d2687fae6608440b3490e95c3&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
            
            // Display weather information in an alert
            alert(`Weather in "${city}": ${weatherData.weather[0].description}\n
            Temperature: ${weatherData.main.temp}°C\n
            Latitude: ${latitude}\n
            Longitude: ${longitude}\n
            
            `);
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
        });
}
