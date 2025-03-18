const menu = document.querySelector('.header__menu');
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close');

burgerButton.addEventListener('click', () => {
  menu.classList.add('_active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('_active');
});
