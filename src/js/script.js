$(document).ready(function() {
  // ============ Page scrolling progress ==========
  $(function() {
    $(window).on("resize scroll", function() {
    updateProgress(".page-progress");
    });

    function updateProgress(element) {
      var height = $(document).height() - $(window).height();
      var  progress = $(window).scrollTop() / height;

      $(element).css("width", (progress * 100) + "%");
    }
  });

  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // ============== Simple accordion =========
  $('.accordion__item-content').hide();
  $('.accordion__item-content:eq(2)').slideDown();
  $('.accordion__item-ttl:eq(2)').addClass('accordion__item-ttl_active');

  $('.accordion__item-ttl').click(function() {
  		$('.accordion__item-ttl').removeClass('accordion__item-ttl_active');
			$(this).addClass('accordion__item-ttl_active');
      if($(this).hasClass('accordion__item-ttl_active')){
        $('.accordion__item-content').slideUp();
        $(this).next().slideDown();
      }

    return false;
  });

  // ================== Nested Accordion ==================
  $('.nested-accordion__item-content').slideUp();
  $('.nested-accordion__item-ttl').click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('selected');
  });
});