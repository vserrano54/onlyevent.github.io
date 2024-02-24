document.addEventListener('DOMContentLoaded', () => {
    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/events';
    const contenedorCArdEventosReservados = document.getElementById('cardsEventosReservados');

    fetch(URL)
        .then(res => res.json())
        .then(datos => {
            // Console.log para comprobar los datos que se obtienen de la response
            console.log(datos.eventos);
            // Para la maquetación del frontend se crean una de cada dos tarjetas
            for (let i = 0; i < datos.eventos.length; i += 2) {
                //Crear tarjeta para cada eventos
                const divCard = document.createElement('div');
                divCard.classList.add('card', 'm-1', 'shadow');
                divCard.style.width = '16rem';

                const divCardBody = document.createElement('div');
                divCardBody.classList.add('card-body');

                const nombreEvento = document.createElement('h4');
                nombreEvento.classList.add('card-title', 'text-center');
                nombreEvento.innerHTML = `${datos.eventos[i].nombre}`;

                // Contenedor para controlar el tamaño de la imagen
                const contenedorImagen = document.createElement('div');
                contenedorImagen.classList.add('ratio', 'ratio-4x3');

                // Agregar la imagen al cuerpo de la tarjeta
                const imagenEvento = document.createElement('img');
                imagenEvento.classList.add('card-img-top', 'w-100');
                imagenEvento.setAttribute('src', datos.eventos[i].imagen);
                imagenEvento.setAttribute('alt', datos.eventos[i].nombre);

                contenedorImagen.appendChild(imagenEvento);

                // Botón para mostrar u ocultar la descripción
                const botonDescripcion = document.createElement('button');
                botonDescripcion.classList.add('btn', 'btn-primary', 'btn-sm', 'mt-2');
                botonDescripcion.textContent = 'Mostrar descripción';

                // Descripción del evento
                const descripcionEvento = document.createElement('p');
                descripcionEvento.classList.add('card-text');
                descripcionEvento.style.display = 'none'; // Ocultar por defecto
                descripcionEvento.textContent = datos.eventos[i].descripción;

                // Evento de clic para mostrar u ocultar la descripción
                botonDescripcion.addEventListener('click', () => {
                    if (descripcionEvento.style.display === 'none' || descripcionEvento.style.display === '') {
                        descripcionEvento.style.display = 'block';
                        botonDescripcion.textContent = 'Ocultar descripción';
                    } else {
                        descripcionEvento.style.display = 'none';
                        botonDescripcion.textContent = 'Mostrar descripción';
                    }
                });

                divCardBody.appendChild(nombreEvento);
                divCardBody.appendChild(contenedorImagen);
                divCardBody.appendChild(botonDescripcion);
                divCardBody.appendChild(descripcionEvento);
                divCard.appendChild(divCardBody);
                contenedorCArdEventosReservados.appendChild(divCard);
            }
        })
        .catch(err => {
            console.error("Error en la petición ", err);
        });
});


