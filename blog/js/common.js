jQuery(function() {

	// Custom JS
	jQuery('.ap_text').equalHeights();

	jQuery(".toggle-menu").click(function() {
		jQuery(this).toggleClass("on");
		jQuery(".hidden-menu").slideToggle();
		return false;
	});
	
});
