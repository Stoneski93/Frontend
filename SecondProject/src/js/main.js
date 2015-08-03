/*globals jQuery, window, document */
(function ($, window, document) {
  "use strict";
  window.CHANGE_ME = window.CHANGE_ME || {
    $body: null,
    init: function () {
      this.$body = $('body');
      this.liveReload();
      this.dropDownMenu();
      this.sliderHighlighter();
      this.sliderRecentAdvert();
      this.sliderLastComment();
      this.scrollTopSite();
      this.radialProgressBar();
    },
    sliderHighlighter: function () {
      var slider = $(".slider_girls").bxSlider({
          minSlides: 5,
          maxSlides: 5,
          slideMargin: 8,
          slideWidth: 739,
          moveSlides: 1,
          mode: 'horizontal',
          nextText: '',
          prevText: '',
          pause: 10000,
          auto: true
        });
      $('#slider-action-button--next-highlighter').click(function () {
        slider.goToNextSlide();
        return false;
      });
      $('#slider-action-button--back-highlighter').click(function () {
        slider.goToPrevSlide();
        return false;
      });


    },
    sliderRecentAdvert: function () {
        console.log( $(".recent-advert-slider"));
    var sliders = [];
    $(".recent-advert-slider").each(function (index) {
        sliders[index] = $(this).bxSlider({
            minSlides: 6,
            maxSlides: 6,
            slideMargin: 11,
            slideWidth: 500,
            moveSlides: 1,
            mode: 'horizontal',
            nextText: ' ',
            prevText: ' ',
            pause: 10000,
            auto: true
        });
    });
    
      $('#slider-action-button--next-recentadvert').click(function () {
        for (var i=0; i <= sliders.length; i++) {
            sliders[i].goToNextSlide();
        }
        return false;
      });
      $('#slider-action-button--back-recentadvert').click(function () {
        for (var i=0; i <= sliders.length; i++) {
            sliders[i].goToPrevSlide();
        }
        return false;
      });


    },
    sliderLastComment: function () {

      var slider = $(".slider-last-comment").bxSlider({
          minSlides: 3,
          maxSlides: 3,
          slideMargin: 2,
          mode: 'horizontal',
          moveSlides: 1,
          nextText: '',
          prevText: '',
          slideWidth: 500,
          pause: 10000,
          auto: true

        });
      $('#slider-action-button--next-lastcomment').click(function () {
        slider.goToNextSlide();
        return false;
      });
      $('#slider-action-button--back-lastcomment').click(function () {
        slider.goToPrevSlide();
        return false;
      });

    },
    dropDownMenu: function () {
      $('.main-menu__item').on('mouseover', function () {
        $(this).find('.sub-menu').css('visibility', 'visible');
      });
      $('.main-menu__item').on('mouseout', function () {
        $('.sub-menu').css('visibility', 'hidden');
      });
    },
    scrollTopSite: function () {
     
     var $wrapper = $('.footer-wrapper');

     $wrapper.click(function(){
        $('body, html').animate({
            scrollTop: 0
         }, 200);
        
     });
    },
    radialProgressBar: function () {
      var totaltime = 10;
      var deg;
      function update(percent){
  
    if(percent<(totaltime/2)){
      deg = 90 + (360*percent/totaltime);
        $('.pie').css('background-image',
                  'linear-gradient('+deg+'deg, transparent 50%, white 50%),linear-gradient(90deg,white 50%, transparent 50%)'
                 );
    } else if(percent>=(totaltime/2)){
            deg = -90 + (360*percent/totaltime);
            $('.pie').css('background-image',
                  'linear-gradient('+deg+'deg, transparent 50%, #e01a3c 50%),linear-gradient(90deg, white 50%, transparent 50%)'
                 );
            }
}
  var count = parseInt($('#time').text());
  var myCounter = setInterval(function () {
  count+=1;
  $('#time').html(count);
    update(count);
  
  if(count==totaltime) {
      count = 0;
  }
}, 1000);

    },
    
    liveReload: function () {
      if (window.location.hostname === 'localhost') {
        this.$body.append('<script src="//localhost:9000/livereload.js"></script>');
      }
    }
  };
  $(document).on('ready', function () {
    window.CHANGE_ME.init();
  });
}(jQuery, window, document));