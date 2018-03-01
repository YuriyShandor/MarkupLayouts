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
      //$(this).toggleClass('accordion__item-ttl_active');
      $this = $(this);
      $target =  $this.next();
      //$target.slideToggle();

      if($this.hasClass('accordion__item-ttl_active')){
        $('.accordion__item-content').slideUp();
        $target.slideDown();
      }

    return false;
  });

  // ================== Nested Accordion ==================
  $('.nested-accordion__item-content').slideUp();
  $('.nested-accordion__item-ttl').click(function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('selected');
  });

  // // =============== Linear progress bar ==============
  // var lineProgBarStart = 0;
  // $(window).scroll(function() {
  //   var oTop = $('.lineProgBar').offset().top - window.innerHeight;
  //   if (lineProgBarStart == 0 && $(window).scrollTop() > oTop) {
  //     $('.skill-rate__amount').each(function () {
  //       $(this).prop('Counter',0).animate({
  //       Counter: $(this).text()
  //       },
  //       {
  //         duration: 3000,
  //         easing: 'swing',
  //         step: function (now) {
  //         $(this).text(Math.ceil(now));
  //       }
  //       });
  //     });
  //     lineProgBarStart = 1;
  //   }
  // });
  //
  // $(function() {
  //   var $section = $('.lineProgBar');
  //
  //   function loadDaBars() {
  //     $(".progres-rate").each(function() {
  //       $(this).data("origWidth",
  //       $(this).width()).width(0).animate( {
  //         width: $(this).data("origWidth")
  //       }, 3000);
  //     });
  //   }
  //
  //   $(document).bind('scroll', function(e) {
  //     var scrollOffset = $(document).scrollTop();
  //     var containerOffset = $section.offset().top - window.innerHeight;
  //     if (scrollOffset > containerOffset) {
  //         loadDaBars();
  //         $(document).unbind('scroll');
  //     }
  //   });
  // });

  // ============== ProgressBar.js Line ===============

  // Function for create progress bars
  function progressBarLine() {
    $('.progress-bar-line__item-progress').each(function(i) {
      var progressBarline = new ProgressBar.Line(this, {
        strokeWidth: 4,
        easing: 'easeOut',
        duration: 3000,
        color: '#bf360c',
        trailColor: '#9e9e9e',
        trailWidth: 4,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            fontWeight: '900',
            color: '#333',
            position: 'absolute',
            right: '0',
            top: '0',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },

        step: function(state, progressBarline) {
          progressBarline.setText(Math.round(progressBarline.value() * 100) + ' %');
        }
      });

      var value = ($(this).attr('value') / 100);

      progressBarline.animate(value);
    })
  };

  // Initialize function on scrolling
  var progressBarLineStart = 0;
  $(window).scroll(function() {
    var oTop = $('.progress-bar-line__block').offset().top - window.innerHeight;
    if (progressBarLineStart == 0 && $(window).scrollTop() > oTop) {
      progressBarLine();
      progressBarLineStart = 1;
    }
  });

  // ============== ProgressBar.js Circle ===============

  // Function for create progress bars
  function progressBarCircle() {
    $('.progress-bar-circle__item').each(function(i) {
      var progressBarCircle = new ProgressBar.Circle(this, {
        strokeWidth: 7,
        easing: 'easeOut',
        duration: 3000,
        color: '#bf360c',
        trailColor: '#9e9e9e',
        trailWidth: 7,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            fontWeight: '900',
            color: '#333',
            position: 'absolute',
            left: '50%',
            top: '55%',
            padding: 0,
            margin: 0,
            transform: 'translateX(-50%)'
          },
          autoStyleContainer: false
        },

        step: function(state, progressBarCircle) {
          progressBarCircle.setText(Math.round(progressBarCircle.value() * 100) + ' %');
        }
      });

      var value = ($(this).attr('value') / 100);

      progressBarCircle.animate(value);
    })
  };

  // Initialize function on scrolling
  var progressBarCircleStart = 0;
  $(window).scroll(function() {
    var oTop = $('.progress-bar-circle__block').offset().top - window.innerHeight;
    if (progressBarCircleStart == 0 && $(window).scrollTop() > oTop) {
      progressBarCircle();
      progressBarCircleStart = 1;
    }
  });

});
