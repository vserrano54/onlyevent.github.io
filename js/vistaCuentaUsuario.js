document.addEventListener('DOMContentLoaded', ()=> {
    
    const URL = 'https://qqtj76a7dh.execute-api.us-east-1.amazonaws.com/api/users';

    fetch(URL)
        .then(res => res.json())
        .then(datos=> {
            
            const primerUsuario = datos.usuarios[0];
            
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '18rem';
            
            const img = document.createElement('img');
            img.classList.add('card-img-top', 'rounded-circle', 'mx-auto', 'mt-3'); 
            img.style.width = '150px'; 
            img.style.height = '150px'; 
            img.src = primerUsuario.avatar;
            img.alt = `Avatar de ${primerUsuario.nombre}`;
            
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            const nomUsuari = document.createElement('h5');
            nomUsuari.classList.add('card-title', 'text-center'); 
            nomUsuari.textContent = `${primerUsuario.nombre} ${primerUsuario.apellido}`;
            
            const edat = document.createElement('p');
            edat.classList.add('card-text', 'font-weight-bold'); 
            edat.innerHTML = `<strong>Edad:</strong> ${primerUsuario.edad}`;
            
            const sexo = document.createElement('p');
            sexo.classList.add('card-text', 'font-weight-bold'); 
            sexo.innerHTML = `<strong>Sexo:</strong> ${primerUsuario.sexo}`;
            
            const telefono = document.createElement('p');
            telefono.classList.add('card-text', 'font-weight-bold'); 
            telefono.innerHTML = `<strong>Teléfono:</strong> ${primerUsuario.telefono}`;
            
            const alias = document.createElement('p');
            alias.classList.add('card-text', 'font-weight-bold'); 
            alias.innerHTML = `<strong>Alias:</strong> ${primerUsuario.alias}`;
            
            const tiposEventos = document.createElement('p');
            tiposEventos.classList.add('card-text', 'font-weight-bold'); 
            tiposEventos.innerHTML = `<strong>Tipos de eventos preferidos:</strong> ${primerUsuario.tipos_eventos_preferidos.join(', ')}`;
            
            // Construir la estructura de la tarjeta
            cardBody.appendChild(nomUsuari);
            cardBody.appendChild(edat);
            cardBody.appendChild(sexo);
            cardBody.appendChild(telefono);
            cardBody.appendChild(alias);
            cardBody.appendChild(tiposEventos);
            
            card.appendChild(img);
            card.appendChild(cardBody);
            
            // Obtener el contenedor y agregar la tarjeta
            const contenedorPerfilUsuario = document.getElementById('contenedorPerfilUsuario');
            contenedorPerfilUsuario.appendChild(card);
        })
        .catch(err=>{
            console.error('Hay un error en la petición', err);
        });

    
    document.getElementById('botonModificarDatos').addEventListener('click', () => {
        
        console.log('Se ha hecho clic en el botón "Modificar datos"');
    });
});
