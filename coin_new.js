fetch('api/Sessions', {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking86b761a84874747cae3bf5199405626ea0bd1959c3b98a94'
    },
    body: JSON.stringify('https://api.coinranking.com/v2/search-suggestions?query=bitcoin')
})
.then(response => response.text())
.then((response) => updateResponse(response))
.catch(error => console.error(error));