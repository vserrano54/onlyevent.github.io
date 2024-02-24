const crearFormularioReserva = (evento) => {
    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card', 'm-1', 'shadow');

    const formularioReserva = document.createElement('form');
    formularioReserva.classList.add('card-body');

    const tituloFormulario = document.createElement('h3');
    tituloFormulario.textContent = evento.nombre;
    formularioReserva.appendChild(tituloFormulario);

   

    const divFormGroupFecha = document.createElement('div');
    divFormGroupFecha.classList.add('form-group', 'mb-3');

    const labelFecha = document.createElement('label');
    labelFecha.setAttribute('for', 'selectFecha');
    labelFecha.textContent = 'Selecciona la fecha:';
    
    const selectFecha = document.createElement('select');
    selectFecha.classList.add('form-control');
    selectFecha.setAttribute('id', 'selectFecha');

    evento.fecha.forEach(fecha => {
        const option = document.createElement('option');    
        option.textContent = fecha;
        selectFecha.appendChild(option);
    });

    divFormGroupFecha.appendChild(labelFecha);
    divFormGroupFecha.appendChild(selectFecha);

    const divFormGroupLocalizacion = document.createElement('div');
    divFormGroupLocalizacion.classList.add('form-group');

    const labelLocalizacion = document.createElement('label');
    labelLocalizacion.textContent = 'Localización del Evento:';
    
    const inputLocalizacion = document.createElement('input');
    inputLocalizacion.classList.add('form-control');
    inputLocalizacion.setAttribute('type', 'text');
    inputLocalizacion.setAttribute('readonly', 'true');
    inputLocalizacion.value = evento.localizacion;

    const botonPagar = document.createElement('a');
    botonPagar.classList.add('btn', 'btn-primary', 'mt-3', 'd-block', 'mx-auto');
    botonPagar.textContent = 'Pago';
    // Victor!! Aquí esta en enlace para lo de las formas de pago..
    evento1 ='Taller de Programación'
    console.log('Nombre del evento: '+evento.nombre);


    if (evento.nombre == 'Taller de Programación'){
        botonPagar.setAttribute('href', 'https://checkout.stripe.com/c/pay/ppage_1OnQvJK9N60ouTLCwozq9nWx#fidkdWxOYHwnPyd1blpxYHZxWjA0SmtMSHNOPEszNWpwUUlGYkB8QFU1c2xEZGhNPV1EU0Z8NlRMRjQ2XFJgNF9PfExmZklBQlFkbHVNNHFpS21LaXNUSWQ8VkQwSGxMaUdRQHNAQVFXS0RdNTVwPHdvUFNMMCcpJ2hsYXYnP34nYnBsYSc%2FJzZmPDU2YWY8KGZnMGQoMTMxMihnZDVmKGYwMWA3MmdmZmQ8YGZkNTU2PScpJ2hwbGEnPydgYDc3NjAwYShjNWNmKDFkNTIoZzdnNig1NzFkYDVjPDJjMmYyZzU3NjMnKSd2bGEnPyczMGYwMDcwNigwYzc3KDE8MDcoPGY1Zig2NjM3MTUxPTZnPGcxMWAzZGEneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKio0NzIrNSs1KzQ%2FMDA1NCcpJ2lqZmRpYCc%2Fa3BpaXgl'); 
    }
    else if (evento.nombre == 'Concierto de Rock'){
    botonPagar.setAttribute('href', 'https://checkout.stripe.com/c/pay/ppage_1OnPpsK9N60ouTLC6YPhNbl6#fidkdWxOYHwnPyd1blpxYHZxWjA0SmtMSHNOPEszNWpwUUlGYkB8QFU1c2xEZGhNPV1EU0Z8NlRMRjQ2XFJgNF9PfExmZklBQlFkbHVNNHFpS21LaXNUSWQ8VkQwSGxMaUdRQHNAQVFXS0RdNTVwPHdvUFNMMCcpJ2hsYXYnP34nYnBsYSc%2FJzZmPDU2YWY8KGZnMGQoMTMxMihnZDVmKGYwMWA3MmdmZmQ8YGZkNTU2PScpJ2hwbGEnPydgYDc3NjAwYShjNWNmKDFkNTIoZzdnNig1NzFkYDVjPDJjMmYyZzU3NjMnKSd2bGEnPycwYDI8MmM8PSgyMj1hKDFkY2AoPDI0ZCgwMDcyNTNgYzNhMGdjNzRhMmcneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKio0NzIrNSs1KzQ%2FMDA1NCcpJ2lqZmRpYCc%2Fa3BpaXgl'); 
    }else if (nombre.evento == 'Taller de Diseño Gráfico'){
        botonPagar.setAttribute('href', 'https://checkout.stripe.com/c/pay/ppage_1OnQziK9N60ouTLCqKCJILzP#fidkdWxOYHwnPyd1blpxYHZxWjA0SmtMSHNOPEszNWpwUUlGYkB8QFU1c2xEZGhNPV1EU0Z8NlRMRjQ2XFJgNF9PfExmZklBQlFkbHVNNHFpS21LaXNUSWQ8VkQwSGxMaUdRQHNAQVFXS0RdNTVwPHdvUFNMMCcpJ2hsYXYnP34nYnBsYSc%2FJzZmPDU2YWY8KGZnMGQoMTMxMihnZDVmKGYwMWA3MmdmZmQ8YGZkNTU2PScpJ2hwbGEnPydgYDc3NjAwYShjNWNmKDFkNTIoZzdnNig1NzFkYDVjPDJjMmYyZzU3NjMnKSd2bGEnPyczMGYwMDcwNigwYzc3KDE8MDcoPGY1Zig2NjM3MTUxPTZnPGcxMWAzZGEneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKio0NzIrNSs1KzQ%2FMDA1NCcpJ2lqZmRpYCc%2Fa3BpaXgl');


    }


    divFormGroupLocalizacion.appendChild(labelLocalizacion);
    divFormGroupLocalizacion.appendChild(inputLocalizacion);

    formularioReserva.appendChild(divFormGroupFecha);
    formularioReserva.appendChild(divFormGroupLocalizacion);
    formularioReserva.appendChild(botonPagar);

    divFormulario.appendChild(formularioReserva);

    contenedorDetalle.appendChild(divFormulario);
}
