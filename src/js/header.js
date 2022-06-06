import { isSp } from './sp';

export function header() {

	////////////////////////////////////
	//  Header Search Category
	////////////////////////////////////

	$('.js-search-select').change(function() {
	  var change_txt = $(this).find('option:selected').text();
	  $('.search-select-txt').text(change_txt);
	});

	var select_txt = $('.js-search-select option:selected').text();
	$('.search-select-txt').text(select_txt);


	////////////////////////////////////
	//  Header Menu
	////////////////////////////////////

	$(".js-hamburger").click(function() {
	  $('.overlay03').fadeIn();
	  $('body').addClass("is-active");
	  $(this).addClass("is-active");
	  $(".header-menu-sp").addClass("is-active");
	  $('.header-menu-sp-inner').scrollTop('0');
	});

	$(".js-search-category").click(function() {
	  $('.overlay03').fadeIn();
	  $('body').addClass("is-active");
	  $(this).addClass("is-active");
	  $(".header-menu-sp").addClass("is-active");
	  var scrollTop = $('.header-menu-sp-inner .js-accordion-btn').offset().top;
	  $('.header-menu-sp-inner').scrollTop(scrollTop);
	});

	$('.js-close,.overlay03').click(function() {
		$('.overlay03').fadeOut();
	  $('body').removeClass("is-active");
	  $(this).removeClass("is-active");
	  $(".header-menu-sp").removeClass("is-active");
	  $('.category-btn.js-accordion-btn').next().slideDown();
	  $('.category-btn.js-accordion-btn').addClass('is-active');
	});
}
