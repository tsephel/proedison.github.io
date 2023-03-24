(function($) {

	"use strict";




	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	

		// Initiate the wowjs
    new WOW().init();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	

	// Scrollax
   $.Scrollax();

	var carousel = function() {

		    // Header carousel
    $(".header-carousel").owlCarousel({
        smartSpeed: 1500,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
        animateIn: 'fadeIn',
    	animateOut: 'fadeOut',
    	paginationSpeed: 2000,
    });


  $(".testimonial-slider").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });

  $("#client-slider").owlCarousel({
        items:4,
        pagination:false,
        navigation:true,
        navigationText:["",""],
        loop:true,
        autoplay:true,
		autoplayTimeout:2000,
        responsiveClass:true,

		    responsive:{
		        0:{
		            items:2,
		  
		        },
		        600:{
		            items:3,
		
		        },
		        1000:{
		            items:4,
		  
		 
		        }
		    }
    });

	};
	



	 /* slick slider
    * ------------------------------------------------------ */
    var clSlickSlider = function() {

        $('.clients').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            //autoplay: true,
            pauseOnFocus: false,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }

            ]
        });

    
    };

    

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}



	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	

	  counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


	// magnific popup
      $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


  $('.checkin_date, .checkout_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});



   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

				fullHeight();
				loader();
    		carousel();
    		clSlickSlider();
        scrollWindow();
        counter();
        contentWayPoint();

   

    })();


})(jQuery);

