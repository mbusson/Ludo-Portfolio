$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1750);

// --- GSAP ---
	function startFinalAnimation(){
    	var fa = new TimelineLite();
    	fa.from("#wrapper", 1.7, {backgroundColor:"rgba(0,0,0, 0.75)", ease:Back.easeIn});
		fa.staggerFrom(".box", 1, {opacity:0, ease:Back.easeIn}, 0.2);
		fa.set(".box", {clearProps:"all"});
	};
		startFinalAnimation();

// --- SIZE-ADJUST ---

	var hvalue1 = $('#wrapper .box').width();
	$(this).css({'height': hvalue1+'px'});

// --- MENU - pureJS ---

	var iconToggle = document.getElementById('toggle');

	function hasClass(elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	function addClass(elem, className) {
	    if (!hasClass(elem, className)) {
	    	elem.className += ' ' + className;
	    }
	}
	function removeClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
		if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace(' ' + className + ' ', ' ');
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    }
	}
	function toggleClass(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(" " + className + " ") >= 0 ) {
	            newClass = newClass.replace( " " + className + " " , " " );
	        }
	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } else {
	        elem.className += ' ' + className;
	    }
	}
	iconToggle.onclick = function() {
	   toggleClass(this, 'on');
	   return false;
	}

// --- CALLS ---

cleanCanvas = function() {
	$('#multi-wrap').empty();
	$('#multi-wrap').css('visibility', 'hidden');
};

var polpo = '<img src="images/polpo-full.jpg">',
	medusa = '<img src="images/medusa-full.jpg">',
	sirena = '<img src="images/sirena-full.jpg">',
	ippo = '<img src="images/ippocampo-full.jpg">',
	lepisma = '<img src="images/lepisma-full.jpg">',
	pesce = '<img src="images/pesce-full.jpg">';

	$('#multi-wrap').click(function() {
		$(this).empty();
		$(this).css('visibility', 'hidden')
	});
	$('#polpo').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(polpo);
	});
	$('#medusa').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(medusa);
	});
	$('#sirena').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(sirena);
	});
	$('#ippo').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(ippo);
	});
	$('#lepisma').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(lepisma);
	});
	$('#pesce').click(function() {
		cleanCanvas();
			$('#multi-wrap').css('visibility', 'visible');
			$('#multi-wrap').append(pesce);
	});


		//$('#image-close').css('visibility', 'visible');
		$('#image-close').click(function() {
			$('#multi-wrap').css('visibility', 'hidden');
		});


	$('#contact').click(function() {
		$('#profile-wrap').css('visibility', 'visible');
	});
	$('#contact-close').click(function() {
		$('#profile-wrap').css('visibility', 'hidden');
	});

});