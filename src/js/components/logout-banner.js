const buttonBannerHeader = document.querySelector('.header__login');
const authMain = document.querySelector('.main__auth');

buttonBannerHeader.addEventListener('click', () => {
  authMain.classList.toggle('active');

  document.body.classList.toggle('_lock-pc');
});
