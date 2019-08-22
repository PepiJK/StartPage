var btc = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR';
var xmlhttp2 = new XMLHttpRequest();

xmlhttp2.onreadystatechange = function () {
  if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
    var b = JSON.parse(xmlhttp2.responseText);
    outputCrypto(b);
  }
}
xmlhttp2.open('GET', btc, true);
xmlhttp2.send();

function convertToCurrencyEur(price) {
  const formatterEur = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  return formatterEur.format(price);
}

function outputCrypto(data) {
  document.getElementById('crypto').innerHTML = 'BTC ' + convertToCurrencyEur(data.EUR);
}
