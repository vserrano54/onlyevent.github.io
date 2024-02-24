window.addEventListener('DOMContentLoaded', (event) => {
    // Obtener el tamaño de la ventana del navegador
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // Calcular las coordenadas para posicionar la imagen en el centro
    let imageWidth = 100; // Ancho de la imagen
    let imageHeight = 100; // Alto de la imagen
    let imageLeft = (windowWidth - imageWidth) / 2; // Coordenada izquierda para centrar horizontalmente
    let imageTop = 0; // Coordenada superior para colocar en la parte superior

    // Aplicar las coordenadas a la imagen
    let image = document.getElementById('logo');
    image.style.left = imageLeft + 'px';
    image.style.top = imageTop + 'px';
});




