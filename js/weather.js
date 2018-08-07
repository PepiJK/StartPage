var wien = 'http://api.openweathermap.org/data/2.5/weather?id=2779469&units=metric&appid=1ee97b4a473d24d39c84f968d128f789'
var xmlhttp1 = new XMLHttpRequest()

xmlhttp1.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var a = JSON.parse(this.responseText)
    output1(a)
  }
}
xmlhttp1.open('GET', wien, true)
xmlhttp1.send()

function output1 (data) {
  var temp = data.main.temp + '°C'
  // var hum = data.main.humidity + '%'
  // var wind = (parseInt(data.wind.speed * 3.6)) + 'km/h'
  var pic = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'

  document.getElementById('weather').innerHTML = '<a href="https://openweathermap.org/city/2779469"><img src=' + pic + '>' + 'Wien,' + ' ' + temp + '</a>'
}
