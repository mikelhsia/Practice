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

		// default settings
		var settings = $.extend({
			// vars
			align		:'center',
			include		:true,
			// callback function on complete
			complete	:null
			
		}, options);		
	
		return this.each( function() {
			// initial alignment
			setMargins($(this),getMargins($(this)));
			// on resize align again
			watcher($(this));
		});
			
		function getMargins(v){
			if(settings.include){
				var h = v.outerHeight();
			}else{
				var h = v.height();
			}
			var ph = v.closest('.getHeight').height();
			var m = 0; 
			switch (settings.align){
			   case 'center': m = (ph-h)/2;
			   break;
			   case 'bottom': m = ph-h;
			   break;
			   default: m = (ph-h)/2;
			}	
			return m;
		}
		
		function setMargins(v, m){
			v.css('margin-top', m); 	
		}
		
		function watcher(v){
			$( window ).resize(function() {
				setMargins(v,getMargins(v));
			});	
		}	
	};
}(jQuery));