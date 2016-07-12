import framework from 'framework'
import config from 'config'
import utils from 'utils'
import $ from 'dom-select'
import classes from 'dom-classes';
import create from 'dom-create-element'
import query from 'query-dom-components'
import event from 'dom-event'
import {on, off} from 'dom-event'

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
                        <li class="js-profile">Profile</li>
                        <li><a href="https://www.facebook.com/profile.php?id=100011256067635">Facebook</a></li>
                        <li class="js-experience">Experience</li>
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
        this.ui = query({ el: this.el })
        this.dataAdded()
        
        utils.biggie. addRoutingEL(document.querySelectorAll('.link'))

        done()
    }

    dataAdded(done) {
        on(this.ui.profile,'click', this.handleMenu)
        on(this.ui.experience, 'click', this.handleMenu)
        on(this.ui.closeabout, 'click', this.handleClosure)
    }

    handleMenu(e) {
      
        const target = e.currentTarget

        const profileContent = `
            <div class="js-profile" id="profile-exists">
                <a class="js-close" id="image-close">×</a>
                <br>
                <p>Nunc scelerisque viverra tincidunt. Mauris sodales nibh sed pretium accumsan. Ut eu sollicitudin risus. Morbi iaculis, justo id gravida commodo, ipsum orci sollicitudin nulla, sit amet pellentesque urna sem sit amet nisi. Sed dolor turpis, posuere ac ante vel, molestie posuere tellus. Morbi facilisis tortor vitae augue ultricies, et viverra mi lacinia. Ut auctor viverra diam, a elementum turpis placerat non. Duis dapibus aliquet magna sed tincidunt. Vivamus vehicula, ligula vel congue hendrerit, erat nisl sodales metus, eu convallis justo risus eget odio.</p>
                <br>
                <p>Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel turpis nulla. Pellentesque congue tortor tellus, id hendrerit erat vestibulum a. Sed fermentum vel sapien blandit fermentum. Proin eget lectus sollicitudin, accumsan enim ut, dictum ante. Nulla sed viverra lacus, at imperdiet turpis. Nam non iaculis risus. Fusce et blandit sapien. Nullam quis pretium diam, nec sagittis mauris. Mauris ut convallis metus. Curabitur ultrices erat eu risus ornare, ut hendrerit erat ultricies. Sed sit amet quam sed metus ultrices sagittis nec eu leo.</p>
                <br>
                <p>Praesent ornare at lorem vel gravida. Sed posuere sollicitudin neque, vitae consequat libero blandit a. Praesent quis hendrerit mi. Donec at bibendum ipsum, et aliquam nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mi enim, mollis vel fermentum in, ultrices eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum cursus dui, non aliquet ante fermentum vel. Ut porttitor velit vitae tempus pharetra.</p>
            </div>
        `
        const expContent = `
            <div class="js-experience" id="exp-exists">
                <a class="js-close" id="image-close">×</a>
                <br>
                <p>Nunc scelerisque viverra tincidunt. Mauris sodales nibh sed pretium accumsan. Ut eu sollicitudin risus. Morbi iaculis, justo id gravida commodo, ipsum orci sollicitudin nulla, sit amet pellentesque urna sem sit amet nisi. Sed dolor turpis, posuere ac ante vel, molestie posuere tellus. Morbi facilisis tortor vitae augue ultricies, et viverra mi lacinia. Ut auctor viverra diam, a elementum turpis placerat non. Duis dapibus aliquet magna sed tincidunt. Vivamus vehicula, ligula vel congue hendrerit, erat nisl sodales metus, eu convallis justo risus eget odio.</p>
                <br>
                <p>Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel turpis nulla. Pellentesque congue tortor tellus, id hendrerit erat vestibulum a. Sed fermentum vel sapien blandit fermentum. Proin eget lectus sollicitudin, accumsan enim ut, dictum ante. Nulla sed viverra lacus, at imperdiet turpis. Nam non iaculis risus. Fusce et blandit sapien. Nullam quis pretium diam, nec sagittis mauris. Mauris ut convallis metus. Curabitur ultrices erat eu risus ornare, ut hendrerit erat ultricies. Sed sit amet quam sed metus ultrices sagittis nec eu leo.</p>
                <br>
            </div>
        `


        if ( classes.has(target, 'js-profile') ) {

            console.log('clic profil')
            const profile = create({
              selector: 'div',
              id: 'menu-wrap',
              styles: '`is-profile-content`',
              html: profileContent
            });

            if (document.getElementById('menu-wrap')) {
                if (document.getElementById('exp-exists')) {
                    const expOut = document.getElementById('menu-wrap')
                    document.body.appendChild(profile)
                    function removeExpMenu() {
                        console.log(expOut)
                        document.body.removeChild(expOut)
                        console.log(expOut)
                    }
                    let tl = new TimelineLite()
                    tl.to(expOut, 0.5, {
                        autoAlpha:0, 
                        x: '500%', 
                        ease: Expo.easeInOut,
                        y: 0
                    });
                    tl.from(profile, 1, {
                        autoAlpha:0, 
                        x: '500%', 
                        ease: Expo.easeInOut,
                        y: 0
                    });
                    tl.addPause(1.5, removeExpMenu);
                    
                }
            } else {
                document.body.appendChild(profile)
                TweenLite.from(profile, 1, {
                    autoAlpha:0, 
                    x: '500%', 
                    ease: Expo.easeInOut,
                    y: 0
                });
            }

        } else if ( classes.has(target, 'js-experience') ) {

            console.log('clic experience')
            const experience = create({
              selector: 'div',
              id: 'menu-wrap',
              styles: '`is-exp-content`',
              html: expContent
            });

            if (document.getElementById('menu-wrap')) {
                if (document.getElementById('profile-exists')) {
                    const profileOut = document.getElementById('menu-wrap')
                    document.body.appendChild(experience)
                    function removeProfileMenu() {
                        console.log(profileOut)
                        document.body.removeChild(profileOut)
                        console.log(profileOut)
                    }
                    let tl = new TimelineLite()
                    tl.to(profileOut, 0.5, {
                        autoAlpha:0, 
                        x: '500%', 
                        ease: Expo.easeInOut,
                        y: 0
                    });
                    tl.from(experience, 1, {
                        autoAlpha:0, 
                        x: '500%', 
                        ease: Expo.easeInOut,
                        y: 0
                    });
                    tl.addPause(1.5, removeProfileMenu);
                }
            } else {
                document.body.appendChild(experience)
                TweenLite.from(profile, 1, {
                    autoAlpha:0, 
                    x: '500%', 
                    ease: Expo.easeInOut,
                    y: 0
                });
            }
        }

    }

    handleClosure(req, done) {
        console.log('clic detected')
        const menuWrapOut = document.getElementById('menu-wrap')
        TweenLite.to(menuWrapOut, 0.5, {
            autoAlpha:0, 
            x: '500%', 
            ease: Expo.easeInOut,
            y: 0
        });
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