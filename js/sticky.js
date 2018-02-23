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
});
