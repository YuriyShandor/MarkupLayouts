'use strict';

$(document).ready(function () {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function () {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });
});