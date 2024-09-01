export function calculateCategoryStats(events, isUpcoming = false) {
    let categoryStats = {};

    events.forEach(event => {
        if (!categoryStats[event.category]) {
            categoryStats[event.category] = {
                totalRevenue: 0,
                totalAssistance: 0,
                totalCapacity: 0
            };
        }

        // Usar el cálculo basado en si es un evento futuro o pasado
        let assistance = isUpcoming ? event.estimate : event.assistance;
        categoryStats[event.category].totalRevenue += event.price * assistance;
        categoryStats[event.category].totalAssistance += assistance;
        categoryStats[event.category].totalCapacity += event.capacity;
    });

    // Cálculo del porcentaje de asistencia por categoría
    return Object.keys(categoryStats).map(category => {
        let stats = categoryStats[category];
        let attendancePercentage = (stats.totalAssistance / stats.totalCapacity) * 100;

        return {
            category,
            totalRevenue: stats.totalRevenue,
            attendancePercentage: attendancePercentage.toFixed(2)
        };
    });
}

export     function findMinMax(events) {
    let maxAssistance = 0;
    let minAssistance = Infinity;
    let maxEventName = "";
    let minEventName = "";
    let maxCapacity = 0;

    events.forEach(event => {
        let percentage = (event.assistance / event.capacity) * 100;

        if (event.capacity > maxCapacity) {
            maxCapacity = event.capacity;
        }

        if (percentage > maxAssistance) {
            maxAssistance = percentage;
            maxEventName = event.name;
        }

        if (percentage < minAssistance) {
            minAssistance = percentage;
            minEventName = event.name;
        }
    });

    return {
        maxEventName,
        maxAssistance: maxAssistance.toFixed(2),
        minEventName,
        minAssistance: minAssistance.toFixed(2),
        maxCapacity
    };

}