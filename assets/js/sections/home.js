import config from 'config'
import utils from 'utils'
import classes from 'dom-classes'
import Default from './default'
import event from 'dom-event'
import {on, off} from 'dom-event'

class Home extends Default {
	
	constructor(opt) {
		
		super(opt)

		this.slug = 'home'
		this.ui = null

		this.handlePrint = this.handlePrint.bind(this)
	}
	
	init(req, done) {

		super.init(req, done)
	}

	dataAdded(done) {

		super.dataAdded()
  
		on(this.ui.wrap, 'click', this.handleClick)

		this.addEvents()

		done()
	}

	addEvents() {
		this.boxes = utils.js.arrayFrom(this.ui.box)

		this.boxes.forEach((box) => on(box, 'click', this.handlePrint))
	}

	removeEvents() {
		this.boxes.forEach((box) => off(box, 'click', this.handlePrint))

		this.boxes = null
	}
	
	handleClick(e) {
	  
		const target = e.currentTarget

	  	TweenLite.to(target, 0.5, {autoAlpha:0, y: '-150%', x: '-50%', ease: Power2.easeIn});
	}

	handlePrint(e) {

		const target = e.currentTarget

		var polpo = '<img src="/assets/images/polpo-full.jpg">',
			medusa = '<img src="/assets/images/medusa-full.jpg">',
			sirena = '<img src="/assets/images/sirena-full.jpg">',
			ippo = '<img src="/assets/images/ippocampo-full.jpg">',
			lepisma = '<img src="/assets/images/lepisma-full.jpg">',
			pesce = '<img src="/assets/images/pesce-full.jpg">'
			// assigned images to variables
		var polpoId = this.ui.polpo, 
			medusaId = this.ui.medusa, 
			sirenaId = this.ui.sirena, 
			ippoId = this.ui.ippo, 
			lepismaId = this.ui.lepisma, 
			pesceId = this.ui.pesce;
			// assigned divs to variables

		var multiWrap = this.ui.wrap,
			closeBox = this.ui.close,
			wrapContent;
	  
	  	if (target == polpoId) {
	  		wrapContent = polpo;
	  	} else if (target == medusaId) {
	  		wrapContent = medusa;
	  	} else if (target == sirenaId) {
	  		wrapContent = sirena;
	  	} else if (target == ippoId) {
	  		wrapContent = ippo;
	  	} else if (target == lepismaId) {
	  		wrapContent = lepisma;
	  	} else {
	  		wrapContent = pesce;
	  	}

	  	// Just making sure multiWrap is properly positioned
	  	TweenLite.to(multiWrap, 0.1, {y: '-50%', x: '-150%', ease: Power0.easeNone});

	  	multiWrap.innerHTML = '<a class="js-close" id="image-close">×</a>';
	  	multiWrap.innerHTML += wrapContent;
	  	TweenLite.to(multiWrap, 1, {autoAlpha:1, y: '-50%', x: '-50%', ease: Power4.easeOut});
	  	
	}

	animateIn(req, done) {

		classes.add(config.$body, `is-${this.slug}`)
		
		TweenLite.to(this.page, 1, {
			y: 0,
			autoAlpha: 1,
			ease: Expo.easeInOut,
			onComplete: done
		})
	}

	animateOut(req, done) {
		
		classes.remove(config.$body, `is-${this.slug}`)

		TweenLite.to(this.page, 0.7, {
			y: 100,
			autoAlpha: 0,
			ease: Expo.easeInOut,
			onComplete: done
		})
	}

	destroy(req, done) {

		super.destroy()

		this.removeEvents()

		this.ui = null

		this.page.parentNode.removeChild(this.page)
		
		done()
	}
}

module.exports = Home