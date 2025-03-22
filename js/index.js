new Swiper('.news__slider', {
  slidesPerView: 4,
  spaceBetween: 15,
  grabCursor: true,
  loop: false,
  speed: 800,

  autoplay: {
    delay: 3500,
  },

  navigation: {
    nextEl: '.news__nav-prev',
    prevEl: '.news__nav-next',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    680: {
      slidesPerView: 3,
    },
    991.8: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.mission__list', {
  slidesPerView: 4,
  spaceBetween: 25,
  grabCursor: true,
  loop: false,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    680: {
      slidesPerView: 3,
    },
    991.8: {
      slidesPerView: 4,
    },
  },
});
; // SLIDER SWIPER 

const feed = document.querySelector('.feed__main');
const offset = -1 * ((feed.scrollWidth - feed.clientWidth) / feed.clientWidth).toFixed(2) * 100;

feed.style.animationDuration = `${-1 * offset * 0.2}s`;

const cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';

const animationScrolling = document.createTextNode(`
      @keyframes scrolling {
        0%{
          transform: translateX(0);
        }
        100%{
          transform: translateX(${offset}%);
        }
      }
  `);

cssAnimation.appendChild(animationScrolling);
document.getElementsByTagName('head')[0].appendChild(cssAnimation);
; //HEADER FEED

const buttonBannerHeader = document.querySelector('.header__login');
const authMain = document.querySelector('.main__auth');

buttonBannerHeader.addEventListener('click', () => {
  buttonBannerHeader.classList.toggle('active');
  authMain.classList.toggle('active');

  document.body.classList.toggle('_lock-pc');
});
; //HEADER FEED
