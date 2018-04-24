$(function() {

	// Custom JS
	jQuery(".top_line .tab_item").not(":first").hide();
	jQuery(".top_line .wrapper .tab").click(function() {
		jQuery(".top_line .wrapper .tab").removeClass("active").eq(jQuery(this).index()).addClass("active");
		jQuery(".top_line .tab_item").hide().eq(jQuery(this).index()).fadeIn()
	}).eq(0).addClass("active");

	jQuery(".header_content .tab_item").not(":first").hide();
	jQuery(".header_content .wrapper .tab").click(function() {
		jQuery(".header_content .wrapper .tab").removeClass("active").eq(jQuery(this).index()).addClass("active");
		jQuery(".header_content .tab_item").hide().eq(jQuery(this).index()).fadeIn()
	}).eq(0).addClass("active");

	jQuery(".htftabs .tab_item").not(":first").hide();
	jQuery(".htftabs .wrapper .tab").click(function() {
		jQuery(".htftabs .wrapper .tab").removeClass("active").eq(jQuery(this).index()).addClass("active");
		jQuery(".htftabs .tab_item").hide().eq(jQuery(this).index()).fadeIn()
	}).eq(0).addClass("active");

	jQuery(".footer .tab_item").not(":first").hide();
	jQuery(".footer .wrapper .tab").click(function() {
		jQuery(".footer .wrapper .tab").removeClass("active").eq(jQuery(this).index()).addClass("active");
		jQuery(".footer .tab_item").hide().eq(jQuery(this).index()).fadeIn()
	}).eq(0).addClass("active");

	jQuery(".callback_button, .submit_popup_button").magnificPopup();
	jQuery('.s_reviews .owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		navText: ""
	});


});
