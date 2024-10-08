import { Information } from "../../Modules/function.js";
import {calculateCategoryStats, findMinMax} from "../../Modules/calculationStats.js";

Information().then(data => {
    let data_api = data;

    // Eventos del Pasado
    let totalEventsPast = data_api.events.filter(event => event.date < data_api.currentDate);
    let categoryStatsPast = calculateCategoryStats(totalEventsPast);
    console.log(categoryStatsPast);
    
  
    

    // Eventos del Futuro 
    let totalEventsUpcoming = data_api.events.filter(event => event.date >= data_api.currentDate);
    let categoryStatsUpcoming = calculateCategoryStats(totalEventsUpcoming, true);
    

    let MaxMin = findMinMax(data_api.events)

let percentage = document.createElement("tr")
percentage.innerHTML = `<td class="text-center col-4">${MaxMin.maxEventName}  (${MaxMin.maxAssistance}%)</td>
<td class="text-center col-4">${MaxMin.minEventName}  (${MaxMin.minAssistance}%)</td>
<td class="text-center col-4">${MaxMin.maxCapacity}</td>`
document.getElementById("stats").insertAdjacentElement("afterend", percentage)



categoryStatsPast.forEach(stat => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td class="text-center col-4">${stat.category}</td>
    <td class="text-center">${stat.totalRevenue}</td>
    <td class="text-center">${stat.attendancePercentage}</td>`
    document.getElementById("stats_Past").insertAdjacentElement("afterend", tr)
    
})

categoryStatsUpcoming.forEach(stat => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td class="text-center">${stat.category}</td>
    <td class="text-center">${stat.totalRevenue}</td>
    <td class="text-center">${stat.attendancePercentage}</td>`
    document.getElementById("stats_Upcoming").insertAdjacentElement("afterend", tr)
    
})
    
    

});




// function print_Revenues(Categories) {
//     let fragment = document.createDocumentFragment();
//     let stats_past = document.getElementById("stats_past");
//     let stats_upcoming = document.getElementById("stats_upcoming");

//     Categories.forEach(category => {
        
//     });
// }

//     console.log("Eventos pasados:");
// categoryStatsPast.forEach(stat => {
//     console.log(`Categoría: ${stat.category}`);
//     console.log(`Ganancias totales: ${stat.totalRevenue}`);
//     console.log(`Porcentaje de asistencia: ${stat.attendancePercentage}%`);
// });

// console.log("\nEventos futuros:");
// categoryStatsUpcoming.forEach(stat => {
//     console.log(`Categoría: ${stat.category}`);
//     console.log(`Ganancias totales: ${stat.totalRevenue}`);
//     console.log(`Porcentaje de asistencia: ${stat.attendancePercentage}%`);
// });
  
