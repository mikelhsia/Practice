/*
 * =======================================================
 * Design & Development: Vincent Brand
 *========================================================
 * Custom Lightbox Plugin
 * -------------------------------------------------------
 * This plugin is an alternative to the exsisting lightbox 
 * plugins that are available for drupal
 * -------------------------------------------------------
 * USAGE:
 * ------------------------------------------------------- 
 * Quick Use:
 * $('.triggerbox-trigger').triggerbox();
 * -------------------------------------------------------
 * Usage with parameters:
 * $('.triggerbox-trigger').triggerbox({
 *   bgcolor:'rgba(23,24,66,0.6)',
 *   color:'#fff',
 *   contentbg:false
 * });
 *======================================================== 
*/
(function($) {
	$.fn.vline = function( options ) {
		
		var settings = $.extend({
			// callback function on complete
			complete	:null		
		}, options);	
			
		return this.each( function() {
			setMargins($(this));
			watcher($(this));
		});
		
		function setMargins(el){
			var a = el.parent().height()/2;
			var b = el.outerHeight()/2;
			el.css('margin-top', (a+b));
		}
		
		function watcher(v){
			$( window ).resize(function() {
				setMargins($(this));
			});	
		}	
	};
}(jQuery));