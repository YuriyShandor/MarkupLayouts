$(document).ready(function() {
  // ============ Main nav-bar =============
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // // =============== Linear progress bar pure code ==============
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
        //strokeWidth: 50, //for fill circle
        easing: 'bounce',
        duration: 3000,
        color: '#2e7d32',
        trailColor: '#e0e0e0',
        trailWidth: 7,
        //trailWidth: 50, //for fill circle
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


  // ============== ProgressBar.js SemiCircle ===============

  // Function for create progress bars
  function progressBarSemiCircle() {
    $('.progress-bar-semicircle__item').each(function(i) {
      var progressBarSemiCircle = new ProgressBar.SemiCircle(this, {
        strokeWidth: 7,
        //strokeWidth: 50, //for fill circle
        easing: 'easeOut',
        duration: 3000,
        color: '#90caf9',
        trailColor: '#fff176',
        trailWidth: 7,
        //trailWidth: 50, //for fill circle
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            fontWeight: '900',
            color: '#333',
            position: 'absolute',
            left: '50%',
            bottom: '50px',
            padding: 0,
            margin: 0,
            transform: 'translateX(-50%)'
          },
          autoStyleContainer: false
        },
        from: {color: '#90caf9'},
        to: {color: '#0d47a1'},

        step: function(state, progressBarSemiCircle) {
          progressBarSemiCircle.path.setAttribute('stroke', state.color);
          var value = Math.round(progressBarSemiCircle.value() * 100);
          if (value === 0) {
            progressBarSemiCircle.setText('');
          } else {
            progressBarSemiCircle.setText(value + ' %');
          }

          progressBarSemiCircle.text.style.color = state.color;
        }
      });

      var value = ($(this).attr('value') / 100);

      progressBarSemiCircle.animate(value);
    })
  };

  // Initialize function on scrolling
  var progressBarSemiCircleStart = 0;
  $(window).scroll(function() {
    var oTop = $('.progress-bar-semicircle__block').offset().top - window.innerHeight;
    if (progressBarSemiCircleStart == 0 && $(window).scrollTop() > oTop) {
      progressBarSemiCircle();
      progressBarSemiCircleStart = 1;
    }
  });
});
