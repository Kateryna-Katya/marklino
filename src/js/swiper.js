import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let howSwiper = null;
let challengeSwiper = null;
let gallerySwiper = null;

const BREAKPOINT = 1440;

function initHow() {
  if (window.innerWidth < BREAKPOINT) {
    if (!howSwiper) {
      howSwiper = new Swiper('.how-swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
      });
    }
  } else {
    if (howSwiper) {
      howSwiper.destroy(true, true);
      howSwiper = null;
    }
  }
}

function initChallenge() {
  if (window.innerWidth < BREAKPOINT) {
    if (!challengeSwiper) {
      challengeSwiper = new Swiper('.challenge-swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 10,
      });
    }
  } else {
    if (challengeSwiper) {
      challengeSwiper.destroy(true, true);
      challengeSwiper = null;
    }
  }
}

function initGallery() {
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,

      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function initAllSwipers() {
  initHow();
  initChallenge();
  initGallery();
}

window.addEventListener('load', initAllSwipers);
window.addEventListener('resize', () => {
  initHow();
  initChallenge();
});
