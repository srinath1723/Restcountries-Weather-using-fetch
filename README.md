## Restcountries&Weather using fetch
      
      Implement the rest countries and Open weather map APIs using fetch() API.

**Constrains** 

   * All your HTML elements should be created with DOM.

   * Use only fetch() API to get both rest countries' data and open weather.

   * Pass the necessary value from the rest countries' API to `openweathermap.org `to get the current weather data of the selected country.

   * Use Bootstrap cards to display the necessary data on the screen.

   * All JavaScript codes should be in a script file named script.js which has to be imported inside of the body element of your HTML file.

   * Display the  values in the Bootstrap card:`Capital`,`Lating`,`Flag`,`RegionName`,`Country codes`
  

**Solution**

   * All javascript codes are scripted file name on[script.js](./js/script.js) and which have been imported in the [Html page.](./index.html)
    
   * For style the page:[style](./css/style.css) and background [image](./background-image.jpg) and background [image2](./silver-image.jpg)


**Discription**

  **IN HTML**

   * `Page Structure`: Defines the basic structure of the HTML page, including the title, container for country details, and where the country cards will be dynamically added.

   * `External Resources`: Imports necessary CSS and JavaScript libraries, including Bootstrap and custom stylesheets and scripts.
   
  **IN SCRIPT**
   
   * `Fetching Country Data`: Initiates a fetch request to retrieve data about countries from the "https://restcountries.com/v3.1/all" API. It parses the JSON response asynchronously and then calls the function `displayCountries()` to render the country cards.

   * `Displaying Country Cards`: Receives an array of country objects and dynamically creates HTML cards for each country. It populates each card with details such as the country name, flag, capital, region, population, and country codes. It also includes a button to fetch weather information for the country.

   * `Fetching Weather Data`: Defines the `fetchWeather()` function to fetch weather data for a specific city using its latitude and longitude. It calls the OpenWeatherMap API and displays the weather information in an alert.


    