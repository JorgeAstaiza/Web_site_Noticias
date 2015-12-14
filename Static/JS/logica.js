$(document).ready(function(){
	$(".post").mouseenter(function(){
		$(this).animate({
			height: '+=10px'
		});
	});
	$(".post").mouseleave(function(){
		$(this).animate({
			height: '-=10px'
		});
	});
	 $(".post").click(function() {
       $(this).toggle('fast');
   }); 

	// $(".imagen").mouseenter(function(){
    //    $(this).fadeTo("fast", 100)
    //    });
    //    $(".imagen").mouseleave(function(){
    //        $(this).fadeTo("fast", 0.5)
    //        });

});