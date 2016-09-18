$(function(){
	// JSON PRETTY-PRINT
	$('pre.print-json').each(function(){
		try
		{
			var json = $(this).text();
			var json = $.parseJSON(json);
			json = JSON.stringify(json, null, 4);
			$(this).text(json);
		}
		catch(err)
		{
			$(this).text("Não é um JSON válido");
		}
	});

	//SCROLL ANIMATION
	$('#sidebar-wrapper a').on('click', function(e) {
		var element = $(this);
		$('html, body').animate({scrollTop: $(element.attr('href')).offset().top });
	});
});
