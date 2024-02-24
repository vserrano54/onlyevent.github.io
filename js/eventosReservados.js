document.addEventListener('DOMContentLoaded', () => {

    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/';
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');
    const contenedorDetalle = document.getElementById('contenedorDetalle'); 

    // Mostrar eventos destacados al cargar la vista
    fetch(URL + 'events/destacados')
        .then(res => res.json())
        .then(datos => {
            datos.destacados.forEach((evento, index) => {
                crearTarjeta(evento, index);
            })
        })
        .catch(err => {
            console.log('Error en la petición de los eventos destacados', err);
        });
});

// Función para mostrar más detalles sobre un evento
const mostrarDetalle = (evento) => {
    // Ocultar el contenedor de tarjetas y el selector de categorías
    contenedorTarjetas.style.display = 'none';

    // Vaciar el contenido previo del contenedor de detalles
    contenedorDetalle.innerHTML = '';

    // Crear una tarjeta de detalle para el evento que se ha iniciado en el click
    // El segundo parámetro es para ocultar el botón 'reservar' cuando sea necesario
    crearTarjetaDetalle(evento, true);
}