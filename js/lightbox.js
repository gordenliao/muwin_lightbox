(function( $ ){
	$.fn.my_lightbox= function() {
		var close = function(){
			$('div').click(function(){
				$('#light_mask').hide().remove();
			});
		};
		this.click(function(){
			var $htmlbody = $('body,html');
			$body  = $('body');
			var $img=$(this).attr('href');
			$htmlbody.css('height','100%');
			$body.append('<div id="light_mask" style="width:100%;height:100%;background:rgba(0,0,0,.8);position:fixed;top:0;left:0;z-index:999;text-align:center"><div style="position:relative;width:100%;height:100%;pointer-events: none;"><img src='+$img+' style="position:absolute;top:0;left:0;right:0;bottom:0;margin:auto"></div></div>');
			console.log($img);
			close();
       		return false;
		});

		
	};
   //      $.fn.my_lightbox= function() {
   //      	var $htmlbody = $('body,html');
			// $body  = $('body');
			// this.click(function(){
			// 	var $img=$(this).attr('href');
			// 	$htmlbody.css('height','100%');
			// 	$body.append('<div id="light_mask" style="width:100%;height:100%;background:rgba(0,0,0,.8);position:fixed;top:0;left:0;z-index:999;text-align:center"><div style="position:relative;width:100%;height:100%;pointer-events: none;"><img src='+$img+' style="position:absolute;top:0;left:0;right:0;bottom:0;margin:auto"></div></div>');
			// 	console.log($img);
			// $('div').click(function(){
			// 	$('#light_mask').hide().remove();
			// });
			// return false;
   //      }

}( jQuery ));