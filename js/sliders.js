$(document).ready(function() {
  // ============ Main nav-bar =============

  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============ Simple slider =============

  $('.simple-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".simple-slider__arrow_next"),
   prevArrow: $(".simple-slider__arrow_prev"),
   dots: true,
   dotsClass: 'simple-slider__slick-dots',
   // autoplay: true,
   // autoplaySpeed: 5000,
  });
});