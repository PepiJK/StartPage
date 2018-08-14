var btc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR';
var xmlhttp2 = new XMLHttpRequest();

xmlhttp2.onreadystatechange = function () {
  if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
    var b = JSON.parse(xmlhttp2.responseText);
    output2(b);
  }
}
xmlhttp2.open('GET', btc, true);
xmlhttp2.send();

function output2 (data) {
  document.getElementById('btc').innerHTML = '<a href="https://coinmarketcap.com/"><img src="img/btc.png">' + 'BTC: ' + data.EUR.toFixed(2) + '€</a>';
}
