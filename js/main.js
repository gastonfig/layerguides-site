$(document).ready(function() {
	var guidesState = 'off';

	// Lettering.js
	$(".title").lettering();

	// Guides
	function addGuides(elem) {
		var delayTime = 200,
			elemOffset = elem.offset(),
			elemWidth = elem.innerWidth(),
			elemHeight = elem.innerHeight(),
			elemTop = elemOffset.top,
			elemLeft = elemOffset.left,
			elemRight = elemOffset.left + (elemWidth),
			elemBottom = elemOffset.top + (elemHeight);

		$('<span class="guides left vertical" style=left:' + (elemLeft + 1) + 'px;></span>').hide().appendTo(elem).fadeIn(delayTime);

		setTimeout(function() {
			$('<span class="guides top horizontal" style=top:' + (elemTop + 4) + 'px;></span>').hide().appendTo(elem).fadeIn(delayTime);
		}, 200);
		setTimeout(function() {
			$('<span class="guides right vertical" style=left:' + (elemRight - 4) + 'px;></span>').hide().appendTo(elem).fadeIn(delayTime);
		}, 400);
		setTimeout(function() {
			$('<span class="guides bottom horizontal" style=top:' + (elemBottom - 6) + 'px;></span>').hide().appendTo(elem).fadeIn(delayTime);
		}, 600);

		guidesState = 'on';
	}

	
	// $('h1').click(function() {
		// if(guidesState === 'off') {
		// 	addGuides($(this));	
		// 	guidesState = 'on';
		// } else if(guidesState === 'on') {
		// 	$('.guides').remove();
		// 	guidesState = 'off';
		// }
		
	// });
	
	setTimeout(function() {
		// addGuides($('h1'));
	}, 1500);




})