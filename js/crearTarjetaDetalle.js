
const crearTarjetaDetalle = (evento, reservado) => {
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'm-1', 'shadow');
    divCard.style.width = '24rem'; // Ancho un poco más grande para los detalles

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const nombreEvento = document.createElement('h2');
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

    const fechasEvento = document.createElement('p');
    fechasEvento.classList.add('card-text');
    fechasEvento.innerHTML = `<strong>Fechas Disponibles:</strong>`;
    
    const listaFechas = document.createElement('ul');

    evento.fecha.forEach(fecha => {
        const fechaElement = document.createElement('li');
        fechaElement.textContent = fecha;
        listaFechas.appendChild(fechaElement);
    });

    const inclusivoEvento = document.createElement('p');
    inclusivoEvento.classList.add('card-text');
    inclusivoEvento.innerHTML = `<strong>Evento inclusivo:</strong> ${evento.inclusivo}`;

    const precioEvento = document.createElement('p');
    precioEvento.classList.add('card-text');
    precioEvento.innerHTML = `<strong>Precio:</strong> $${evento.precio}`;

    const contenedorBotones = document.createElement('div');
    contenedorBotones.classList.add('d-flex', 'justify-content-around')

    const botonVolver = document.createElement('button');
    botonVolver.classList.add('btn', 'btn-primary', 'mt-2');
    botonVolver.textContent = 'Volver';

    botonVolver.addEventListener('click', () => {
        contenedorDetalle.innerHTML = '';
        contenedorTarjetas.style.display = 'flex';
        contenedorSelect.style.display = 'flex';
    });

    const botonReservar = document.createElement('button');
    botonReservar.classList.add('btn', 'btn-primary', 'mt-2');
    botonReservar.textContent = "Reservar";

    botonReservar.addEventListener('click', () => {

        contenedorDetalle.innerHTML = '';
        document.getElementById('tituloEventosDestacados').innerHTML='';

        crearFormularioReserva(evento);
    });

    divCardBody.appendChild(nombreEvento);
    divCardBody.appendChild(imagenEvento);
    divCardBody.appendChild(descripcionEvento);
    divCardBody.appendChild(inclusivoEvento);
    divCardBody.appendChild(localizacionEvento);    
    divCardBody.appendChild(listaFechas);
    divCardBody.appendChild(fechasEvento);
    divCardBody.appendChild(precioEvento);
    contenedorBotones.appendChild(botonVolver); 

    if(!reservado){
        contenedorBotones.appendChild(botonReservar);
    }

    divCardBody.appendChild(contenedorBotones);

    divCard.appendChild(divCardBody);
    contenedorDetalle.appendChild(divCard);
}
