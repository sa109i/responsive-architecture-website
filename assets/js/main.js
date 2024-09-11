const navOpen = document.querySelector('.nav-open'), 
    navClose = document.querySelector('.nav-close'),
    navMenu = document.getElementById('nav-menu');

navOpen.addEventListener("click", () => {
    navMenu.classList.add('open-nav');
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove('open-nav');
})


const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  parallax: true, 
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

    formatFractionCurrent: (number) => {return '0' + number},
    formatFractionTotal: (number) => {return '0' + number}
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});