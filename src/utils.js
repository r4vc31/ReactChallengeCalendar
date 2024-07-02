export const cities = [
    "Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi",
    "El Oro", "Esmeraldas", "Galápagos", "Guayas", "Imbabura", "Loja",
    "Los Ríos", "Manabí", "Morona Santiago", "Napo", "Orellana", "Pastaza",
    "Pichincha", "Santa Elena", "Santo Domingo de los Tsáchilas", "Sucumbíos", "Tungurahua", "Zamora Chinchipe"
];

export function mostrarMensaje(mensaje) {
    const divMensaje = document.createElement('div');
    divMensaje.textContent = mensaje;
    divMensaje.setAttribute("style",
        " width: 50vw; margin: 0 auto; color: white; padding: 8px; text-align: center; font-size: 18px; font-weight: bold; background-color: red; border-radius: 25px;");
    document.body.appendChild(divMensaje);
    setTimeout(() => {
        document.body.removeChild(divMensaje);
    }, 3000); // 3 seconds
}

export const normalizeDate = (date) => {
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
};

export const getWeatherForecast = async (city, date) => {
    const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date.toISOString()}?key=FRFPMDB8VFDFZTPME23QVBYP7`);
    const weatherData = await weatherResponse.json();
    return weatherData?.days[0].conditions || "Unknown";
};
