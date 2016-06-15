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

		done()
	}

	addEvents() {
		this.boxes = utils.js.arrayFrom(this.ui.box)

		// t'as un array a partir d'une nodeList
		console.log(this.boxes)

		this.boxes.forEach((box) => on(box, 'click', this.handlePrint))
	}

	removeEvents() {
		this.boxes.forEach((box) => off(box, 'click', this.handlePrint))

		this.boxes = null
	}
	
	handleClick(e) {
	  
		const target = e.currentTarget
	  
	  	target.innerHTML = null;
		target.style.visibility = 'hidden'
		target.innerHTML = ''
	}
	
	handlePrint(e) {

		const target = e.currentTarget

		var polpo = '<img src="images/polpo-full.jpg">',
			medusa = '<img src="images/medusa-full.jpg">',
			sirena = '<img src="images/sirena-full.jpg">',
			ippo = '<img src="images/ippocampo-full.jpg">',
			lepisma = '<img src="images/lepisma-full.jpg">',
			pesce = '<img src="images/pesce-full.jpg">',
			imgX = '<a id="image-close">&times;</a>';
		var polpoId = this.ui.polpo, 
			medusaId = this.ui.medusa, 
			sirenaId = this.ui.sirena, 
			ippoId = this.ui.ippo, 
			lepismaId = this.ui.lepisma, 
			pesceId = this.ui.pesce;

		var multiWrap = this.ui.wrap;
		multiWrap.style.visibility = 'visible';
	  
	  	if (target == polpoId) {
	  		target.innerhtml = polpo;
	  	} else if (target == medusaId) {
	  		target.innerhtml = medusa;
	  	} else if (target == sirenaId) {
	  		target.innerhtml = sirena;
	  	} else if (target == ippoId) {
	  		target.innerhtml = ippo;
	  	} else if (target == lepismaId) {
	  		target.innerhtml = lepisma;
	  	} else {
	  		target.innerhtml = pesce;
	  	}
	  	console.log(target);
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

		this.ui = null

		this.page.parentNode.removeChild(this.page)
		
		done()
	}
}

module.exports = Home