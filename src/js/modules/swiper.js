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
