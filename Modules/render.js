export function Renderizar_Categorías(datos_constantes) {

    let Categorías = new Set()

datos_constantes.events.forEach(evento => {
  Categorías.add(evento.category);
});
  
    let categoriasArray = Array.from(Categorías);
    categoriasArray.sort((a, b) => a.length - b.length);
    
    let checkbox = document.getElementById("checkbox_container")
    
    
    for (let i = 0; i < categoriasArray.length; i++) {
      let label = document.createElement("label")
          label.className = ""
          label.innerHTML = `
                      <input type="checkbox" value="${categoriasArray[i]}" id= "${categoriasArray[i]}"> ${categoriasArray[i]}
      `
          
      checkbox.insertAdjacentElement("afterbegin",label)                
    }
  }

 export function filtrarEventos(events) {

    let texto = document.getElementById("texto").value.toLowerCase();
    let checkboxes = document.querySelectorAll("#checkbox_container input[type='checkbox']:checked");
    let categoriasSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    let eventosFiltrados = events.filter(evento => {
        let coincideTexto = evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto);
        let coincideCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(evento.category);
        return coincideTexto && coincideCategoria;
    });
  
    Eventos(eventosFiltrados);
  }

export function Eventos(eventos) {

    let container = document.getElementById("container")
    container.innerHTML = "";
  
  
    if (eventos.length === 0) {
      container.innerHTML = "<p>No hay eventos para mostrar.</p>";
      return;
  }
  
  let fragment = document.createDocumentFragment();
  
  for (let i = 0; i < eventos.length; i++) {
      let tarjeta = document.createElement("div")
          tarjeta.className = "card w-23 col-9 col-sm-6  border border-1 border-dark rounded m-2 p-0" 
          tarjeta.innerHTML = `

                      <img src="${eventos[i].image}" class="card-img-top border border-dark h-40 object-fit-cover" alt="${eventos[i].category}">
                      <div class="card-body border border-dark d-flex flex-column">
                        <h5 class="card-title "> ${eventos[i].name}</h5>
                        <p class="card-text flex-grow-1"> ${eventos[i].description}</p>
                        <p class="card-text"><span class="fw-bold">Date:</span> ${eventos[i].date}</p>
                        <p class="card-text"><span class="fw-bold">Price: $</span>${eventos[i].price}</p>
                        <a href="./details.html?id=${eventos[i]._id}" class="btn btn-primary w-50">Details</a>
                      </div>`
  
          
      fragment.appendChild(tarjeta)                
  }
    container.appendChild(fragment);
  }

