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

  // For burger menu
  $('.sticky-nav__toggler-icon').on('click', function() {
    $(this).toggleClass('sticky-nav__toggler-icon_close');
    $('.sticky-nav-bar').slideToggle('0.5s');
  });

  // For sections navigation
  var sections = $('.sections');
  var nav = $('.sticky-nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 100;
      var bottom = top + $(this).outerHeight() - 350;

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      } else if (cur_pos < 1000) { // for remove class 'active' from all
        nav.find('a').removeClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 700);

    return false;
  });
});
