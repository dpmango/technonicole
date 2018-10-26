$(function() {

	// --------------------------------------------------------------------------
	// Svg Polyfill
	// --------------------------------------------------------------------------

	svg4everybody();


	// --------------------------------------------------------------------------
	// detectTouch
	// --------------------------------------------------------------------------
	
	var isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function detectTouch() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	        $('html').addClass('touch-device');
	    }
	    else {
	    	$('html').addClass('no-touch-device');
	    }
	}
	detectTouch();

	// --------------------------------------------------------------------------
	// Header
	// --------------------------------------------------------------------------

	$('.header__nav').on('click', '.header__nav-btn', function(event) {
		event.preventDefault();
		
		if( $('html').is('.is-nav-open') ) {
			$('html').removeClass('is-nav-open');
		} else {
			$('html').addClass('is-nav-open');
		}
	});

	$(document).on( 'click', function(event) {

		if($(event.target).closest('.header__nav').length==0) {
			$('html').removeClass('is-nav-open');
		}

	});

	// --------------------------------------------------------------------------
	// Footer
	// --------------------------------------------------------------------------

	$('.footer__partners').on('click', '.footer__partners-btn', function(event) {
		event.preventDefault();
		if( $('html').is('.is-partners-open') ) {
			$('html').removeClass('is-partners-open');
		} else {
			$('html').addClass('is-partners-open');
		}
	});


	// --------------------------------------------------------------------------
	// Slides
	// --------------------------------------------------------------------------

	var slickPrev = '<button class="slick-arrow slick-prev"><svg class="icon-prev"><use xlink:href="sprites/sprite.svg#icon-prev"></use></svg></button>',
      	slickNext = '<button class="slick-arrow slick-next"><svg class="icon-next"><use xlink:href="sprites/sprite.svg#icon-next"></use></svg></button>';

	$('.js-slick-hero').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-catalog').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		rows: 3,
		slidesPerRow: 2,

		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 2,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 1,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-products').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-info').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-collection').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		infinite: false,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false
	});

	$('[data-color]').on('click', function(event) {
		event.preventDefault();

	 	var dataIndex = $(this).index();

	    $('[data-color]').removeClass('is-active').eq(dataIndex).addClass('is-active');
	    $('.js-slick-collection').slick('slickGoTo', dataIndex);

	});


	$('.js-slick-services').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 3,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	

	$('.js-slick-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		rows: 2,
		slidesPerRow: 4,

		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 3,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 2,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 1,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	adaptiveHeight: true
	});


	
	$('.js-slick-video').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});

	// --------------------------------------------------------------------------
	// Fancybox
	// --------------------------------------------------------------------------

	$('[data-fancybox]').fancybox({
		infobar : false,
		toolbar : false,
		touch : false,
		transitionEffect : 'slide',
	    afterShow: function(instance, current) {

	    }
	});


	$('[data-fancybox="gallery"]').fancybox({
		infobar : true,
		toolbar : true,
		transitionEffect : 'slide',
		buttons: [
			"close"
		]
	});


	// --------------------------------------------------------------------------
	// Forms
	// --------------------------------------------------------------------------

	$('select, input[type="number"]').styler({
		selectSearch: false,
		selectSmartPositioning: false
	});

	
	$('.ui-number').on('click', '[data-number]', function(event){

		event.preventDefault();

	    var input    = $(this).closest('.ui-number').find('input'),
	    	inputVal = parseInt(input.val()) || 0,
	    	inputMin = input.data('min'),
	    	inputMax = input.data('max');


	    if( $(this).data('number') == '-' ){

			if(inputVal <= inputMin){
				event.preventDefault();
			}
			else{
				input.val( inputVal - 1 );
			}
	    } 
	    if( $(this).data('number') == '+' ){
	    	
			if(inputVal >= inputMax){
				event.preventDefault();
			}
			else{
				input.val( inputVal + 1 );
			}
	    }



	});


	// --------------------------------------------------------------------------
	// Phone
	// --------------------------------------------------------------------------

	$('input[type=tel]').inputmask({"mask": "+7 (999) 999-99-99", showMaskOnFocus: true, showMaskOnHover: false });

	// --------------------------------------------------------------------------
	// Validate
	// --------------------------------------------------------------------------

	$.validator.addMethod("regexp", function (value, element) {
	    return this.optional(element) || /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
	});

	var validateErrorPlacement = function(error, element) {
		error.addClass('ui-error');
		error.appendTo(element.closest('.ui-field'));
	}

	var validateHighlight = function(element) {
		$(element)
			.parent().addClass("is-error").removeClass('is-success')
			.append('<svg class="icon-error"><use xlink:href="sprites/sprite.svg#icon-error"></use></svg>')
			.find('.icon-valid').remove();
	}
	var validateUnhighlight = function(element) {
		$(element)
			.parent().addClass('is-valid').removeClass("is-error")
			.append('<svg class="icon-valid"><use xlink:href="sprites/sprite.svg#icon-valid"></use></svg>')
			.find('.icon-error').remove();
	}



	$('.js-validate').each(function (index, value) { 

		$(this).validate({
			errorElement: "span",
			ignore: ":disabled,:hidden",
			highlight: validateHighlight,
    		unhighlight: validateUnhighlight,
			rules: {
				fullname: "required",
				tel: {
	                required: true,
	                regexp: true
				},
				email: {
					required: true,
      				email: true
				},
				message: "required",
				city: "required",
				index: "required",
				address: "required",
				password: "required",
			    passwordconfirm: {
			    	required: true,
			    	equalTo: "#password"
			    },
			    accept: "required"

			},
			messages: {
				fullname: 'Вы не ввели ФИО',
				tel: 'Вы не ввели номер телефона',
				email: 'Введите email',
				city: 'Введите город',
				index: 'Введите индекс',
				address: 'Введите адрес',
				message: 'Введите сообщение',
				password: 'Введите пароль',
				passwordconfirm: {
					required: 'Повторите пароль',
					equalTo: 'Пароли не совпадают'
				},
				accept: 'Подтвердите условия'
			},
			errorPlacement: validateErrorPlacement,
			submitHandler: function(form) {

				$(form).addClass('is-success');


				setTimeout(function() {

					$(form).removeClass('is-success');

				}, 2000);

				// $.ajax({
				// 	type: "POST",
				// 	url: 'phpmailer/send.php',
				// 	data: $(form).serialize(),
				// 	success: function(form) {


				// 	},
				// 	error: function(form) {



				// 	}
				// });


				event.preventDefault();


			}
		});

	});



});


