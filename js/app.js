const API_KEY = `f319ddd8766b0c085191a71187829485`;

document.getElementById("search-btn").addEventListener("click", searchTemperature = () => {
    const city = document.getElementById("city-name").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(jsonData => displaytemperature(jsonData))
});
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};
const displaytemperature = jsonData => {
    console.log(jsonData);
    setInnerText("city", jsonData.name);
    setInnerText("temperature", jsonData.main.temp);
    setInnerText("weather-condition", jsonData.weather[0].main);
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`;
    const icon = document.getElementById("weather-icon");
    icon.setAttribute("src", url);
};