
/* Insert Script Module: demo/resize_window */

function mojo_demo_resize_window(e, $) {
	var new_height = parseInt(jQuery(window).height(), 10) - 66;

	$('#demo-frame').height(new_height);
}


(function($, doc) {
	/* On Document Ready */
	$(doc).ready( function mojo_on_document_ready_for_jquery() {
		
		/* Insert Script Module: demo */

		// Grab the window height
var height = parseInt($(window).height(), 10) - 44;

// Bind the resize_window function to the window event 'resize'
$(window).bind('resize', mojo_demo_resize_window);

// Update the iframe height
$('#demo-frame').height(height);
	});
}(jQuery, document));




/* BUILD: 1449070716 on 2015-12-02 08:38:40 */