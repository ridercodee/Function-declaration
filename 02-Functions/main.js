// passing parameters
const createFlightEntry = function(flight, from, status){
  const row = document.createElement("tr");

  const flightCol = document.createElement('td');
  flightCol.innerText = flight;

  const fromCol = document.createElement('td');
  fromCol.innerText = from;

  const statusCol = document.createElement('td');
  statusCol.innerText = status;

  row.appendChild(flightCol);
  row.appendChild(fromCol);
  row.appendChild(statusCol);

  const parent = document.getElementById('arrivalList');
  parent.appendChild(row);
}




// passing default parameters
const createFlightEntry = function(flight, from, status, color = 'lightgreen'){
  const row = document.createElement("tr");
  row.style.color = color;

  const flightCol = document.createElement('td');
  flightCol.innerText = flight;

  const fromCol = document.createElement('td');
  fromCol.innerText = from;

  const statusCol = document.createElement ('td');
  statusCol.innerText = status;

  row.appendChild(flightCol);
  row.appendChild(fromCol);
  row.appendChild(statusCol);

  const parent = document.getElementById('arrivalList');
  parent.appendChild(row);
}

