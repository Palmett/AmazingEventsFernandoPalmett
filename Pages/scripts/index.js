import { Listeners,Information } from "../../Modules/function.js";
import { Eventos, filtrarEventos, Renderizar_Categorías } from "../../Modules/render.js";

Information().then(data => {
  let data_api = data; 
  
    Renderizar_Categorías(data_api);
    Listeners(data_api.events)
    Eventos(data_api.events);

}).catch(error => {
  console.error("Error al obtener los datos:", error);
});