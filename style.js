$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);

// --- GSAP ---
	function startFinalAnimation(){
    	var fa = new TimelineLite();
    	fa.from("#wrapper", 2, {backgroundColor:"rgba(152, 49, 240, 0.75)", ease:Back.easeIn});
		fa.staggerFrom(".box", 0.25, {opacity:0, x:-250, y:-150, ease:Back.easeIn}, 0.2);
		fa.set(".box", {clearProps:"all"});
	};
		startFinalAnimation();

// --- SIZE-ADJUST ---

	var hvalue1 = $('#wrapper .box').width();
	$(this).css({'height': hvalue1+'px'});

	var centerer = $('#centerer'), centerer2 = $('#centerer2'), body = $(window), 
		ch = centerer.outerHeight(true),
		c2h = centerer2.outerHeight(true),
		takenspace = ch + c2h,
		page = body.height(),
		available = page - takenspace,
		span = (available / 2);
		console.log(ch);
		console.log(c2h);
		console.log(takenspace);
		console.log(page);
		console.log(available);
		console.log(span);
	$('#spanner').css({'height': span+'px'});

});