document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way
    
    // Get the city from the input
    const city = document.getElementById('cityInput').value;
    
    // Your OpenWeatherMap API key
    const apiKey='adfda5c9e053fc6dc1e1506aaaddc609';
    
    // URL to fetch weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch weather data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display temperature and humidity
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;


            if(temperature < 0){
                document.getElementById("image").src='./SNOW.png';
            }
            else{
                document.getElementById("image").src="./1.png"
            }
            document.getElementById('temperature').textContent = `${temperature} °C`;
            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('windSpeed').textContent =  `${windSpeed} km/h`;
            document.getElementById('description').textContent = `${description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
});
