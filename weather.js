
let weather={
    fetchWeather:function(city){ 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=634f456630336b05b4fd9b3d830c47b7`)
            .then(response => response.json())
            .then(data =>(this.displayWeather(data)))
            .catch(err => alert('Sorry, this city is not in our base.'))
    },
    displayWeather:function(data){
      
        const {name} = data;
        const {temp, humidity,pressure}=data.main
        const {main}=data.weather[0]
       
        document.querySelector('#city').innerHTML=name;
        document.querySelector("#temp").innerHTML ="Temperature: " + Math.round(temp-273,15) + "°C";
        document.querySelector("#humidity").innerHTML =
          "Humidity: " + humidity + "%";
        document.querySelector("#pressure").innerHTML ="Pressure: " + pressure + "hPa";
        document.querySelector("#description").innerHTML = main;

        document.querySelector("#cityInput").value = ''
    },
    search: function () {
       
        this.fetchWeather(document.querySelector("#cityInput").value);
      },
};
document.querySelector("#search").addEventListener("click", function () {
    weather.search();
  });
