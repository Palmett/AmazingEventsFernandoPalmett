import { filtrarEventos } from "./render.js";



export function Information() {
    return fetch("https://aulamindhub.github.io/amazing-api/events.json")
 .then(response => response.json())
 .then(data => {
 
     return data
 })
 }

export function Listeners(events) {
      document.getElementById("texto").addEventListener("input", () => filtrarEventos(events));
      document.getElementById("checkbox_container").addEventListener("change", (event) => {
        if (event.target.matches("input[type='checkbox']")) {
          filtrarEventos(events);
        }
      });
    
  }