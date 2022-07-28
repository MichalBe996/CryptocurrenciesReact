import React from 'react'

const creatingTable = (info) => {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = "Cryptocurrency";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "Price (USD)";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "Price (ETH)";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = "% change in last 24h (USD)"
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  thead.appendChild(row_1);
  for(let x = 0; x <= 10; x++){
    let row = document.createElement("tr");
    let row_data_1 = document.createElement('td');
    row_data_1.textContent = info.data[x].name;
    let row_data_2 = document.createElement('td');
    row_data_2.textContent = info.data[x].metrics.market_data.price_usd.toFixed(5);
    let row_data_3 = document.createElement('td');
    row_data_3.textContent = info.data[x].metrics.market_data.price_eth.toFixed(5);
    let row_data_4 = document.createElement("td");
    row_data_4.textContent = info.data[x].metrics.market_data.percent_change_usd_last_24_hours.toFixed(5);
    row.appendChild(row_data_1);
    row.appendChild(row_data_2);
    row.appendChild(row_data_3);
    row.appendChild(row_data_4);

    tbody.appendChild(row)
    document.querySelector("body").appendChild(table)

  }

  
  }
  


const fetchingInfo = () => {
    fetch('https://data.messari.io/api/v1/assets')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data)
    creatingTable(data)
    
    })

  .catch((error) => console.log(error))

}

fetchingInfo();




function Main() {
  return (
    
        <div className="table-div" id="table-div">
        
        </div>
    
    
  )
}

export default Main