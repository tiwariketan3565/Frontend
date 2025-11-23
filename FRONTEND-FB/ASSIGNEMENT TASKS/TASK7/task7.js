async function fetchWeather() {
  const city = document.getElementById("cityNameInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p class='error'>Please enter a city!</p>";
    return;
  }

  const apiKey = "c75b5ba04a5bb3715c4f926b3094dde3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = `<p class='error'>City not found!</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <p><b>Temperature:</b> ${data.main.temp}°C</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Condition:</b> ${data.weather[0].description}</p>
    `;
  }
  catch {
    resultDiv.innerHTML = "<p class='error'>Error fetching data!</p>";
  }
}
