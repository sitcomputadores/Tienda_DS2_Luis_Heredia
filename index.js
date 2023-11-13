document.addEventListener('DOMContentLoaded', function () {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');
    const cambiarTamanoBtn = document.getElementById('cambiarTamanoBtn');
    const cambiarTextoBtn = document.getElementById('cambiarTextoBtn');
    const tituloArticulo = document.querySelector('article h2');
    const textoFinal = document.querySelector('footer p');

    cambiarColorBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = '#FFC107'; // Cambia el color de fondo al amarillo de Material Design
    });

    cambiarTamanoBtn.addEventListener('click', function () {
        const tamanoActual = window.getComputedStyle(document.querySelector('article')).fontSize;
        const nuevoTamano = (parseInt(tamanoActual) + 2) + 'px'; // Aumenta el tamaño en 2px
        document.querySelector('article').style.fontSize = nuevoTamano;
    });

    cambiarTextoBtn.addEventListener('click', function () {
        textoFinal.innerText = '2023 nuevo footer. Todos los derechos reservados.';
        /* Estilos para la imagen enmarcada */
#imagen-enmarcada {
    border: 2px solid #2196F3; /* Color del borde según Material Design */
    padding: 10px;
}

#imagen-enmarcada img {
    width: 200px; /* Establece el ancho de la imagen */
    height: 200px; /* Establece la altura de la imagen */
    border: 1px solid #000; /* Añade un borde a la imagen */
}
