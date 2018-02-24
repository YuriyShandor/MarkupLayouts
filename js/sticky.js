$(document).ready(function() {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============ Sticky btn to top =============

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#btnToTop').addClass('show');
    } else {
      $('#btnToTop').removeClass('show');
    }
  });

  $('#btnToTop').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },750);
    return false;
  });

  // =============== Sticky nav-bar ============

  var stickyNavBar = $('.sticky-nav-bar__block').offset();
  $(window).scroll(function(){
    if ($(window).scrollTop() > stickyNavBar.top) {
      $('.sticky-nav-bar__block').addClass('stick');
    } else {
      $('.sticky-nav-bar__block').removeClass('stick');
    }
  });
});
