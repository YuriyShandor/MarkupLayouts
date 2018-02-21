$(document).ready(function() {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============ Nav-bar from top =============
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

  // =============== Full screen nav-bar from side =============
  $('.fs-nav__toggler-icon').on('click', function() {
    $(this).toggleClass('fs-nav__toggler-icon_close');
    $(".fs-nav").toggleClass('fs-nav_active');
  });

  // ================ Full screen nav-bar on both sides =================
  $('.fs-curt-menu__toggler-icon').on('click', function() {
    $(this).toggleClass('fs-curt-menu__toggler-icon_close');
    $(".fs-curt-menu__nav").toggleClass('fs-curt-menu__nav_active');
  });

  // ================ Full screen nav-bar on both sides =================
  $('.fl-nav__toggler-icon').on('click', function() {
    $(this).toggleClass('fl-nav__toggler-icon_close');
    $(".").toggleClass('');
  });
});
