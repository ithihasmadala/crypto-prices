let table_data;

$('.noEnterSubmit').on('change',function(e){
  search_box = e.target.value;
  console.log(search_box);
  pull_from_coingecho(table_data);
});

function pull_from_coingecho(table_data) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.coingecko.com/api/v3/search?query=${search_box}`);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else { // show the result
      //alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
      table_data = JSON.parse(xhr.response).coins
      if (table_data.length === 0) {
        alert(`Invalid input ${search_box}`); // e.g. 404: Not Found
      }
      //console.log(table_data)
      table_data.forEach((element, index, array) => {
        xhr_loop(element);
        //console.log(element.id); // 100, 200, 300
    });
    console.log(table_data);
    }
  };
}

function append_to_coin_table(table_data) {

    let table = document.getElementById('coin_data');
    for (let obj of table_data) {
        //let row = document.createElement('tr');
        table.innerHTML += `
        <tr>
            <td><img src=${obj.thumb} />
            <td>${obj.name} (${obj.symbol})
            <td>$${obj.price}
        </tr>
      `;
      //table.appendChild(row);

    }

    console.log(table);
};

function xhr_loop(element) {
  let xhr_loop = new XMLHttpRequest();
  xhr_loop.open('GET', `https://api.coingecko.com/api/v3/simple/price?ids=${element.id}&vs_currencies=usd`);
  xhr_loop.send();
  xhr_loop.onload = function() {
    if (xhr_loop.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      console.log(`Error ${xhr_loop.status}: ${xhr_loop.statusText}`);
    } else { // show the result
      //alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
      //console.log("Each coin:");
      coin_name = element.id;
      let price_of_coin = JSON.parse(xhr_loop.response)[coin_name].usd // 100, 200, 300
      element.price = price_of_coin;
      console.log(element)
      delete element.id;
      delete element.api_symbol;
      delete element.large;
      delete element.market_cap_rank;

      append_to_coin_table([element]);
    }
  };
};