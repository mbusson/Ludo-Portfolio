$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

// --- GSAP ---
	function startFinalAnimation(){
    	var fa = new TimelineLite();
    	fa.from("#wrapper", 2, {backgroundColor:"rgba(0,0,0, 0.75)", ease:Back.easeIn});
		fa.staggerFrom(".box", 0.25, {opacity:0, x:-250, y:-150, ease:Back.easeIn}, 0.2);
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
var polpo = '<img src="images/polpo.jpg">',
	medusa = '<img src="images/medusa.jpg">',
	sirena = '<img src="images/sirena.jpg">',
	ippo = '<img src="images/ippocampo.jpg">',
	lepisma = '<img src="images/lepisma.jpg">',
	pesce = '<img src="images/pesce.jpg">';

	$('#multi-wrap').click(function() {
		$(this).empty();
		$(this).css('visibility', 'hidden')
	});
	$('#polpo').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(polpo);
	});
	$('#medusa').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(medusa);
	});
	$('#sirena').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(sirena);
	});
	$('#ippo').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(ippo);
	});
	$('#lepisma').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(lepisma);
	});
	$('#pesce').click(function() {
		$('#multi-wrap').css('visibility', 'visible');
		$('#multi-wrap').append(pesce);
	});

});