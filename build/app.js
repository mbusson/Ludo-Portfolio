(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _domSelect = require('dom-select');

var _domSelect2 = _interopRequireDefault(_domSelect);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var config = {

	PATH: '',
	BASE: '/',

	$body: document.body,
	$view: (0, _domSelect2.default)('#js-view'),

	width: window.innerWidth,
	height: window.innerHeight,

	isMobile: false

};

exports.default = config;

},{"dom-select":18}],2:[function(require,module,exports){
'use strict';

var _bigwheel = require('bigwheel');

var _bigwheel2 = _interopRequireDefault(_bigwheel);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/* ----------
create our framework instance
see https://github.com/bigwheel-framework/documentation/blob/master/quickstart.md#bigwheel-quick-start
---------- */
module.exports = (0, _bigwheel2.default)(function (done) {
	done({
		// https://github.com/bigwheel-framework/documentation/blob/master/misc.md#overlap
		overlap: false,
		// https://github.com/bigwheel-framework/documentation/blob/master/routes-special.md#initsection
		initSection: require('./sections/preloader'),
		routes: require('./routes')
	});
});

},{"./routes":4,"./sections/preloader":7,"bigwheel":10}],3:[function(require,module,exports){
'use strict';

var _framework = require('framework');

var _framework2 = _interopRequireDefault(_framework);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_framework2.default.init();

},{"framework":2}],4:[function(require,module,exports){
'use strict';

/* ----------
all routes needs to be defined inline
see https://github.com/bigwheel-framework/documentation/blob/master/routes-defining.md#as-section-standard-form
---------- */

module.exports = {
  '/': require('./sections/home'),
  '/home': { section: require('./sections/home'), routes: {
      '/:id': { section: require('./sections/sub') }
    }
  }
};

},{"./sections/home":6,"./sections/sub":8}],5:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _framework = require('framework');

var _framework2 = _interopRequireDefault(_framework);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

var _domSelect = require('dom-select');

var _domSelect2 = _interopRequireDefault(_domSelect);

var _domEvent = require('dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

var _domClasses = require('dom-classes');

var _domClasses2 = _interopRequireDefault(_domClasses);

var _queryDomComponents = require('query-dom-components');

var _queryDomComponents2 = _interopRequireDefault(_queryDomComponents);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Default = function () {
    function Default() {
        var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Default);

        this.isMobile = _config2.default.isMobile;

        this.view = _config2.default.$view;
        this.page = null;
        this.a = null;
    }

    _createClass(Default, [{
        key: 'init',
        value: function init(req, done, options) {

            var opts = options || { sub: false };

            var view = this.view;
            var ready = this.dataAdded.bind(this, done);
            var page = this.page = _utils2.default.biggie.loadPage(req, view, ready, opts);
        }
    }, {
        key: 'dataAdded',
        value: function dataAdded() {

            this.ui = (0, _queryDomComponents2.default)({ el: this.page });

            this.a = _domSelect2.default.all('a', this.page);

            _utils2.default.biggie.addRoutingEL(this.a);
        }
    }, {
        key: 'resize',
        value: function resize(width, height) {

            _config2.default.height = height;
            _config2.default.width = width;
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            _utils2.default.biggie.removeRoutingEL(this.a);
        }
    }]);

    return Default;
}();

module.exports = Default;

},{"config":1,"dom-classes":15,"dom-event":17,"dom-select":18,"framework":2,"query-dom-components":23,"utils":9}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _get = function get(object, property, receiver) {
	if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
		var parent = Object.getPrototypeOf(object);if (parent === null) {
			return undefined;
		} else {
			return get(parent, property, receiver);
		}
	} else if ("value" in desc) {
		return desc.value;
	} else {
		var getter = desc.get;if (getter === undefined) {
			return undefined;
		}return getter.call(receiver);
	}
};

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

var _domClasses = require('dom-classes');

var _domClasses2 = _interopRequireDefault(_domClasses);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

var _domEvent = require('dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Home = function (_Default) {
	_inherits(Home, _Default);

	function Home(opt) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, opt));

		_this.slug = 'home';
		_this.ui = null;

		_this.handlePrint = _this.handlePrint.bind(_this);
		return _this;
	}

	_createClass(Home, [{
		key: 'init',
		value: function init(req, done) {

			_get(Object.getPrototypeOf(Home.prototype), 'init', this).call(this, req, done);
		}
	}, {
		key: 'dataAdded',
		value: function dataAdded(done) {

			_get(Object.getPrototypeOf(Home.prototype), 'dataAdded', this).call(this);

			(0, _domEvent.on)(this.ui.wrap, 'click', this.handleClick);

			this.addEvents();

			done();
		}
	}, {
		key: 'addEvents',
		value: function addEvents() {
			var _this2 = this;

			this.boxes = _utils2.default.js.arrayFrom(this.ui.box);

			this.boxes.forEach(function (box) {
				return (0, _domEvent.on)(box, 'click', _this2.handlePrint);
			});
		}
	}, {
		key: 'removeEvents',
		value: function removeEvents() {
			var _this3 = this;

			this.boxes.forEach(function (box) {
				return (0, _domEvent.off)(box, 'click', _this3.handlePrint);
			});

			this.boxes = null;
		}
	}, {
		key: 'handleClick',
		value: function handleClick(e) {

			var target = e.currentTarget;

			TweenLite.to(target, 0.5, { autoAlpha: 0, y: '-150%', x: '-50%', ease: Power2.easeIn });
		}
	}, {
		key: 'handlePrint',
		value: function handlePrint(e) {

			var target = e.currentTarget;

			var polpo = '<img src="/assets/images/polpo-full.jpg">',
			    medusa = '<img src="/assets/images/medusa-full.jpg">',
			    sirena = '<img src="/assets/images/sirena-full.jpg">',
			    ippo = '<img src="/assets/images/ippocampo-full.jpg">',
			    lepisma = '<img src="/assets/images/lepisma-full.jpg">',
			    pesce = '<img src="/assets/images/pesce-full.jpg">';
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
			TweenLite.to(multiWrap, 0.1, { y: '-50%', x: '-150%', ease: Power0.easeNone });

			multiWrap.innerHTML = '<a class="js-close" id="image-close">×</a>';
			multiWrap.innerHTML += wrapContent;
			TweenLite.to(multiWrap, 1, { autoAlpha: 1, y: '-50%', x: '-50%', ease: Power4.easeOut });
		}
	}, {
		key: 'animateIn',
		value: function animateIn(req, done) {

			_domClasses2.default.add(_config2.default.$body, 'is-' + this.slug);

			TweenLite.to(this.page, 1, {
				y: 0,
				autoAlpha: 1,
				ease: Expo.easeInOut,
				onComplete: done
			});
		}
	}, {
		key: 'animateOut',
		value: function animateOut(req, done) {

			_domClasses2.default.remove(_config2.default.$body, 'is-' + this.slug);

			TweenLite.to(this.page, 0.7, {
				y: 100,
				autoAlpha: 0,
				ease: Expo.easeInOut,
				onComplete: done
			});
		}
	}, {
		key: 'destroy',
		value: function destroy(req, done) {

			_get(Object.getPrototypeOf(Home.prototype), 'destroy', this).call(this);

			this.removeEvents();

			this.ui = null;

			this.page.parentNode.removeChild(this.page);

			done();
		}
	}]);

	return Home;
}(_default2.default);

module.exports = Home;

},{"./default":5,"config":1,"dom-classes":15,"dom-event":17,"utils":9}],7:[function(require,module,exports){
'use strict';

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _domClasses = require('dom-classes');

var _domClasses2 = _interopRequireDefault(_domClasses);

var _domCreateElement = require('dom-create-element');

var _domCreateElement2 = _interopRequireDefault(_domCreateElement);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

TweenLite.defaultEase = Expo.easeOut;

var Preloader = function () {
	function Preloader(onComplete) {
		_classCallCheck(this, Preloader);

		this.preloaded = onComplete;
		this.view = _config2.default.$view;
		this.el = null;

		this.isMobile = _config2.default.isMobile = _config2.default.width <= 1024 ? true : false;
	}

	_createClass(Preloader, [{
		key: 'init',
		value: function init(req, done) {

			$('body').addClass('is-loading');

			this.createDOM();

			done();
		}
	}, {
		key: 'createDOM',
		value: function createDOM() {

			var page = this.view.firstChild;

			this.el = (0, _domCreateElement2.default)({
				selector: 'div',
				styles: 'preloader',
				html: '<div id="loader-wrapper"><div id="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div></div>'
			});

			this.view.insertBefore(this.el, page);
		}
	}, {
		key: 'resize',
		value: function resize(width, height) {

			_config2.default.width = width;
			_config2.default.height = height;
		}
	}, {
		key: 'animateIn',
		value: function animateIn(req, done) {
			var _this = this;

			var tl = new TimelineMax({ paused: true, onComplete: function onComplete() {
					done();
					// call this.preloaded to bring the first route
					_this.preloaded();
				} });
			tl.to(this.el, 1, { autoAlpha: 1 });
			tl.restart();
		}
	}, {
		key: 'animateOut',
		value: function animateOut(req, done) {

			var tl = new TimelineMax({ paused: true, onComplete: done });
			tl.to(this.el, 1, { autoAlpha: 0 });
			tl.restart();
		}
	}, {
		key: 'destroy',
		value: function destroy(req, done) {

			_domClasses2.default.add(_config2.default.$body, 'loaded');
			_domClasses2.default.remove(_config2.default.$body, 'is-loading');

			this.view.removeChild(this.el);

			done();
		}
	}]);

	return Preloader;
}();

module.exports = Preloader;

},{"config":1,"dom-classes":15,"dom-create-element":16}],8:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _framework = require('framework');

var _framework2 = _interopRequireDefault(_framework);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('utils');

var _utils2 = _interopRequireDefault(_utils);

var _domSelect = require('dom-select');

var _domSelect2 = _interopRequireDefault(_domSelect);

var _domClasses = require('dom-classes');

var _domClasses2 = _interopRequireDefault(_domClasses);

var _domCreateElement = require('dom-create-element');

var _domCreateElement2 = _interopRequireDefault(_domCreateElement);

var _queryDomComponents = require('query-dom-components');

var _queryDomComponents2 = _interopRequireDefault(_queryDomComponents);

var _domEvent = require('dom-event');

var _domEvent2 = _interopRequireDefault(_domEvent);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Sub = function () {
    function Sub() {
        var opt = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Sub);

        this.isMobile = _config2.default.isMobile;

        this.view = _config2.default.$view;
        this.slug = null;
        this.el = null;
        this.a = null;
    }

    _createClass(Sub, [{
        key: 'init',
        value: function init(req, done) {

            var id = req.params.id;
            var view = this.view;
            var slug = this.slug = 'sub-' + id;

            var template = '\n            <div class="vertical-center">\n                <div class="vertical-el">\n                    <span class="info">' + id + ' me...</span> <br><br>\n                    <ul>\n                        <li class="js-profile">Profile</li>\n                        <li><a href="https://www.facebook.com/profile.php?id=100011256067635">Facebook</a></li>\n                        <li class="js-experience">Experience</li>\n                    </ul> <br>\n                    <ul>\n                        <li><a href="http://mbusson.com"><< Back</a></li>                        \n                    </ul>\n                    <span style="font-size: 0.75rem" class="info"> To the developer\'s website. </span>\n                </div>\n                <div class="closure"> \n                    <span class="closure-el"> <a href="/home" class="js-closeabout link">×</a> </span>\n                </div>\n            </div>\n        ';

            this.el = (0, _domCreateElement2.default)({
                selector: 'div',
                styles: 'sub-item ' + this.slug,
                html: template
            });

            this.view.appendChild(this.el);
            this.ui = (0, _queryDomComponents2.default)({ el: this.el });
            this.dataAdded();

            _utils2.default.biggie.addRoutingEL(document.querySelectorAll('.link'));

            done();
        }
    }, {
        key: 'dataAdded',
        value: function dataAdded(done) {
            (0, _domEvent.on)(this.ui.profile, 'click', this.handleMenu);
            (0, _domEvent.on)(this.ui.experience, 'click', this.handleMenu);
            (0, _domEvent.on)(this.ui.closeabout, 'click', this.handleClosure);
        }
    }, {
        key: 'handleMenu',
        value: function handleMenu(e) {

            var target = e.currentTarget;

            var profileContent = '\n            <div class="js-profile" id="profile-exists">\n                <p>Nunc scelerisque viverra tincidunt. Mauris sodales nibh sed pretium accumsan. Ut eu sollicitudin risus. Morbi iaculis, justo id gravida commodo, ipsum orci sollicitudin nulla, sit amet pellentesque urna sem sit amet nisi. Sed dolor turpis, posuere ac ante vel, molestie posuere tellus. Morbi facilisis tortor vitae augue ultricies, et viverra mi lacinia. Ut auctor viverra diam, a elementum turpis placerat non. Duis dapibus aliquet magna sed tincidunt. Vivamus vehicula, ligula vel congue hendrerit, erat nisl sodales metus, eu convallis justo risus eget odio.</p>\n                <br>\n                <p>Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel turpis nulla. Pellentesque congue tortor tellus, id hendrerit erat vestibulum a. Sed fermentum vel sapien blandit fermentum. Proin eget lectus sollicitudin, accumsan enim ut, dictum ante. Nulla sed viverra lacus, at imperdiet turpis. Nam non iaculis risus. Fusce et blandit sapien. Nullam quis pretium diam, nec sagittis mauris. Mauris ut convallis metus. Curabitur ultrices erat eu risus ornare, ut hendrerit erat ultricies. Sed sit amet quam sed metus ultrices sagittis nec eu leo.</p>\n                <br>\n                <p>Praesent ornare at lorem vel gravida. Sed posuere sollicitudin neque, vitae consequat libero blandit a. Praesent quis hendrerit mi. Donec at bibendum ipsum, et aliquam nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer mi enim, mollis vel fermentum in, ultrices eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum cursus dui, non aliquet ante fermentum vel. Ut porttitor velit vitae tempus pharetra.</p>\n            </div>\n        ';
            var expContent = '\n            <div class="js-experience" id="exp-exists">\n                <p>Nunc scelerisque viverra tincidunt. Mauris sodales nibh sed pretium accumsan. Ut eu sollicitudin risus. Morbi iaculis, justo id gravida commodo, ipsum orci sollicitudin nulla, sit amet pellentesque urna sem sit amet nisi. Sed dolor turpis, posuere ac ante vel, molestie posuere tellus. Morbi facilisis tortor vitae augue ultricies, et viverra mi lacinia. Ut auctor viverra diam, a elementum turpis placerat non. Duis dapibus aliquet magna sed tincidunt. Vivamus vehicula, ligula vel congue hendrerit, erat nisl sodales metus, eu convallis justo risus eget odio.</p>\n                <br>\n                <p>Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel turpis nulla. Pellentesque congue tortor tellus, id hendrerit erat vestibulum a. Sed fermentum vel sapien blandit fermentum. Proin eget lectus sollicitudin, accumsan enim ut, dictum ante. Nulla sed viverra lacus, at imperdiet turpis. Nam non iaculis risus. Fusce et blandit sapien. Nullam quis pretium diam, nec sagittis mauris. Mauris ut convallis metus. Curabitur ultrices erat eu risus ornare, ut hendrerit erat ultricies. Sed sit amet quam sed metus ultrices sagittis nec eu leo.</p>\n                <br>\n            </div>\n        ';
            var profile = (0, _domCreateElement2.default)({
                selector: 'div',
                id: 'menu-wrap',
                styles: '`is-profile-content`',
                html: profileContent
            });
            var experience = (0, _domCreateElement2.default)({
                selector: 'div',
                id: 'menu-wrap',
                styles: '`is-exp-content`',
                html: expContent
            });

            function removeMenuWrap() {
                var menuOut = document.getElementById('menu-wrap');

                function cleanUp() {
                    document.body.removeChild(menuOut);
                }

                var tl = new TimelineLite();
                tl.to(menuOut, 0.5, {
                    autoAlpha: 0,
                    x: '500%',
                    ease: Expo.easeInOut,
                    y: 0
                });
                tl.addPause(0.5, cleanUp);

                console.log('removed previous menu-wrap');
            }

            function printMenu(name) {
                if (document.getElementById('menu-wrap')) {
                    removeMenuWrap();
                    document.body.appendChild(name);
                    TweenLite.from(name, 1, {
                        autoAlpha: 0,
                        x: '500%',
                        ease: Expo.easeInOut,
                        y: 0
                    });
                } else {
                    document.body.appendChild(name);
                    TweenLite.from(name, 1, {
                        autoAlpha: 0,
                        x: '500%',
                        ease: Expo.easeInOut,
                        y: 0
                    });
                }
                console.log('menu created');
            }

            if (_domClasses2.default.has(target, 'js-profile')) {
                printMenu(profile);
            } else if (_domClasses2.default.has(target, 'js-experience')) {
                printMenu(experience);
            }
        }
    }, {
        key: 'handleClosure',
        value: function handleClosure(req, done) {
            console.log('clic detected');
            var wrapExists = document.getElementById('menu-wrap');
            if (wrapExists) {
                var menuWrapOut = document.getElementById('menu-wrap');
                TweenLite.to(menuWrapOut, 0.5, {
                    autoAlpha: 0,
                    x: '500%',
                    ease: Expo.easeInOut,
                    y: 0
                });
            }
        }
    }, {
        key: 'animateIn',
        value: function animateIn(req, done) {

            _domClasses2.default.add(_config2.default.$body, 'is-' + this.slug);

            this.el.style.display = 'block';

            var tl = new TimelineMax({ paused: true });
            tl.fromTo(this.el, 1, { x: '-320' }, { x: 0, ease: Expo.easeInOut });
            tl.restart();

            done();
        }
    }, {
        key: 'animateOut',
        value: function animateOut(req, done) {

            _domClasses2.default.remove(_config2.default.$body, 'is-' + this.slug);
            var menuWrapOut = document.getElementById('menu-wrap');
            var tl = new TimelineMax({ paused: true, onComplete: done });
            this.el && tl.to(this.el, 0.7, { x: '-320', ease: Expo.easeInOut, clearProps: 'all' });
            tl.to(menuWrapOut, 0.5, { autoAlpha: 0, x: '500%', ease: Expo.easeInOut, clearProps: 'all' });
            tl.restart();
        }
    }, {
        key: 'resize',
        value: function resize(width, height) {}
    }, {
        key: 'destroy',
        value: function destroy(req, done) {

            this.el.parentNode.removeChild(this.el);
            this.el = null;

            done();
        }
    }]);

    return Sub;
}();

module.exports = Sub;

},{"config":1,"dom-classes":15,"dom-create-element":16,"dom-event":17,"dom-select":18,"framework":2,"query-dom-components":23,"utils":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _framework = require('framework');

var _framework2 = _interopRequireDefault(_framework);

var _pleaseAjax = require('please-ajax');

var _pleaseAjax2 = _interopRequireDefault(_pleaseAjax);

var _domCreateElement = require('dom-create-element');

var _domCreateElement2 = _interopRequireDefault(_domCreateElement);

var _domClasses = require('dom-classes');

var _domClasses2 = _interopRequireDefault(_domClasses);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var utils = {

	css: {
		getRect: function getRect(right, bottom) {
			var left = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var top = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

			return 'rect(' + top + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
		}
	},

	js: {
		arrayFrom: function arrayFrom(opt) {

			return Array.prototype.slice.call(opt, 0);
		},
		clamp: function clamp(min, value, max) {

			return Math.max(min, Math.min(value, max));
		},
		scrollTop: function scrollTop() {

			if (window.pageYOffset) return window.pageYOffset;
			return document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop;
		}
	},

	biggie: {
		addRoutingEL: function addRoutingEL(a) {

			utils.js.arrayFrom(a).forEach(function (el) {
				return el.onclick = utils.biggie.handleRoute;
			});
		},
		removeRoutingEL: function removeRoutingEL(a) {

			utils.js.arrayFrom(a).forEach(function (el) {
				return el.onclick = null;
			});
		},
		handleRoute: function handleRoute(e) {

			var target = e.currentTarget;

			if (_domClasses2.default.has(target, 'no-route')) return;

			e.preventDefault();

			_framework2.default.go(target.getAttribute('href'));
		},
		getSlug: function getSlug(req, options) {

			var route = req.route === "/" ? '/home' : req.route;
			var params = Object.keys(req.params).length === 0 && JSON.stringify(req.params) === JSON.stringify({});

			if (!params) {

				for (var key in req.params) {
					if (req.params.hasOwnProperty(key)) {

						if (route.indexOf(key) > -1) {
							route = route.replace(':' + key, options.sub ? '' : req.params[key]);
						}
					}
				}
			}

			if (route.substring(route.length - 1) == '/') {
				route = route.slice(0, -1);
			}

			return route.substr(1);
		},
		createPage: function createPage(req, slug) {

			return (0, _domCreateElement2.default)({
				selector: 'div',
				id: 'page-' + slug,
				styles: 'page page-' + slug
			});
		},
		loadPage: function loadPage(req, view, done, options) {

			var slug = utils.biggie.getSlug(req, options);
			var page = utils.biggie.createPage(req, slug);

			_pleaseAjax2.default.get('/templates/' + slug + '.html', {
				success: function success(object) {
					page.innerHTML = object.data;
					done();
				}
			});

			return view.appendChild(page);
		}
	}
};

exports.default = utils;

},{"dom-classes":15,"dom-create-element":16,"framework":2,"please-ajax":22}],10:[function(require,module,exports){
(function (global){
/** @module bigwheel */

var vm = require('bw-vm');
var viewmediator = require('bw-viewmediator');
var router = require('bw-router');
var on = require('dom-event');
var EventEmitter = require('events').EventEmitter;

/**
 * When instantiating bigwheel you must pass in a setup function.
 *
 * In this function you may do any preparation that must be done for your
 * application such as creating a global Canvas element or something else.
 *
 * The setup function must either return a settings object for bigwheel or
 * this function must receive a callback which you will call with the settings
 * object. Furthermore you can pass back a promise from this settings function
 * which will receive the settings object.
 *
 * The following documents what can be passed in the settings object:
 * ```javascript
 * {
 * 	///// REQUIRED /////
 *
 * 	// routes defines all the routes for your website it can also define a 
 * 	// 404 section which will be opened if the route is incorrect
 *  routes: {
 *  	postHash: '#!', // this string is appended before the route. 
 *  	                // by default it's value is '#!'
 * 		'/': someSection,
 * 		'/someOther': someOtherSection,
 * 		'404': sectionFourOhFour
 *  },
 *  
 *  ///// OPTIONAL /////
 *  initSection: preSection, // this could be a section that is run always
 *  						 // before routes are even evaluated. This is
 *  						 // usefulf for site preloaders or landing pages
 *  						 // such as age verification (something the user
 *  						 // must see)
 * 
 * 	autoResize: true, // by default this value is true. When this value is
 * 					  // true a resize listener is added to the window
 * 					  // whenever the window changes size it's width and
 * 					  // height is passed to all instantiated sections
 * }
 * ```
 * 
 * @class bigwheel
 * @param  {Function} settingsFunc This settings function will be used to
 * initialize bigwheel.
 */
function bigwheel(settingsFunc) {

	if(!(this instanceof bigwheel))
		return new bigwheel(settingsFunc);

	this.settingsFunc = settingsFunc;
	EventEmitter.call(this);

}

bigwheel.prototype = Object.create(EventEmitter.prototype);

/**
 * init must be called to start the framework. This was done to allow for
 * a developer to have full control of when bigwheel starts doing it's thing.
 */
bigwheel.prototype.init = function() {

	var onSettingComplete = function(settings) {

		var s = this.s = settings;

		if(s === undefined)
			throw new Error('Your settings function must return a settings Object');

		if(s.routes === undefined)
			throw new Error('Your settings object must define routes');

		s.autoResize = s.autoResize === undefined ? true : s.autoResize;

		this.previousRoute = undefined;

		this.depth = [];
		this.vms = [];
		this.routes = {};
		this.parseRoutes(settings.routes);

		// setup the router
		this.router = router(this.routes);
		this.router.on('route', this.show.bind(this));

		// Re-dispatch routes
		this.router.on('route',this.emit.bind(this,'route'));

		// check if 
		if(s.autoResize && global.innerWidth !== undefined && global.innerHeight !== undefined) {

			on(global, 'resize', this.onResize.bind(this));

			this.onResize();
		}
		
		// handle if there is an init section this should be shown even before
		// the router resolves
		if(s.initSection)
			this.show({section: s.initSection.bind(undefined, this.router.init.bind(this.router))});
		else
			this.router.init();
	}.bind(this);


	var rVal = this.settingsFunc(onSettingComplete);

	// check if promises are used instead
	// it might be good to remove this since theres no
	// need for promises in this case
	if(rVal && rVal.then)
		rVal.then(onSettingComplete);
	// check if just an object was returned which has .routes
	else if(rVal && rVal.routes)
		onSettingComplete(rVal);

	return this;
};

bigwheel.prototype.parseRoutes = function(routes,prefix) {
	var depth = (prefix || '').split('/').length;
	if (this.vms.length<depth) this.vms.push(vm(this.s));
	prefix = prefix || "";
	for (var key in routes) {
		if (key.charAt(0)==='/') {
			if (prefix) routes[key].parent = prefix;
			this.routes[prefix+key] = routes[key];
			if (routes[key].routes) {
				this.parseRoutes(routes[key].routes,prefix+key);
				delete routes[key].routes;
			}
		} else {
			this.routes[key] = routes[key];
		}
	}
};

/**
 * go can be called to go to another section.
 * 
 * @param  {String} to This is the route you want to go to.
 *
 * @example
 * ```javascript
 * framework.go('/landing');
 * ```
 */
bigwheel.prototype.go = function(to,options) {

	this.router.go(to,options);

	return this;
};

/**
 * Destroys bighweel
 */
bigwheel.prototype.destroy = function() {

	this.router.removeAllListeners('route');
	this.router.destroy();

};

/**
 * Resize can be called at any time. The values passed in for
 * width and height will be passed to the currently instantiated
 * sections.
 *
 * If `autoResize` was not passed in or it was true then resize
 * will automatically be called when the window of the browser
 * resizes.
 * 
 * @param  {Number} w width value you'd like to pass to the sections
 * @param  {Number} h height value you'd like to pass to the sections
 */
bigwheel.prototype.resize = function(w, h) {
	for (var i=0; i<this.vms.length; i++) {
		this.vms[i].resize(w,h);
	}
};

bigwheel.prototype.show = function(info) {
	var section = info.section;
	var req = info.route || {};
	req.previous = this.previousRoute;
	req.framework = this;

	if (req.route) {
		var depth = [this.rebuildRoute(req.route,info.path)];
		var views = [section.section || section];
		while (section.parent) {
			depth.unshift(this.rebuildRoute(section.parent,info.path));
			section = this.routes[section.parent];
			views.unshift(section.section || section);
		}

		var prevDepth = this.depth;
		this.depth = depth;
		var total = Math.max(prevDepth.length,depth.length);
		for (var i=0; i<total; i++) {
			if (i>depth.length-1) {
				this.vms[i].clear(req);
			} else if (prevDepth[i]!=depth[i]) {
				this.vms[i].show(this.parseSection(views[i]),req);
			}
		}
	} else {
		this.vms[0].show(this.parseSection(section.section || section),req);
	}
	
	this.previousRoute = info.route;
};

bigwheel.prototype.rebuildRoute = function(route,path) {
	var path = path.split('/')
	path.length = route.split('/').length;
	return path.join('/');
};

bigwheel.prototype.parseSection = function(section) {
	if (Array.isArray(section)) {
		for (var i=0; i<section.length; i++) {
			if (typeof section[i] == 'function') section[i] = new section[i]();
		}
		return viewmediator.apply(undefined,section);
	} else if (typeof section == 'function') {
		return new section();
	} else {
		return section;
	}
};

bigwheel.prototype.onResize = function() {

	this.resize(global.innerWidth, global.innerHeight);
};

module.exports = bigwheel;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bw-router":13,"bw-viewmediator":11,"bw-vm":14,"dom-event":12,"events":19}],11:[function(require,module,exports){
function mediator() {

  if(!( this instanceof mediator )) {

    var rVal = Object.create(mediator.prototype);
    mediator.apply(rVal, arguments);
    return rVal;
  }

  this.items = Array.prototype.slice.call(arguments);
}

mediator.prototype = {

  init: function(data, done) {
    this.callAll('init', data, done);
  },

  resize: function(w, h) {

    for(var i = 0, len = this.items.length; i < len; i++) {

      if(typeof this.items[ i ].resize === 'function') {
        this.items[ i ].resize(w, h);
      }
    }
  },

  animateIn: function(data, done) {
    this.callAll('animateIn', data, done);    
  },

  animateOut: function(data, done) {
    this.callAll('animateOut', data, done);
  },

  destroy: function(data, done) {
    this.callAll('destroy', data, done);
  },

  clear: function(done) {
    this.callAll('clear', data, done);
  },

  callAll: function(func, data, done) {

    var numCalled = 0;
    var numToCall = 0;
    var i;
    var len;

    this.items.forEach(function(section) {

      if(typeof section[ func ] === 'function') {
        numToCall++;
      }
    });

    // if there are no functions to call simply just return
    if(numToCall === 0) {

      done();
    } else {

      this.items.forEach(function(section) {

        if(typeof section[ func ] === 'function') {
          section[ func ].call(section, data, onSectionDone);
        }
      });
    }

    function onSectionDone() {
      if(++numCalled === numToCall) {
        done();
      }
    }
  }
};

module.exports = mediator;
},{}],12:[function(require,module,exports){
module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOn(element[ i ], event, callback, capture);
    }
  } else {

    oneOn(element, event, callback, capture);  
  }

  return callback;
}

function off (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOff(element[ i ], event, callback, capture);
    }
  } else {

    oneOff( element, event, callback, capture );
  }
  
  return callback;
}

function oneOn (element, event, callback, capture) {

  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
}

function oneOff (element, event, callback, capture) {

  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
}
},{}],13:[function(require,module,exports){
(function (global){
var routes = require('routes');
var EventEmitter = require('events').EventEmitter;
var loc = new (require('location-bar'))();
var noop = function() {};

function router(settings) {

	if( !( this instanceof router ) ) {

		return new router(settings);
	}

	var s = this.s = settings || {};

	s.postHash = s.postHash || '!';

	this.lastRoute = null;
	this.childRouter = null;
	this.childFullRoute = null;
	this.childBaseRoute = null;
	this.router = routes();

	EventEmitter.call(this);
}

var p = router.prototype = Object.create(EventEmitter.prototype);

p.init = function() {

	var s = this.s;
	var i;

	// figure out a start section
	if( s[ '/' ] === undefined ) {

		// find the first path which would be a section
		for(i in s) {

			if( i[ 0 ] == '/' ) {

				s.start = i;

				break;
			}
		}
	} else {

		s.start = '/';
	}


	// now setup routes
	for(i in s) {

		if( i[ 0 ] == '/' || i == '404') {

			this.router.addRoute(i, noop);
		}
	}

	this.onURL = this.onURL.bind(this);

	if( global.location ) {
		loc.start({pushState: this.s.pushState!==undefined ? this.s.pushState : true, root: this.s.root || '/'});
		this.hasPushState = loc.hasPushState();
		loc.onChange(this.onURL);
		loc.loadUrl();
	} else {
		this.onURL();
	}
	
	return this;
};

p.destroy = function() {

	if(global.location) {
		loc.stop();
	}
};

p.add = function(route, section) {

	var s = this.s;

	s[ route ] = section;

	return this;
};

p.go = function(routeStr,options) {

	var routeData;
	var section;
	var newURL;
	var doURLChange;

	if( routeStr.charAt(0) != '/' ) {
		routeStr = '/' + routeStr;
	}

	newURL = (this.hasPushState ? '' : this.s.postHash) + routeStr;
	routeData = this.getRouteData(routeStr) || this.getRouteData('404');
	section = this.getSection(routeData);
	doURLChange = this.useURL(section);

	// if this is not a section descriptor or it is a descriptor and we should updateURL
	if( global.location && doURLChange ) {
		var url = this.hasPushState ? global.location.pathname : global.location.hash.replace(/^#/, '');
		if(url != newURL) {
			loc.update(newURL,{
				trigger: (options && options.silent) ? false : true,
				replace: (options && options.replace) ? true : false
			});
		} else if(section.duplicate || !section.useURL) {
			// Check if duplicate is set. The check is done here since, onhashchange event triggers 
			// only when url changes and therefore cannot check to allow duplicate/repeating route

			// Additionally check if useURL is set to false. If not, the route is not triggered by
			// url changes
			this.doRoute(routeData, section, routeStr);
		} 
	} else if( !global.location || !doURLChange ) {
		this.doRoute(routeData, section, routeStr);
	}
};

p.doRoute = function(routeData, section, path) {

	var s = this.s;

	// check if this is a redirect
	if( typeof section == 'string' ) {

		this.go(section);
	} else { 

		if(routeData.route !== this.lastResolvedRoute || section.duplicate) {

			this.lastResolvedRoute = routeData.route;

			// otherwise treat it as a regular section
			// if this is a object definition vs a section definition (regular section or array)
			this.emit('route', {
				section: section,
				route: routeData,
				path: path
			});
		}
	} 
};

p.getRouteData = function(routeStr) {

	var routeData = this.router.match(routeStr);

	if(routeData) {
		this.lastRoute = routeData.route;
	}

	return routeData;
};

p.getSection = function(routeData) {

	if(routeData) {
		var hasWildcard = routeData.route && (routeData.route.match(/.*[\[\]@!$&:'()*+,;=].*/g) || routeData.route instanceof RegExp);
		var sec = this.s[ routeData.route ];
		if (hasWildcard && sec.duplicate===undefined) {
			if (!sec.section) {
				return {section: sec, duplicate: true};
			} else {
				sec.duplicate = true;
				return sec;
			}
		}	else {
			return sec;
		}
	} else {

		return null;
	}
};

p.useURL = function(section) {

	return section && 
		   ( section.section === undefined ||  // if this is not a section descriptor update url
		   ( section.section && section.useURL || section.useURL === undefined ) ); //is descriptor and has useURL or undefined
};

p.onURL = function(url) {
	var routeStr = '/';
	var routeData;
	var section;

	if( global.location && url!==undefined && url!==null ) {

		if (url.charAt(0) != '/') url = '/' + url;
		// if we've already looked at this url then just get out of this function
		if(url === this.resolved) {
			return;
		}

		this.resolved = url;
		routeStr = (this.hasPushState || url.length<2) ? url : url.substr(1 + this.s.postHash.length);
	}

	routeData = this.getRouteData(routeStr) || this.getRouteData('404');
	section = this.getSection(routeData);

	// see if we can deep link into this section (either normal or 404 section)
	if( this.useURL(section) ) {
		this.doRoute(routeData, section, routeStr);
	// else check if there's a 404 if so then go there
	} else if( this.s['404'] ){

		routeData = this.getRouteData('404');
		section = this.getSection(routeData);
		this.doRoute(routeData, section, routeStr);
	}
};

module.exports = router;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"events":19,"location-bar":21,"routes":26}],14:[function(require,module,exports){
function ViewManager( settings ) {

  if( !( this instanceof ViewManager ) ) {
    return new ViewManager( settings );
  }

  var s = this.s = settings || {};

  s.overlap = s.overlap === undefined ? true : s.overlap;
  s.width = s.width || 980;
  s.height = s.height || 570;

  this.cContent = null;
  this.nContent = null;
}

var p = ViewManager.prototype = {

  show: function( content, data, onComplete ) {

    // check if data was passed in
    if( onComplete === undefined &&
      typeof data == 'function' ) {

      onComplete = data;
      data = null;
    }

    this.data = data;

    if( content != this.nContent && content != this.cContent ) {

      if( this.nContent && this.nContent.destroy )
        this.nContent.destroy(this.data, function() { });

      this.nContent = content;

      if( content.init ) {

        content.init( this.data, this.swap.bind( this, this.nContent, onComplete ) ); 
      } else {

        this.swap( this.nContent, onComplete );
      }
    }
  },

  clear: function( data, onComplete ) {

    // check if data was passed in
    if( onComplete === undefined &&
      typeof data == 'function' ) {

      onComplete = data;
      data = null;
    }

    this.data = data;

    if( this.nContent && this.nContent.destroy ) {
      this.nContent.destroy( this.data, function() { } );
    }

    if( this.cContent ) {

      var onOldOut = function( oldContent ) {

        if( oldContent.destroy ) {
          oldContent.destroy( this.data , function() { } );
        }

        if( onComplete ) {
          onComplete( oldContent );
        }
        
        if ( this.cContent === oldContent ) {
          this.cContent = null;
        }

      }.bind( this, this.cContent );

      // now take out countent
      if( this.cContent.animateOut ) {
        this.cContent.animateOut( this.data , onOldOut );
      } else {
        onOldOut();
      }
    }
  },

  resize: function( width, height ) {

    var s = this.s;

    s.width = width;
    s.height = height;

    if( this.cContent && this.cContent.resize )
      this.cContent.resize( width, height );
  },

  swap: function( newContent, onComplete ) {

    if( newContent == this.nContent ) {

      var s = this.s;
      var oldContent = this.cContent;
      var onOldOut;

      var onNewIn = function() {

        if( s.onEndAniIn ) {
          s.onEndAniIn( newContent, oldContent );
        }

        if( onComplete ) {
          onComplete( newContent, oldContent );
        }
      };

      var bringInNewContent = function() {

        if( s.onStartAniIn ) {
          s.onStartAniIn( newContent, this.cContent );
        }

        this.cContent = newContent;
        this.nContent = null;

        if( newContent.animateIn ) {
          newContent.animateIn( this.data, onNewIn );  
        } else {
          onNewIn();
        }
      }.bind( this );

      var takeOutOldContent = function() {

        if( s.onStartAniOut ) {
          s.onStartAniOut( newContent, oldContent );
        }

        // if there's an animateOut function execute it on oldContent
        if( oldContent.animateOut ) {
          oldContent.animateOut( this.data, onOldOut );
        } else {
          onOldOut();
        }
      }.bind( this );

      var destroyOldContent = function() {

        if( s.onEndAniOut ) {
          s.onEndAniOut( newContent, oldContent );
        }

        if( oldContent.destroy ) {
          oldContent.destroy( this.data, function() { } );
        }
      }.bind( this );


      // resize the newContent if it has a resize method
      if( newContent.resize ) {
        newContent.resize( s.width, s.height );
      }

      // check if there's content on screen already
      if( this.cContent ) {

        if( s.overlap ) {

          onOldOut = destroyOldContent;
        } else {

          onOldOut = function() {

            destroyOldContent();
            bringInNewContent();
          }.bind(this);
        }

        // call the callback to notify that we've started animating out
        takeOutOldContent();

        if( s.overlap ) {

          bringInNewContent();
        }
      // else we don't have current content just bring in the new
      } else {

        bringInNewContent();
      }
    }
  }
};

// The try catch is needed for <IE9
try {
  Object.defineProperty(p, 'overlap', {
    get: function() {
      return this.s.overlap;
    },

    set: function(value) {
      this.s.overlap = value;
    }
  });
} catch(e) {}

module.exports = ViewManager;
},{}],15:[function(require,module,exports){
/**
 * Module dependencies.
 */

var index = require('indexof');

/**
 * Whitespace regexp.
 */

var whitespaceRe = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

module.exports = classes;
module.exports.add = add;
module.exports.contains = has;
module.exports.has = has;
module.exports.toggle = toggle;
module.exports.remove = remove;
module.exports.removeMatching = removeMatching;

function classes (el) {
  if (el.classList) {
    return el.classList;
  }

  var str = el.className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(whitespaceRe);
  if ('' === arr[0]) arr.shift();
  return arr;
}

function add (el, name) {
  // classList
  if (el.classList) {
    el.classList.add(name);
    return;
  }

  // fallback
  var arr = classes(el);
  var i = index(arr, name);
  if (!~i) arr.push(name);
  el.className = arr.join(' ');
}

function has (el, name) {
  return el.classList
    ? el.classList.contains(name)
    : !! ~index(classes(el), name);
}

function remove (el, name) {
  if ('[object RegExp]' == toString.call(name)) {
    return removeMatching(el, name);
  }

  // classList
  if (el.classList) {
    el.classList.remove(name);
    return;
  }

  // fallback
  var arr = classes(el);
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  el.className = arr.join(' ');
}

function removeMatching (el, re, ref) {
  var arr = Array.prototype.slice.call(classes(el));
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      remove(el, arr[i]);
    }
  }
}

function toggle (el, name) {
  // classList
  if (el.classList) {
    return el.classList.toggle(name);
  }

  // fallback
  if (has(el, name)) {
    remove(el, name);
  } else {
    add(el, name);
  }
}

},{"indexof":20}],16:[function(require,module,exports){
/*
`dom-create-element`

var create = require('dom-create-element');

var el = create({
  selector: 'div',
  styles: 'preloader',
  html: '<span>Text</span>'
});
*/

module.exports = create;

function create(opt) {

	opt = opt || {};
	
	var el = document.createElement(opt.selector);
	
	if(opt.attr) for(var index in opt.attr)
		opt.attr.hasOwnProperty(index) && el.setAttribute(index, opt.attr[index]);
	
	"a" == opt.selector && opt.link && (
		el.href = opt.link,
		opt.target && el.setAttribute("target", opt.target)
	);

	"img" == opt.selector && opt.src && (
		el.src = opt.src,
		opt.lazyload && (
			el.style.opacity = 0,
			el.onload = function(){
				el.style.opacity = 1;
			}
		)
	);

	opt.id && (el.id = opt.id);
	opt.styles && (el.className = opt.styles);

	opt.html && (el.innerHTML = opt.html);
	opt.children && (el.appendChild(opt.children));
	
	return el;
};
},{}],17:[function(require,module,exports){
module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  !element.addEventListener && (event = 'on' + event);
  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
  return callback;
}

function off (element, event, callback, capture) {
  !element.removeEventListener && (event = 'on' + event);
  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
  return callback;
}

},{}],18:[function(require,module,exports){
module.exports = one;
module.exports.all = all;

function one (selector, parent) {
  parent || (parent = document);
  return parent.querySelector(selector);
}

function all (selector, parent) {
  parent || (parent = document);
  var selection = parent.querySelectorAll(selector);
  return  Array.prototype.slice.call(selection);
}

},{}],19:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],20:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],21:[function(require,module,exports){
// LocationBar module extracted from Backbone.js 1.1.0
//
// the dependency on backbone, underscore and jquery have been removed to turn
// this into a small standalone library for handling browser's history API
// cross browser and with a fallback to hashchange events or polling.

(function(define) {
define(function() {

  // 3 helper functions we use to avoid pulling in entire _ and $
  var _ = {};
  _.extend = function extend(obj, source) {
    for (var prop in source) {
      obj[prop] = source[prop];
    }
    return obj;
  }
  _.any = function any(arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
      if (fn(arr[i])) {
        return true;
      }
    }
    return false;
  }
  
  function on(obj, type, fn) {
    if (obj.attachEvent) {
      obj['e'+type+fn] = fn;
      obj[type+fn] = function(){ obj['e'+type+fn]( window.event ); };
      obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  }
  function off(obj, type, fn) {
    if (obj.detachEvent) {
      obj.detachEvent('on'+type, obj[type+fn]);
      obj[type+fn] = null;
    } else {
      obj.removeEventListener(type, fn, false);
    }
  }





  // this is mostly original code with minor modifications
  // to avoid dependency on 3rd party libraries
  //
  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = function() {
    this.handlers = [];

    // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
    //
    // _.bindAll(this, 'checkUrl');
    //
    var self = this;
    var checkUrl = this.checkUrl;
    this.checkUrl = function () {
      checkUrl.apply(self, arguments);
    };

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("LocationBar has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, options);
      this.location         = this.options.location || this.location;
      this.history          = this.options.history || this.history;
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        // MODIFICATION OF ORIGINAL BACKBONE.HISTORY
        //
        // var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        // this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        //
        this.iframe = document.createElement("iframe");
        this.iframe.setAttribute("src", "javascript:0");
        this.iframe.setAttribute("tabindex", -1);
        this.iframe.style.display = "none";
        document.body.appendChild(this.iframe);
        this.iframe = this.iframe.contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        on(window, 'popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        on(window, 'hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      off(window, 'popstate', this.checkUrl);
      off(window, 'hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function() {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });



  // add some features to History

  // a more intuitive alias for navigate
  History.prototype.update = function () {
    this.navigate.apply(this, arguments);
  };

  // a generic callback for any changes
  History.prototype.onChange = function (callback) {
    this.route(/^(.*?)$/, callback);
  };

  // checks if the browser has pushstate support
  History.prototype.hasPushState = function () {
    if (!History.started) {
      throw new Error("only available after LocationBar.start()");
    }
    return this._hasPushState;
  };






  // export
  return History;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });
},{}],22:[function(require,module,exports){
/**
 * please-ajax - A small and modern AJAX library.
 * @version v2.0.2
 * @author Dan Reeves <hey@danreev.es> (http://danreev.es/)
 * @link https://github.com/fffunction/please
 * @license MIT
 */
(function () {
    'use strict';

    var exports = {};

    var parse = function (req) {
        var result;
        try {
            result = JSON.parse(req.responseText);
        } catch (e) {
            result = req.responseText;
        }
        return {data:result, request:req};
    };

    var xhr = function (type, url, data, opts) {
        var options = {
            fileForm: opts.fileForm || false,
            promise: opts.promise || false,
            headers: opts.headers || {},
            success: opts.success || function () {},
            error: opts.error || function () {},
            loadstart: opts.loadstart || function () {},
            progress: opts.progress || function () {},
            load: opts.load || function () {}
        },
        request,
        isString = typeof data === 'string',
        isJSON = false;
        if (isString) {
            try {
                isJSON = !!JSON.parse(data);
            } catch (e) {
                isJSON = false;
            }
        }
        // IE9 Form Upload
        if (options.fileForm && isString) {
            var iframe  = document.createElement('iframe');
            request = {
                readyState: false,
                status: false,
                onload: function () {},
                onerror: function () {},
                send: function () {
                    iframe.style.display = 'none';
                    iframe.name = iframe.id = 'iframe'+Math.ceil(Math.random() * 1e5).toString();
                    document.body.appendChild(iframe);
                    iframe.addEventListener('load', function () {
                        var result = this.responseText = iframe.contentDocument.body.innerHTML;
                        if (result.toString().match(/^20\d\b/)) { // 20x status code
                            this.readyState = 4;
                            this.status = 200;
                            options.success();
                            this.onload();
                        } else {
                            options.error();
                            this.onerror();
                        }
                        document.body.removeChild(iframe);
                        options.fileForm.action = options.fileForm.action.slice(options.fileForm.action.search(/\?ie9/), 4);
                    }.bind(this));
                    if (options.fileForm.action.search(/\?ie9/) < 0) {
                        options.fileForm.action = (options.fileForm.action) ? options.fileForm.action + '?ie9' : '?ie9';
                    }
                    options.fileForm.target = iframe.id;
                    options.fileForm.submit();
                    options.loadstart();
                }
            };
        } else {
            var XHR = window.XMLHttpRequest || ActiveXObject;
            request = new XHR('MSXML2.XMLHTTP.3.0');
            request.open(type, url, true);
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if (isString) {
                if (isJSON) request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                else request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            }
            if (!!request.upload) {
                request.upload.addEventListener('loadstart', options.loadstart, false);
                request.upload.addEventListener('progress', options.progress, false);
                request.upload.addEventListener('load', options.load, false);
            }
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 300) {
                        options.success(parse(request));
                    } else {
                        options.error(parse(request));
                    }
                }
            };
        }
        for (var header in options.headers) {
            if (options.headers.hasOwnProperty(header)) {
                request.setRequestHeader(header, options.headers[header]);
            }
        }
        if (!!window.Promise && options.promise) {
            return new Promise(function(resolve, reject) {
                request.onload = function() {
                    if (request.status >= 200 && request.status < 300) {
                        request.response ? resolve(request.response) : resolve(request.responseText);
                    }
                    else {
                        reject(Error(request.statusText));
                    }
                };

                request.onerror = function() {
                    reject(Error('Network Error'));
                };

                request.send(data);
            });
        } else {
            request.send(data);
        }
        return request;
    };

    exports['get'] = function get (url, opts) {
        var options = opts || {};
        return xhr('GET', url, undefined, options);
    };

    exports['put'] = function put (url, data, opts) {
        var options = opts || {};
        return xhr('PUT', url, data, options);
    };

    exports['patch'] = function patch (url, data, opts) {
        var options = opts || {};
        return xhr('PATCH', url, data, options);
    };

    exports['post'] = function post (url, data, opts) {
        var options = opts || {};
        return xhr('POST', url, data, options);
    };

    exports['del'] = exports['delete'] = function del (url, opts) {
        var options = opts || {};
        return xhr('DELETE', url, undefined, options);
    };

    if (typeof define === 'function' && define['amd']) {
      define(function() { return exports; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = exports;
    } else if (typeof this !== 'undefined') {
      this['please'] = exports;
    }

}).call(this);

},{}],23:[function(require,module,exports){
/* globals jQuery */

'use strict';

var camelCase = require('./lib/camelCase');
var extractSuffix = require('./lib/extractSuffix');

module.exports = function (options) {
  var _queryDom = {};
  var opts = options || {};
  var container = opts.el || document.body;
  var prefix = opts.prefix || 'js-';
  var wantJquery = opts.usejQuery || false;
  var hasJquery = wantJquery && typeof jQuery !== 'undefined';

  if(!container) {
    return console.warn('queryDom warning: the container specified in empty');
  }

  var targetElements;
  if(hasJquery) {
    targetElements = jQuery(container).find('*[class*="' + prefix + '"]');
  } else {
    targetElements = container.querySelectorAll('*[class*="' + prefix + '"]');
  }

  for (var i = 0; i < targetElements.length; i++) {
    var element = targetElements[i];
    var className = element.className;
    // Getting className on SVGs
    if(typeof className !== 'string') {
      className = element.getAttribute('class');
    }
    var splitKeys = extractSuffix(className, prefix);
    if(splitKeys) {
      for (var j = 0; j < splitKeys.length; j++) {
        var pureClass = splitKeys[j];
        var key = camelCase(pureClass);
        if(key) {
          var queryEl = _queryDom[key];
          if(queryEl && !queryEl._isAllSelected) {
            _queryDom[key] = hasJquery ?
              jQuery('.' + prefix + pureClass) :
              container.querySelectorAll('.' + prefix + pureClass);
            _queryDom[key]._isAllSelected = true;
          }
          if(hasJquery) {
            element = jQuery(element);
          }
          if(!queryEl) {
            _queryDom[key] = element;
          }
        }
      }
    } else {
      console.warn('queryDom warning: one of your prefix is empty');
    }
  }

  return _queryDom;
};

},{"./lib/camelCase":24,"./lib/extractSuffix":25}],24:[function(require,module,exports){
'use strict';

// Credits - http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
module.exports = function (input) {
  return input.toLowerCase().replace(/-(.)/g, function(match, group) {
    return group.toUpperCase();
  });
};
},{}],25:[function(require,module,exports){
'use strict';

module.exports = function extractSuffix(string, prefix) {
  var a = 1;
  var res = [];

  while(a) {
    var subString = string.split(prefix)[a];
    if(subString) {
      res.push(subString.split(' ')[0]);
      ++a;
    } else {
      a = 0;
    }
  }

  return res;
};
},{}],26:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.routes=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var localRoutes = [];


/**
 * Convert path to route object
 *
 * A string or RegExp should be passed,
 * will return { re, src, keys} obj
 *
 * @param  {String / RegExp} path
 * @return {Object}
 */

var Route = function(path){
  //using 'new' is optional

  var src, re, keys = [];

  if(path instanceof RegExp){
    re = path;
    src = path.toString();
  }else{
    re = pathToRegExp(path, keys);
    src = path;
  }

  return {
  	 re: re,
  	 src: path.toString(),
  	 keys: keys
  }
};

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String} path
 * @param  {Array} keys
 * @return {RegExp}
 */
var pathToRegExp = function (path, keys) {
	path = path
		.concat('/?')
		.replace(/\/\(/g, '(?:/')
		.replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function(_, slash, format, key, capture, optional){
			if (_ === "*"){
				keys.push(undefined);
				return _;
			}

			keys.push(key);
			slash = slash || '';
			return ''
				+ (optional ? '' : slash)
				+ '(?:'
				+ (optional ? slash : '')
				+ (format || '') + (capture || '([^/]+?)') + ')'
				+ (optional || '');
		})
		.replace(/([\/.])/g, '\\$1')
		.replace(/\*/g, '(.*)');
	return new RegExp('^' + path + '$', 'i');
};

/**
 * Attempt to match the given request to
 * one of the routes. When successful
 * a  {fn, params, splats} obj is returned
 *
 * @param  {Array} routes
 * @param  {String} uri
 * @return {Object}
 */
var match = function (routes, uri, startAt) {
	var captures, i = startAt || 0;

	for (var len = routes.length; i < len; ++i) {
		var route = routes[i],
		    re = route.re,
		    keys = route.keys,
		    splats = [],
		    params = {};

		if (captures = uri.match(re)) {
			for (var j = 1, len = captures.length; j < len; ++j) {
				var key = keys[j-1],
					val = typeof captures[j] === 'string'
						? unescape(captures[j])
						: captures[j];
				if (key) {
					params[key] = val;
				} else {
					splats.push(val);
				}
			}
			return {
				params: params,
				splats: splats,
				route: route.src,
				next: i + 1
			};
		}
	}
};

/**
 * Default "normal" router constructor.
 * accepts path, fn tuples via addRoute
 * returns {fn, params, splats, route}
 *  via match
 *
 * @return {Object}
 */

var Router = function(){
  //using 'new' is optional
  return {
    routes: [],
    routeMap : {},
    addRoute: function(path, fn){
      if (!path) throw new Error(' route requires a path');
      if (!fn) throw new Error(' route ' + path.toString() + ' requires a callback');

      var route = Route(path);
      route.fn = fn;

      this.routes.push(route);
      this.routeMap[path] = fn;
    },

    match: function(pathname, startAt){
      var route = match(this.routes, pathname, startAt);
      if(route){
        route.fn = this.routeMap[route.route];
        route.next = this.match.bind(this, pathname, route.next)
      }
      return route;
    }
  }
};

Router.Route = Route
Router.pathToRegExp = pathToRegExp
Router.match = match
// back compat
Router.Router = Router

module.exports = Router

},{}]},{},[1])
(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxjb25maWcuanMiLCJhc3NldHNcXGpzXFxmcmFtZXdvcmsuanMiLCJhc3NldHNcXGpzXFxtYWluLmpzIiwiYXNzZXRzXFxqc1xccm91dGVzLmpzIiwiYXNzZXRzXFxqc1xcc2VjdGlvbnNcXGRlZmF1bHQuanMiLCJhc3NldHNcXGpzXFxzZWN0aW9uc1xcaG9tZS5qcyIsImFzc2V0c1xcanNcXHNlY3Rpb25zXFxwcmVsb2FkZXIuanMiLCJhc3NldHNcXGpzXFxzZWN0aW9uc1xcc3ViLmpzIiwiYXNzZXRzXFxqc1xcdXRpbHMuanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvbm9kZV9tb2R1bGVzL2J3LXZpZXdtZWRpYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9ub2RlX21vZHVsZXMvZG9tLWV2ZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2J3LXJvdXRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idy12bS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb20tY2xhc3Nlcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb20tY3JlYXRlLWVsZW1lbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZG9tLWV2ZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RvbS1zZWxlY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvY2F0aW9uLWJhci9sb2NhdGlvbi1iYXIuanMiLCJub2RlX21vZHVsZXMvcGxlYXNlLWFqYXgvZGlzdC9wbGVhc2UuanMiLCJub2RlX21vZHVsZXMvcXVlcnktZG9tLWNvbXBvbmVudHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcXVlcnktZG9tLWNvbXBvbmVudHMvbGliL2NhbWVsQ2FzZS5qcyIsIm5vZGVfbW9kdWxlcy9xdWVyeS1kb20tY29tcG9uZW50cy9saWIvZXh0cmFjdFN1ZmZpeC5qcyIsIm5vZGVfbW9kdWxlcy9yb3V0ZXMvZGlzdC9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQSxJQUFNOztPQUFTLEFBRVIsQUFDTjtPQUhjLEFBR1IsQUFFTjs7UUFBTyxTQUxPLEFBS0UsQUFDaEI7UUFBTyx5QkFOTyxBQU1QLEFBQVUsQUFFakI7O1FBQU8sT0FSTyxBQVFBLEFBQ2Q7U0FBUSxPQVRNLEFBU0MsQUFFZjs7V0FYRCxBQUFlLEFBV0o7O0FBWEksQUFFZDs7a0IsQUFhYzs7Ozs7QUNqQmY7Ozs7Ozs7Ozs7OztBQU1BLE9BQUEsQUFBTyxrQ0FBbUIsVUFBQSxBQUFDLE1BQVMsQUFDbkM7OztXQUFLLEFBRUssQUFFVDs7ZUFBYSxRQUpULEFBSVMsQUFBUSxBQUNyQjtVQUFRLFFBTFQsQUFBSyxBQUtJLEFBQVEsQUFFakI7QUFQSyxBQUVKO0FBSEYsQUFBaUIsQ0FBQTs7Ozs7QUNOakI7Ozs7Ozs7O0FBRUEsb0JBQUEsQUFBVTs7Ozs7Ozs7OztBQ0VWLE9BQUEsQUFBTztPQUNELFFBRFcsQUFDWCxBQUFRLEFBQ2I7YUFBVyxTQUFTLFFBQVgsQUFBVyxBQUFRLG9CQUFvQjtjQUM3QixFQUFFLFNBQVMsUUFIL0IsQUFBaUIsQUFFUCxBQUErQyxBQUNyQyxBQUFXLEFBQVE7QUFEa0IsQUFDN0M7QUFERjtBQUZPLEFBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SSxBQUVNLHNCQUVGO3VCQUFzQjtZQUFWLEFBQVUsNERBQUosQUFBSSxlQUFBOzs4QkFFbEI7O2FBQUEsQUFBSyxXQUFXLGlCQUFoQixBQUF1QixBQUV2Qjs7YUFBQSxBQUFLLE9BQU8saUJBQVosQUFBbUIsQUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBkb21zZWxlY3QgZnJvbSAnZG9tLXNlbGVjdCdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHRcclxuXHRQQVRIOiAnJyxcclxuXHRCQVNFOiAnLycsXHJcblx0XHJcblx0JGJvZHk6IGRvY3VtZW50LmJvZHksXHJcblx0JHZpZXc6IGRvbXNlbGVjdCgnI2pzLXZpZXcnKSxcclxuXHJcblx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cclxuXHRpc01vYmlsZTogZmFsc2VcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnIiwiaW1wb3J0IGJpZ3doZWVsIGZyb20gJ2JpZ3doZWVsJ1xyXG5cclxuLyogLS0tLS0tLS0tLVxyXG5jcmVhdGUgb3VyIGZyYW1ld29yayBpbnN0YW5jZVxyXG5zZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpZ3doZWVsLWZyYW1ld29yay9kb2N1bWVudGF0aW9uL2Jsb2IvbWFzdGVyL3F1aWNrc3RhcnQubWQjYmlnd2hlZWwtcXVpY2stc3RhcnRcclxuLS0tLS0tLS0tLSAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGJpZ3doZWVsKChkb25lKSA9PiB7XHJcblx0ZG9uZSh7XHJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmlnd2hlZWwtZnJhbWV3b3JrL2RvY3VtZW50YXRpb24vYmxvYi9tYXN0ZXIvbWlzYy5tZCNvdmVybGFwXHJcblx0XHRvdmVybGFwOiBmYWxzZSxcclxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWd3aGVlbC1mcmFtZXdvcmsvZG9jdW1lbnRhdGlvbi9ibG9iL21hc3Rlci9yb3V0ZXMtc3BlY2lhbC5tZCNpbml0c2VjdGlvblxyXG5cdFx0aW5pdFNlY3Rpb246IHJlcXVpcmUoJy4vc2VjdGlvbnMvcHJlbG9hZGVyJyksXHJcblx0XHRyb3V0ZXM6IHJlcXVpcmUoJy4vcm91dGVzJylcclxuXHR9KVxyXG59KSIsImltcG9ydCBmcmFtZXdvcmsgZnJvbSAnZnJhbWV3b3JrJ1xyXG5cclxuZnJhbWV3b3JrLmluaXQoKSIsIi8qIC0tLS0tLS0tLS1cclxuYWxsIHJvdXRlcyBuZWVkcyB0byBiZSBkZWZpbmVkIGlubGluZVxyXG5zZWUgaHR0cHM6Ly9naXRodWIuY29tL2JpZ3doZWVsLWZyYW1ld29yay9kb2N1bWVudGF0aW9uL2Jsb2IvbWFzdGVyL3JvdXRlcy1kZWZpbmluZy5tZCNhcy1zZWN0aW9uLXN0YW5kYXJkLWZvcm1cclxuLS0tLS0tLS0tLSAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHQnLyc6IHJlcXVpcmUoJy4vc2VjdGlvbnMvaG9tZScpLFxyXG5cdCcvaG9tZSc6IHsgc2VjdGlvbjogcmVxdWlyZSgnLi9zZWN0aW9ucy9ob21lJyksIHJvdXRlczoge1xyXG4gICAgICAgICAgICAnLzppZCc6IHsgc2VjdGlvbjogcmVxdWlyZSgnLi9zZWN0aW9ucy9zdWInKSB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBmcmFtZXdvcmsgZnJvbSAnZnJhbWV3b3JrJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcclxuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzJ1xyXG5pbXBvcnQgJCBmcm9tICdkb20tc2VsZWN0J1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnZG9tLWV2ZW50J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICdkb20tY2xhc3NlcydcclxuaW1wb3J0IHF1ZXJ5IGZyb20gJ3F1ZXJ5LWRvbS1jb21wb25lbnRzJ1xyXG5cclxuY2xhc3MgRGVmYXVsdCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG9wdCA9IHt9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGNvbmZpZy5pc01vYmlsZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlldyA9IGNvbmZpZy4kdmlld1xyXG4gICAgICAgIHRoaXMucGFnZSA9IG51bGxcclxuICAgICAgICB0aGlzLmEgPSBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluaXQocmVxLCBkb25lLCBvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHsgc3ViOiBmYWxzZSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmlld1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gdGhpcy5kYXRhQWRkZWQuYmluZCh0aGlzLCBkb25lKVxyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnBhZ2UgPSB1dGlscy5iaWdnaWUubG9hZFBhZ2UocmVxLCB2aWV3LCByZWFkeSwgb3B0cylcclxuICAgIH1cclxuXHJcbiAgICBkYXRhQWRkZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudWkgPSBxdWVyeSh7IGVsOiB0aGlzLnBhZ2UgfSlcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmEgPSAkLmFsbCgnYScsIHRoaXMucGFnZSlcclxuXHJcbiAgICAgICAgdXRpbHMuYmlnZ2llLmFkZFJvdXRpbmdFTCh0aGlzLmEpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uZmlnLmhlaWdodCA9IGhlaWdodFxyXG4gICAgICAgIGNvbmZpZy53aWR0aCA9IHdpZHRoXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXRpbHMuYmlnZ2llLnJlbW92ZVJvdXRpbmdFTCh0aGlzLmEpXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdCIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAndXRpbHMnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2RvbS1jbGFzc2VzJ1xyXG5pbXBvcnQgRGVmYXVsdCBmcm9tICcuL2RlZmF1bHQnXHJcbmltcG9ydCBldmVudCBmcm9tICdkb20tZXZlbnQnXHJcbmltcG9ydCB7b24sIG9mZn0gZnJvbSAnZG9tLWV2ZW50J1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIERlZmF1bHQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG9wdCkge1xyXG5cdFx0XHJcblx0XHRzdXBlcihvcHQpXHJcblxyXG5cdFx0dGhpcy5zbHVnID0gJ2hvbWUnXHJcblx0XHR0aGlzLnVpID0gbnVsbFxyXG5cclxuXHRcdHRoaXMuaGFuZGxlUHJpbnQgPSB0aGlzLmhhbmRsZVByaW50LmJpbmQodGhpcylcclxuXHR9XHJcblx0XHJcblx0aW5pdChyZXEsIGRvbmUpIHtcclxuXHJcblx0XHRzdXBlci5pbml0KHJlcSwgZG9uZSlcclxuXHR9XHJcblxyXG5cdGRhdGFBZGRlZChkb25lKSB7XHJcblxyXG5cdFx0c3VwZXIuZGF0YUFkZGVkKClcclxuICBcclxuXHRcdG9uKHRoaXMudWkud3JhcCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaylcclxuXHJcblx0XHR0aGlzLmFkZEV2ZW50cygpXHJcblxyXG5cdFx0ZG9uZSgpXHJcblx0fVxyXG5cclxuXHRhZGRFdmVudHMoKSB7XHJcblx0XHR0aGlzLmJveGVzID0gdXRpbHMuanMuYXJyYXlGcm9tKHRoaXMudWkuYm94KVxyXG5cclxuXHRcdHRoaXMuYm94ZXMuZm9yRWFjaCgoYm94KSA9PiBvbihib3gsICdjbGljaycsIHRoaXMuaGFuZGxlUHJpbnQpKVxyXG5cdH1cclxuXHJcblx0cmVtb3ZlRXZlbnRzKCkge1xyXG5cdFx0dGhpcy5ib3hlcy5mb3JFYWNoKChib3gpID0+IG9mZihib3gsICdjbGljaycsIHRoaXMuaGFuZGxlUHJpbnQpKVxyXG5cclxuXHRcdHRoaXMuYm94ZXMgPSBudWxsXHJcblx0fVxyXG5cdFxyXG5cdGhhbmRsZUNsaWNrKGUpIHtcclxuXHQgIFxyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0XHJcblxyXG5cdCAgXHRUd2VlbkxpdGUudG8odGFyZ2V0LCAwLjUsIHthdXRvQWxwaGE6MCwgeTogJy0xNTAlJywgeDogJy01MCUnLCBlYXNlOiBQb3dlcjIuZWFzZUlufSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVQcmludChlKSB7XHJcblxyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0XHJcblxyXG5cdFx0dmFyIHBvbHBvID0gJzxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcG9scG8tZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRtZWR1c2EgPSAnPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9tZWR1c2EtZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRzaXJlbmEgPSAnPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zaXJlbmEtZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRpcHBvID0gJzxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaXBwb2NhbXBvLWZ1bGwuanBnXCI+JyxcclxuXHRcdFx0bGVwaXNtYSA9ICc8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xlcGlzbWEtZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRwZXNjZSA9ICc8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3Blc2NlLWZ1bGwuanBnXCI+J1xyXG5cdFx0XHQvLyBhc3NpZ25lZCBpbWFnZXMgdG8gdmFyaWFibGVzXHJcblx0XHR2YXIgcG9scG9JZCA9IHRoaXMudWkucG9scG8sIFxyXG5cdFx0XHRtZWR1c2FJZCA9IHRoaXMudWkubWVkdXNhLCBcclxuXHRcdFx0c2lyZW5hSWQgPSB0aGlzLnVpLnNpcmVuYSwgXHJcblx0XHRcdGlwcG9JZCA9IHRoaXMudWkuaXBwbywgXHJcblx0XHRcdGxlcGlzbWFJZCA9IHRoaXMudWkubGVwaXNtYSwgXHJcblx0XHRcdHBlc2NlSWQgPSB0aGlzLnVpLnBlc2NlO1xyXG5cdFx0XHQvLyBhc3NpZ25lZCBkaXZzIHRvIHZhcmlhYmxlc1xyXG5cclxuXHRcdHZhciBtdWx0aVdyYXAgPSB0aGlzLnVpLndyYXAsXHJcblx0XHRcdGNsb3NlQm94ID0gdGhpcy51aS5jbG9zZSxcclxuXHRcdFx0d3JhcENvbnRlbnQ7XHJcblx0ICBcclxuXHQgIFx0aWYgKHRhcmdldCA9PSBwb2xwb0lkKSB7XHJcblx0ICBcdFx0d3JhcENvbnRlbnQgPSBwb2xwbztcclxuXHQgIFx0fSBlbHNlIGlmICh0YXJnZXQgPT0gbWVkdXNhSWQpIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IG1lZHVzYTtcclxuXHQgIFx0fSBlbHNlIGlmICh0YXJnZXQgPT0gc2lyZW5hSWQpIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IHNpcmVuYTtcclxuXHQgIFx0fSBlbHNlIGlmICh0YXJnZXQgPT0gaXBwb0lkKSB7XHJcblx0ICBcdFx0d3JhcENvbnRlbnQgPSBpcHBvO1xyXG5cdCAgXHR9IGVsc2UgaWYgKHRhcmdldCA9PSBsZXBpc21hSWQpIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IGxlcGlzbWE7XHJcblx0ICBcdH0gZWxzZSB7XHJcblx0ICBcdFx0d3JhcENvbnRlbnQgPSBwZXNjZTtcclxuXHQgIFx0fVxyXG5cclxuXHQgIFx0Ly8gSnVzdCBtYWtpbmcgc3VyZSBtdWx0aVdyYXAgaXMgcHJvcGVybHkgcG9zaXRpb25lZFxyXG5cdCAgXHRUd2VlbkxpdGUudG8obXVsdGlXcmFwLCAwLjEsIHt5OiAnLTUwJScsIHg6ICctMTUwJScsIGVhc2U6IFBvd2VyMC5lYXNlTm9uZX0pO1xyXG5cclxuXHQgIFx0bXVsdGlXcmFwLmlubmVySFRNTCA9ICc8YSBjbGFzcz1cImpzLWNsb3NlXCIgaWQ9XCJpbWFnZS1jbG9zZVwiPsOXPC9hPic7XHJcblx0ICBcdG11bHRpV3JhcC5pbm5lckhUTUwgKz0gd3JhcENvbnRlbnQ7XHJcblx0ICBcdFR3ZWVuTGl0ZS50byhtdWx0aVdyYXAsIDEsIHthdXRvQWxwaGE6MSwgeTogJy01MCUnLCB4OiAnLTUwJScsIGVhc2U6IFBvd2VyNC5lYXNlT3V0fSk7XHJcblx0ICBcdFxyXG5cdH1cclxuXHJcblx0YW5pbWF0ZUluKHJlcSwgZG9uZSkge1xyXG5cclxuXHRcdGNsYXNzZXMuYWRkKGNvbmZpZy4kYm9keSwgYGlzLSR7dGhpcy5zbHVnfWApXHJcblx0XHRcclxuXHRcdFR3ZWVuTGl0ZS50byh0aGlzLnBhZ2UsIDEsIHtcclxuXHRcdFx0eTogMCxcclxuXHRcdFx0YXV0b0FscGhhOiAxLFxyXG5cdFx0XHRlYXNlOiBFeHBvLmVhc2VJbk91dCxcclxuXHRcdFx0b25Db21wbGV0ZTogZG9uZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGFuaW1hdGVPdXQocmVxLCBkb25lKSB7XHJcblx0XHRcclxuXHRcdGNsYXNzZXMucmVtb3ZlKGNvbmZpZy4kYm9keSwgYGlzLSR7dGhpcy5zbHVnfWApXHJcblxyXG5cdFx0VHdlZW5MaXRlLnRvKHRoaXMucGFnZSwgMC43LCB7XHJcblx0XHRcdHk6IDEwMCxcclxuXHRcdFx0YXV0b0FscGhhOiAwLFxyXG5cdFx0XHRlYXNlOiBFeHBvLmVhc2VJbk91dCxcclxuXHRcdFx0b25Db21wbGV0ZTogZG9uZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3kocmVxLCBkb25lKSB7XHJcblxyXG5cdFx0c3VwZXIuZGVzdHJveSgpXHJcblxyXG5cdFx0dGhpcy5yZW1vdmVFdmVudHMoKVxyXG5cclxuXHRcdHRoaXMudWkgPSBudWxsXHJcblxyXG5cdFx0dGhpcy5wYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wYWdlKVxyXG5cdFx0XHJcblx0XHRkb25lKClcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSG9tZSIsImltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICdkb20tY2xhc3NlcydcclxuaW1wb3J0IGNyZWF0ZSBmcm9tICdkb20tY3JlYXRlLWVsZW1lbnQnXHJcblxyXG5cclxuVHdlZW5MaXRlLmRlZmF1bHRFYXNlID0gRXhwby5lYXNlT3V0XHJcblxyXG5jbGFzcyBQcmVsb2FkZXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG9uQ29tcGxldGUpIHtcclxuXHRcdFxyXG5cdFx0dGhpcy5wcmVsb2FkZWQgPSBvbkNvbXBsZXRlXHJcblx0XHR0aGlzLnZpZXcgPSBjb25maWcuJHZpZXdcclxuXHRcdHRoaXMuZWwgPSBudWxsXHJcblxyXG5cdFx0dGhpcy5pc01vYmlsZSA9IGNvbmZpZy5pc01vYmlsZSA9IGNvbmZpZy53aWR0aCA8PSAxMDI0ID8gdHJ1ZSA6IGZhbHNlXHJcblx0fVxyXG5cdFxyXG5cdGluaXQocmVxLCBkb25lKSB7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xyXG4gICAgICAgIFx0XHJcblx0XHR0aGlzLmNyZWF0ZURPTSgpXHJcblxyXG5cdFx0ZG9uZSgpXHJcblx0fVxyXG5cdFxyXG5cdGNyZWF0ZURPTSgpIHtcclxuXHRcdFxyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlldy5maXJzdENoaWxkXHJcblxyXG5cdFx0dGhpcy5lbCA9IGNyZWF0ZSh7XHJcblx0XHRcdHNlbGVjdG9yOiAnZGl2JyxcclxuXHRcdFx0c3R5bGVzOiAncHJlbG9hZGVyJyxcclxuXHRcdFx0aHRtbDogJzxkaXYgaWQ9XCJsb2FkZXItd3JhcHBlclwiPjxkaXYgaWQ9XCJsb2FkZXJcIj48L2Rpdj48ZGl2IGNsYXNzPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1sZWZ0XCI+PC9kaXY+PGRpdiBjbGFzcz1cImxvYWRlci1zZWN0aW9uIHNlY3Rpb24tcmlnaHRcIj48L2Rpdj48L2Rpdj4nXHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMudmlldy5pbnNlcnRCZWZvcmUodGhpcy5lbCwgcGFnZSlcclxuXHR9XHJcblxyXG5cdHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblxyXG5cdFx0Y29uZmlnLndpZHRoID0gd2lkdGhcclxuXHRcdGNvbmZpZy5oZWlnaHQgPSBoZWlnaHRcclxuXHR9XHJcblxyXG5cdGFuaW1hdGVJbihyZXEsIGRvbmUpIHtcclxuXHJcblx0XHRjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRkb25lKClcclxuXHRcdFx0Ly8gY2FsbCB0aGlzLnByZWxvYWRlZCB0byBicmluZyB0aGUgZmlyc3Qgcm91dGVcclxuXHRcdFx0dGhpcy5wcmVsb2FkZWQoKVxyXG5cdFx0fX0pO1xyXG5cdFx0dGwudG8odGhpcy5lbCwgMSwge2F1dG9BbHBoYTogMX0pXHJcblx0XHR0bC5yZXN0YXJ0KClcclxuXHR9XHJcblx0XHJcblx0YW5pbWF0ZU91dChyZXEsIGRvbmUpIHtcclxuXHJcblx0XHRjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSwgb25Db21wbGV0ZTogZG9uZSB9KVxyXG5cdFx0dGwudG8odGhpcy5lbCwgMSwge2F1dG9BbHBoYTogMH0pXHJcblx0XHR0bC5yZXN0YXJ0KClcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3kocmVxLCBkb25lKSB7XHJcblxyXG5cdFx0Y2xhc3Nlcy5hZGQoY29uZmlnLiRib2R5LCAnbG9hZGVkJylcclxuXHRcdGNsYXNzZXMucmVtb3ZlKGNvbmZpZy4kYm9keSwgJ2lzLWxvYWRpbmcnKVxyXG5cclxuXHRcdHRoaXMudmlldy5yZW1vdmVDaGlsZCh0aGlzLmVsKVxyXG5cclxuXHRcdGRvbmUoKVxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQcmVsb2FkZXIiLCJpbXBvcnQgZnJhbWV3b3JrIGZyb20gJ2ZyYW1ld29yaydcclxuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXHJcbmltcG9ydCB1dGlscyBmcm9tICd1dGlscydcclxuaW1wb3J0ICQgZnJvbSAnZG9tLXNlbGVjdCdcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnZG9tLWNsYXNzZXMnO1xyXG5pbXBvcnQgY3JlYXRlIGZyb20gJ2RvbS1jcmVhdGUtZWxlbWVudCdcclxuaW1wb3J0IHF1ZXJ5IGZyb20gJ3F1ZXJ5LWRvbS1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZXZlbnQgZnJvbSAnZG9tLWV2ZW50J1xyXG5pbXBvcnQge29uLCBvZmZ9IGZyb20gJ2RvbS1ldmVudCdcclxuXHJcbmNsYXNzIFN1YiB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG9wdCA9IHt9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGNvbmZpZy5pc01vYmlsZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlldyA9IGNvbmZpZy4kdmlld1xyXG4gICAgICAgIHRoaXMuc2x1ZyA9IG51bGxcclxuICAgICAgICB0aGlzLmVsID0gbnVsbFxyXG4gICAgICAgIHRoaXMuYSA9IG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdChyZXEsIGRvbmUpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMudmlld1xyXG4gICAgICAgIGNvbnN0IHNsdWcgPSB0aGlzLnNsdWcgPSBgc3ViLSR7aWR9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm9cIj4ke2lkfSBtZS4uLjwvc3Bhbj4gPGJyPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImpzLXByb2ZpbGVcIj5Qcm9maWxlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcHJvZmlsZS5waHA/aWQ9MTAwMDExMjU2MDY3NjM1XCI+RmFjZWJvb2s8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwianMtZXhwZXJpZW5jZVwiPkV4cGVyaWVuY2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+IDxicj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL21idXNzb24uY29tXCI+PDwgQmFjazwvYT48L2xpPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDAuNzVyZW1cIiBjbGFzcz1cImluZm9cIj4gVG8gdGhlIGRldmVsb3BlcidzIHdlYnNpdGUuIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3N1cmVcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zdXJlLWVsXCI+IDxhIGhyZWY9XCIvaG9tZVwiIGNsYXNzPVwianMtY2xvc2VhYm91dCBsaW5rXCI+w5c8L2E+IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbCA9IGNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2JyxcclxuICAgICAgICAgICAgc3R5bGVzOiBgc3ViLWl0ZW0gJHt0aGlzLnNsdWd9YCxcclxuICAgICAgICAgICAgaHRtbDogdGVtcGxhdGVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLnZpZXcuYXBwZW5kQ2hpbGQodGhpcy5lbClcclxuICAgICAgICB0aGlzLnVpID0gcXVlcnkoeyBlbDogdGhpcy5lbCB9KVxyXG4gICAgICAgIHRoaXMuZGF0YUFkZGVkKClcclxuICAgICAgICBcclxuICAgICAgICB1dGlscy5iaWdnaWUuIGFkZFJvdXRpbmdFTChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpKVxyXG5cclxuICAgICAgICBkb25lKClcclxuICAgIH1cclxuXHJcbiAgICBkYXRhQWRkZWQoZG9uZSkge1xyXG4gICAgICAgIG9uKHRoaXMudWkucHJvZmlsZSwnY2xpY2snLCB0aGlzLmhhbmRsZU1lbnUpXHJcbiAgICAgICAgb24odGhpcy51aS5leHBlcmllbmNlLCAnY2xpY2snLCB0aGlzLmhhbmRsZU1lbnUpXHJcbiAgICAgICAgb24odGhpcy51aS5jbG9zZWFib3V0LCAnY2xpY2snLCB0aGlzLmhhbmRsZUNsb3N1cmUpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTWVudShlKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldFxyXG5cclxuICAgICAgICBjb25zdCBwcm9maWxlQ29udGVudCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpzLXByb2ZpbGVcIiBpZD1cInByb2ZpbGUtZXhpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5OdW5jIHNjZWxlcmlzcXVlIHZpdmVycmEgdGluY2lkdW50LiBNYXVyaXMgc29kYWxlcyBuaWJoIHNlZCBwcmV0aXVtIGFjY3Vtc2FuLiBVdCBldSBzb2xsaWNpdHVkaW4gcmlzdXMuIE1vcmJpIGlhY3VsaXMsIGp1c3RvIGlkIGdyYXZpZGEgY29tbW9kbywgaXBzdW0gb3JjaSBzb2xsaWNpdHVkaW4gbnVsbGEsIHNpdCBhbWV0IHBlbGxlbnRlc3F1ZSB1cm5hIHNlbSBzaXQgYW1ldCBuaXNpLiBTZWQgZG9sb3IgdHVycGlzLCBwb3N1ZXJlIGFjIGFudGUgdmVsLCBtb2xlc3RpZSBwb3N1ZXJlIHRlbGx1cy4gTW9yYmkgZmFjaWxpc2lzIHRvcnRvciB2aXRhZSBhdWd1ZSB1bHRyaWNpZXMsIGV0IHZpdmVycmEgbWkgbGFjaW5pYS4gVXQgYXVjdG9yIHZpdmVycmEgZGlhbSwgYSBlbGVtZW50dW0gdHVycGlzIHBsYWNlcmF0IG5vbi4gRHVpcyBkYXBpYnVzIGFsaXF1ZXQgbWFnbmEgc2VkIHRpbmNpZHVudC4gVml2YW11cyB2ZWhpY3VsYSwgbGlndWxhIHZlbCBjb25ndWUgaGVuZHJlcml0LCBlcmF0IG5pc2wgc29kYWxlcyBtZXR1cywgZXUgY29udmFsbGlzIGp1c3RvIHJpc3VzIGVnZXQgb2Rpby48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8cD5OdWxsYSBmYWNpbGlzaS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLiBQZWxsZW50ZXNxdWUgdmVsIHR1cnBpcyBudWxsYS4gUGVsbGVudGVzcXVlIGNvbmd1ZSB0b3J0b3IgdGVsbHVzLCBpZCBoZW5kcmVyaXQgZXJhdCB2ZXN0aWJ1bHVtIGEuIFNlZCBmZXJtZW50dW0gdmVsIHNhcGllbiBibGFuZGl0IGZlcm1lbnR1bS4gUHJvaW4gZWdldCBsZWN0dXMgc29sbGljaXR1ZGluLCBhY2N1bXNhbiBlbmltIHV0LCBkaWN0dW0gYW50ZS4gTnVsbGEgc2VkIHZpdmVycmEgbGFjdXMsIGF0IGltcGVyZGlldCB0dXJwaXMuIE5hbSBub24gaWFjdWxpcyByaXN1cy4gRnVzY2UgZXQgYmxhbmRpdCBzYXBpZW4uIE51bGxhbSBxdWlzIHByZXRpdW0gZGlhbSwgbmVjIHNhZ2l0dGlzIG1hdXJpcy4gTWF1cmlzIHV0IGNvbnZhbGxpcyBtZXR1cy4gQ3VyYWJpdHVyIHVsdHJpY2VzIGVyYXQgZXUgcmlzdXMgb3JuYXJlLCB1dCBoZW5kcmVyaXQgZXJhdCB1bHRyaWNpZXMuIFNlZCBzaXQgYW1ldCBxdWFtIHNlZCBtZXR1cyB1bHRyaWNlcyBzYWdpdHRpcyBuZWMgZXUgbGVvLjwvcD5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDxwPlByYWVzZW50IG9ybmFyZSBhdCBsb3JlbSB2ZWwgZ3JhdmlkYS4gU2VkIHBvc3VlcmUgc29sbGljaXR1ZGluIG5lcXVlLCB2aXRhZSBjb25zZXF1YXQgbGliZXJvIGJsYW5kaXQgYS4gUHJhZXNlbnQgcXVpcyBoZW5kcmVyaXQgbWkuIERvbmVjIGF0IGJpYmVuZHVtIGlwc3VtLCBldCBhbGlxdWFtIG5pc2wuIEN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gSW50ZWdlciBtaSBlbmltLCBtb2xsaXMgdmVsIGZlcm1lbnR1bSBpbiwgdWx0cmljZXMgZXUgdGVsbHVzLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCB2ZXN0aWJ1bHVtIGN1cnN1cyBkdWksIG5vbiBhbGlxdWV0IGFudGUgZmVybWVudHVtIHZlbC4gVXQgcG9ydHRpdG9yIHZlbGl0IHZpdGFlIHRlbXB1cyBwaGFyZXRyYS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBleHBDb250ZW50ID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianMtZXhwZXJpZW5jZVwiIGlkPVwiZXhwLWV4aXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+TnVuYyBzY2VsZXJpc3F1ZSB2aXZlcnJhIHRpbmNpZHVudC4gTWF1cmlzIHNvZGFsZXMgbmliaCBzZWQgcHJldGl1bSBhY2N1bXNhbi4gVXQgZXUgc29sbGljaXR1ZGluIHJpc3VzLiBNb3JiaSBpYWN1bGlzLCBqdXN0byBpZCBncmF2aWRhIGNvbW1vZG8sIGlwc3VtIG9yY2kgc29sbGljaXR1ZGluIG51bGxhLCBzaXQgYW1ldCBwZWxsZW50ZXNxdWUgdXJuYSBzZW0gc2l0IGFtZXQgbmlzaS4gU2VkIGRvbG9yIHR1cnBpcywgcG9zdWVyZSBhYyBhbnRlIHZlbCwgbW9sZXN0aWUgcG9zdWVyZSB0ZWxsdXMuIE1vcmJpIGZhY2lsaXNpcyB0b3J0b3Igdml0YWUgYXVndWUgdWx0cmljaWVzLCBldCB2aXZlcnJhIG1pIGxhY2luaWEuIFV0IGF1Y3RvciB2aXZlcnJhIGRpYW0sIGEgZWxlbWVudHVtIHR1cnBpcyBwbGFjZXJhdCBub24uIER1aXMgZGFwaWJ1cyBhbGlxdWV0IG1hZ25hIHNlZCB0aW5jaWR1bnQuIFZpdmFtdXMgdmVoaWN1bGEsIGxpZ3VsYSB2ZWwgY29uZ3VlIGhlbmRyZXJpdCwgZXJhdCBuaXNsIHNvZGFsZXMgbWV0dXMsIGV1IGNvbnZhbGxpcyBqdXN0byByaXN1cyBlZ2V0IG9kaW8uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPHA+TnVsbGEgZmFjaWxpc2kuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy4gUGVsbGVudGVzcXVlIHZlbCB0dXJwaXMgbnVsbGEuIFBlbGxlbnRlc3F1ZSBjb25ndWUgdG9ydG9yIHRlbGx1cywgaWQgaGVuZHJlcml0IGVyYXQgdmVzdGlidWx1bSBhLiBTZWQgZmVybWVudHVtIHZlbCBzYXBpZW4gYmxhbmRpdCBmZXJtZW50dW0uIFByb2luIGVnZXQgbGVjdHVzIHNvbGxpY2l0dWRpbiwgYWNjdW1zYW4gZW5pbSB1dCwgZGljdHVtIGFudGUuIE51bGxhIHNlZCB2aXZlcnJhIGxhY3VzLCBhdCBpbXBlcmRpZXQgdHVycGlzLiBOYW0gbm9uIGlhY3VsaXMgcmlzdXMuIEZ1c2NlIGV0IGJsYW5kaXQgc2FwaWVuLiBOdWxsYW0gcXVpcyBwcmV0aXVtIGRpYW0sIG5lYyBzYWdpdHRpcyBtYXVyaXMuIE1hdXJpcyB1dCBjb252YWxsaXMgbWV0dXMuIEN1cmFiaXR1ciB1bHRyaWNlcyBlcmF0IGV1IHJpc3VzIG9ybmFyZSwgdXQgaGVuZHJlcml0IGVyYXQgdWx0cmljaWVzLiBTZWQgc2l0IGFtZXQgcXVhbSBzZWQgbWV0dXMgdWx0cmljZXMgc2FnaXR0aXMgbmVjIGV1IGxlby48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gY3JlYXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdicsXHJcbiAgICAgICAgICAgICAgaWQ6ICdtZW51LXdyYXAnLFxyXG4gICAgICAgICAgICAgIHN0eWxlczogJ2Bpcy1wcm9maWxlLWNvbnRlbnRgJyxcclxuICAgICAgICAgICAgICBodG1sOiBwcm9maWxlQ29udGVudFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBleHBlcmllbmNlID0gY3JlYXRlKHtcclxuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdicsXHJcbiAgICAgICAgICAgICAgaWQ6ICdtZW51LXdyYXAnLFxyXG4gICAgICAgICAgICAgIHN0eWxlczogJ2Bpcy1leHAtY29udGVudGAnLFxyXG4gICAgICAgICAgICAgIGh0bWw6IGV4cENvbnRlbnRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNZW51V3JhcCgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVudU91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXdyYXAnKVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYW5VcCgpIHtkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1lbnVPdXQpO31cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKClcclxuICAgICAgICAgICAgICAgIHRsLnRvKG1lbnVPdXQsIDAuNSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9BbHBoYTowLCBcclxuICAgICAgICAgICAgICAgICAgICB4OiAnNTAwJScsIFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGwuYWRkUGF1c2UoMC41LCBjbGVhblVwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkIHByZXZpb3VzIG1lbnUtd3JhcCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmludE1lbnUobmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtd3JhcCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51V3JhcCgpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICBUd2VlbkxpdGUuZnJvbShuYW1lLCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0FscGhhOjAsIFxyXG4gICAgICAgICAgICAgICAgICAgIHg6ICc1MDAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICBUd2VlbkxpdGUuZnJvbShuYW1lLCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0FscGhhOjAsIFxyXG4gICAgICAgICAgICAgICAgICAgIHg6ICc1MDAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogRXhwby5lYXNlSW5PdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbnUgY3JlYXRlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGNsYXNzZXMuaGFzKHRhcmdldCwgJ2pzLXByb2ZpbGUnKSApIHsgICAgICAgXHJcbiAgICAgICAgICAgIHByaW50TWVudShwcm9maWxlKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGNsYXNzZXMuaGFzKHRhcmdldCwgJ2pzLWV4cGVyaWVuY2UnKSApIHtcclxuICAgICAgICAgICAgcHJpbnRNZW51KGV4cGVyaWVuY2UpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbG9zdXJlKHJlcSwgZG9uZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGljIGRldGVjdGVkJylcclxuICAgICAgICBsZXQgd3JhcEV4aXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXdyYXAnKTtcclxuICAgICAgICBpZiAod3JhcEV4aXN0cykge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51V3JhcE91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXdyYXAnKVxyXG4gICAgICAgICAgICBUd2VlbkxpdGUudG8obWVudVdyYXBPdXQsIDAuNSwge1xyXG4gICAgICAgICAgICAgICAgYXV0b0FscGhhOjAsIFxyXG4gICAgICAgICAgICAgICAgeDogJzUwMCUnLCBcclxuICAgICAgICAgICAgICAgIGVhc2U6IEV4cG8uZWFzZUluT3V0LFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFuaW1hdGVJbihyZXEsIGRvbmUpIHtcclxuXHJcbiAgICAgICAgY2xhc3Nlcy5hZGQoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuXHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSB9KVxyXG4gICAgICAgIHRsLmZyb21Ubyh0aGlzLmVsLCAxLHt4OiAnLTMyMCd9LCB7IHg6IDAsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pXHJcbiAgICAgICAgdGwucmVzdGFydCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZU91dChyZXEsIGRvbmUpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgY2xhc3Nlcy5yZW1vdmUoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuICAgICAgICBjb25zdCBtZW51V3JhcE91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXdyYXAnKVxyXG4gICAgICAgIGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiBkb25lIH0pXHJcbiAgICAgICAgdGhpcy5lbCAmJiB0bC50byh0aGlzLmVsLCAwLjcsIHsgeDogJy0zMjAnLCBlYXNlOiBFeHBvLmVhc2VJbk91dCwgY2xlYXJQcm9wczogJ2FsbCcgfSlcclxuICAgICAgICB0bC50byggbWVudVdyYXBPdXQsIDAuNSwge2F1dG9BbHBoYTowLCB4OiAnNTAwJScsIGVhc2U6IEV4cG8uZWFzZUluT3V0LCBjbGVhclByb3BzOiAnYWxsJyB9KTtcclxuICAgICAgICB0bC5yZXN0YXJ0KClcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHt9XHJcblxyXG4gICAgZGVzdHJveShyZXEsIGRvbmUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpXHJcbiAgICAgICAgdGhpcy5lbCA9IG51bGxcclxuICAgICAgICBcclxuICAgICAgICBkb25lKClcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdWIiLCJpbXBvcnQgZnJhbWV3b3JrIGZyb20gJ2ZyYW1ld29yaydcclxuaW1wb3J0IGFqYXggZnJvbSAncGxlYXNlLWFqYXgnXHJcbmltcG9ydCBjcmVhdGUgZnJvbSAnZG9tLWNyZWF0ZS1lbGVtZW50J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICdkb20tY2xhc3NlcydcclxuXHJcbmNvbnN0IHV0aWxzID0ge1xyXG5cdFxyXG5cdGNzczoge1xyXG5cdFx0XHJcblx0XHRnZXRSZWN0KHJpZ2h0LCBib3R0b20sIGxlZnQ9MCwgdG9wPTApIHtcclxuXHJcblx0XHRcdHJldHVybiBgcmVjdCgke3RvcH1weCwgJHtyaWdodH1weCwgJHtib3R0b219cHgsICR7bGVmdH1weClgO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0anM6IHtcclxuXHRcdFxyXG5cdFx0YXJyYXlGcm9tKG9wdCkge1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9wdCwgMCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c2Nyb2xsVG9wKCkge1xyXG5cclxuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCkgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRiaWdnaWU6IHtcclxuXHRcdFxyXG5cdFx0YWRkUm91dGluZ0VMKGEpIHtcclxuXHJcblx0XHRcdHV0aWxzLmpzLmFycmF5RnJvbShhKS5mb3JFYWNoKChlbCkgPT4gZWwub25jbGljayA9IHV0aWxzLmJpZ2dpZS5oYW5kbGVSb3V0ZSlcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlUm91dGluZ0VMKGEpIHtcclxuXHJcblx0XHRcdHV0aWxzLmpzLmFycmF5RnJvbShhKS5mb3JFYWNoKChlbCkgPT4gZWwub25jbGljayA9IG51bGwpXHJcblx0XHR9LFxyXG5cclxuXHRcdGhhbmRsZVJvdXRlKGUpIHtcclxuICAgICAgICBcdFxyXG5cdCAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0XHJcblxyXG5cdCAgICAgICAgaWYoY2xhc3Nlcy5oYXModGFyZ2V0LCAnbm8tcm91dGUnKSkgcmV0dXJuXHJcblx0ICAgICAgICBcclxuXHQgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuXHQgICAgICAgIGZyYW1ld29yay5nbyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpXHJcblx0ICAgIH0sXHJcblxyXG5cdFx0Z2V0U2x1ZyhyZXEsIG9wdGlvbnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCByb3V0ZSA9IHJlcS5yb3V0ZSA9PT0gXCIvXCIgPyAnL2hvbWUnIDogcmVxLnJvdXRlO1xyXG5cdFx0XHRjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhyZXEucGFyYW1zKS5sZW5ndGggPT09IDAgJiYgSlNPTi5zdHJpbmdpZnkocmVxLnBhcmFtcykgPT09IEpTT04uc3RyaW5naWZ5KHt9KVxyXG5cdFx0XHRcclxuXHRcdFx0aWYoIXBhcmFtcykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiByZXEucGFyYW1zKSB7XHJcblx0XHRcdCAgICAgICAgaWYgKHJlcS5wYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cclxuXHRcdFx0ICAgICAgICBcdGlmKHJvdXRlLmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcblx0XHRcdCAgICAgICAgXHRcdHJvdXRlID0gcm91dGUucmVwbGFjZShgOiR7a2V5fWAsIG9wdGlvbnMuc3ViID8gJycgOiByZXEucGFyYW1zW2tleV0pXHJcblx0XHRcdCAgICAgICAgXHR9XHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZihyb3V0ZS5zdWJzdHJpbmcocm91dGUubGVuZ3RoLTEpID09ICcvJykge1xyXG5cdFx0XHRcdHJvdXRlID0gcm91dGUuc2xpY2UoMCwgLTEpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByb3V0ZS5zdWJzdHIoMSlcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGNyZWF0ZVBhZ2UocmVxLCBzbHVnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gY3JlYXRlKHtcclxuXHRcdFx0XHRzZWxlY3RvcjogJ2RpdicsXHJcblx0XHRcdFx0aWQ6IGBwYWdlLSR7c2x1Z31gLFxyXG5cdFx0XHRcdHN0eWxlczogYHBhZ2UgcGFnZS0ke3NsdWd9YFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bG9hZFBhZ2UocmVxLCB2aWV3LCBkb25lLCBvcHRpb25zKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBzbHVnID0gdXRpbHMuYmlnZ2llLmdldFNsdWcocmVxLCBvcHRpb25zKVxyXG5cdFx0XHRjb25zdCBwYWdlID0gdXRpbHMuYmlnZ2llLmNyZWF0ZVBhZ2UocmVxLCBzbHVnKVxyXG5cdFx0XHRcclxuXHRcdFx0YWpheC5nZXQoYC90ZW1wbGF0ZXMvJHtzbHVnfS5odG1sYCwge1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IChvYmplY3QpID0+IHtcclxuXHRcdFx0XHRcdHBhZ2UuaW5uZXJIVE1MID0gb2JqZWN0LmRhdGE7XHJcblx0XHRcdFx0XHRkb25lKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0cmV0dXJuIHZpZXcuYXBwZW5kQ2hpbGQocGFnZSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxzXHJcbiIsIi8qKiBAbW9kdWxlIGJpZ3doZWVsICovXHJcblxyXG52YXIgdm0gPSByZXF1aXJlKCdidy12bScpO1xyXG52YXIgdmlld21lZGlhdG9yID0gcmVxdWlyZSgnYnctdmlld21lZGlhdG9yJyk7XHJcbnZhciByb3V0ZXIgPSByZXF1aXJlKCdidy1yb3V0ZXInKTtcclxudmFyIG9uID0gcmVxdWlyZSgnZG9tLWV2ZW50Jyk7XHJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XHJcblxyXG4vKipcclxuICogV2hlbiBpbnN0YW50aWF0aW5nIGJpZ3doZWVsIHlvdSBtdXN0IHBhc3MgaW4gYSBzZXR1cCBmdW5jdGlvbi5cclxuICpcclxuICogSW4gdGhpcyBmdW5jdGlvbiB5b3UgbWF5IGRvIGFueSBwcmVwYXJhdGlvbiB0aGF0IG11c3QgYmUgZG9uZSBmb3IgeW91clxyXG4gKiBhcHBsaWNhdGlvbiBzdWNoIGFzIGNyZWF0aW5nIGEgZ2xvYmFsIENhbnZhcyBlbGVtZW50IG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBUaGUgc2V0dXAgZnVuY3Rpb24gbXVzdCBlaXRoZXIgcmV0dXJuIGEgc2V0dGluZ3Mgb2JqZWN0IGZvciBiaWd3aGVlbCBvclxyXG4gKiB0aGlzIGZ1bmN0aW9uIG11c3QgcmVjZWl2ZSBhIGNhbGxiYWNrIHdoaWNoIHlvdSB3aWxsIGNhbGwgd2l0aCB0aGUgc2V0dGluZ3NcclxuICogb2JqZWN0LiBGdXJ0aGVybW9yZSB5b3UgY2FuIHBhc3MgYmFjayBhIHByb21pc2UgZnJvbSB0aGlzIHNldHRpbmdzIGZ1bmN0aW9uXHJcbiAqIHdoaWNoIHdpbGwgcmVjZWl2ZSB0aGUgc2V0dGluZ3Mgb2JqZWN0LlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGRvY3VtZW50cyB3aGF0IGNhbiBiZSBwYXNzZWQgaW4gdGhlIHNldHRpbmdzIG9iamVjdDpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiB7XHJcbiAqIFx0Ly8vLy8gUkVRVUlSRUQgLy8vLy9cclxuICpcclxuICogXHQvLyByb3V0ZXMgZGVmaW5lcyBhbGwgdGhlIHJvdXRlcyBmb3IgeW91ciB3ZWJzaXRlIGl0IGNhbiBhbHNvIGRlZmluZSBhIFxyXG4gKiBcdC8vIDQwNCBzZWN0aW9uIHdoaWNoIHdpbGwgYmUgb3BlbmVkIGlmIHRoZSByb3V0ZSBpcyBpbmNvcnJlY3RcclxuICogIHJvdXRlczoge1xyXG4gKiAgXHRwb3N0SGFzaDogJyMhJywgLy8gdGhpcyBzdHJpbmcgaXMgYXBwZW5kZWQgYmVmb3JlIHRoZSByb3V0ZS4gXHJcbiAqICBcdCAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IGl0J3MgdmFsdWUgaXMgJyMhJ1xyXG4gKiBcdFx0Jy8nOiBzb21lU2VjdGlvbixcclxuICogXHRcdCcvc29tZU90aGVyJzogc29tZU90aGVyU2VjdGlvbixcclxuICogXHRcdCc0MDQnOiBzZWN0aW9uRm91ck9oRm91clxyXG4gKiAgfSxcclxuICogIFxyXG4gKiAgLy8vLy8gT1BUSU9OQUwgLy8vLy9cclxuICogIGluaXRTZWN0aW9uOiBwcmVTZWN0aW9uLCAvLyB0aGlzIGNvdWxkIGJlIGEgc2VjdGlvbiB0aGF0IGlzIHJ1biBhbHdheXNcclxuICogIFx0XHRcdFx0XHRcdCAvLyBiZWZvcmUgcm91dGVzIGFyZSBldmVuIGV2YWx1YXRlZC4gVGhpcyBpc1xyXG4gKiAgXHRcdFx0XHRcdFx0IC8vIHVzZWZ1bGYgZm9yIHNpdGUgcHJlbG9hZGVycyBvciBsYW5kaW5nIHBhZ2VzXHJcbiAqICBcdFx0XHRcdFx0XHQgLy8gc3VjaCBhcyBhZ2UgdmVyaWZpY2F0aW9uIChzb21ldGhpbmcgdGhlIHVzZXJcclxuICogIFx0XHRcdFx0XHRcdCAvLyBtdXN0IHNlZSlcclxuICogXHJcbiAqIFx0YXV0b1Jlc2l6ZTogdHJ1ZSwgLy8gYnkgZGVmYXVsdCB0aGlzIHZhbHVlIGlzIHRydWUuIFdoZW4gdGhpcyB2YWx1ZSBpc1xyXG4gKiBcdFx0XHRcdFx0ICAvLyB0cnVlIGEgcmVzaXplIGxpc3RlbmVyIGlzIGFkZGVkIHRvIHRoZSB3aW5kb3dcclxuICogXHRcdFx0XHRcdCAgLy8gd2hlbmV2ZXIgdGhlIHdpbmRvdyBjaGFuZ2VzIHNpemUgaXQncyB3aWR0aCBhbmRcclxuICogXHRcdFx0XHRcdCAgLy8gaGVpZ2h0IGlzIHBhc3NlZCB0byBhbGwgaW5zdGFudGlhdGVkIHNlY3Rpb25zXHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiBAY2xhc3MgYmlnd2hlZWxcclxuICogQHBhcmFtICB7RnVuY3Rpb259IHNldHRpbmdzRnVuYyBUaGlzIHNldHRpbmdzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB0b1xyXG4gKiBpbml0aWFsaXplIGJpZ3doZWVsLlxyXG4gKi9cclxuZnVuY3Rpb24gYmlnd2hlZWwoc2V0dGluZ3NGdW5jKSB7XHJcblxyXG5cdGlmKCEodGhpcyBpbnN0YW5jZW9mIGJpZ3doZWVsKSlcclxuXHRcdHJldHVybiBuZXcgYmlnd2hlZWwoc2V0dGluZ3NGdW5jKTtcclxuXHJcblx0dGhpcy5zZXR0aW5nc0Z1bmMgPSBzZXR0aW5nc0Z1bmM7XHJcblx0RXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XHJcblxyXG59XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xyXG5cclxuLyoqXHJcbiAqIGluaXQgbXVzdCBiZSBjYWxsZWQgdG8gc3RhcnQgdGhlIGZyYW1ld29yay4gVGhpcyB3YXMgZG9uZSB0byBhbGxvdyBmb3JcclxuICogYSBkZXZlbG9wZXIgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb2Ygd2hlbiBiaWd3aGVlbCBzdGFydHMgZG9pbmcgaXQncyB0aGluZy5cclxuICovXHJcbmJpZ3doZWVsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBvblNldHRpbmdDb21wbGV0ZSA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcblxyXG5cdFx0dmFyIHMgPSB0aGlzLnMgPSBzZXR0aW5ncztcclxuXHJcblx0XHRpZihzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91ciBzZXR0aW5ncyBmdW5jdGlvbiBtdXN0IHJldHVybiBhIHNldHRpbmdzIE9iamVjdCcpO1xyXG5cclxuXHRcdGlmKHMucm91dGVzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91ciBzZXR0aW5ncyBvYmplY3QgbXVzdCBkZWZpbmUgcm91dGVzJyk7XHJcblxyXG5cdFx0cy5hdXRvUmVzaXplID0gcy5hdXRvUmVzaXplID09PSB1bmRlZmluZWQgPyB0cnVlIDogcy5hdXRvUmVzaXplO1xyXG5cclxuXHRcdHRoaXMucHJldmlvdXNSb3V0ZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHR0aGlzLmRlcHRoID0gW107XHJcblx0XHR0aGlzLnZtcyA9IFtdO1xyXG5cdFx0dGhpcy5yb3V0ZXMgPSB7fTtcclxuXHRcdHRoaXMucGFyc2VSb3V0ZXMoc2V0dGluZ3Mucm91dGVzKTtcclxuXHJcblx0XHQvLyBzZXR1cCB0aGUgcm91dGVyXHJcblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcih0aGlzLnJvdXRlcyk7XHJcblx0XHR0aGlzLnJvdXRlci5vbigncm91dGUnLCB0aGlzLnNob3cuYmluZCh0aGlzKSk7XHJcblxyXG5cdFx0Ly8gUmUtZGlzcGF0Y2ggcm91dGVzXHJcblx0XHR0aGlzLnJvdXRlci5vbigncm91dGUnLHRoaXMuZW1pdC5iaW5kKHRoaXMsJ3JvdXRlJykpO1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIFxyXG5cdFx0aWYocy5hdXRvUmVzaXplICYmIGdsb2JhbC5pbm5lcldpZHRoICE9PSB1bmRlZmluZWQgJiYgZ2xvYmFsLmlubmVySGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcblx0XHRcdG9uKGdsb2JhbCwgJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcblxyXG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vIGhhbmRsZSBpZiB0aGVyZSBpcyBhbiBpbml0IHNlY3Rpb24gdGhpcyBzaG91bGQgYmUgc2hvd24gZXZlbiBiZWZvcmVcclxuXHRcdC8vIHRoZSByb3V0ZXIgcmVzb2x2ZXNcclxuXHRcdGlmKHMuaW5pdFNlY3Rpb24pXHJcblx0XHRcdHRoaXMuc2hvdyh7c2VjdGlvbjogcy5pbml0U2VjdGlvbi5iaW5kKHVuZGVmaW5lZCwgdGhpcy5yb3V0ZXIuaW5pdC5iaW5kKHRoaXMucm91dGVyKSl9KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5yb3V0ZXIuaW5pdCgpO1xyXG5cdH0uYmluZCh0aGlzKTtcclxuXHJcblxyXG5cdHZhciByVmFsID0gdGhpcy5zZXR0aW5nc0Z1bmMob25TZXR0aW5nQ29tcGxldGUpO1xyXG5cclxuXHQvLyBjaGVjayBpZiBwcm9taXNlcyBhcmUgdXNlZCBpbnN0ZWFkXHJcblx0Ly8gaXQgbWlnaHQgYmUgZ29vZCB0byByZW1vdmUgdGhpcyBzaW5jZSB0aGVyZXMgbm9cclxuXHQvLyBuZWVkIGZvciBwcm9taXNlcyBpbiB0aGlzIGNhc2VcclxuXHRpZihyVmFsICYmIHJWYWwudGhlbilcclxuXHRcdHJWYWwudGhlbihvblNldHRpbmdDb21wbGV0ZSk7XHJcblx0Ly8gY2hlY2sgaWYganVzdCBhbiBvYmplY3Qgd2FzIHJldHVybmVkIHdoaWNoIGhhcyAucm91dGVzXHJcblx0ZWxzZSBpZihyVmFsICYmIHJWYWwucm91dGVzKVxyXG5cdFx0b25TZXR0aW5nQ29tcGxldGUoclZhbCk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLnBhcnNlUm91dGVzID0gZnVuY3Rpb24ocm91dGVzLHByZWZpeCkge1xyXG5cdHZhciBkZXB0aCA9IChwcmVmaXggfHwgJycpLnNwbGl0KCcvJykubGVuZ3RoO1xyXG5cdGlmICh0aGlzLnZtcy5sZW5ndGg8ZGVwdGgpIHRoaXMudm1zLnB1c2godm0odGhpcy5zKSk7XHJcblx0cHJlZml4ID0gcHJlZml4IHx8IFwiXCI7XHJcblx0Zm9yICh2YXIga2V5IGluIHJvdXRlcykge1xyXG5cdFx0aWYgKGtleS5jaGFyQXQoMCk9PT0nLycpIHtcclxuXHRcdFx0aWYgKHByZWZpeCkgcm91dGVzW2tleV0ucGFyZW50ID0gcHJlZml4O1xyXG5cdFx0XHR0aGlzLnJvdXRlc1twcmVmaXgra2V5XSA9IHJvdXRlc1trZXldO1xyXG5cdFx0XHRpZiAocm91dGVzW2tleV0ucm91dGVzKSB7XHJcblx0XHRcdFx0dGhpcy5wYXJzZVJvdXRlcyhyb3V0ZXNba2V5XS5yb3V0ZXMscHJlZml4K2tleSk7XHJcblx0XHRcdFx0ZGVsZXRlIHJvdXRlc1trZXldLnJvdXRlcztcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5yb3V0ZXNba2V5XSA9IHJvdXRlc1trZXldO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBnbyBjYW4gYmUgY2FsbGVkIHRvIGdvIHRvIGFub3RoZXIgc2VjdGlvbi5cclxuICogXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gdG8gVGhpcyBpcyB0aGUgcm91dGUgeW91IHdhbnQgdG8gZ28gdG8uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogZnJhbWV3b3JrLmdvKCcvbGFuZGluZycpO1xyXG4gKiBgYGBcclxuICovXHJcbmJpZ3doZWVsLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uKHRvLG9wdGlvbnMpIHtcclxuXHJcblx0dGhpcy5yb3V0ZXIuZ28odG8sb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlc3Ryb3lzIGJpZ2h3ZWVsXHJcbiAqL1xyXG5iaWd3aGVlbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR0aGlzLnJvdXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JvdXRlJyk7XHJcblx0dGhpcy5yb3V0ZXIuZGVzdHJveSgpO1xyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXNpemUgY2FuIGJlIGNhbGxlZCBhdCBhbnkgdGltZS4gVGhlIHZhbHVlcyBwYXNzZWQgaW4gZm9yXHJcbiAqIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGN1cnJlbnRseSBpbnN0YW50aWF0ZWRcclxuICogc2VjdGlvbnMuXHJcbiAqXHJcbiAqIElmIGBhdXRvUmVzaXplYCB3YXMgbm90IHBhc3NlZCBpbiBvciBpdCB3YXMgdHJ1ZSB0aGVuIHJlc2l6ZVxyXG4gKiB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2FsbGVkIHdoZW4gdGhlIHdpbmRvdyBvZiB0aGUgYnJvd3NlclxyXG4gKiByZXNpemVzLlxyXG4gKiBcclxuICogQHBhcmFtICB7TnVtYmVyfSB3IHdpZHRoIHZhbHVlIHlvdSdkIGxpa2UgdG8gcGFzcyB0byB0aGUgc2VjdGlvbnNcclxuICogQHBhcmFtICB7TnVtYmVyfSBoIGhlaWdodCB2YWx1ZSB5b3UnZCBsaWtlIHRvIHBhc3MgdG8gdGhlIHNlY3Rpb25zXHJcbiAqL1xyXG5iaWd3aGVlbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24odywgaCkge1xyXG5cdGZvciAodmFyIGk9MDsgaTx0aGlzLnZtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dGhpcy52bXNbaV0ucmVzaXplKHcsaCk7XHJcblx0fVxyXG59O1xyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihpbmZvKSB7XHJcblx0dmFyIHNlY3Rpb24gPSBpbmZvLnNlY3Rpb247XHJcblx0dmFyIHJlcSA9IGluZm8ucm91dGUgfHwge307XHJcblx0cmVxLnByZXZpb3VzID0gdGhpcy5wcmV2aW91c1JvdXRlO1xyXG5cdHJlcS5mcmFtZXdvcmsgPSB0aGlzO1xyXG5cclxuXHRpZiAocmVxLnJvdXRlKSB7XHJcblx0XHR2YXIgZGVwdGggPSBbdGhpcy5yZWJ1aWxkUm91dGUocmVxLnJvdXRlLGluZm8ucGF0aCldO1xyXG5cdFx0dmFyIHZpZXdzID0gW3NlY3Rpb24uc2VjdGlvbiB8fCBzZWN0aW9uXTtcclxuXHRcdHdoaWxlIChzZWN0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRkZXB0aC51bnNoaWZ0KHRoaXMucmVidWlsZFJvdXRlKHNlY3Rpb24ucGFyZW50LGluZm8ucGF0aCkpO1xyXG5cdFx0XHRzZWN0aW9uID0gdGhpcy5yb3V0ZXNbc2VjdGlvbi5wYXJlbnRdO1xyXG5cdFx0XHR2aWV3cy51bnNoaWZ0KHNlY3Rpb24uc2VjdGlvbiB8fCBzZWN0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcHJldkRlcHRoID0gdGhpcy5kZXB0aDtcclxuXHRcdHRoaXMuZGVwdGggPSBkZXB0aDtcclxuXHRcdHZhciB0b3RhbCA9IE1hdGgubWF4KHByZXZEZXB0aC5sZW5ndGgsZGVwdGgubGVuZ3RoKTtcclxuXHRcdGZvciAodmFyIGk9MDsgaTx0b3RhbDsgaSsrKSB7XHJcblx0XHRcdGlmIChpPmRlcHRoLmxlbmd0aC0xKSB7XHJcblx0XHRcdFx0dGhpcy52bXNbaV0uY2xlYXIocmVxKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwcmV2RGVwdGhbaV0hPWRlcHRoW2ldKSB7XHJcblx0XHRcdFx0dGhpcy52bXNbaV0uc2hvdyh0aGlzLnBhcnNlU2VjdGlvbih2aWV3c1tpXSkscmVxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLnZtc1swXS5zaG93KHRoaXMucGFyc2VTZWN0aW9uKHNlY3Rpb24uc2VjdGlvbiB8fCBzZWN0aW9uKSxyZXEpO1xyXG5cdH1cclxuXHRcclxuXHR0aGlzLnByZXZpb3VzUm91dGUgPSBpbmZvLnJvdXRlO1xyXG59O1xyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLnJlYnVpbGRSb3V0ZSA9IGZ1bmN0aW9uKHJvdXRlLHBhdGgpIHtcclxuXHR2YXIgcGF0aCA9IHBhdGguc3BsaXQoJy8nKVxyXG5cdHBhdGgubGVuZ3RoID0gcm91dGUuc3BsaXQoJy8nKS5sZW5ndGg7XHJcblx0cmV0dXJuIHBhdGguam9pbignLycpO1xyXG59O1xyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLnBhcnNlU2VjdGlvbiA9IGZ1bmN0aW9uKHNlY3Rpb24pIHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShzZWN0aW9uKSkge1xyXG5cdFx0Zm9yICh2YXIgaT0wOyBpPHNlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBzZWN0aW9uW2ldID09ICdmdW5jdGlvbicpIHNlY3Rpb25baV0gPSBuZXcgc2VjdGlvbltpXSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZpZXdtZWRpYXRvci5hcHBseSh1bmRlZmluZWQsc2VjdGlvbik7XHJcblx0fSBlbHNlIGlmICh0eXBlb2Ygc2VjdGlvbiA9PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRyZXR1cm4gbmV3IHNlY3Rpb24oKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHNlY3Rpb247XHJcblx0fVxyXG59O1xyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHRoaXMucmVzaXplKGdsb2JhbC5pbm5lcldpZHRoLCBnbG9iYWwuaW5uZXJIZWlnaHQpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiaWd3aGVlbDsiLCJmdW5jdGlvbiBtZWRpYXRvcigpIHtcblxuICBpZighKCB0aGlzIGluc3RhbmNlb2YgbWVkaWF0b3IgKSkge1xuXG4gICAgdmFyIHJWYWwgPSBPYmplY3QuY3JlYXRlKG1lZGlhdG9yLnByb3RvdHlwZSk7XG4gICAgbWVkaWF0b3IuYXBwbHkoclZhbCwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gclZhbDtcbiAgfVxuXG4gIHRoaXMuaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xufVxuXG5tZWRpYXRvci5wcm90b3R5cGUgPSB7XG5cbiAgaW5pdDogZnVuY3Rpb24oZGF0YSwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEFsbCgnaW5pdCcsIGRhdGEsIGRvbmUpO1xuICB9LFxuXG4gIHJlc2l6ZTogZnVuY3Rpb24odywgaCkge1xuXG4gICAgZm9yKHZhciBpID0gMCwgbGVuID0gdGhpcy5pdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG4gICAgICBpZih0eXBlb2YgdGhpcy5pdGVtc1sgaSBdLnJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLml0ZW1zWyBpIF0ucmVzaXplKHcsIGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhbmltYXRlSW46IGZ1bmN0aW9uKGRhdGEsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxBbGwoJ2FuaW1hdGVJbicsIGRhdGEsIGRvbmUpOyAgICBcbiAgfSxcblxuICBhbmltYXRlT3V0OiBmdW5jdGlvbihkYXRhLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQWxsKCdhbmltYXRlT3V0JywgZGF0YSwgZG9uZSk7XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24oZGF0YSwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEFsbCgnZGVzdHJveScsIGRhdGEsIGRvbmUpO1xuICB9LFxuXG4gIGNsZWFyOiBmdW5jdGlvbihkb25lKSB7XG4gICAgdGhpcy5jYWxsQWxsKCdjbGVhcicsIGRhdGEsIGRvbmUpO1xuICB9LFxuXG4gIGNhbGxBbGw6IGZ1bmN0aW9uKGZ1bmMsIGRhdGEsIGRvbmUpIHtcblxuICAgIHZhciBudW1DYWxsZWQgPSAwO1xuICAgIHZhciBudW1Ub0NhbGwgPSAwO1xuICAgIHZhciBpO1xuICAgIHZhciBsZW47XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oc2VjdGlvbikge1xuXG4gICAgICBpZih0eXBlb2Ygc2VjdGlvblsgZnVuYyBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG51bVRvQ2FsbCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIGZ1bmN0aW9ucyB0byBjYWxsIHNpbXBseSBqdXN0IHJldHVyblxuICAgIGlmKG51bVRvQ2FsbCA9PT0gMCkge1xuXG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHNlY3Rpb24pIHtcblxuICAgICAgICBpZih0eXBlb2Ygc2VjdGlvblsgZnVuYyBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgc2VjdGlvblsgZnVuYyBdLmNhbGwoc2VjdGlvbiwgZGF0YSwgb25TZWN0aW9uRG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2VjdGlvbkRvbmUoKSB7XG4gICAgICBpZigrK251bUNhbGxlZCA9PT0gbnVtVG9DYWxsKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7IiwibW9kdWxlLmV4cG9ydHMgPSBvbjtcclxubW9kdWxlLmV4cG9ydHMub24gPSBvbjtcclxubW9kdWxlLmV4cG9ydHMub2ZmID0gb2ZmO1xyXG5cclxuZnVuY3Rpb24gb24gKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xyXG5cclxuICBpZiggZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ICkge1xyXG5cclxuICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xyXG5cclxuICAgICAgb25lT24oZWxlbWVudFsgaSBdLCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgb25lT24oZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTsgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhbGxiYWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmYgKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xyXG5cclxuICBpZiggZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ICkge1xyXG5cclxuICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBlbGVtZW50Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xyXG5cclxuICAgICAgb25lT2ZmKGVsZW1lbnRbIGkgXSwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG5cclxuICAgIG9uZU9mZiggZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlICk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gb25lT24gKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xyXG5cclxuICAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyIHx8IGVsZW1lbnQuYXR0YWNoRXZlbnQpLmNhbGwoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25lT2ZmIChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcclxuXHJcbiAgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCBlbGVtZW50LmRldGFjaEV2ZW50KS5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XHJcbn0iLCJ2YXIgcm91dGVzID0gcmVxdWlyZSgncm91dGVzJyk7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xudmFyIGxvYyA9IG5ldyAocmVxdWlyZSgnbG9jYXRpb24tYmFyJykpKCk7XG52YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XG5cbmZ1bmN0aW9uIHJvdXRlcihzZXR0aW5ncykge1xuXG5cdGlmKCAhKCB0aGlzIGluc3RhbmNlb2Ygcm91dGVyICkgKSB7XG5cblx0XHRyZXR1cm4gbmV3IHJvdXRlcihzZXR0aW5ncyk7XG5cdH1cblxuXHR2YXIgcyA9IHRoaXMucyA9IHNldHRpbmdzIHx8IHt9O1xuXG5cdHMucG9zdEhhc2ggPSBzLnBvc3RIYXNoIHx8ICchJztcblxuXHR0aGlzLmxhc3RSb3V0ZSA9IG51bGw7XG5cdHRoaXMuY2hpbGRSb3V0ZXIgPSBudWxsO1xuXHR0aGlzLmNoaWxkRnVsbFJvdXRlID0gbnVsbDtcblx0dGhpcy5jaGlsZEJhc2VSb3V0ZSA9IG51bGw7XG5cdHRoaXMucm91dGVyID0gcm91dGVzKCk7XG5cblx0RXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG59XG5cbnZhciBwID0gcm91dGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XG5cbnAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG5cdHZhciBzID0gdGhpcy5zO1xuXHR2YXIgaTtcblxuXHQvLyBmaWd1cmUgb3V0IGEgc3RhcnQgc2VjdGlvblxuXHRpZiggc1sgJy8nIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHBhdGggd2hpY2ggd291bGQgYmUgYSBzZWN0aW9uXG5cdFx0Zm9yKGkgaW4gcykge1xuXG5cdFx0XHRpZiggaVsgMCBdID09ICcvJyApIHtcblxuXHRcdFx0XHRzLnN0YXJ0ID0gaTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cblx0XHRzLnN0YXJ0ID0gJy8nO1xuXHR9XG5cblxuXHQvLyBub3cgc2V0dXAgcm91dGVzXG5cdGZvcihpIGluIHMpIHtcblxuXHRcdGlmKCBpWyAwIF0gPT0gJy8nIHx8IGkgPT0gJzQwNCcpIHtcblxuXHRcdFx0dGhpcy5yb3V0ZXIuYWRkUm91dGUoaSwgbm9vcCk7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5vblVSTCA9IHRoaXMub25VUkwuYmluZCh0aGlzKTtcblxuXHRpZiggZ2xvYmFsLmxvY2F0aW9uICkge1xuXHRcdGxvYy5zdGFydCh7cHVzaFN0YXRlOiB0aGlzLnMucHVzaFN0YXRlIT09dW5kZWZpbmVkID8gdGhpcy5zLnB1c2hTdGF0ZSA6IHRydWUsIHJvb3Q6IHRoaXMucy5yb290IHx8ICcvJ30pO1xuXHRcdHRoaXMuaGFzUHVzaFN0YXRlID0gbG9jLmhhc1B1c2hTdGF0ZSgpO1xuXHRcdGxvYy5vbkNoYW5nZSh0aGlzLm9uVVJMKTtcblx0XHRsb2MubG9hZFVybCgpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMub25VUkwoKTtcblx0fVxuXHRcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5wLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRpZihnbG9iYWwubG9jYXRpb24pIHtcblx0XHRsb2Muc3RvcCgpO1xuXHR9XG59O1xuXG5wLmFkZCA9IGZ1bmN0aW9uKHJvdXRlLCBzZWN0aW9uKSB7XG5cblx0dmFyIHMgPSB0aGlzLnM7XG5cblx0c1sgcm91dGUgXSA9IHNlY3Rpb247XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5wLmdvID0gZnVuY3Rpb24ocm91dGVTdHIsb3B0aW9ucykge1xuXG5cdHZhciByb3V0ZURhdGE7XG5cdHZhciBzZWN0aW9uO1xuXHR2YXIgbmV3VVJMO1xuXHR2YXIgZG9VUkxDaGFuZ2U7XG5cblx0aWYoIHJvdXRlU3RyLmNoYXJBdCgwKSAhPSAnLycgKSB7XG5cdFx0cm91dGVTdHIgPSAnLycgKyByb3V0ZVN0cjtcblx0fVxuXG5cdG5ld1VSTCA9ICh0aGlzLmhhc1B1c2hTdGF0ZSA/ICcnIDogdGhpcy5zLnBvc3RIYXNoKSArIHJvdXRlU3RyO1xuXHRyb3V0ZURhdGEgPSB0aGlzLmdldFJvdXRlRGF0YShyb3V0ZVN0cikgfHwgdGhpcy5nZXRSb3V0ZURhdGEoJzQwNCcpO1xuXHRzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHJvdXRlRGF0YSk7XG5cdGRvVVJMQ2hhbmdlID0gdGhpcy51c2VVUkwoc2VjdGlvbik7XG5cblx0Ly8gaWYgdGhpcyBpcyBub3QgYSBzZWN0aW9uIGRlc2NyaXB0b3Igb3IgaXQgaXMgYSBkZXNjcmlwdG9yIGFuZCB3ZSBzaG91bGQgdXBkYXRlVVJMXG5cdGlmKCBnbG9iYWwubG9jYXRpb24gJiYgZG9VUkxDaGFuZ2UgKSB7XG5cdFx0dmFyIHVybCA9IHRoaXMuaGFzUHVzaFN0YXRlID8gZ2xvYmFsLmxvY2F0aW9uLnBhdGhuYW1lIDogZ2xvYmFsLmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG5cdFx0aWYodXJsICE9IG5ld1VSTCkge1xuXHRcdFx0bG9jLnVwZGF0ZShuZXdVUkwse1xuXHRcdFx0XHR0cmlnZ2VyOiAob3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudCkgPyBmYWxzZSA6IHRydWUsXG5cdFx0XHRcdHJlcGxhY2U6IChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZihzZWN0aW9uLmR1cGxpY2F0ZSB8fCAhc2VjdGlvbi51c2VVUkwpIHtcblx0XHRcdC8vIENoZWNrIGlmIGR1cGxpY2F0ZSBpcyBzZXQuIFRoZSBjaGVjayBpcyBkb25lIGhlcmUgc2luY2UsIG9uaGFzaGNoYW5nZSBldmVudCB0cmlnZ2VycyBcblx0XHRcdC8vIG9ubHkgd2hlbiB1cmwgY2hhbmdlcyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBjaGVjayB0byBhbGxvdyBkdXBsaWNhdGUvcmVwZWF0aW5nIHJvdXRlXG5cblx0XHRcdC8vIEFkZGl0aW9uYWxseSBjaGVjayBpZiB1c2VVUkwgaXMgc2V0IHRvIGZhbHNlLiBJZiBub3QsIHRoZSByb3V0ZSBpcyBub3QgdHJpZ2dlcmVkIGJ5XG5cdFx0XHQvLyB1cmwgY2hhbmdlc1xuXHRcdFx0dGhpcy5kb1JvdXRlKHJvdXRlRGF0YSwgc2VjdGlvbiwgcm91dGVTdHIpO1xuXHRcdH0gXG5cdH0gZWxzZSBpZiggIWdsb2JhbC5sb2NhdGlvbiB8fCAhZG9VUkxDaGFuZ2UgKSB7XG5cdFx0dGhpcy5kb1JvdXRlKHJvdXRlRGF0YSwgc2VjdGlvbiwgcm91dGVTdHIpO1xuXHR9XG59O1xuXG5wLmRvUm91dGUgPSBmdW5jdGlvbihyb3V0ZURhdGEsIHNlY3Rpb24sIHBhdGgpIHtcblxuXHR2YXIgcyA9IHRoaXMucztcblxuXHQvLyBjaGVjayBpZiB0aGlzIGlzIGEgcmVkaXJlY3Rcblx0aWYoIHR5cGVvZiBzZWN0aW9uID09ICdzdHJpbmcnICkge1xuXG5cdFx0dGhpcy5nbyhzZWN0aW9uKTtcblx0fSBlbHNlIHsgXG5cblx0XHRpZihyb3V0ZURhdGEucm91dGUgIT09IHRoaXMubGFzdFJlc29sdmVkUm91dGUgfHwgc2VjdGlvbi5kdXBsaWNhdGUpIHtcblxuXHRcdFx0dGhpcy5sYXN0UmVzb2x2ZWRSb3V0ZSA9IHJvdXRlRGF0YS5yb3V0ZTtcblxuXHRcdFx0Ly8gb3RoZXJ3aXNlIHRyZWF0IGl0IGFzIGEgcmVndWxhciBzZWN0aW9uXG5cdFx0XHQvLyBpZiB0aGlzIGlzIGEgb2JqZWN0IGRlZmluaXRpb24gdnMgYSBzZWN0aW9uIGRlZmluaXRpb24gKHJlZ3VsYXIgc2VjdGlvbiBvciBhcnJheSlcblx0XHRcdHRoaXMuZW1pdCgncm91dGUnLCB7XG5cdFx0XHRcdHNlY3Rpb246IHNlY3Rpb24sXG5cdFx0XHRcdHJvdXRlOiByb3V0ZURhdGEsXG5cdFx0XHRcdHBhdGg6IHBhdGhcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBcbn07XG5cbnAuZ2V0Um91dGVEYXRhID0gZnVuY3Rpb24ocm91dGVTdHIpIHtcblxuXHR2YXIgcm91dGVEYXRhID0gdGhpcy5yb3V0ZXIubWF0Y2gocm91dGVTdHIpO1xuXG5cdGlmKHJvdXRlRGF0YSkge1xuXHRcdHRoaXMubGFzdFJvdXRlID0gcm91dGVEYXRhLnJvdXRlO1xuXHR9XG5cblx0cmV0dXJuIHJvdXRlRGF0YTtcbn07XG5cbnAuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHJvdXRlRGF0YSkge1xuXG5cdGlmKHJvdXRlRGF0YSkge1xuXHRcdHZhciBoYXNXaWxkY2FyZCA9IHJvdXRlRGF0YS5yb3V0ZSAmJiAocm91dGVEYXRhLnJvdXRlLm1hdGNoKC8uKltcXFtcXF1AISQmOicoKSorLDs9XS4qL2cpIHx8IHJvdXRlRGF0YS5yb3V0ZSBpbnN0YW5jZW9mIFJlZ0V4cCk7XG5cdFx0dmFyIHNlYyA9IHRoaXMuc1sgcm91dGVEYXRhLnJvdXRlIF07XG5cdFx0aWYgKGhhc1dpbGRjYXJkICYmIHNlYy5kdXBsaWNhdGU9PT11bmRlZmluZWQpIHtcblx0XHRcdGlmICghc2VjLnNlY3Rpb24pIHtcblx0XHRcdFx0cmV0dXJuIHtzZWN0aW9uOiBzZWMsIGR1cGxpY2F0ZTogdHJ1ZX07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWMuZHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHNlYztcblx0XHRcdH1cblx0XHR9XHRlbHNlIHtcblx0XHRcdHJldHVybiBzZWM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cbnAudXNlVVJMID0gZnVuY3Rpb24oc2VjdGlvbikge1xuXG5cdHJldHVybiBzZWN0aW9uICYmIFxuXHRcdCAgICggc2VjdGlvbi5zZWN0aW9uID09PSB1bmRlZmluZWQgfHwgIC8vIGlmIHRoaXMgaXMgbm90IGEgc2VjdGlvbiBkZXNjcmlwdG9yIHVwZGF0ZSB1cmxcblx0XHQgICAoIHNlY3Rpb24uc2VjdGlvbiAmJiBzZWN0aW9uLnVzZVVSTCB8fCBzZWN0aW9uLnVzZVVSTCA9PT0gdW5kZWZpbmVkICkgKTsgLy9pcyBkZXNjcmlwdG9yIGFuZCBoYXMgdXNlVVJMIG9yIHVuZGVmaW5lZFxufTtcblxucC5vblVSTCA9IGZ1bmN0aW9uKHVybCkge1xuXHR2YXIgcm91dGVTdHIgPSAnLyc7XG5cdHZhciByb3V0ZURhdGE7XG5cdHZhciBzZWN0aW9uO1xuXG5cdGlmKCBnbG9iYWwubG9jYXRpb24gJiYgdXJsIT09dW5kZWZpbmVkICYmIHVybCE9PW51bGwgKSB7XG5cblx0XHRpZiAodXJsLmNoYXJBdCgwKSAhPSAnLycpIHVybCA9ICcvJyArIHVybDtcblx0XHQvLyBpZiB3ZSd2ZSBhbHJlYWR5IGxvb2tlZCBhdCB0aGlzIHVybCB0aGVuIGp1c3QgZ2V0IG91dCBvZiB0aGlzIGZ1bmN0aW9uXG5cdFx0aWYodXJsID09PSB0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5yZXNvbHZlZCA9IHVybDtcblx0XHRyb3V0ZVN0ciA9ICh0aGlzLmhhc1B1c2hTdGF0ZSB8fCB1cmwubGVuZ3RoPDIpID8gdXJsIDogdXJsLnN1YnN0cigxICsgdGhpcy5zLnBvc3RIYXNoLmxlbmd0aCk7XG5cdH1cblxuXHRyb3V0ZURhdGEgPSB0aGlzLmdldFJvdXRlRGF0YShyb3V0ZVN0cikgfHwgdGhpcy5nZXRSb3V0ZURhdGEoJzQwNCcpO1xuXHRzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHJvdXRlRGF0YSk7XG5cblx0Ly8gc2VlIGlmIHdlIGNhbiBkZWVwIGxpbmsgaW50byB0aGlzIHNlY3Rpb24gKGVpdGhlciBub3JtYWwgb3IgNDA0IHNlY3Rpb24pXG5cdGlmKCB0aGlzLnVzZVVSTChzZWN0aW9uKSApIHtcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XG5cdC8vIGVsc2UgY2hlY2sgaWYgdGhlcmUncyBhIDQwNCBpZiBzbyB0aGVuIGdvIHRoZXJlXG5cdH0gZWxzZSBpZiggdGhpcy5zWyc0MDQnXSApe1xuXG5cdFx0cm91dGVEYXRhID0gdGhpcy5nZXRSb3V0ZURhdGEoJzQwNCcpO1xuXHRcdHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24ocm91dGVEYXRhKTtcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImZ1bmN0aW9uIFZpZXdNYW5hZ2VyKCBzZXR0aW5ncyApIHtcblxuICBpZiggISggdGhpcyBpbnN0YW5jZW9mIFZpZXdNYW5hZ2VyICkgKSB7XG4gICAgcmV0dXJuIG5ldyBWaWV3TWFuYWdlciggc2V0dGluZ3MgKTtcbiAgfVxuXG4gIHZhciBzID0gdGhpcy5zID0gc2V0dGluZ3MgfHwge307XG5cbiAgcy5vdmVybGFwID0gcy5vdmVybGFwID09PSB1bmRlZmluZWQgPyB0cnVlIDogcy5vdmVybGFwO1xuICBzLndpZHRoID0gcy53aWR0aCB8fCA5ODA7XG4gIHMuaGVpZ2h0ID0gcy5oZWlnaHQgfHwgNTcwO1xuXG4gIHRoaXMuY0NvbnRlbnQgPSBudWxsO1xuICB0aGlzLm5Db250ZW50ID0gbnVsbDtcbn1cblxudmFyIHAgPSBWaWV3TWFuYWdlci5wcm90b3R5cGUgPSB7XG5cbiAgc2hvdzogZnVuY3Rpb24oIGNvbnRlbnQsIGRhdGEsIG9uQ29tcGxldGUgKSB7XG5cbiAgICAvLyBjaGVjayBpZiBkYXRhIHdhcyBwYXNzZWQgaW5cbiAgICBpZiggb25Db21wbGV0ZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICB0eXBlb2YgZGF0YSA9PSAnZnVuY3Rpb24nICkge1xuXG4gICAgICBvbkNvbXBsZXRlID0gZGF0YTtcbiAgICAgIGRhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICBpZiggY29udGVudCAhPSB0aGlzLm5Db250ZW50ICYmIGNvbnRlbnQgIT0gdGhpcy5jQ29udGVudCApIHtcblxuICAgICAgaWYoIHRoaXMubkNvbnRlbnQgJiYgdGhpcy5uQ29udGVudC5kZXN0cm95IClcbiAgICAgICAgdGhpcy5uQ29udGVudC5kZXN0cm95KHRoaXMuZGF0YSwgZnVuY3Rpb24oKSB7IH0pO1xuXG4gICAgICB0aGlzLm5Db250ZW50ID0gY29udGVudDtcblxuICAgICAgaWYoIGNvbnRlbnQuaW5pdCApIHtcblxuICAgICAgICBjb250ZW50LmluaXQoIHRoaXMuZGF0YSwgdGhpcy5zd2FwLmJpbmQoIHRoaXMsIHRoaXMubkNvbnRlbnQsIG9uQ29tcGxldGUgKSApOyBcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5zd2FwKCB0aGlzLm5Db250ZW50LCBvbkNvbXBsZXRlICk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNsZWFyOiBmdW5jdGlvbiggZGF0YSwgb25Db21wbGV0ZSApIHtcblxuICAgIC8vIGNoZWNrIGlmIGRhdGEgd2FzIHBhc3NlZCBpblxuICAgIGlmKCBvbkNvbXBsZXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHR5cGVvZiBkYXRhID09ICdmdW5jdGlvbicgKSB7XG5cbiAgICAgIG9uQ29tcGxldGUgPSBkYXRhO1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIGlmKCB0aGlzLm5Db250ZW50ICYmIHRoaXMubkNvbnRlbnQuZGVzdHJveSApIHtcbiAgICAgIHRoaXMubkNvbnRlbnQuZGVzdHJveSggdGhpcy5kYXRhLCBmdW5jdGlvbigpIHsgfSApO1xuICAgIH1cblxuICAgIGlmKCB0aGlzLmNDb250ZW50ICkge1xuXG4gICAgICB2YXIgb25PbGRPdXQgPSBmdW5jdGlvbiggb2xkQ29udGVudCApIHtcblxuICAgICAgICBpZiggb2xkQ29udGVudC5kZXN0cm95ICkge1xuICAgICAgICAgIG9sZENvbnRlbnQuZGVzdHJveSggdGhpcy5kYXRhICwgZnVuY3Rpb24oKSB7IH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBvbkNvbXBsZXRlICkge1xuICAgICAgICAgIG9uQ29tcGxldGUoIG9sZENvbnRlbnQgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCB0aGlzLmNDb250ZW50ID09PSBvbGRDb250ZW50ICkge1xuICAgICAgICAgIHRoaXMuY0NvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgIH0uYmluZCggdGhpcywgdGhpcy5jQ29udGVudCApO1xuXG4gICAgICAvLyBub3cgdGFrZSBvdXQgY291bnRlbnRcbiAgICAgIGlmKCB0aGlzLmNDb250ZW50LmFuaW1hdGVPdXQgKSB7XG4gICAgICAgIHRoaXMuY0NvbnRlbnQuYW5pbWF0ZU91dCggdGhpcy5kYXRhICwgb25PbGRPdXQgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uT2xkT3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlc2l6ZTogZnVuY3Rpb24oIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICB2YXIgcyA9IHRoaXMucztcblxuICAgIHMud2lkdGggPSB3aWR0aDtcbiAgICBzLmhlaWdodCA9IGhlaWdodDtcblxuICAgIGlmKCB0aGlzLmNDb250ZW50ICYmIHRoaXMuY0NvbnRlbnQucmVzaXplIClcbiAgICAgIHRoaXMuY0NvbnRlbnQucmVzaXplKCB3aWR0aCwgaGVpZ2h0ICk7XG4gIH0sXG5cbiAgc3dhcDogZnVuY3Rpb24oIG5ld0NvbnRlbnQsIG9uQ29tcGxldGUgKSB7XG5cbiAgICBpZiggbmV3Q29udGVudCA9PSB0aGlzLm5Db250ZW50ICkge1xuXG4gICAgICB2YXIgcyA9IHRoaXMucztcbiAgICAgIHZhciBvbGRDb250ZW50ID0gdGhpcy5jQ29udGVudDtcbiAgICAgIHZhciBvbk9sZE91dDtcblxuICAgICAgdmFyIG9uTmV3SW4gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiggcy5vbkVuZEFuaUluICkge1xuICAgICAgICAgIHMub25FbmRBbmlJbiggbmV3Q29udGVudCwgb2xkQ29udGVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG9uQ29tcGxldGUgKSB7XG4gICAgICAgICAgb25Db21wbGV0ZSggbmV3Q29udGVudCwgb2xkQ29udGVudCApO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgYnJpbmdJbk5ld0NvbnRlbnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiggcy5vblN0YXJ0QW5pSW4gKSB7XG4gICAgICAgICAgcy5vblN0YXJ0QW5pSW4oIG5ld0NvbnRlbnQsIHRoaXMuY0NvbnRlbnQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY0NvbnRlbnQgPSBuZXdDb250ZW50O1xuICAgICAgICB0aGlzLm5Db250ZW50ID0gbnVsbDtcblxuICAgICAgICBpZiggbmV3Q29udGVudC5hbmltYXRlSW4gKSB7XG4gICAgICAgICAgbmV3Q29udGVudC5hbmltYXRlSW4oIHRoaXMuZGF0YSwgb25OZXdJbiApOyAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25OZXdJbigpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQoIHRoaXMgKTtcblxuICAgICAgdmFyIHRha2VPdXRPbGRDb250ZW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoIHMub25TdGFydEFuaU91dCApIHtcbiAgICAgICAgICBzLm9uU3RhcnRBbmlPdXQoIG5ld0NvbnRlbnQsIG9sZENvbnRlbnQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlJ3MgYW4gYW5pbWF0ZU91dCBmdW5jdGlvbiBleGVjdXRlIGl0IG9uIG9sZENvbnRlbnRcbiAgICAgICAgaWYoIG9sZENvbnRlbnQuYW5pbWF0ZU91dCApIHtcbiAgICAgICAgICBvbGRDb250ZW50LmFuaW1hdGVPdXQoIHRoaXMuZGF0YSwgb25PbGRPdXQgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbk9sZE91dCgpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQoIHRoaXMgKTtcblxuICAgICAgdmFyIGRlc3Ryb3lPbGRDb250ZW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoIHMub25FbmRBbmlPdXQgKSB7XG4gICAgICAgICAgcy5vbkVuZEFuaU91dCggbmV3Q29udGVudCwgb2xkQ29udGVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG9sZENvbnRlbnQuZGVzdHJveSApIHtcbiAgICAgICAgICBvbGRDb250ZW50LmRlc3Ryb3koIHRoaXMuZGF0YSwgZnVuY3Rpb24oKSB7IH0gKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKCB0aGlzICk7XG5cblxuICAgICAgLy8gcmVzaXplIHRoZSBuZXdDb250ZW50IGlmIGl0IGhhcyBhIHJlc2l6ZSBtZXRob2RcbiAgICAgIGlmKCBuZXdDb250ZW50LnJlc2l6ZSApIHtcbiAgICAgICAgbmV3Q29udGVudC5yZXNpemUoIHMud2lkdGgsIHMuaGVpZ2h0ICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlJ3MgY29udGVudCBvbiBzY3JlZW4gYWxyZWFkeVxuICAgICAgaWYoIHRoaXMuY0NvbnRlbnQgKSB7XG5cbiAgICAgICAgaWYoIHMub3ZlcmxhcCApIHtcblxuICAgICAgICAgIG9uT2xkT3V0ID0gZGVzdHJveU9sZENvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBvbk9sZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBkZXN0cm95T2xkQ29udGVudCgpO1xuICAgICAgICAgICAgYnJpbmdJbk5ld0NvbnRlbnQoKTtcbiAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB0byBub3RpZnkgdGhhdCB3ZSd2ZSBzdGFydGVkIGFuaW1hdGluZyBvdXRcbiAgICAgICAgdGFrZU91dE9sZENvbnRlbnQoKTtcblxuICAgICAgICBpZiggcy5vdmVybGFwICkge1xuXG4gICAgICAgICAgYnJpbmdJbk5ld0NvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgLy8gZWxzZSB3ZSBkb24ndCBoYXZlIGN1cnJlbnQgY29udGVudCBqdXN0IGJyaW5nIGluIHRoZSBuZXdcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgYnJpbmdJbk5ld0NvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIFRoZSB0cnkgY2F0Y2ggaXMgbmVlZGVkIGZvciA8SUU5XG50cnkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgJ292ZXJsYXAnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnMub3ZlcmxhcDtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5zLm92ZXJsYXAgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufSBjYXRjaChlKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdNYW5hZ2VyOyIsIi8qKlxyXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxyXG4gKi9cclxuXHJcbnZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcclxuXHJcbi8qKlxyXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cclxuICovXHJcblxyXG52YXIgd2hpdGVzcGFjZVJlID0gL1xccysvO1xyXG5cclxuLyoqXHJcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cclxuICovXHJcblxyXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc2VzO1xyXG5tb2R1bGUuZXhwb3J0cy5hZGQgPSBhZGQ7XHJcbm1vZHVsZS5leHBvcnRzLmNvbnRhaW5zID0gaGFzO1xyXG5tb2R1bGUuZXhwb3J0cy5oYXMgPSBoYXM7XHJcbm1vZHVsZS5leHBvcnRzLnRvZ2dsZSA9IHRvZ2dsZTtcclxubW9kdWxlLmV4cG9ydHMucmVtb3ZlID0gcmVtb3ZlO1xyXG5tb2R1bGUuZXhwb3J0cy5yZW1vdmVNYXRjaGluZyA9IHJlbW92ZU1hdGNoaW5nO1xyXG5cclxuZnVuY3Rpb24gY2xhc3NlcyAoZWwpIHtcclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0O1xyXG4gIH1cclxuXHJcbiAgdmFyIHN0ciA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XHJcbiAgdmFyIGFyciA9IHN0ci5zcGxpdCh3aGl0ZXNwYWNlUmUpO1xyXG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGQgKGVsLCBuYW1lKSB7XHJcbiAgLy8gY2xhc3NMaXN0XHJcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGZhbGxiYWNrXHJcbiAgdmFyIGFyciA9IGNsYXNzZXMoZWwpO1xyXG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcclxuICBpZiAoIX5pKSBhcnIucHVzaChuYW1lKTtcclxuICBlbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKGVsLCBuYW1lKSB7XHJcbiAgcmV0dXJuIGVsLmNsYXNzTGlzdFxyXG4gICAgPyBlbC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSlcclxuICAgIDogISEgfmluZGV4KGNsYXNzZXMoZWwpLCBuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlIChlbCwgbmFtZSkge1xyXG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XHJcbiAgICByZXR1cm4gcmVtb3ZlTWF0Y2hpbmcoZWwsIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gY2xhc3NMaXN0XHJcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGZhbGxiYWNrXHJcbiAgdmFyIGFyciA9IGNsYXNzZXMoZWwpO1xyXG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcclxuICBpZiAofmkpIGFyci5zcGxpY2UoaSwgMSk7XHJcbiAgZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTWF0Y2hpbmcgKGVsLCByZSwgcmVmKSB7XHJcbiAgdmFyIGFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNsYXNzZXMoZWwpKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xyXG4gICAgICByZW1vdmUoZWwsIGFycltpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGUgKGVsLCBuYW1lKSB7XHJcbiAgLy8gY2xhc3NMaXN0XHJcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC50b2dnbGUobmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBmYWxsYmFja1xyXG4gIGlmIChoYXMoZWwsIG5hbWUpKSB7XHJcbiAgICByZW1vdmUoZWwsIG5hbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGQoZWwsIG5hbWUpO1xyXG4gIH1cclxufVxyXG4iLCIvKlxuYGRvbS1jcmVhdGUtZWxlbWVudGBcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJ2RvbS1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgZWwgPSBjcmVhdGUoe1xuICBzZWxlY3RvcjogJ2RpdicsXG4gIHN0eWxlczogJ3ByZWxvYWRlcicsXG4gIGh0bWw6ICc8c3Bhbj5UZXh0PC9zcGFuPidcbn0pO1xuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZShvcHQpIHtcblxuXHRvcHQgPSBvcHQgfHwge307XG5cdFxuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdC5zZWxlY3Rvcik7XG5cdFxuXHRpZihvcHQuYXR0cikgZm9yKHZhciBpbmRleCBpbiBvcHQuYXR0cilcblx0XHRvcHQuYXR0ci5oYXNPd25Qcm9wZXJ0eShpbmRleCkgJiYgZWwuc2V0QXR0cmlidXRlKGluZGV4LCBvcHQuYXR0cltpbmRleF0pO1xuXHRcblx0XCJhXCIgPT0gb3B0LnNlbGVjdG9yICYmIG9wdC5saW5rICYmIChcblx0XHRlbC5ocmVmID0gb3B0LmxpbmssXG5cdFx0b3B0LnRhcmdldCAmJiBlbC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgb3B0LnRhcmdldClcblx0KTtcblxuXHRcImltZ1wiID09IG9wdC5zZWxlY3RvciAmJiBvcHQuc3JjICYmIChcblx0XHRlbC5zcmMgPSBvcHQuc3JjLFxuXHRcdG9wdC5sYXp5bG9hZCAmJiAoXG5cdFx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gMCxcblx0XHRcdGVsLm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0fVxuXHRcdClcblx0KTtcblxuXHRvcHQuaWQgJiYgKGVsLmlkID0gb3B0LmlkKTtcblx0b3B0LnN0eWxlcyAmJiAoZWwuY2xhc3NOYW1lID0gb3B0LnN0eWxlcyk7XG5cblx0b3B0Lmh0bWwgJiYgKGVsLmlubmVySFRNTCA9IG9wdC5odG1sKTtcblx0b3B0LmNoaWxkcmVuICYmIChlbC5hcHBlbmRDaGlsZChvcHQuY2hpbGRyZW4pKTtcblx0XG5cdHJldHVybiBlbDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBvbjtcclxubW9kdWxlLmV4cG9ydHMub24gPSBvbjtcclxubW9kdWxlLmV4cG9ydHMub2ZmID0gb2ZmO1xyXG5cclxuZnVuY3Rpb24gb24gKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xyXG4gICFlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIgJiYgKGV2ZW50ID0gJ29uJyArIGV2ZW50KTtcclxuICAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyIHx8IGVsZW1lbnQuYXR0YWNoRXZlbnQpLmNhbGwoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxuICByZXR1cm4gY2FsbGJhY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XHJcbiAgIWVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciAmJiAoZXZlbnQgPSAnb24nICsgZXZlbnQpO1xyXG4gIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgfHwgZWxlbWVudC5kZXRhY2hFdmVudCkuY2FsbChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG4gIHJldHVybiBjYWxsYmFjaztcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IG9uZTtcclxubW9kdWxlLmV4cG9ydHMuYWxsID0gYWxsO1xyXG5cclxuZnVuY3Rpb24gb25lIChzZWxlY3RvciwgcGFyZW50KSB7XHJcbiAgcGFyZW50IHx8IChwYXJlbnQgPSBkb2N1bWVudCk7XHJcbiAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsIChzZWxlY3RvciwgcGFyZW50KSB7XHJcbiAgcGFyZW50IHx8IChwYXJlbnQgPSBkb2N1bWVudCk7XHJcbiAgdmFyIHNlbGVjdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICByZXR1cm4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHNlbGVjdGlvbik7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiXG52YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIi8vIExvY2F0aW9uQmFyIG1vZHVsZSBleHRyYWN0ZWQgZnJvbSBCYWNrYm9uZS5qcyAxLjEuMFxuLy9cbi8vIHRoZSBkZXBlbmRlbmN5IG9uIGJhY2tib25lLCB1bmRlcnNjb3JlIGFuZCBqcXVlcnkgaGF2ZSBiZWVuIHJlbW92ZWQgdG8gdHVyblxuLy8gdGhpcyBpbnRvIGEgc21hbGwgc3RhbmRhbG9uZSBsaWJyYXJ5IGZvciBoYW5kbGluZyBicm93c2VyJ3MgaGlzdG9yeSBBUElcbi8vIGNyb3NzIGJyb3dzZXIgYW5kIHdpdGggYSBmYWxsYmFjayB0byBoYXNoY2hhbmdlIGV2ZW50cyBvciBwb2xsaW5nLlxuXG4oZnVuY3Rpb24oZGVmaW5lKSB7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cbiAgLy8gMyBoZWxwZXIgZnVuY3Rpb25zIHdlIHVzZSB0byBhdm9pZCBwdWxsaW5nIGluIGVudGlyZSBfIGFuZCAkXG4gIHZhciBfID0ge307XG4gIF8uZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKG9iaiwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBfLmFueSA9IGZ1bmN0aW9uIGFueShhcnIsIGZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoZm4oYXJyW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBmdW5jdGlvbiBvbihvYmosIHR5cGUsIGZuKSB7XG4gICAgaWYgKG9iai5hdHRhY2hFdmVudCkge1xuICAgICAgb2JqWydlJyt0eXBlK2ZuXSA9IGZuO1xuICAgICAgb2JqW3R5cGUrZm5dID0gZnVuY3Rpb24oKXsgb2JqWydlJyt0eXBlK2ZuXSggd2luZG93LmV2ZW50ICk7IH07XG4gICAgICBvYmouYXR0YWNoRXZlbnQoICdvbicrdHlwZSwgb2JqW3R5cGUrZm5dICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBmbiwgZmFsc2UgKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb2ZmKG9iaiwgdHlwZSwgZm4pIHtcbiAgICBpZiAob2JqLmRldGFjaEV2ZW50KSB7XG4gICAgICBvYmouZGV0YWNoRXZlbnQoJ29uJyt0eXBlLCBvYmpbdHlwZStmbl0pO1xuICAgICAgb2JqW3R5cGUrZm5dID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuXG5cblxuXG4gIC8vIHRoaXMgaXMgbW9zdGx5IG9yaWdpbmFsIGNvZGUgd2l0aCBtaW5vciBtb2RpZmljYXRpb25zXG4gIC8vIHRvIGF2b2lkIGRlcGVuZGVuY3kgb24gM3JkIHBhcnR5IGxpYnJhcmllc1xuICAvL1xuICAvLyBCYWNrYm9uZS5IaXN0b3J5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBIYW5kbGVzIGNyb3NzLWJyb3dzZXIgaGlzdG9yeSBtYW5hZ2VtZW50LCBiYXNlZCBvbiBlaXRoZXJcbiAgLy8gW3B1c2hTdGF0ZV0oaHR0cDovL2RpdmVpbnRvaHRtbDUuaW5mby9oaXN0b3J5Lmh0bWwpIGFuZCByZWFsIFVSTHMsIG9yXG4gIC8vIFtvbmhhc2hjaGFuZ2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL3dpbmRvdy5vbmhhc2hjaGFuZ2UpXG4gIC8vIGFuZCBVUkwgZnJhZ21lbnRzLiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBuZWl0aGVyIChvbGQgSUUsIG5hdGNoKSxcbiAgLy8gZmFsbHMgYmFjayB0byBwb2xsaW5nLlxuICB2YXIgSGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcblxuICAgIC8vIE1PRElGSUNBVElPTiBPRiBPUklHSU5BTCBCQUNLQk9ORS5ISVNUT1JZXG4gICAgLy9cbiAgICAvLyBfLmJpbmRBbGwodGhpcywgJ2NoZWNrVXJsJyk7XG4gICAgLy9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNoZWNrVXJsID0gdGhpcy5jaGVja1VybDtcbiAgICB0aGlzLmNoZWNrVXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tVcmwuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgYEhpc3RvcnlgIGNhbiBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgdGhpcy5oaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gICAgfVxuICB9O1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3Igc3RyaXBwaW5nIGEgbGVhZGluZyBoYXNoL3NsYXNoIGFuZCB0cmFpbGluZyBzcGFjZS5cbiAgdmFyIHJvdXRlU3RyaXBwZXIgPSAvXlsjXFwvXXxcXHMrJC9nO1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3Igc3RyaXBwaW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMuXG4gIHZhciByb290U3RyaXBwZXIgPSAvXlxcLyt8XFwvKyQvZztcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIGRldGVjdGluZyBNU0lFLlxuICB2YXIgaXNFeHBsb3JlciA9IC9tc2llIFtcXHcuXSsvO1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3IgcmVtb3ZpbmcgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIHRyYWlsaW5nU2xhc2ggPSAvXFwvJC87XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciBzdHJpcHBpbmcgdXJscyBvZiBoYXNoLlxuICB2YXIgcGF0aFN0cmlwcGVyID0gLyMuKiQvO1xuXG4gIC8vIEhhcyB0aGUgaGlzdG9yeSBoYW5kbGluZyBhbHJlYWR5IGJlZW4gc3RhcnRlZD9cbiAgSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gU2V0IHVwIGFsbCBpbmhlcml0YWJsZSAqKkJhY2tib25lLkhpc3RvcnkqKiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxuICBfLmV4dGVuZChIaXN0b3J5LnByb3RvdHlwZSwge1xuXG4gICAgLy8gVGhlIGRlZmF1bHQgaW50ZXJ2YWwgdG8gcG9sbCBmb3IgaGFzaCBjaGFuZ2VzLCBpZiBuZWNlc3NhcnksIGlzXG4gICAgLy8gdHdlbnR5IHRpbWVzIGEgc2Vjb25kLlxuICAgIGludGVydmFsOiA1MCxcblxuICAgIC8vIEFyZSB3ZSBhdCB0aGUgYXBwIHJvb3Q/XG4gICAgYXRSb290OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1teXFwvXSQvLCAnJCYvJykgPT09IHRoaXMucm9vdDtcbiAgICB9LFxuXG4gICAgLy8gR2V0cyB0aGUgdHJ1ZSBoYXNoIHZhbHVlLiBDYW5ub3QgdXNlIGxvY2F0aW9uLmhhc2ggZGlyZWN0bHkgZHVlIHRvIGJ1Z1xuICAgIC8vIGluIEZpcmVmb3ggd2hlcmUgbG9jYXRpb24uaGFzaCB3aWxsIGFsd2F5cyBiZSBkZWNvZGVkLlxuICAgIGdldEhhc2g6IGZ1bmN0aW9uKHdpbmRvdykge1xuICAgICAgdmFyIG1hdGNoID0gKHdpbmRvdyB8fCB0aGlzKS5sb2NhdGlvbi5ocmVmLm1hdGNoKC8jKC4qKSQvKTtcbiAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgY3Jvc3MtYnJvd3NlciBub3JtYWxpemVkIFVSTCBmcmFnbWVudCwgZWl0aGVyIGZyb20gdGhlIFVSTCxcbiAgICAvLyB0aGUgaGFzaCwgb3IgdGhlIG92ZXJyaWRlLlxuICAgIGdldEZyYWdtZW50OiBmdW5jdGlvbihmcmFnbWVudCwgZm9yY2VQdXNoU3RhdGUpIHtcbiAgICAgIGlmIChmcmFnbWVudCA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUgfHwgIXRoaXMuX3dhbnRzSGFzaENoYW5nZSB8fCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgICAgIGZyYWdtZW50ID0gZGVjb2RlVVJJKHRoaXMubG9jYXRpb24ucGF0aG5hbWUgKyB0aGlzLmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3QucmVwbGFjZSh0cmFpbGluZ1NsYXNoLCAnJyk7XG4gICAgICAgICAgaWYgKCFmcmFnbWVudC5pbmRleE9mKHJvb3QpKSBmcmFnbWVudCA9IGZyYWdtZW50LnNsaWNlKHJvb3QubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuZ2V0SGFzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnJhZ21lbnQucmVwbGFjZShyb3V0ZVN0cmlwcGVyLCAnJyk7XG4gICAgfSxcblxuICAgIC8vIFN0YXJ0IHRoZSBoYXNoIGNoYW5nZSBoYW5kbGluZywgcmV0dXJuaW5nIGB0cnVlYCBpZiB0aGUgY3VycmVudCBVUkwgbWF0Y2hlc1xuICAgIC8vIGFuIGV4aXN0aW5nIHJvdXRlLCBhbmQgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmIChIaXN0b3J5LnN0YXJ0ZWQpIHRocm93IG5ldyBFcnJvcihcIkxvY2F0aW9uQmFyIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZFwiKTtcbiAgICAgIEhpc3Rvcnkuc3RhcnRlZCA9IHRydWU7XG5cbiAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGluaXRpYWwgY29uZmlndXJhdGlvbi4gRG8gd2UgbmVlZCBhbiBpZnJhbWU/XG4gICAgICAvLyBJcyBwdXNoU3RhdGUgZGVzaXJlZCAuLi4gaXMgaXQgYXZhaWxhYmxlP1xuICAgICAgdGhpcy5vcHRpb25zICAgICAgICAgID0gXy5leHRlbmQoe3Jvb3Q6ICcvJ30sIG9wdGlvbnMpO1xuICAgICAgdGhpcy5sb2NhdGlvbiAgICAgICAgID0gdGhpcy5vcHRpb25zLmxvY2F0aW9uIHx8IHRoaXMubG9jYXRpb247XG4gICAgICB0aGlzLmhpc3RvcnkgICAgICAgICAgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeSB8fCB0aGlzLmhpc3Rvcnk7XG4gICAgICB0aGlzLnJvb3QgICAgICAgICAgICAgPSB0aGlzLm9wdGlvbnMucm9vdDtcbiAgICAgIHRoaXMuX3dhbnRzSGFzaENoYW5nZSA9IHRoaXMub3B0aW9ucy5oYXNoQ2hhbmdlICE9PSBmYWxzZTtcbiAgICAgIHRoaXMuX3dhbnRzUHVzaFN0YXRlICA9ICEhdGhpcy5vcHRpb25zLnB1c2hTdGF0ZTtcbiAgICAgIHRoaXMuX2hhc1B1c2hTdGF0ZSAgICA9ICEhKHRoaXMub3B0aW9ucy5wdXNoU3RhdGUgJiYgdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5wdXNoU3RhdGUpO1xuICAgICAgdmFyIGZyYWdtZW50ICAgICAgICAgID0gdGhpcy5nZXRGcmFnbWVudCgpO1xuICAgICAgdmFyIGRvY01vZGUgICAgICAgICAgID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgICAgdmFyIG9sZElFICAgICAgICAgICAgID0gKGlzRXhwbG9yZXIuZXhlYyhuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpICYmICghZG9jTW9kZSB8fCBkb2NNb2RlIDw9IDcpKTtcblxuICAgICAgLy8gTm9ybWFsaXplIHJvb3QgdG8gYWx3YXlzIGluY2x1ZGUgYSBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaC5cbiAgICAgIHRoaXMucm9vdCA9ICgnLycgKyB0aGlzLnJvb3QgKyAnLycpLnJlcGxhY2Uocm9vdFN0cmlwcGVyLCAnLycpO1xuXG4gICAgICBpZiAob2xkSUUgJiYgdGhpcy5fd2FudHNIYXNoQ2hhbmdlKSB7XG4gICAgICAgIC8vIE1PRElGSUNBVElPTiBPRiBPUklHSU5BTCBCQUNLQk9ORS5ISVNUT1JZXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHZhciBmcmFtZSA9IEJhY2tib25lLiQoJzxpZnJhbWUgc3JjPVwiamF2YXNjcmlwdDowXCIgdGFiaW5kZXg9XCItMVwiPicpO1xuICAgICAgICAvLyB0aGlzLmlmcmFtZSA9IGZyYW1lLmhpZGUoKS5hcHBlbmRUbygnYm9keScpWzBdLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiamF2YXNjcmlwdDowXCIpO1xuICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIHRoaXMuaWZyYW1lID0gdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdztcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShmcmFnbWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlcGVuZGluZyBvbiB3aGV0aGVyIHdlJ3JlIHVzaW5nIHB1c2hTdGF0ZSBvciBoYXNoZXMsIGFuZCB3aGV0aGVyXG4gICAgICAvLyAnb25oYXNoY2hhbmdlJyBpcyBzdXBwb3J0ZWQsIGRldGVybWluZSBob3cgd2UgY2hlY2sgdGhlIFVSTCBzdGF0ZS5cbiAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgICAgb24od2luZG93LCAncG9wc3RhdGUnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlICYmICgnb25oYXNoY2hhbmdlJyBpbiB3aW5kb3cpICYmICFvbGRJRSkge1xuICAgICAgICBvbih3aW5kb3csICdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9jaGVja1VybEludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5jaGVja1VybCwgdGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSBpZiB3ZSBuZWVkIHRvIGNoYW5nZSB0aGUgYmFzZSB1cmwsIGZvciBhIHB1c2hTdGF0ZSBsaW5rXG4gICAgICAvLyBvcGVuZWQgYnkgYSBub24tcHVzaFN0YXRlIGJyb3dzZXIuXG4gICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgICB2YXIgbG9jID0gdGhpcy5sb2NhdGlvbjtcblxuICAgICAgLy8gVHJhbnNpdGlvbiBmcm9tIGhhc2hDaGFuZ2UgdG8gcHVzaFN0YXRlIG9yIHZpY2UgdmVyc2EgaWYgYm90aCBhcmVcbiAgICAgIC8vIHJlcXVlc3RlZC5cbiAgICAgIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgdGhpcy5fd2FudHNQdXNoU3RhdGUpIHtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBzdGFydGVkIG9mZiB3aXRoIGEgcm91dGUgZnJvbSBhIGBwdXNoU3RhdGVgLWVuYWJsZWRcbiAgICAgICAgLy8gYnJvd3NlciwgYnV0IHdlJ3JlIGN1cnJlbnRseSBpbiBhIGJyb3dzZXIgdGhhdCBkb2Vzbid0IHN1cHBvcnQgaXQuLi5cbiAgICAgICAgaWYgKCF0aGlzLl9oYXNQdXNoU3RhdGUgJiYgIXRoaXMuYXRSb290KCkpIHtcbiAgICAgICAgICB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChudWxsLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2UodGhpcy5yb290ICsgJyMnICsgdGhpcy5mcmFnbWVudCk7XG4gICAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGFzIGJyb3dzZXIgd2lsbCBkbyByZWRpcmVjdCB0byBuZXcgdXJsXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgLy8gT3IgaWYgd2UndmUgc3RhcnRlZCBvdXQgd2l0aCBhIGhhc2gtYmFzZWQgcm91dGUsIGJ1dCB3ZSdyZSBjdXJyZW50bHlcbiAgICAgICAgLy8gaW4gYSBicm93c2VyIHdoZXJlIGl0IGNvdWxkIGJlIGBwdXNoU3RhdGVgLWJhc2VkIGluc3RlYWQuLi5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUgJiYgdGhpcy5hdFJvb3QoKSAmJiBsb2MuaGFzaCkge1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEhhc2goKS5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICAgICAgICB0aGlzLmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdGhpcy5yb290ICsgdGhpcy5mcmFnbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaWxlbnQpIHJldHVybiB0aGlzLmxvYWRVcmwoKTtcbiAgICB9LFxuXG4gICAgLy8gRGlzYWJsZSBCYWNrYm9uZS5oaXN0b3J5LCBwZXJoYXBzIHRlbXBvcmFyaWx5LiBOb3QgdXNlZnVsIGluIGEgcmVhbCBhcHAsXG4gICAgLy8gYnV0IHBvc3NpYmx5IHVzZWZ1bCBmb3IgdW5pdCB0ZXN0aW5nIFJvdXRlcnMuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICBvZmYod2luZG93LCAncG9wc3RhdGUnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICAgIG9mZih3aW5kb3csICdoYXNoY2hhbmdlJywgdGhpcy5jaGVja1VybCk7XG4gICAgICBpZiAodGhpcy5fY2hlY2tVcmxJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0aGlzLl9jaGVja1VybEludGVydmFsKTtcbiAgICAgIEhpc3Rvcnkuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSByb3V0ZSB0byBiZSB0ZXN0ZWQgd2hlbiB0aGUgZnJhZ21lbnQgY2hhbmdlcy4gUm91dGVzIGFkZGVkIGxhdGVyXG4gICAgLy8gbWF5IG92ZXJyaWRlIHByZXZpb3VzIHJvdXRlcy5cbiAgICByb3V0ZTogZnVuY3Rpb24ocm91dGUsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzLnVuc2hpZnQoe3JvdXRlOiByb3V0ZSwgY2FsbGJhY2s6IGNhbGxiYWNrfSk7XG4gICAgfSxcblxuICAgIC8vIENoZWNrcyB0aGUgY3VycmVudCBVUkwgdG8gc2VlIGlmIGl0IGhhcyBjaGFuZ2VkLCBhbmQgaWYgaXQgaGFzLFxuICAgIC8vIGNhbGxzIGBsb2FkVXJsYCwgbm9ybWFsaXppbmcgYWNyb3NzIHRoZSBoaWRkZW4gaWZyYW1lLlxuICAgIGNoZWNrVXJsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXRGcmFnbWVudCgpO1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZnJhZ21lbnQgJiYgdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0RnJhZ21lbnQodGhpcy5nZXRIYXNoKHRoaXMuaWZyYW1lKSk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMuaWZyYW1lKSB0aGlzLm5hdmlnYXRlKGN1cnJlbnQpO1xuICAgICAgdGhpcy5sb2FkVXJsKCk7XG4gICAgfSxcblxuICAgIC8vIEF0dGVtcHQgdG8gbG9hZCB0aGUgY3VycmVudCBVUkwgZnJhZ21lbnQuIElmIGEgcm91dGUgc3VjY2VlZHMgd2l0aCBhXG4gICAgLy8gbWF0Y2gsIHJldHVybnMgYHRydWVgLiBJZiBubyBkZWZpbmVkIHJvdXRlcyBtYXRjaGVzIHRoZSBmcmFnbWVudCxcbiAgICAvLyByZXR1cm5zIGBmYWxzZWAuXG4gICAgbG9hZFVybDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICAgIGZyYWdtZW50ID0gdGhpcy5mcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoZnJhZ21lbnQpO1xuICAgICAgcmV0dXJuIF8uYW55KHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKGhhbmRsZXIucm91dGUudGVzdChmcmFnbWVudCkpIHtcbiAgICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKGZyYWdtZW50KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFNhdmUgYSBmcmFnbWVudCBpbnRvIHRoZSBoYXNoIGhpc3RvcnksIG9yIHJlcGxhY2UgdGhlIFVSTCBzdGF0ZSBpZiB0aGVcbiAgICAvLyAncmVwbGFjZScgb3B0aW9uIGlzIHBhc3NlZC4gWW91IGFyZSByZXNwb25zaWJsZSBmb3IgcHJvcGVybHkgVVJMLWVuY29kaW5nXG4gICAgLy8gdGhlIGZyYWdtZW50IGluIGFkdmFuY2UuXG4gICAgLy9cbiAgICAvLyBUaGUgb3B0aW9ucyBvYmplY3QgY2FuIGNvbnRhaW4gYHRyaWdnZXI6IHRydWVgIGlmIHlvdSB3aXNoIHRvIGhhdmUgdGhlXG4gICAgLy8gcm91dGUgY2FsbGJhY2sgYmUgZmlyZWQgKG5vdCB1c3VhbGx5IGRlc2lyYWJsZSksIG9yIGByZXBsYWNlOiB0cnVlYCwgaWZcbiAgICAvLyB5b3Ugd2lzaCB0byBtb2RpZnkgdGhlIGN1cnJlbnQgVVJMIHdpdGhvdXQgYWRkaW5nIGFuIGVudHJ5IHRvIHRoZSBoaXN0b3J5LlxuICAgIG5hdmlnYXRlOiBmdW5jdGlvbihmcmFnbWVudCwgb3B0aW9ucykge1xuICAgICAgaWYgKCFIaXN0b3J5LnN0YXJ0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zID09PSB0cnVlKSBvcHRpb25zID0ge3RyaWdnZXI6ICEhb3B0aW9uc307XG5cbiAgICAgIHZhciB1cmwgPSB0aGlzLnJvb3QgKyAoZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KGZyYWdtZW50IHx8ICcnKSk7XG5cbiAgICAgIC8vIFN0cmlwIHRoZSBoYXNoIGZvciBtYXRjaGluZy5cbiAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQucmVwbGFjZShwYXRoU3RyaXBwZXIsICcnKTtcblxuICAgICAgaWYgKHRoaXMuZnJhZ21lbnQgPT09IGZyYWdtZW50KSByZXR1cm47XG4gICAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG5cbiAgICAgIC8vIERvbid0IGluY2x1ZGUgYSB0cmFpbGluZyBzbGFzaCBvbiB0aGUgcm9vdC5cbiAgICAgIGlmIChmcmFnbWVudCA9PT0gJycgJiYgdXJsICE9PSAnLycpIHVybCA9IHVybC5zbGljZSgwLCAtMSk7XG5cbiAgICAgIC8vIElmIHB1c2hTdGF0ZSBpcyBhdmFpbGFibGUsIHdlIHVzZSBpdCB0byBzZXQgdGhlIGZyYWdtZW50IGFzIGEgcmVhbCBVUkwuXG4gICAgICBpZiAodGhpcy5faGFzUHVzaFN0YXRlKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeVtvcHRpb25zLnJlcGxhY2UgPyAncmVwbGFjZVN0YXRlJyA6ICdwdXNoU3RhdGUnXSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG5cbiAgICAgIC8vIElmIGhhc2ggY2hhbmdlcyBoYXZlbid0IGJlZW4gZXhwbGljaXRseSBkaXNhYmxlZCwgdXBkYXRlIHRoZSBoYXNoXG4gICAgICAvLyBmcmFnbWVudCB0byBzdG9yZSBoaXN0b3J5LlxuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSGFzaCh0aGlzLmxvY2F0aW9uLCBmcmFnbWVudCwgb3B0aW9ucy5yZXBsYWNlKTtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lICYmIChmcmFnbWVudCAhPT0gdGhpcy5nZXRGcmFnbWVudCh0aGlzLmdldEhhc2godGhpcy5pZnJhbWUpKSkpIHtcbiAgICAgICAgICAvLyBPcGVuaW5nIGFuZCBjbG9zaW5nIHRoZSBpZnJhbWUgdHJpY2tzIElFNyBhbmQgZWFybGllciB0byBwdXNoIGFcbiAgICAgICAgICAvLyBoaXN0b3J5IGVudHJ5IG9uIGhhc2gtdGFnIGNoYW5nZS4gIFdoZW4gcmVwbGFjZSBpcyB0cnVlLCB3ZSBkb24ndFxuICAgICAgICAgIC8vIHdhbnQgdGhpcy5cbiAgICAgICAgICBpZighb3B0aW9ucy5yZXBsYWNlKSB0aGlzLmlmcmFtZS5kb2N1bWVudC5vcGVuKCkuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMuaWZyYW1lLmxvY2F0aW9uLCBmcmFnbWVudCwgb3B0aW9ucy5yZXBsYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3UndmUgdG9sZCB1cyB0aGF0IHlvdSBleHBsaWNpdGx5IGRvbid0IHdhbnQgZmFsbGJhY2sgaGFzaGNoYW5nZS1cbiAgICAgIC8vIGJhc2VkIGhpc3RvcnksIHRoZW4gYG5hdmlnYXRlYCBiZWNvbWVzIGEgcGFnZSByZWZyZXNoLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy50cmlnZ2VyKSByZXR1cm4gdGhpcy5sb2FkVXJsKGZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgLy8gVXBkYXRlIHRoZSBoYXNoIGxvY2F0aW9uLCBlaXRoZXIgcmVwbGFjaW5nIHRoZSBjdXJyZW50IGVudHJ5LCBvciBhZGRpbmdcbiAgICAvLyBhIG5ldyBvbmUgdG8gdGhlIGJyb3dzZXIgaGlzdG9yeS5cbiAgICBfdXBkYXRlSGFzaDogZnVuY3Rpb24obG9jYXRpb24sIGZyYWdtZW50LCByZXBsYWNlKSB7XG4gICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKGphdmFzY3JpcHQ6fCMpLiokLywgJycpO1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKGhyZWYgKyAnIycgKyBmcmFnbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTb21lIGJyb3dzZXJzIHJlcXVpcmUgdGhhdCBgaGFzaGAgY29udGFpbnMgYSBsZWFkaW5nICMuXG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBmcmFnbWVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cblxuXG4gIC8vIGFkZCBzb21lIGZlYXR1cmVzIHRvIEhpc3RvcnlcblxuICAvLyBhIG1vcmUgaW50dWl0aXZlIGFsaWFzIGZvciBuYXZpZ2F0ZVxuICBIaXN0b3J5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8vIGEgZ2VuZXJpYyBjYWxsYmFjayBmb3IgYW55IGNoYW5nZXNcbiAgSGlzdG9yeS5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLnJvdXRlKC9eKC4qPykkLywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8vIGNoZWNrcyBpZiB0aGUgYnJvd3NlciBoYXMgcHVzaHN0YXRlIHN1cHBvcnRcbiAgSGlzdG9yeS5wcm90b3R5cGUuaGFzUHVzaFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghSGlzdG9yeS5zdGFydGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IGF2YWlsYWJsZSBhZnRlciBMb2NhdGlvbkJhci5zdGFydCgpXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFzUHVzaFN0YXRlO1xuICB9O1xuXG5cblxuXG5cblxuICAvLyBleHBvcnRcbiAgcmV0dXJuIEhpc3Rvcnk7XG59KTtcbn0pKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uIChmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSk7IiwiLyoqXG4gKiBwbGVhc2UtYWpheCAtIEEgc21hbGwgYW5kIG1vZGVybiBBSkFYIGxpYnJhcnkuXG4gKiBAdmVyc2lvbiB2Mi4wLjJcbiAqIEBhdXRob3IgRGFuIFJlZXZlcyA8aGV5QGRhbnJlZXYuZXM+IChodHRwOi8vZGFucmVldi5lcy8pXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZmZmdW5jdGlvbi9wbGVhc2VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBleHBvcnRzID0ge307XG5cbiAgICB2YXIgcGFyc2UgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXEucmVzcG9uc2VUZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7ZGF0YTpyZXN1bHQsIHJlcXVlc3Q6cmVxfTtcbiAgICB9O1xuXG4gICAgdmFyIHhociA9IGZ1bmN0aW9uICh0eXBlLCB1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmaWxlRm9ybTogb3B0cy5maWxlRm9ybSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHByb21pc2U6IG9wdHMucHJvbWlzZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlcnM6IG9wdHMuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IG9wdHMuc3VjY2VzcyB8fCBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgIGVycm9yOiBvcHRzLmVycm9yIHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgbG9hZHN0YXJ0OiBvcHRzLmxvYWRzdGFydCB8fCBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgIHByb2dyZXNzOiBvcHRzLnByb2dyZXNzIHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgbG9hZDogb3B0cy5sb2FkIHx8IGZ1bmN0aW9uICgpIHt9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIGlzU3RyaW5nID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnLFxuICAgICAgICBpc0pTT04gPSBmYWxzZTtcbiAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlzSlNPTiA9ICEhSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpc0pTT04gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJRTkgRm9ybSBVcGxvYWRcbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsZUZvcm0gJiYgaXNTdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBpZnJhbWUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25sb2FkOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgICAgICBzZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpZnJhbWUubmFtZSA9IGlmcmFtZS5pZCA9ICdpZnJhbWUnK01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMWU1KS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzcG9uc2VUZXh0ID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudG9TdHJpbmcoKS5tYXRjaCgvXjIwXFxkXFxiLykpIHsgLy8gMjB4IHN0YXR1cyBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9ubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVGb3JtLmFjdGlvbiA9IG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uLnNsaWNlKG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uLnNlYXJjaCgvXFw/aWU5LyksIDQpO1xuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxlRm9ybS5hY3Rpb24uc2VhcmNoKC9cXD9pZTkvKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uID0gKG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uKSA/IG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uICsgJz9pZTknIDogJz9pZTknO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUZvcm0udGFyZ2V0ID0gaWZyYW1lLmlkO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVGb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmxvYWRzdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgWEhSID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IEFjdGl2ZVhPYmplY3Q7XG4gICAgICAgICAgICByZXF1ZXN0ID0gbmV3IFhIUignTVNYTUwyLlhNTEhUVFAuMy4wJyk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4odHlwZSwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSlNPTikgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFyZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIG9wdGlvbnMubG9hZHN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvcHRpb25zLnByb2dyZXNzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9wdGlvbnMubG9hZCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MocGFyc2UocmVxdWVzdCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihwYXJzZShyZXF1ZXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGhlYWRlciBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIG9wdGlvbnMuaGVhZGVyc1toZWFkZXJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISF3aW5kb3cuUHJvbWlzZSAmJiBvcHRpb25zLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3BvbnNlID8gcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlKSA6IHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcXVlc3Quc3RhdHVzVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoJ05ldHdvcmsgRXJyb3InKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG5cbiAgICBleHBvcnRzWydnZXQnXSA9IGZ1bmN0aW9uIGdldCAodXJsLCBvcHRzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHhocignR0VUJywgdXJsLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBleHBvcnRzWydwdXQnXSA9IGZ1bmN0aW9uIHB1dCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHhocignUFVUJywgdXJsLCBkYXRhLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0c1sncGF0Y2gnXSA9IGZ1bmN0aW9uIHBhdGNoICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgICAgICByZXR1cm4geGhyKCdQQVRDSCcsIHVybCwgZGF0YSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGV4cG9ydHNbJ3Bvc3QnXSA9IGZ1bmN0aW9uIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgICAgIHJldHVybiB4aHIoJ1BPU1QnLCB1cmwsIGRhdGEsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBleHBvcnRzWydkZWwnXSA9IGV4cG9ydHNbJ2RlbGV0ZSddID0gZnVuY3Rpb24gZGVsICh1cmwsIG9wdHMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgICAgICByZXR1cm4geGhyKCdERUxFVEUnLCB1cmwsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGV4cG9ydHM7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gZXhwb3J0cztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1sncGxlYXNlJ10gPSBleHBvcnRzO1xuICAgIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qIGdsb2JhbHMgalF1ZXJ5ICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgY2FtZWxDYXNlID0gcmVxdWlyZSgnLi9saWIvY2FtZWxDYXNlJyk7XHJcbnZhciBleHRyYWN0U3VmZml4ID0gcmVxdWlyZSgnLi9saWIvZXh0cmFjdFN1ZmZpeCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gIHZhciBfcXVlcnlEb20gPSB7fTtcclxuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XHJcbiAgdmFyIGNvbnRhaW5lciA9IG9wdHMuZWwgfHwgZG9jdW1lbnQuYm9keTtcclxuICB2YXIgcHJlZml4ID0gb3B0cy5wcmVmaXggfHwgJ2pzLSc7XHJcbiAgdmFyIHdhbnRKcXVlcnkgPSBvcHRzLnVzZWpRdWVyeSB8fCBmYWxzZTtcclxuICB2YXIgaGFzSnF1ZXJ5ID0gd2FudEpxdWVyeSAmJiB0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJztcclxuXHJcbiAgaWYoIWNvbnRhaW5lcikge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2FybigncXVlcnlEb20gd2FybmluZzogdGhlIGNvbnRhaW5lciBzcGVjaWZpZWQgaW4gZW1wdHknKTtcclxuICB9XHJcblxyXG4gIHZhciB0YXJnZXRFbGVtZW50cztcclxuICBpZihoYXNKcXVlcnkpIHtcclxuICAgIHRhcmdldEVsZW1lbnRzID0galF1ZXJ5KGNvbnRhaW5lcikuZmluZCgnKltjbGFzcyo9XCInICsgcHJlZml4ICsgJ1wiXScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXRFbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcqW2NsYXNzKj1cIicgKyBwcmVmaXggKyAnXCJdJyk7XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IHRhcmdldEVsZW1lbnRzW2ldO1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lO1xyXG4gICAgLy8gR2V0dGluZyBjbGFzc05hbWUgb24gU1ZHc1xyXG4gICAgaWYodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgY2xhc3NOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3BsaXRLZXlzID0gZXh0cmFjdFN1ZmZpeChjbGFzc05hbWUsIHByZWZpeCk7XHJcbiAgICBpZihzcGxpdEtleXMpIHtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzcGxpdEtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcHVyZUNsYXNzID0gc3BsaXRLZXlzW2pdO1xyXG4gICAgICAgIHZhciBrZXkgPSBjYW1lbENhc2UocHVyZUNsYXNzKTtcclxuICAgICAgICBpZihrZXkpIHtcclxuICAgICAgICAgIHZhciBxdWVyeUVsID0gX3F1ZXJ5RG9tW2tleV07XHJcbiAgICAgICAgICBpZihxdWVyeUVsICYmICFxdWVyeUVsLl9pc0FsbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIF9xdWVyeURvbVtrZXldID0gaGFzSnF1ZXJ5ID9cclxuICAgICAgICAgICAgICBqUXVlcnkoJy4nICsgcHJlZml4ICsgcHVyZUNsYXNzKSA6XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgcHJlZml4ICsgcHVyZUNsYXNzKTtcclxuICAgICAgICAgICAgX3F1ZXJ5RG9tW2tleV0uX2lzQWxsU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoaGFzSnF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBqUXVlcnkoZWxlbWVudCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZighcXVlcnlFbCkge1xyXG4gICAgICAgICAgICBfcXVlcnlEb21ba2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ3F1ZXJ5RG9tIHdhcm5pbmc6IG9uZSBvZiB5b3VyIHByZWZpeCBpcyBlbXB0eScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9xdWVyeURvbTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQ3JlZGl0cyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0MjUyODcvY29udmVydC1kYXNoLXNlcGFyYXRlZC1zdHJpbmctdG8tY2FtZWxjYXNlXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbihtYXRjaCwgZ3JvdXApIHtcclxuICAgIHJldHVybiBncm91cC50b1VwcGVyQ2FzZSgpO1xyXG4gIH0pO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0cmFjdFN1ZmZpeChzdHJpbmcsIHByZWZpeCkge1xyXG4gIHZhciBhID0gMTtcclxuICB2YXIgcmVzID0gW107XHJcblxyXG4gIHdoaWxlKGEpIHtcclxuICAgIHZhciBzdWJTdHJpbmcgPSBzdHJpbmcuc3BsaXQocHJlZml4KVthXTtcclxuICAgIGlmKHN1YlN0cmluZykge1xyXG4gICAgICByZXMucHVzaChzdWJTdHJpbmcuc3BsaXQoJyAnKVswXSk7XHJcbiAgICAgICsrYTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGEgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufTsiLCIhZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5yb3V0ZXM9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbnZhciBsb2NhbFJvdXRlcyA9IFtdO1xuXG5cbi8qKlxuICogQ29udmVydCBwYXRoIHRvIHJvdXRlIG9iamVjdFxuICpcbiAqIEEgc3RyaW5nIG9yIFJlZ0V4cCBzaG91bGQgYmUgcGFzc2VkLFxuICogd2lsbCByZXR1cm4geyByZSwgc3JjLCBrZXlzfSBvYmpcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmcgLyBSZWdFeHB9IHBhdGhcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG52YXIgUm91dGUgPSBmdW5jdGlvbihwYXRoKXtcbiAgLy91c2luZyAnbmV3JyBpcyBvcHRpb25hbFxuXG4gIHZhciBzcmMsIHJlLCBrZXlzID0gW107XG5cbiAgaWYocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCl7XG4gICAgcmUgPSBwYXRoO1xuICAgIHNyYyA9IHBhdGgudG9TdHJpbmcoKTtcbiAgfWVsc2V7XG4gICAgcmUgPSBwYXRoVG9SZWdFeHAocGF0aCwga2V5cyk7XG4gICAgc3JjID0gcGF0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gIFx0IHJlOiByZSxcbiAgXHQgc3JjOiBwYXRoLnRvU3RyaW5nKCksXG4gIFx0IGtleXM6IGtleXNcbiAgfVxufTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLFxuICogcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IHNob3VsZCBiZSBwYXNzZWQsXG4gKiB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIHBsYWNlaG9sZGVyXG4gKiBrZXkgbmFtZXMuIEZvciBleGFtcGxlIFwiL3VzZXIvOmlkXCIgd2lsbFxuICogdGhlbiBjb250YWluIFtcImlkXCJdLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICogQHBhcmFtICB7QXJyYXl9IGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xudmFyIHBhdGhUb1JlZ0V4cCA9IGZ1bmN0aW9uIChwYXRoLCBrZXlzKSB7XG5cdHBhdGggPSBwYXRoXG5cdFx0LmNvbmNhdCgnLz8nKVxuXHRcdC5yZXBsYWNlKC9cXC9cXCgvZywgJyg/Oi8nKVxuXHRcdC5yZXBsYWNlKC8oXFwvKT8oXFwuKT86KFxcdyspKD86KFxcKC4qP1xcKSkpPyhcXD8pP3xcXCovZywgZnVuY3Rpb24oXywgc2xhc2gsIGZvcm1hdCwga2V5LCBjYXB0dXJlLCBvcHRpb25hbCl7XG5cdFx0XHRpZiAoXyA9PT0gXCIqXCIpe1xuXHRcdFx0XHRrZXlzLnB1c2godW5kZWZpbmVkKTtcblx0XHRcdFx0cmV0dXJuIF87XG5cdFx0XHR9XG5cblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0c2xhc2ggPSBzbGFzaCB8fCAnJztcblx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHQrIChvcHRpb25hbCA/ICcnIDogc2xhc2gpXG5cdFx0XHRcdCsgJyg/Oidcblx0XHRcdFx0KyAob3B0aW9uYWwgPyBzbGFzaCA6ICcnKVxuXHRcdFx0XHQrIChmb3JtYXQgfHwgJycpICsgKGNhcHR1cmUgfHwgJyhbXi9dKz8pJykgKyAnKSdcblx0XHRcdFx0KyAob3B0aW9uYWwgfHwgJycpO1xuXHRcdH0pXG5cdFx0LnJlcGxhY2UoLyhbXFwvLl0pL2csICdcXFxcJDEnKVxuXHRcdC5yZXBsYWNlKC9cXCovZywgJyguKiknKTtcblx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcGF0aCArICckJywgJ2knKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVxdWVzdCB0b1xuICogb25lIG9mIHRoZSByb3V0ZXMuIFdoZW4gc3VjY2Vzc2Z1bFxuICogYSAge2ZuLCBwYXJhbXMsIHNwbGF0c30gb2JqIGlzIHJldHVybmVkXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IHJvdXRlc1xuICogQHBhcmFtICB7U3RyaW5nfSB1cmlcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIG1hdGNoID0gZnVuY3Rpb24gKHJvdXRlcywgdXJpLCBzdGFydEF0KSB7XG5cdHZhciBjYXB0dXJlcywgaSA9IHN0YXJ0QXQgfHwgMDtcblxuXHRmb3IgKHZhciBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcblx0XHR2YXIgcm91dGUgPSByb3V0ZXNbaV0sXG5cdFx0ICAgIHJlID0gcm91dGUucmUsXG5cdFx0ICAgIGtleXMgPSByb3V0ZS5rZXlzLFxuXHRcdCAgICBzcGxhdHMgPSBbXSxcblx0XHQgICAgcGFyYW1zID0ge307XG5cblx0XHRpZiAoY2FwdHVyZXMgPSB1cmkubWF0Y2gocmUpKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMSwgbGVuID0gY2FwdHVyZXMubGVuZ3RoOyBqIDwgbGVuOyArK2opIHtcblx0XHRcdFx0dmFyIGtleSA9IGtleXNbai0xXSxcblx0XHRcdFx0XHR2YWwgPSB0eXBlb2YgY2FwdHVyZXNbal0gPT09ICdzdHJpbmcnXG5cdFx0XHRcdFx0XHQ/IHVuZXNjYXBlKGNhcHR1cmVzW2pdKVxuXHRcdFx0XHRcdFx0OiBjYXB0dXJlc1tqXTtcblx0XHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRcdHBhcmFtc1trZXldID0gdmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNwbGF0cy5wdXNoKHZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhcmFtczogcGFyYW1zLFxuXHRcdFx0XHRzcGxhdHM6IHNwbGF0cyxcblx0XHRcdFx0cm91dGU6IHJvdXRlLnNyYyxcblx0XHRcdFx0bmV4dDogaSArIDFcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgXCJub3JtYWxcIiByb3V0ZXIgY29uc3RydWN0b3IuXG4gKiBhY2NlcHRzIHBhdGgsIGZuIHR1cGxlcyB2aWEgYWRkUm91dGVcbiAqIHJldHVybnMge2ZuLCBwYXJhbXMsIHNwbGF0cywgcm91dGV9XG4gKiAgdmlhIG1hdGNoXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbigpe1xuICAvL3VzaW5nICduZXcnIGlzIG9wdGlvbmFsXG4gIHJldHVybiB7XG4gICAgcm91dGVzOiBbXSxcbiAgICByb3V0ZU1hcCA6IHt9LFxuICAgIGFkZFJvdXRlOiBmdW5jdGlvbihwYXRoLCBmbil7XG4gICAgICBpZiAoIXBhdGgpIHRocm93IG5ldyBFcnJvcignIHJvdXRlIHJlcXVpcmVzIGEgcGF0aCcpO1xuICAgICAgaWYgKCFmbikgdGhyb3cgbmV3IEVycm9yKCcgcm91dGUgJyArIHBhdGgudG9TdHJpbmcoKSArICcgcmVxdWlyZXMgYSBjYWxsYmFjaycpO1xuXG4gICAgICB2YXIgcm91dGUgPSBSb3V0ZShwYXRoKTtcbiAgICAgIHJvdXRlLmZuID0gZm47XG5cbiAgICAgIHRoaXMucm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgdGhpcy5yb3V0ZU1hcFtwYXRoXSA9IGZuO1xuICAgIH0sXG5cbiAgICBtYXRjaDogZnVuY3Rpb24ocGF0aG5hbWUsIHN0YXJ0QXQpe1xuICAgICAgdmFyIHJvdXRlID0gbWF0Y2godGhpcy5yb3V0ZXMsIHBhdGhuYW1lLCBzdGFydEF0KTtcbiAgICAgIGlmKHJvdXRlKXtcbiAgICAgICAgcm91dGUuZm4gPSB0aGlzLnJvdXRlTWFwW3JvdXRlLnJvdXRlXTtcbiAgICAgICAgcm91dGUubmV4dCA9IHRoaXMubWF0Y2guYmluZCh0aGlzLCBwYXRobmFtZSwgcm91dGUubmV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG4gIH1cbn07XG5cblJvdXRlci5Sb3V0ZSA9IFJvdXRlXG5Sb3V0ZXIucGF0aFRvUmVnRXhwID0gcGF0aFRvUmVnRXhwXG5Sb3V0ZXIubWF0Y2ggPSBtYXRjaFxuLy8gYmFjayBjb21wYXRcblJvdXRlci5Sb3V0ZXIgPSBSb3V0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZXJcblxufSx7fV19LHt9LFsxXSlcbigxKVxufSk7Il19
