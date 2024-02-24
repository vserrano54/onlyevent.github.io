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
    let categoria;

    // Función para crear las tarjetas
    const crearTarjeta = (evento) => {
        const { nombre, imagen, descripcion } = evento;

        const divCard = document.createElement('div');
        divCard.classList.add('card', 'm-1', 'shadow');
        divCard.style.width = '16rem';

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        const nombreEvento = document.createElement('h4');
        nombreEvento.classList.add('card-title', 'text-center');
        nombreEvento.innerHTML = `<strong>Evento:</strong> ${nombre}`;

        const imagenEvento = document.createElement('img');
        imagenEvento.classList.add('card-img-top');
        imagenEvento.setAttribute('src', imagen);
        imagenEvento.setAttribute('alt', nombre);

        const botonDescripcion = document.createElement('button');
        botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
        botonDescripcion.textContent = 'Mostrar descripción';

        const descripcionEvento = document.createElement('p');
        descripcionEvento.classList.add('card-text');
        descripcionEvento.style.display = 'none';
        descripcionEvento.textContent = descripcion;

        botonDescripcion.addEventListener('click', (evento) => {
            evento.stopPropagation(); // Evitar que el clic en el botón active el evento de la tarjeta
            if (descripcionEvento.style.display === 'none') {
                descripcionEvento.style.display = 'block';
                botonDescripcion.textContent = 'Ocultar descripción';
            } else {
                descripcionEvento.style.display = 'none';
                botonDescripcion.textContent = 'Mostrar descripción';
            }
        });

        divCardBody.appendChild(nombreEvento);
        divCardBody.appendChild(imagenEvento);
        divCardBody.appendChild(botonDescripcion);
        divCardBody.appendChild(descripcionEvento);
        divCard.appendChild(divCardBody);
        contenedorTarjetas.appendChild(divCard);

        // Evento clic para mostrar más información sobre el evento. Hay dos eventos para mostrarDetalle porque si se hace de la tarjeta entera también se activa al pulsar al botón de descripción
        nombreEvento.addEventListener('click', () => {
            mostrarDetalle(evento);
        });

        imagenEvento.addEventListener('click', () => {
            mostrarDetalle(evento);
        });

        // Evento touchstart para solucionar el problema de la vista detalle en el mvl
        nombreEvento.addEventListener('touchstart', () => {
            mostrarDetalle(evento);
        });

        imagenEvento.addEventListener('touchstart', () => {
            mostrarDetalle(evento);
        });
    }

    
    const crearTarjetaDetalle = (evento) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card', 'm-1', 'shadow');
        divCard.style.width = '24rem'; // Ancho un poco más grande para los detalles

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        const nombreEvento = document.createElement('h2');
        // Son estilos como el del título de 'eventos destacados'
        nombreEvento.classList.add('card-title', 'text-center', 'fw-bold', 'text-warning', 'roboto-font');
        nombreEvento.textContent = evento.nombre;

        const imagenEvento = document.createElement('img');
        imagenEvento.classList.add('card-img-top');
        imagenEvento.setAttribute('src', evento.imagen);
        imagenEvento.setAttribute('alt', evento.nombre);
        imagenEvento.style.maxWidth = '100%';

        const descripcionEvento = document.createElement('p');
        descripcionEvento.classList.add('card-text', 'my-2');
        descripcionEvento.textContent = evento.descripcion;

        const localizacionEvento = document.createElement('p');
        localizacionEvento.classList.add('card-text');
        localizacionEvento.innerHTML = `<strong>Localización:</strong> ${evento.localizacion}`;

        const fechaEvento = document.createElement('p');
        fechaEvento.classList.add('card-text');
        fechaEvento.innerHTML = `<strong>Fecha:</strong> ${evento.fecha}`;

        const precioEvento = document.createElement('p');
        precioEvento.classList.add('card-text');
        precioEvento.innerHTML = `<strong>Precio:</strong> $${evento.precio}`;

        const botonVolver = document.createElement('button');
        botonVolver.classList.add('btn', 'btn-primary', 'mt-2');
        botonVolver.textContent = 'Volver';

        botonVolver.addEventListener('click', () => {
            contenedorDetalle.innerHTML = ''; // Vaciar el contenido del contenedor de detalles
            contenedorTarjetas.style.display = 'flex'; // Mostrar el contenedor de tarjetas de la vista inicial
            contenedorSelect.style.display = 'flex'; // Mostrar el selector de categorías
        });

        divCardBody.appendChild(nombreEvento);
        divCardBody.appendChild(imagenEvento);
        divCardBody.appendChild(descripcionEvento);
        divCardBody.appendChild(localizacionEvento);
        divCardBody.appendChild(fechaEvento);
        divCardBody.appendChild(precioEvento);
        divCardBody.appendChild(botonVolver);

        divCard.appendChild(divCardBody);
        contenedorDetalle.appendChild(divCard);
    }

    // Función para mostrar más detalles sobre un evento
    const mostrarDetalle = (evento) => {
        // Ocultar el contenedor de tarjetas y el selector de categorías
        contenedorTarjetas.style.display = 'none';
        console.log('TR: Mostrando detalle');
        // contenedorSelect.style.display = 'none';
        document.getElementById('contenedorOcultarSelect').style.display = 'none';
        // Vaciar el contenido previo del contenedor de detalles
        contenedorDetalle.innerHTML = '';

        // Crear una tarjeta de detalle para el evento que se ha iniciado en el click
        crearTarjetaDetalle(evento);
    }

    // Mostrar eventos destacados al cargar la vista
    fetch(URL + 'events/destacados')
        .then(res => res.json())
        .then(datos => {
            datos.destacados.forEach(evento => {
                crearTarjeta(evento);
            })
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
            selector.classList.add('form-select-sm', 'mb-3');

            const defaultOption = document.createElement('option');
            defaultOption.setAttribute('value', '');
            defaultOption.textContent = 'Tipos de eventos';
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
                        datos.eventos.forEach(evento => {
                            crearTarjeta(evento);
                        })
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


