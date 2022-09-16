import Swiper, { Navigation, Pagination } from 'swiper';

const carouselPresentation = document.querySelector('.presentation__carousel');
console.log('carouselPresentation',carouselPresentation);

(function(){

  var swiper = new Swiper(carouselPresentation, {
    // modules: [ Navigation, Pagination ],
    slidePerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      nextEl: '.presentation__nav_right',
      prevEl: '.presentation__nav_left',
    },
    pagination: {
      el: '.presentation__pagination',
      type: 'bullets',
      dynamicBullets: true,
      dynamicMainBullets: 6
    },
  });

})();