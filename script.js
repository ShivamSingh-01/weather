document.getElementById('submit-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '73e1046f6169456b564bb699a977aca6'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = city;
            document.getElementById('sky-conditions').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
            document.getElementById('wind-speed').textContent = data.wind.speed.toFixed(2);
        })
        .catch(error => {
            alert('City not found. Please try again.');
        });
});
