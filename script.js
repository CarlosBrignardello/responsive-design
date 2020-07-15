const ipad = window.matchMedia('screen and (max-width: 767px)')
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-button');
ipad.addListener(validation)
validation(ipad); /* Iniciamos eventos al abrir la pagina */

function validation(event) {
if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
    menu.addEventListener('click', hideShow)
} else {
    burgerButton.removeEventListener('click', hideShow)
}
}

function hideShow() {
if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
} else {
    menu.classList.add('is-active');
}
}