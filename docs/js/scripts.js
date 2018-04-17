var BODY = $('body');
var URL = window.location.origin;
$(function() {
	window.Global = {
	    init: function(){
	        this.bindEvents(); 
	    },
	    bindEvents: function(){
	    	BODY.off('click','#btnMenu');
	    	BODY.on('click','#btnMenu',function(event){
	    		event.preventDefault();
				$('#cntOpen').toggle();
				$('#menu nav').toggle(1000);
			});
			BODY.off('click','#btnClose');
	    	BODY.on('click','#btnClose',function(event){
	    		event.preventDefault();
				$('#menu nav').toggle();
				$('#cntOpen').toggle(1000);				
			});
			
			$(window).scroll(function() {
			   if($(window).scrollTop() + $(window).height() + 100 >= $(document).height() ) {
			       $('footer').attr( "style", "display: block;")
			   }else{
			   		$('footer').attr( "style", "display: none;")
			   }
			});
	    }
	}
	window.Global.init();
});