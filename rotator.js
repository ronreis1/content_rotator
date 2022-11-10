(function(){
	"use strict";
	
	let counter = 1;

	function contentRotator(){
		$(`#container p:nth-child(${counter})`).fadeIn(2000, function(){
			if( $(this).is("#container p:last-child")){
				setTimeout( function(){}, 2000);
				$(`#container p:nth-child(${counter})`).fadeOut(2000, function(){
					counter = 1;
					contentRotator();
				});
			}
			else{
				setTimeout(function(){
					$(`#container p:nth-child(${counter})`).fadeOut(1000, function(){
						counter++;
						contentRotator();
					});
				}, 4000);
			}

		});
	}

	contentRotator();

	

}());
