//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "25 Nov 2026 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});


});	

