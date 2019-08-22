var pics = {
  '01d': 'sun.svg',
  '01n': 'night.svg',
  '02d': 'sun-cloud.svg',
  '02n': 'night-cloud.svg',
  '03d': 'scattered-cloud.svg',
  '03n': 'scattered-cloud.svg',
  '04d': 'broken-clouds.svg',
  '04n': 'broken-clouds.svg',
  '09d': 'shower-rain.svg',
  '09n': 'shower-rain.svg',
  '10d': 'rain.svg',
  '10n': 'rain.svg',
  '11d': 'sun-thunder.svg',
  '11n': 'night-thunder.svg',
  '13d': 'snow.svg',
  '13n': 'snow.svg',
  '50d': 'mist.svg',
  '50n': 'mist.svg'
};

var url = 'https://api.openweathermap.org/data/2.5/weather?id=2779469&units=metric&appid=1ee97b4a473d24d39c84f968d128f789';
var xmlhttp1 = new XMLHttpRequest();

xmlhttp1.onreadystatechange = function () {
  if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
    var a = JSON.parse(xmlhttp1.responseText);
    outputWeather(a);
  }
}
xmlhttp1.open('GET', url, true);
xmlhttp1.send();

function outputWeather(data) {
  var temp = Number((data.main.temp).toFixed()) + ' °C';
  var pic = '<img src="img/weather/' + pics[data.weather[0].icon] + '" width="25" class="vertical-align-middle sp-filter-invertshadow mr-2">';
  var text = '<span class="sp-infolink-hover">Wien, ' + temp + '</span>';

  document.getElementById('weather').innerHTML = pic + text;
}
