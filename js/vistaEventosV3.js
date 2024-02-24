// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/categs
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conferencia
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/taller
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/conciertos
// https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events/destacados

document.addEventListener('DOMContentLoaded', () => {

    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/';
    const contenedorSelect = document.getElementById('contenedorSelect');
    const contenedorTarjetas = document.getElementById('contenedorTarjetas');
    const contenedorDetalle = document.getElementById('contenedorDetalle'); // Nuevo contenedor para mostrar detalles
    const contenedorOcultarSelect = document.getElementById('contenedorOcultarSelect');
    let categoria;

    // Mostrar eventos destacados al cargar la vista
    fetch(URL + 'events/destacados')
        .then(res => res.json())
        .then(datos => {
            datos.destacados.forEach((evento, index) => {
                crearTarjeta(evento, index);
            });
        })
        .catch(err => {
            console.log('Error en la petición de los eventos destacados', err);
        });

    // Crear selector y tarjetas según la selección
    fetch(URL + 'categs')
        .then(res => res.json())
        .then(datos => {
            const selector = document.createElement('select');
            selector.setAttribute('id', 'selectOpciones');
            selector.classList.add('form-select','anchoSelect', 'mb-3');

            const defaultOption = document.createElement('option');
            defaultOption.setAttribute('value', '');
            defaultOption.textContent = 'Tipos de evento';
            defaultOption.setAttribute('disabled', true);
            defaultOption.setAttribute('selected', true);
            selector.appendChild(defaultOption);

            datos.tipos_evento.forEach(element => {
                const option = document.createElement('option');
                option.value = element.nombre;
                option.textContent = element.nombre;
                selector.appendChild(option);
            });

            contenedorSelect.appendChild(selector);

            document.getElementById('selectOpciones').addEventListener('change', (e) => {
                // Ocuta el título de eventos destacador hasta recarga de la vista
                document.getElementById('tituloEventosDestacados').style.display = 'none';

                // Se recupera el value de la opción seleccionada
                categoria = `events/${e.target.value}`;

                fetch(URL + categoria)
                    .then(res => res.json())
                    .then(datos => {
                        contenedorTarjetas.innerHTML = '';
                        datos.eventos.forEach((evento, index) => {
                            crearTarjeta(evento, index);
                        });
                    })
                    .catch(err => {
                        console.log('Hay un error en la petición del evento por categoría', err)
                    })
            })
        })
        .catch(err => {
            console.log('Hay un error en la petición del select', err)
        })
});

// Función para mostrar más detalles sobre un evento
const mostrarDetalle = (evento) => {
    // Verificar si el objeto evento tiene la propiedad 'fechas'
    if (evento && evento.fecha) {
        // Ocultar el contenedor de tarjetas y el selector de categorías
        contenedorTarjetas.style.display = 'none';

        console.log('TR: Mostrando detalle');
        // contenedorSelect.style.display = 'none';
        contenedorOcultarSelect.style.display = 'none';
        // Vaciar el contenido previo del contenedor de detalles
        contenedorDetalle.innerHTML = '';

        // Crear una tarjeta de detalle para el evento que se ha iniciado en el click
        crearTarjetaDetalle(evento);
    } else {
        console.error('El objeto evento no tiene la propiedad "fecha"');
    }
}
