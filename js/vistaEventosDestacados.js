document.addEventListener('DOMContentLoaded', () => {

    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/';
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');
    const contenedorDetalle = document.getElementById('contenedorDetalle'); // Nuevo contenedor para mostrar detalles

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

    const mostrarDetalle = (evento) => {
        // Ocultar el contenedor de tarjetas y el selector de categorías
        contenedorTarjetas.style.display = 'none';

        // Vaciar el contenido previo del contenedor de detalles
        contenedorDetalle.innerHTML = '';

        crearTarjetaDetalle(evento);
    }


