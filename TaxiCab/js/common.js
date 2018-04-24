$(function() {

	// Custom JS
	jQuery(".toggle_menu").click(function() {
		jQuery(this).toggleClass("on");
		jQuery(".hidden_menu").slideToggle();
		return false;
	});
});
