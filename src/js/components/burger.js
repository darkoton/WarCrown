const menu = document.querySelector('.header__menu');
const menuBackward = document.querySelector('.header__menu-backward');
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close');

burgerButton.addEventListener('click', () => {
  menu.classList.add('_active');
  menuBackward.classList.add('_active');
  document.body.classList.add('_lock-scroll');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('_active');
  menuBackward.classList.remove('_active');
  document.body.classList.remove('_lock-scroll');
});

menuBackward.addEventListener('click', () => {
  menu.classList.remove('_active');
  menuBackward.classList.remove('_active');
  document.body.classList.remove('_lock-scroll');
});
