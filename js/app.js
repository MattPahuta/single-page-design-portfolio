
console.log('script connected')

// new Splide( '.splide' ).mount();

// document.addEventListener( 'DOMContentLoaded', function () {
//   new Splide( '#image-carousel', {
// 		cover      : true,
//     type       : 'loop',
//     padding    : '20%',
//     arrows     : false,
// 		heightRatio: 0.5,
//   } ).mount();
// } );

// new Splide( '.splide', {
//   type   : 'loop',
//   padding: '20%',
// } );

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
    type   : 'loop',
    padding: '20%',
    gap: '1rem',
    arrows: false,
  } ).mount();
} );