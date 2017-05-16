(function($) {
    "use strict";
    $.fn.pbTouchSlider = function(options) {
        var slider_Opts = $.extend({
            slider_Wrap : '', // Assign a unique ID to the div.o-sliderContainer
            slider_Item : '.o-slider--item', // Single Item
            slider_Drag : true, // Your choise.. to dragIt or not to dragIt..this is the question...
            slider_Dots : { // Wanna see dots or not?
              class :'.o-slider-pagination',
              enabled : true
            },
            slider_Arrows : { // Wanna see Arrows or not?
              class :'.o-slider-arrows',
              enabled : true
            },
            slider_Threshold : 25, // Percentage of  dragX before go to next/prev slider
            slider_Speed : 1000,
            slider_Ease : 'cubic-bezier(0.5, 0, 0.5, 1)',  // see http://cubic-bezier.com/
            slider_Breakpoints : { // Kind of media queries ( can add more if you know how to do it :D and if you need )
                default : {
                    height : 500 //  height on desktop
                },
                tablet : {
                    height : 400, // height on tablet
                    media : 1024 // tablet breakpoint
                },
                smartphone : {
                    height : 300, // height on smartphone
                    media : 768 // smartphone breakpoint
                }
            }
        }, options);

        /*:::::::: LOADER ::::::::*/
        var loaderHtml = '<div class="loaderWrap">'+
                          '<div class="ball-scale-multiple">'+
                          '<div></div>'+
                          '<div></div>'+
                          '<div></div>'+
                          '<div></div>'+
                          '</div></div>';
        $(slider_Opts.slider_Wrap).each( function(){$(this).append(loaderHtml);});
        function loader(visibility) {
            var thisLoader = $(slider_Opts.slider_Wrap +' .loaderWrap');
            if (visibility === true)
                $(thisLoader).show();
             else
                $(thisLoader).hide();
        }

        /*:::::::: RESPONSIVE ::::::::*/
        function setResponsive() {
            var VW = document.documentElement.clientWidth;
            if (VW >= slider_Opts.slider_Breakpoints.tablet.media) {
                $(pbSlider.slider_Wrap + '.o-sliderContainer,'+ pbSlider.slider_Wrap + ' ' + pbSlider.slider_Item).css({height: slider_Opts.slider_Breakpoints.default.height});
            } else if (VW >= slider_Opts.slider_Breakpoints.smartphone.media) {
                $(pbSlider.slider_Wrap + '.o-sliderContainer,'+ pbSlider.slider_Wrap + ' ' + pbSlider.slider_Item).css({height: slider_Opts.slider_Breakpoints.tablet.height});
            } else {
                $(pbSlider.slider_Wrap + '.o-sliderContainer,'+ pbSlider.slider_Wrap + ' ' + pbSlider.slider_Item).css({height: slider_Opts.slider_Breakpoints.smartphone.height});
            }
        }
        $(window).resize(function() {setResponsive();});



        /*:::::::: OBJECT SLIDER ::::::::*/
        var pbSlider = {};
        pbSlider.slider_Wrap = slider_Opts.slider_Wrap;
        pbSlider.slider_Item = slider_Opts.slider_Item;
        pbSlider.slider_Dots = slider_Opts.slider_Dots;
        pbSlider.slider_Threshold = slider_Opts.slider_Threshold;
        pbSlider.slider_Active = 0;
        pbSlider.slider_Count = 0;
        pbSlider.slider_NavWrap = '<div class="o-slider-controls"></div>';
        pbSlider.slider_NavPagination ='<ul class="o-slider-pagination"></ul>';
        pbSlider.slider_NavArrows ='<ul class="o-slider-arrows"><li class="o-slider-prev"><i class="icon-left-open-big"></i></li><li class="o-slider-next"><i class="icon-right-open-big"></i></li></ul>';


        /*:::::::: APPEND ANIMATION ::::::::*/
        $('head').append(
            '<style>' + pbSlider.slider_Wrap + ' .o-slider.isAnimate{' +
            '-webkit-transition: all ' + slider_Opts.slider_Speed + 'ms ' + slider_Opts.slider_Ease + ';' +
            'transition: all ' + slider_Opts.slider_Speed + 'ms ' + slider_Opts.slider_Ease + ';' +
            '</style>'
        );



        /*:::::::: ONlOAD STUFF ::::::::*/
        $(window).on('load', function() {
          $(pbSlider.slider_Item).each(function(){
            var bg = $(this).attr('data-image');
            $(this).css({'background-image':'url('+bg+')'});
          });
          setTimeout ( function(){
              loader(false);
            },1000);
            $(pbSlider.slider_Wrap + ' .o-slider-controls').addClass('isVisible');
            $(pbSlider.slider_Draggable).addClass('isVisible');
            setResponsive();
        });

        /*:::::::: INIT ::::::::*/
        pbSlider.pbInit = function(selector) {
            pbSlider.slider_Draggable = selector;
            pbSlider.slider_Count = $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).length;
            $(selector).css('width', pbSlider.slider_Count * 100 + '%');
            $(pbSlider.slider_Item).css({'width': 100 / pbSlider.slider_Count+ '%'});

            var incrSlides = 0;
            $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).each(function() {
                $(this).attr('data-id', 'slide-' + (incrSlides++));
            });

            if(slider_Opts.slider_Arrows.enabled === true || slider_Opts.slider_Dots.enabled === true ){
              $(pbSlider.slider_Wrap).append(pbSlider.slider_NavWrap);
            }

            if(slider_Opts.slider_Arrows.enabled === true){$(pbSlider.slider_Wrap).append(pbSlider.slider_NavArrows);}

            if(slider_Opts.slider_Dots.enabled === true){
              var incrPagination = 0;
              $(pbSlider.slider_Wrap).append(pbSlider.slider_NavPagination);
              for (incrPagination; incrPagination < pbSlider.slider_Count; incrPagination++) {
                  var activeStatus = incrPagination === pbSlider.slider_Active ? ' class="isActive"' : '';
                  var gotoSlide = 'data-increase="' + [incrPagination] + '"';
                  var background = $(pbSlider.slider_Wrap).find("[data-id='slide-" + incrPagination + "']").attr('data-image');
                  //background = background.replace('url(','').replace(')','').replace(/\"/gi, "");
                  console.log(background);
                  $(pbSlider.slider_Wrap).find(pbSlider.slider_Dots.class).append(
                    '<li ' + activeStatus + ' ' + gotoSlide + '>'+
                      '<span class="o-slider--preview" style="background-image:url('+background+')"></span>'+
                    '</li>');
              }
            }
            setTimeout(function() {
              $(pbSlider.slider_Item + '[data-id=slide-' + pbSlider.slider_Active + ']').addClass('isActive');
            },400);
            /*:::::::: HAMMER => see http://hammerjs.github.io/  ::::::::*/
            if(slider_Opts.slider_Drag === true){
              $(pbSlider.slider_Draggable).addClass('isDraggable');
              var stuff4hammer = document.querySelector(pbSlider.slider_Wrap);
              var hammerOpts =   {
                dragLockToAxis: true,
                dragBlockHorizontal: true,
                touchAction: 'pan-x',
                cssProps: {userSelect: true}
              }
              var hammertime = new Hammer(stuff4hammer, hammerOpts);
              hammertime.on('pan', function(e) {
                e.preventDefault();
                var percentage = 100 / pbSlider.slider_Count * e.deltaX / window.innerWidth;
                var percentageCalc = percentage - 100 / pbSlider.slider_Count * pbSlider.slider_Active;
                var notDraggable = $(e.target).find('.slider-textWrap').length;
                  if(pbSlider.slider_Active != pbSlider.slider_Count-1 && pbSlider.slider_Active != 0){
                    $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).addClass('isMoving');
                  }
                  $(pbSlider.slider_Draggable).css({
                      'perspective': '1000px',
                      'backface-visibility': 'hidden',
                      'transform': 'translateX( ' + percentageCalc + '% )'
                  });
                  if (e.isFinal) {
                      if (e.velocityX > 1) {
                          pbSlider.pbGoslide(pbSlider.slider_Active - 1);
                      } else if (e.velocityX < -1) {
                          pbSlider.pbGoslide(pbSlider.slider_Active + 1);
                      } else {
                          if (percentage <= -(pbSlider.slider_Threshold / pbSlider.slider_Count)) {
                              pbSlider.pbGoslide(pbSlider.slider_Active + 1);
                          } else if (percentage >= (pbSlider.slider_Threshold / pbSlider.slider_Count)) {
                              pbSlider.pbGoslide(pbSlider.slider_Active - 1);
                          } else {
                              pbSlider.pbGoslide(pbSlider.slider_Active);
                          }
                      }
                  }
              });
            }
            $(pbSlider.slider_Wrap + ' .o-slider-pagination li').on('click', function() {

                var this_data = $(this).attr('data-increase');
                if(!$(this).hasClass('isActive')){
                  pbSlider.pbGoslide(this_data);
                }
                //console.log(this_data + ' / ' + pbSlider.slider_Active );
            });
            $(pbSlider.slider_Wrap + ' .o-slider-prev').addClass('isDisabled');
            $(pbSlider.slider_Wrap + ' .o-slider-arrows li').on('click', function() {
                if ($(this).hasClass('o-slider-next')) {
                    pbSlider.pbGoslide(pbSlider.slider_Active + 1);
                } else {
                    pbSlider.pbGoslide(pbSlider.slider_Active - 1);
                }
            });
        };
        /*:::::::: SLIDER ENGINE ::::::::*/
        pbSlider.pbGoslide = function(number) {
            $(pbSlider.slider_Wrap + ' .o-slider-arrows li').removeClass('isDisabled');

            if (number < 0) {
                pbSlider.slider_Active = 0;
            } else if (number > pbSlider.slider_Count - 1) {
                pbSlider.slider_Active = pbSlider.slider_Count - 1;
            } else {
                pbSlider.slider_Active = number;
                loader(true);
            }

            if (pbSlider.slider_Active >= pbSlider.slider_Count - 1) {
              var firstS = $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).first();
                $(pbSlider.slider_Wrap + ' .o-slider-next').addClass('isDisabled');
            } else if (pbSlider.slider_Active <= 0) {
                $(pbSlider.slider_Wrap + ' .o-slider-prev').addClass('isDisabled');
            } else {
                $(pbSlider.slider_Wrap + ' .o-slider-arrows li').removeClass('isDisabled');
            }
            if(pbSlider.slider_Active != pbSlider.slider_Count-1 && pbSlider.slider_Active != 0){
              $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).addClass('isMoving');

            }
            $(pbSlider.slider_Draggable).addClass('isAnimate');
            var percentage = -(100 / pbSlider.slider_Count) * pbSlider.slider_Active;
            $(pbSlider.slider_Draggable).css({
                'perspective': '1000px',
                'backface-visibility': 'hidden',
                'transform': 'translateX( ' + percentage + '% )'
            });
            clearTimeout(pbSlider.timer);
            pbSlider.timer = setTimeout(function() {
                $(pbSlider.slider_Wrap).find(pbSlider.slider_Draggable).removeClass('isAnimate');
                $(pbSlider.slider_Wrap).find(pbSlider.slider_Item).removeClass('isActive').removeClass('isMoving');
                $(pbSlider.slider_Wrap).find(pbSlider.slider_Item + '[data-id=slide-' + pbSlider.slider_Active + ']').addClass('isActive');
                $(pbSlider.slider_Wrap + ' .o-slider--item img').css('transform', 'translateX(0px )');
                loader(false);
            }, slider_Opts.slider_Speed);
            if(slider_Opts.slider_Dots.enabled === true){
              var sliderDots = $(pbSlider.slider_Wrap).find(pbSlider.slider_Dots.class + ' > *');
              var increase = 0;
              for (increase; increase < sliderDots.length; increase++) {
                  var className = increase == pbSlider.slider_Active ? 'isActive' : '';
                  $(pbSlider.slider_Wrap).find(sliderDots[increase]).removeClass('isActive').addClass(className);
                  $(pbSlider.slider_Wrap).find(sliderDots[increase]).children().removeClass('isActive').addClass(className);
             }
             setTimeout(function() {
               $(pbSlider.slider_Wrap).find(sliderDots).children().removeClass('isActive');
             },500);
            }
            pbSlider.slider_Active = Number(pbSlider.slider_Active);
        };
        pbSlider.auto = function() {
            pbSlider.autoTimer = setInterval(function() {
                if (pbSlider.slider_Active >= pbSlider.slider_Count - 1) {
                    pbSlider.pbGoslide(0);
                } else {
                    $(pbSlider.slider_Wrap + ' .o-slider-next').trigger('click');
                }
            }, 3000);
        }
        //pbSlider.auto();
        pbSlider.pbInit(this);
    };

}(jQuery));
