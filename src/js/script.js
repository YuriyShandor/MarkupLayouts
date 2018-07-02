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

  // ============ jQuery UI Slider ===========

  //jQuery UI Slider with one handle
  $("#priceOne").slider({
    min: 0,
    max: 10000,
    values: [0,2000],
    range: true,
    slide: function(event, ui){
    jQuery("input#maxCostOne").val(jQuery("#priceOne").slider("values",1));
    },
  });

  $("input#maxCostOne").change(function(){
	  var value2=$("input#maxCostOne").val();

	  if (value2 > 10000) { value2 = 10000; jQuery("input#maxCostOne").val(10000)};

	  $("#priceOne").slider("values",1,value2);
  });

  //jQuery UI Slider with two handles
  $("#price").slider({
	  min: 0,
	  max: 10000,
	  values: [500,7000],
	  range: true,
    stop: function(event, ui) {
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));
    },
    slide: function(event, ui){
		  jQuery("input#minCost").val(jQuery("#price").slider("values",0));
		  jQuery("input#maxCost").val(jQuery("#price").slider("values",1));

      jQuery("#price").slider("values",0);
      jQuery("#price").slider("values",1);
    },
  });

  $("input#minCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
		  value1 = value2;
		  $("input#minCost").val(value1);
	  }
	  $("#price").slider("values",0,value1);
  });


  $("input#maxCost").change(function(){
	  var value1=$("input#minCost").val();
	  var value2=$("input#maxCost").val();

	  if (value2 > 10000) { value2 = 10000; jQuery("input#maxCost").val(10000)}

	  if(parseInt(value1) > parseInt(value2)){
		  value2 = value1;
		  $("input#maxCost").val(value2);
	  }
	  $("#price").slider("values",1,value2);
  });

  // =============== Humburger ==============
  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
  });


  // ================= Move Background on mouse move ===============
  let moveBgFollowX = 0;
  let moveBgFollowY = 0;
  let moveBgX = 0;
  let moveBgY = 0;
  let moveBgFriction = 1 / 25;

  function moveBackground() {
    moveBgX += (moveBgFollowX - moveBgX) * moveBgFriction;
    moveBgY += (moveBgFollowY - moveBgY) * moveBgFriction;

    let translate = 'translate(' + moveBgX + 'px, ' + moveBgY + 'px) scale(1.1)';

    $('.move-bg__image').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      'transform': translate
    });
    window.requestAnimationFrame(moveBackground);
  }

  $('.move-bg').on('mousemove click', function(e) {
    let lMouseX = Math.max(-100, Math.min(100, $('.move-bg').width() / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, $('.move-bg').height() / 2 - e.clientY));
    moveBgFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    moveBgFollowY = (10 * lMouseY) / 100;

  });

  moveBackground();
});
