// index.js
document.addEventListener('DOMContentLoaded', function () {
    const cambiarColorBtn = document.getElementById('cambiarColorBtn');

    cambiarColorBtn.addEventListener('click', function () {
        document.body.style.backgroundColor = '#FFC107'; // Cambia el color de fondo al amarillo de Material Design
    });
});