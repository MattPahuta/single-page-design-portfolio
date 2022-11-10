// Splide slider
// https://splidejs.com/

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    type   : 'loop',
    padding: '31%',
    gap: '1.875rem',
    arrows: true,
    pagination: false,
    autoWidth: true,
    start: 2,
    breakpoints: {
      1150: {
        padding: '15%',
      },
      640: {
        gap: '1rem',
      },
    },
  } ).mount();
} );