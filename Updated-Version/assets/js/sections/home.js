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
	}
	
	init(req, done) {

		super.init(req, done)
	}

	dataAdded(done) {

		super.dataAdded()
  
		on(this.ui.wrap[0], 'click', this.handleClick)
    
		done()
	}
	
	handleClick(e) {
	  
		const target = e.currentTarget
	  
		target.style.visibility = 'hidden'
		target.innerHTML = ''
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