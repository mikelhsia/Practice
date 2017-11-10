(function ($) {
	
	//$('.vline').vline();
	
	// init page load
	if($( window ).width()>768){
		squarify();
	}
	
	$('.open-submenu').click(function() {
		console.log('hi');
		$('.sub-menu').fadeToggle(300);
	});

	
	
	// responsive resize functions
	$( window ).resize(function() {
		// non mobile
		if($( window ).width()>768){
			squarify();
		}	  	
	});
	
	// squarify function
	function squarify(){
		$('.squarify').each(function(){
			//$(this).height($(this).width());
			var m = ($(this).width()-$(this).children().outerHeight())/2;		
			$(this).children().css('margin', m+'px 0px').css('padding','0px');				
		});
	}		
	
}(jQuery));    	
