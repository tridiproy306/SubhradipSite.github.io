//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "02 aug 2024 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	