const searchBtn = document.querySelector('.search-btn');
const UserInputCity = document.querySelector('.user-input');
const convertPressure = 0.75006375541921;
// let rise = data.sys.sunrise;
// let sunset = data.sys.sunset;
// let date = new Date (sunrise*1000)
// let date2 = new Date (sunset*1000)
function formInputHandler(e) {
    e.preventDefault();
    const city = UserInputCity.value;

    console.log(city)
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0b218fc2f60cafbd8c01605fa5f5e974`;
    fetch(API)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            document.querySelector('.cloudness').innerHTML = data.weather[0].main + ' | ' +  data.weather[0].description;
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.sunrise').innerHTML = data.sys.sunrise = new Date(data.sys.sunrise * 1000);
            document.querySelector('.sunset').innerHTML = data.sys.sunrise = new Date(data.sys.sunset * 1000);
            document.querySelector('.pressure').innerHTML = Math.ceil(data.main.pressure * convertPressure);
            document.querySelector('.feeling').innerHTML = data.main.feels_like;
            document.querySelector('.temp-max').innerHTML = data.main.temp_max;
            document.querySelector('.temp-min').innerHTML = data.main.temp_min;
            document.querySelector('.humidity').innerHTML = data.main.humidity;
            document.querySelector('.wind').innerHTML = data.wind.speed;
        })
        .catch(function () {

        });
}
searchBtn.addEventListener('click', formInputHandler)


