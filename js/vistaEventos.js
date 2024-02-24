document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events';
    const contenedorSelect = document.getElementById('contenedorSelect');

    const tituloEventosDestacados = document.getElementById('tituloEventosDestacados');

    // Mostrar inicialmente el título de eventos destacados hasta que se hace una selección
    tituloEventosDestacados.style.display = 'block';

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            const selector = document.createElement('select');
            selector.setAttribute('id', 'selectorEventos');
            selector.classList.add('form-select', 'mb-3'); 

            // Opción deshabilitada y seleccionada por defecto
            const defaultOption = document.createElement('option');
            defaultOption.setAttribute('value', '');
            defaultOption.textContent = 'Tipos de eventos';
            defaultOption.setAttribute('disabled', true);
            defaultOption.setAttribute('selected', true);
            selector.appendChild(defaultOption);

            datos.tipos_evento.forEach(item => {
                const opcionSelect = document.createElement('option');
                opcionSelect.setAttribute('value', item.id);
                opcionSelect.textContent = item.nombre;
                selector.appendChild(opcionSelect);
            });
            contenedorSelect.appendChild(selector);

            // Mostrar los dos primeros eventos debajo del título de eventos destacados
            const contenedorEventosDestacados = document.createElement('div');
            contenedorEventosDestacados.classList.add('contenedorEventos', 'mx-auto');
            datos.eventos.slice(0, 2).forEach(evento => {
                const divCard = document.createElement('div');
                divCard.classList.add('card', 'm-1', 'shadow');
                divCard.style.width = '16rem';

                const divCardBody = document.createElement('div');
                divCardBody.classList.add('card-body');
                divCardBody.setAttribute('id', `inden${evento.id}`);

                const nombreEvento = document.createElement('h4');
                nombreEvento.classList.add('card-title', 'text-center');
                nombreEvento.innerHTML = `<strong>Evento:</strong> ${evento.nombre}`;

                // Agregar la imagen al cuerpo de la tarjeta
                const imagenEvento = document.createElement('img');
                imagenEvento.classList.add('card-img-top');
                imagenEvento.setAttribute('src', evento.imagen);
                imagenEvento.setAttribute('alt', evento.nombre);

                // Botón para mostrar u ocultar la descripción
                const botonDescripcion = document.createElement('button');
                botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
                botonDescripcion.textContent = 'Mostrar descripción';

                // Descripción del evento
                const descripcionEvento = document.createElement('p');
                descripcionEvento.classList.add('card-text');
                descripcionEvento.style.display = 'none'; // Ocultar por defecto
                descripcionEvento.textContent = evento.descripción;

                // Evento de clic para mostrar u ocultar la descripción
                botonDescripcion.addEventListener('click', () => {
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
                contenedorEventosDestacados.appendChild(divCard);
            });

            // Agregar los eventos destacados al DOM
            document.getElementById('contenedorEventosDestacados').insertAdjacentElement('afterend', contenedorEventosDestacados);

            selector.addEventListener('change', () => {
                const opcionSelect = selector.value;
                // Ocultar todos los contenedores de eventos
                document.querySelectorAll('.contenedorEventos').forEach(contenedor => {
                    contenedor.style.display = 'none';
                });
                // Mostrar el contenedor de eventos correspondiente al tipo seleccionado
                const contenedorEvento = document.getElementById(`contenedorEventos${opcionSelect}`);
                contenedorEvento.style.display = 'block';
                
                // Ocultar el título de eventos destacados
                tituloEventosDestacados.style.display = 'none';
                // Ocultar los eventos destacados
                contenedorEventosDestacados.style.display = 'none';
            });

            // Crear contenedor de eventos para cada tipo
            datos.tipos_evento.forEach(tipo => {
                const contenedorEvento = document.createElement('div');
                contenedorEvento.setAttribute('id', `contenedorEventos${tipo.id}`);
                contenedorEvento.classList.add('contenedorEventos');
                contenedorEvento.style.display = 'none'; // Ocultar por defecto
                // En cada contenedor guarda los eventos que coinciden con el tipo de contenedor y se muestra o no el contenedor entero.
                datos.eventos.forEach(evento => {
                    if (evento.tipo_evento_id == tipo.id) {
                        const divCard = document.createElement('div');
                        divCard.classList.add('card', 'm-1', 'shadow');
                        divCard.style.width = '16rem';

                        const divCardBody = document.createElement('div');
                        divCardBody.classList.add('card-body');
                        divCardBody.setAttribute('id', `inden${evento.id}`);

                        const nombreEvento = document.createElement('h4');
                        nombreEvento.classList.add('card-title', 'text-center');
                        nombreEvento.innerHTML = `<strong>Evento:</strong> ${evento.nombre}`;

                        // Agregar la imagen al cuerpo de la tarjeta
                        const imagenEvento = document.createElement('img');
                        imagenEvento.classList.add('card-img-top');
                        imagenEvento.setAttribute('src', evento.imagen);
                        imagenEvento.setAttribute('alt', evento.nombre);

                        // Botón para mostrar u ocultar la descripción
                        const botonDescripcion = document.createElement('button');
                        botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
                        botonDescripcion.textContent = 'Mostrar descripción';

                        // Descripción del evento
                        const descripcionEvento = document.createElement('p');
                        descripcionEvento.classList.add('card-text');
                        descripcionEvento.style.display = 'none'; // Ocultar por defecto
                        descripcionEvento.textContent = evento.descripción;

                        // Evento de clic para mostrar u ocultar la descripción
                        botonDescripcion.addEventListener('click', () => {
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
                        contenedorEvento.appendChild(divCard);
                    }
                });

                // Agregar el contenedor de eventos al DOM
                document.getElementById('contenedorCardsEventos').appendChild(contenedorEvento);
            });
        })
        .catch(err => console.error('Hay un error en la petición de eventos', err));
});
