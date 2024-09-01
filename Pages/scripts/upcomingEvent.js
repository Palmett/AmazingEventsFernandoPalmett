import { Listeners,Information } from "../../Modules/function.js";
import { Eventos, filtrarEventos, Renderizar_Categorías } from "../../Modules/render.js";

Information().then(data => {
  let data_api = data; 
  

    let events = []  
let currentDate = new Date(data_api.currentDate)

 for (let event of data_api.events) {
    let event_date = new Date(event.date)

    
    if (event_date >= currentDate) {
      events.push(event)
  }

 }
 
    Renderizar_Categorías(data_api);
    Listeners(events)
    Eventos(events);

}).catch(error => {
    console.error("Error al obtener los datos:", error);
});

