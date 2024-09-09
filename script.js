// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Limpiar mensajes de error
        nameError.textContent = '';
        emailError.textContent = '';

        // Validar nombre
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'El nombre es obligatorio.';
            valid = false;
        }

        // Validar correo electrónico
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'El correo electrónico es obligatorio.';
            valid = false;
        } else if (!validateEmail(emailValue)) {
            emailError.textContent = 'El correo electrónico no es válido.';
            valid = false;
        }

        // Si no es válido, evitar el envío del formulario
        if (!valid) {
            event.preventDefault(); // Evita el envío del formulario
        }
    });

    function validateEmail(email) {
        // Expresión regular simple para validar el formato del correo electrónico
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
