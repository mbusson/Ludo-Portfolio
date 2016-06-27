import framework from 'framework'
import config from 'config'
import utils from 'utils'
import $ from 'dom-select'
import classes from 'dom-classes';
import create from 'dom-create-element'
import query from 'query-dom-components'

class Sub {
    
    constructor(opt = {}) {
        
        this.isMobile = config.isMobile
        
        this.view = config.$view
        this.slug = null
        this.el = null
        this.a = null
    }
    
    init(req, done) {
           
        const id = req.params.id;
        const view = this.view
        const slug = this.slug = `sub-${id}`
        
        const template = `
            <div class="vertical-center">
                <div class="vertical-el">
                    <span class="info">${id} me...</span> <br><br>
                    <ul>
                        <li>Profile</li>
                        <li><a href="https://www.facebook.com/profile.php?id=100011256067635">Facebook</a></li>
                        <li>Experience</li>
                    </ul> <br>
                    <ul>
                        <li><a href="http://mbusson.com"><< Back</a></li>                        
                    </ul>
                    <span style="font-size: 0.75rem" class="info"> To the developer's website. </span>
                </div>
                <div class="closure"> 
                    <span class="closure-el"> <a href="/home" class="js-closeabout link">×</a> </span>
                </div>
            </div>
        `
        
        this.el = create({
            selector: 'div',
            styles: `sub-item ${this.slug}`,
            html: template
        })

        this.view.appendChild(this.el)
        
        utils.biggie. addRoutingEL(document.querySelectorAll('.link'))

        done()
    }
    
    animateIn(req, done) {

        classes.add(config.$body, `is-${this.slug}`)

        this.el.style.display = 'block'

        const tl = new TimelineMax({ paused: true })
        tl.fromTo(this.el, 1,{x: '-320'}, { x: 0, ease: Expo.easeInOut })
        tl.restart()
        
        done()
    }

    animateOut(req, done) {
         
        classes.remove(config.$body, `is-${this.slug}`)

        const tl = new TimelineMax({ paused: true, onComplete: done })
        this.el && tl.to(this.el, 0.7, { x: '-320', ease: Expo.easeInOut, clearProps: 'all' })
        tl.restart()
    }
    
    resize(width, height) {}

    destroy(req, done) {

        this.el.parentNode.removeChild(this.el)
        this.el = null
        
        done()
    }
}

module.exports = Sub