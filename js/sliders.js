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
   autoplay: true,
   autoplaySpeed: 5000
  });

  // ============ Vertical slider =============

  $('.vertical-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   vertical: true,
   verticalSwiping: true,
   nextArrow: $(".vertical-slider__arrow_next"),
   prevArrow: $(".vertical-slider__arrow_prev"),
   dots: true,
   dotsClass: 'vertical-slider__slick-dots',
   autoplay: true,
   autoplaySpeed: 5000
  });

  // ================ Responsive slider ==========

  $(".responsive-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    nextArrow: $(".responsive-slider__arrow_next"),
    prevArrow: $(".responsive-slider__arrow_prev"),
    dots: true,
    dotsClass: 'responsive-slider__slick-dots',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ============ Counter slider =============

  $('.counter-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".counter-slider__arrow_next"),
   prevArrow: $(".counter-slider__arrow_prev"),
   dots: true,
   dotsClass: 'counter-slider__slick-dots',
   // autoplay: true,
   // autoplaySpeed: 5000
  });

  $('.counter-slider').on('init', function(event, slick){
    $('.counter-slider__count').append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">'+slick.slideCount+'</span></p></div>');
  });

  $('.counter-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-count #current').html(currentSlide+1);
  });
});
