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
