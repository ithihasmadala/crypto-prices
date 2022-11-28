const token = 'coinranking86b761a84874747cae3bf5199405626ea0bd1959c3b98a94';
const request = new XMLHttpRequest();
request.open('GET', 'https://api.coinranking.com/v2/search-suggestions?query=bitcoin');
request.setRequestHeader("Access-Control-Allow-Origin", "*");
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader('x-access-token', 'coinranking86b761a84874747cae3bf5199405626ea0bd1959c3b98a94');
request.send();
request.onload = function() {
  console.log(request);
  if (request.status === 200 ) {
    console.log(request.response)
  } else {
    console.log(request.status)
  }
}
