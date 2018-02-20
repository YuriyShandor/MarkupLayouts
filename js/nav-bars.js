$(document).ready(function() {
  // ============ Top nav-bar =============
  // // ============ For animate for desctop hover=============
  // $('.main-ul > li').hover(function() {
  //   $(this).children("ul").slideToggle('0.5s');
  // });
  // $('.main-ul > li  li').hover(function() {
  //   $(this).children("ul").slideToggle('0.5s');
  // });

  $('.top-bar__toggler-icon').on('click', function() {
    $(this).toggleClass('top-bar__toggler-icon_close');
    $('.top-bar__inside').slideToggle('0.5s');
  });

  function topBarForTablet() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $('.main-ul > li').hover(function() {
        $(this).children("ul").slideToggle('0.5s');
      });
      $('.main-ul > li  li').hover(function() {
        $(this).children("ul").slideToggle('0.5s');
      });
    };
  };
  topBarForTablet();
});
