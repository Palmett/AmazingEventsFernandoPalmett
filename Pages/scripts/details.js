import { Information } from "../../Modules/function.js";

let url = new URLSearchParams(window.location.search) 

let id = parseInt(url.get("id")) 


Information().then(data => {
  let data_api = data; 

let ev = data_api.events.find(e => {
    
    
    return e._id === id 
  }
)

if (ev.date > data_api.currentDate) {
    tarjeta_coming(ev)
}else{tarjeta_past(ev)}

function tarjeta_coming(ev) {
    document.getElementById("details").innerHTML = 

            `<img src="${ev.image}" class="img-fluid col-sm-5 object-fit-inherit p-2" alt="${ev.category}">
            <ul class="col-sm-5">
              <li><span class="fw-bold">Name:</span> ${ev.name}</li>
              <li><span class="fw-bold">Date:</span> ${ev.date}</li>
              <li><span class="fw-bold">Description:</span> ${ev.description}</li>
              <li><span class="fw-bold">Category:</span> ${ev.category}</li>
              <li><span class="fw-bold">Place:</span> ${ev.place}</li>
              <li><span class="fw-bold">Capacity:</span> ${ev.capacity}</li>
              <li><span class="fw-bold">Estimation:</span> ${ev.estimate}</li>
              <li><span class="fw-bold">Price:</span> ${ev.price}</li>

            </ul>`
}


function tarjeta_past(ev) {
    document.getElementById("details").innerHTML = 

            `<img src="${ev.image}" class="img-fluid col-sm-5 object-fit-inherit p-2" alt="Books">
            <ul class="col-sm-5">
              <li><span class="fw-bold">Name:</span> ${ev.name}</li>
              <li><span class="fw-bold">Date:</span> ${ev.date}</li>
              <li><span class="fw-bold">Description:</span> ${ev.description}</li>
              <li><span class="fw-bold">Category:</span> ${ev.category}</li>
              <li><span class="fw-bold">Place:</span> ${ev.place}</li>
              <li><span class="fw-bold">Capacity:</span> ${ev.capacity}</li>
              <li><span class="fw-bold">Assistance:</span> ${ev.assistance}</li>
              <li><span class="fw-bold">Price:</span> ${ev.price}</li>

            </ul>`
}


}).catch(error => {
  console.error("Error al obtener los datos:", error);
});

