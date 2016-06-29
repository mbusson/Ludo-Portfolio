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
  '/home': { section: require('./sections/home'), duplicate: true, routes: {
      '/:id': { section: require('./sections/sub'), duplicate: true }
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
			    pesce = '<img src="/assets/images/pesce-full.jpg">',
			    imgX = '<a id="image-close">&times;</a>';
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

            _utils2.default.biggie.addRoutingEL(document.querySelectorAll('.link'));

            done();
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

            var tl = new TimelineMax({ paused: true, onComplete: done });
            this.el && tl.to(this.el, 0.7, { x: '-320', ease: Expo.easeInOut, clearProps: 'all' });
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

},{"config":1,"dom-classes":15,"dom-create-element":16,"dom-select":18,"framework":2,"query-dom-components":23,"utils":9}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxjb25maWcuanMiLCJhc3NldHNcXGpzXFxmcmFtZXdvcmsuanMiLCJhc3NldHNcXGpzXFxtYWluLmpzIiwiYXNzZXRzXFxqc1xccm91dGVzLmpzIiwiYXNzZXRzXFxqc1xcc2VjdGlvbnNcXGRlZmF1bHQuanMiLCJhc3NldHNcXGpzXFxzZWN0aW9uc1xcaG9tZS5qcyIsImFzc2V0c1xcanNcXHNlY3Rpb25zXFxwcmVsb2FkZXIuanMiLCJhc3NldHNcXGpzXFxzZWN0aW9uc1xcc3ViLmpzIiwiYXNzZXRzXFxqc1xcdXRpbHMuanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvbm9kZV9tb2R1bGVzL2J3LXZpZXdtZWRpYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9ub2RlX21vZHVsZXMvZG9tLWV2ZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2J3LXJvdXRlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idy12bS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb20tY2xhc3Nlcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kb20tY3JlYXRlLWVsZW1lbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZG9tLWV2ZW50L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RvbS1zZWxlY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvY2F0aW9uLWJhci9sb2NhdGlvbi1iYXIuanMiLCJub2RlX21vZHVsZXMvcGxlYXNlLWFqYXgvZGlzdC9wbGVhc2UuanMiLCJub2RlX21vZHVsZXMvcXVlcnktZG9tLWNvbXBvbmVudHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcXVlcnktZG9tLWNvbXBvbmVudHMvbGliL2NhbWVsQ2FzZS5qcyIsIm5vZGVfbW9kdWxlcy9xdWVyeS1kb20tY29tcG9uZW50cy9saWIvZXh0cmFjdFN1ZmZpeC5qcyIsIm5vZGVfbW9kdWxlcy9yb3V0ZXMvZGlzdC9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFQSxJQUFNOztPQUFTLEFBRVIsQUFDTjtPQUhjLEFBR1IsQUFFTjs7UUFBTyxTQUxPLEFBS0UsQUFDaEI7UUFBTyx5QkFOTyxBQU1QLEFBQVUsQUFFakI7O1FBQU8sT0FSTyxBQVFBLEFBQ2Q7U0FBUSxPQVRNLEFBU0MsQUFFZjs7V0FYRCxBQUFlLEFBV0o7O0FBWEksQUFFZDs7a0IsQUFhYzs7Ozs7QUNqQmY7Ozs7Ozs7Ozs7OztBQU1BLE9BQUEsQUFBTyxrQ0FBbUIsVUFBQSxBQUFDLE1BQVMsQUFDbkM7OztXQUFLLEFBRUssQUFFVDs7ZUFBYSxRQUpULEFBSVMsQUFBUSxBQUNyQjtVQUFRLFFBTFQsQUFBSyxBQUtJLEFBQVEsQUFFakI7QUFQSyxBQUVKO0FBSEYsQUFBaUIsQ0FBQTs7Ozs7QUNOakI7Ozs7Ozs7O0FBRUEsb0JBQUEsQUFBVTs7Ozs7Ozs7OztBQ0VWLE9BQUEsQUFBTztPQUNELFFBRFcsQUFDWCxBQUFRLEFBQ2I7YUFBVyxTQUFTLFFBQVgsQUFBVyxBQUFRLG9CQUFvQixXQUF2QyxBQUFrRCxNQUFNO2NBQzlDLEVBQUUsU0FBUyxRQUFYLEFBQVcsQUFBUSxtQkFBbUIsV0FIMUQsQUFBaUIsQUFFUCxBQUFnRSxBQUN0RCxBQUFpRDtBQURLLEFBQzlEO0FBREY7QUFGTyxBQUNoQjs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0ksQUFFTSxzQkFFRjt1QkFBc0I7WUFBVixBQUFVLDREQUFKLEFBQUksZUFBQTs7OEJBRWxCOzthQUFBLEFBQUssV0FBVyxpQkFBaEIsQUFBdUIsQUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgZG9tc2VsZWN0IGZyb20gJ2RvbS1zZWxlY3QnXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0XHJcblx0UEFUSDogJycsXHJcblx0QkFTRTogJy8nLFxyXG5cdFxyXG5cdCRib2R5OiBkb2N1bWVudC5ib2R5LFxyXG5cdCR2aWV3OiBkb21zZWxlY3QoJyNqcy12aWV3JyksXHJcblxyXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuXHJcblx0aXNNb2JpbGU6IGZhbHNlXHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyIsImltcG9ydCBiaWd3aGVlbCBmcm9tICdiaWd3aGVlbCdcclxuXHJcbi8qIC0tLS0tLS0tLS1cclxuY3JlYXRlIG91ciBmcmFtZXdvcmsgaW5zdGFuY2Vcclxuc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWd3aGVlbC1mcmFtZXdvcmsvZG9jdW1lbnRhdGlvbi9ibG9iL21hc3Rlci9xdWlja3N0YXJ0Lm1kI2JpZ3doZWVsLXF1aWNrLXN0YXJ0XHJcbi0tLS0tLS0tLS0gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBiaWd3aGVlbCgoZG9uZSkgPT4ge1xyXG5cdGRvbmUoe1xyXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2JpZ3doZWVsLWZyYW1ld29yay9kb2N1bWVudGF0aW9uL2Jsb2IvbWFzdGVyL21pc2MubWQjb3ZlcmxhcFxyXG5cdFx0b3ZlcmxhcDogZmFsc2UsXHJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vYmlnd2hlZWwtZnJhbWV3b3JrL2RvY3VtZW50YXRpb24vYmxvYi9tYXN0ZXIvcm91dGVzLXNwZWNpYWwubWQjaW5pdHNlY3Rpb25cclxuXHRcdGluaXRTZWN0aW9uOiByZXF1aXJlKCcuL3NlY3Rpb25zL3ByZWxvYWRlcicpLFxyXG5cdFx0cm91dGVzOiByZXF1aXJlKCcuL3JvdXRlcycpXHJcblx0fSlcclxufSkiLCJpbXBvcnQgZnJhbWV3b3JrIGZyb20gJ2ZyYW1ld29yaydcclxuXHJcbmZyYW1ld29yay5pbml0KCkiLCIvKiAtLS0tLS0tLS0tXHJcbmFsbCByb3V0ZXMgbmVlZHMgdG8gYmUgZGVmaW5lZCBpbmxpbmVcclxuc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iaWd3aGVlbC1mcmFtZXdvcmsvZG9jdW1lbnRhdGlvbi9ibG9iL21hc3Rlci9yb3V0ZXMtZGVmaW5pbmcubWQjYXMtc2VjdGlvbi1zdGFuZGFyZC1mb3JtXHJcbi0tLS0tLS0tLS0gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Jy8nOiByZXF1aXJlKCcuL3NlY3Rpb25zL2hvbWUnKSxcclxuXHQnL2hvbWUnOiB7IHNlY3Rpb246IHJlcXVpcmUoJy4vc2VjdGlvbnMvaG9tZScpLCBkdXBsaWNhdGU6IHRydWUsIHJvdXRlczoge1xyXG4gICAgICAgICAgICAnLzppZCc6IHsgc2VjdGlvbjogcmVxdWlyZSgnLi9zZWN0aW9ucy9zdWInKSwgZHVwbGljYXRlOiB0cnVlIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGZyYW1ld29yayBmcm9tICdmcmFtZXdvcmsnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJ1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAndXRpbHMnXHJcbmltcG9ydCAkIGZyb20gJ2RvbS1zZWxlY3QnXHJcbmltcG9ydCBldmVudCBmcm9tICdkb20tZXZlbnQnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2RvbS1jbGFzc2VzJ1xyXG5pbXBvcnQgcXVlcnkgZnJvbSAncXVlcnktZG9tLWNvbXBvbmVudHMnXHJcblxyXG5jbGFzcyBEZWZhdWx0IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Iob3B0ID0ge30pIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gY29uZmlnLmlzTW9iaWxlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy52aWV3ID0gY29uZmlnLiR2aWV3XHJcbiAgICAgICAgdGhpcy5wYWdlID0gbnVsbFxyXG4gICAgICAgIHRoaXMuYSA9IG51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pdChyZXEsIGRvbmUsIG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwgeyBzdWI6IGZhbHNlIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy52aWV3XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSB0aGlzLmRhdGFBZGRlZC5iaW5kKHRoaXMsIGRvbmUpXHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucGFnZSA9IHV0aWxzLmJpZ2dpZS5sb2FkUGFnZShyZXEsIHZpZXcsIHJlYWR5LCBvcHRzKVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGFBZGRlZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy51aSA9IHF1ZXJ5KHsgZWw6IHRoaXMucGFnZSB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYSA9ICQuYWxsKCdhJywgdGhpcy5wYWdlKVxyXG5cclxuICAgICAgICB1dGlscy5iaWdnaWUuYWRkUm91dGluZ0VMKHRoaXMuYSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25maWcuaGVpZ2h0ID0gaGVpZ2h0XHJcbiAgICAgICAgY29uZmlnLndpZHRoID0gd2lkdGhcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBcclxuICAgICAgICB1dGlscy5iaWdnaWUucmVtb3ZlUm91dGluZ0VMKHRoaXMuYSlcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEZWZhdWx0IiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXHJcbmltcG9ydCB1dGlscyBmcm9tICd1dGlscydcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnZG9tLWNsYXNzZXMnXHJcbmltcG9ydCBEZWZhdWx0IGZyb20gJy4vZGVmYXVsdCdcclxuaW1wb3J0IGV2ZW50IGZyb20gJ2RvbS1ldmVudCdcclxuaW1wb3J0IHtvbiwgb2ZmfSBmcm9tICdkb20tZXZlbnQnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgRGVmYXVsdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3Iob3B0KSB7XHJcblx0XHRcclxuXHRcdHN1cGVyKG9wdClcclxuXHJcblx0XHR0aGlzLnNsdWcgPSAnaG9tZSdcclxuXHRcdHRoaXMudWkgPSBudWxsXHJcblxyXG5cdFx0dGhpcy5oYW5kbGVQcmludCA9IHRoaXMuaGFuZGxlUHJpbnQuYmluZCh0aGlzKVxyXG5cdH1cclxuXHRcclxuXHRpbml0KHJlcSwgZG9uZSkge1xyXG5cclxuXHRcdHN1cGVyLmluaXQocmVxLCBkb25lKVxyXG5cdH1cclxuXHJcblx0ZGF0YUFkZGVkKGRvbmUpIHtcclxuXHJcblx0XHRzdXBlci5kYXRhQWRkZWQoKVxyXG4gIFxyXG5cdFx0b24odGhpcy51aS53cmFwLCAnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKVxyXG5cclxuXHRcdHRoaXMuYWRkRXZlbnRzKClcclxuXHJcblx0XHRkb25lKClcclxuXHR9XHJcblxyXG5cdGFkZEV2ZW50cygpIHtcclxuXHRcdHRoaXMuYm94ZXMgPSB1dGlscy5qcy5hcnJheUZyb20odGhpcy51aS5ib3gpXHJcblxyXG5cdFx0dGhpcy5ib3hlcy5mb3JFYWNoKChib3gpID0+IG9uKGJveCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVQcmludCkpXHJcblx0fVxyXG5cclxuXHRyZW1vdmVFdmVudHMoKSB7XHJcblx0XHR0aGlzLmJveGVzLmZvckVhY2goKGJveCkgPT4gb2ZmKGJveCwgJ2NsaWNrJywgdGhpcy5oYW5kbGVQcmludCkpXHJcblxyXG5cdFx0dGhpcy5ib3hlcyA9IG51bGxcclxuXHR9XHJcblx0XHJcblx0aGFuZGxlQ2xpY2soZSkge1xyXG5cdCAgXHJcblx0XHRjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXRcclxuXHJcblx0ICBcdFR3ZWVuTGl0ZS50byh0YXJnZXQsIDAuNSwge2F1dG9BbHBoYTowLCB5OiAnLTE1MCUnLCB4OiAnLTUwJScsIGVhc2U6IFBvd2VyMi5lYXNlSW59KTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVByaW50KGUpIHtcclxuXHJcblx0XHRjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXRcclxuXHJcblx0XHR2YXIgcG9scG8gPSAnPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9wb2xwby1mdWxsLmpwZ1wiPicsXHJcblx0XHRcdG1lZHVzYSA9ICc8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL21lZHVzYS1mdWxsLmpwZ1wiPicsXHJcblx0XHRcdHNpcmVuYSA9ICc8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3NpcmVuYS1mdWxsLmpwZ1wiPicsXHJcblx0XHRcdGlwcG8gPSAnPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pcHBvY2FtcG8tZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRsZXBpc21hID0gJzxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbGVwaXNtYS1mdWxsLmpwZ1wiPicsXHJcblx0XHRcdHBlc2NlID0gJzxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcGVzY2UtZnVsbC5qcGdcIj4nLFxyXG5cdFx0XHRpbWdYID0gJzxhIGlkPVwiaW1hZ2UtY2xvc2VcIj4mdGltZXM7PC9hPic7XHJcblx0XHRcdC8vIGFzc2lnbmVkIGltYWdlcyB0byB2YXJpYWJsZXNcclxuXHRcdHZhciBwb2xwb0lkID0gdGhpcy51aS5wb2xwbywgXHJcblx0XHRcdG1lZHVzYUlkID0gdGhpcy51aS5tZWR1c2EsIFxyXG5cdFx0XHRzaXJlbmFJZCA9IHRoaXMudWkuc2lyZW5hLCBcclxuXHRcdFx0aXBwb0lkID0gdGhpcy51aS5pcHBvLCBcclxuXHRcdFx0bGVwaXNtYUlkID0gdGhpcy51aS5sZXBpc21hLCBcclxuXHRcdFx0cGVzY2VJZCA9IHRoaXMudWkucGVzY2U7XHJcblx0XHRcdC8vIGFzc2lnbmVkIGRpdnMgdG8gdmFyaWFibGVzXHJcblxyXG5cdFx0dmFyIG11bHRpV3JhcCA9IHRoaXMudWkud3JhcCxcclxuXHRcdFx0Y2xvc2VCb3ggPSB0aGlzLnVpLmNsb3NlLFxyXG5cdFx0XHR3cmFwQ29udGVudDtcclxuXHQgIFxyXG5cdCAgXHRpZiAodGFyZ2V0ID09IHBvbHBvSWQpIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IHBvbHBvO1xyXG5cdCAgXHR9IGVsc2UgaWYgKHRhcmdldCA9PSBtZWR1c2FJZCkge1xyXG5cdCAgXHRcdHdyYXBDb250ZW50ID0gbWVkdXNhO1xyXG5cdCAgXHR9IGVsc2UgaWYgKHRhcmdldCA9PSBzaXJlbmFJZCkge1xyXG5cdCAgXHRcdHdyYXBDb250ZW50ID0gc2lyZW5hO1xyXG5cdCAgXHR9IGVsc2UgaWYgKHRhcmdldCA9PSBpcHBvSWQpIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IGlwcG87XHJcblx0ICBcdH0gZWxzZSBpZiAodGFyZ2V0ID09IGxlcGlzbWFJZCkge1xyXG5cdCAgXHRcdHdyYXBDb250ZW50ID0gbGVwaXNtYTtcclxuXHQgIFx0fSBlbHNlIHtcclxuXHQgIFx0XHR3cmFwQ29udGVudCA9IHBlc2NlO1xyXG5cdCAgXHR9XHJcblxyXG5cdCAgXHQvLyBKdXN0IG1ha2luZyBzdXJlIG11bHRpV3JhcCBpcyBwcm9wZXJseSBwb3NpdGlvbmVkXHJcblx0ICBcdFR3ZWVuTGl0ZS50byhtdWx0aVdyYXAsIDAuMSwge3k6ICctNTAlJywgeDogJy0xNTAlJywgZWFzZTogUG93ZXIwLmVhc2VOb25lfSk7XHJcblxyXG5cdCAgXHRtdWx0aVdyYXAuaW5uZXJIVE1MID0gJzxhIGNsYXNzPVwianMtY2xvc2VcIiBpZD1cImltYWdlLWNsb3NlXCI+w5c8L2E+JztcclxuXHQgIFx0bXVsdGlXcmFwLmlubmVySFRNTCArPSB3cmFwQ29udGVudDtcclxuXHQgIFx0VHdlZW5MaXRlLnRvKG11bHRpV3JhcCwgMSwge2F1dG9BbHBoYToxLCB5OiAnLTUwJScsIHg6ICctNTAlJywgZWFzZTogUG93ZXI0LmVhc2VPdXR9KTtcclxuXHQgIFx0XHJcblx0fVxyXG5cclxuXHRhbmltYXRlSW4ocmVxLCBkb25lKSB7XHJcblxyXG5cdFx0Y2xhc3Nlcy5hZGQoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuXHRcdFxyXG5cdFx0VHdlZW5MaXRlLnRvKHRoaXMucGFnZSwgMSwge1xyXG5cdFx0XHR5OiAwLFxyXG5cdFx0XHRhdXRvQWxwaGE6IDEsXHJcblx0XHRcdGVhc2U6IEV4cG8uZWFzZUluT3V0LFxyXG5cdFx0XHRvbkNvbXBsZXRlOiBkb25lXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0YW5pbWF0ZU91dChyZXEsIGRvbmUpIHtcclxuXHRcdFxyXG5cdFx0Y2xhc3Nlcy5yZW1vdmUoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuXHJcblx0XHRUd2VlbkxpdGUudG8odGhpcy5wYWdlLCAwLjcsIHtcclxuXHRcdFx0eTogMTAwLFxyXG5cdFx0XHRhdXRvQWxwaGE6IDAsXHJcblx0XHRcdGVhc2U6IEV4cG8uZWFzZUluT3V0LFxyXG5cdFx0XHRvbkNvbXBsZXRlOiBkb25lXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveShyZXEsIGRvbmUpIHtcclxuXHJcblx0XHRzdXBlci5kZXN0cm95KClcclxuXHJcblx0XHR0aGlzLnJlbW92ZUV2ZW50cygpXHJcblxyXG5cdFx0dGhpcy51aSA9IG51bGxcclxuXHJcblx0XHR0aGlzLnBhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBhZ2UpXHJcblx0XHRcclxuXHRcdGRvbmUoKVxyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIb21lIiwiaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2RvbS1jbGFzc2VzJ1xyXG5pbXBvcnQgY3JlYXRlIGZyb20gJ2RvbS1jcmVhdGUtZWxlbWVudCdcclxuXHJcblxyXG5Ud2VlbkxpdGUuZGVmYXVsdEVhc2UgPSBFeHBvLmVhc2VPdXRcclxuXHJcbmNsYXNzIFByZWxvYWRlciB7XHJcblx0XHJcblx0Y29uc3RydWN0b3Iob25Db21wbGV0ZSkge1xyXG5cdFx0XHJcblx0XHR0aGlzLnByZWxvYWRlZCA9IG9uQ29tcGxldGVcclxuXHRcdHRoaXMudmlldyA9IGNvbmZpZy4kdmlld1xyXG5cdFx0dGhpcy5lbCA9IG51bGxcclxuXHJcblx0XHR0aGlzLmlzTW9iaWxlID0gY29uZmlnLmlzTW9iaWxlID0gY29uZmlnLndpZHRoIDw9IDEwMjQgPyB0cnVlIDogZmFsc2VcclxuXHR9XHJcblx0XHJcblx0aW5pdChyZXEsIGRvbmUpIHtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgXHRcclxuXHRcdHRoaXMuY3JlYXRlRE9NKClcclxuXHJcblx0XHRkb25lKClcclxuXHR9XHJcblx0XHJcblx0Y3JlYXRlRE9NKCkge1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3LmZpcnN0Q2hpbGRcclxuXHJcblx0XHR0aGlzLmVsID0gY3JlYXRlKHtcclxuXHRcdFx0c2VsZWN0b3I6ICdkaXYnLFxyXG5cdFx0XHRzdHlsZXM6ICdwcmVsb2FkZXInLFxyXG5cdFx0XHRodG1sOiAnPGRpdiBpZD1cImxvYWRlci13cmFwcGVyXCI+PGRpdiBpZD1cImxvYWRlclwiPjwvZGl2PjxkaXYgY2xhc3M9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLWxlZnRcIj48L2Rpdj48ZGl2IGNsYXNzPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1yaWdodFwiPjwvZGl2PjwvZGl2PidcclxuXHRcdH0pXHJcblxyXG5cdFx0dGhpcy52aWV3Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBwYWdlKVxyXG5cdH1cclxuXHJcblx0cmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcblx0XHRjb25maWcud2lkdGggPSB3aWR0aFxyXG5cdFx0Y29uZmlnLmhlaWdodCA9IGhlaWdodFxyXG5cdH1cclxuXHJcblx0YW5pbWF0ZUluKHJlcSwgZG9uZSkge1xyXG5cclxuXHRcdGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcblx0XHRcdGRvbmUoKVxyXG5cdFx0XHQvLyBjYWxsIHRoaXMucHJlbG9hZGVkIHRvIGJyaW5nIHRoZSBmaXJzdCByb3V0ZVxyXG5cdFx0XHR0aGlzLnByZWxvYWRlZCgpXHJcblx0XHR9fSk7XHJcblx0XHR0bC50byh0aGlzLmVsLCAxLCB7YXV0b0FscGhhOiAxfSlcclxuXHRcdHRsLnJlc3RhcnQoKVxyXG5cdH1cclxuXHRcclxuXHRhbmltYXRlT3V0KHJlcSwgZG9uZSkge1xyXG5cclxuXHRcdGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KHsgcGF1c2VkOiB0cnVlLCBvbkNvbXBsZXRlOiBkb25lIH0pXHJcblx0XHR0bC50byh0aGlzLmVsLCAxLCB7YXV0b0FscGhhOiAwfSlcclxuXHRcdHRsLnJlc3RhcnQoKVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveShyZXEsIGRvbmUpIHtcclxuXHJcblx0XHRjbGFzc2VzLmFkZChjb25maWcuJGJvZHksICdsb2FkZWQnKVxyXG5cdFx0Y2xhc3Nlcy5yZW1vdmUoY29uZmlnLiRib2R5LCAnaXMtbG9hZGluZycpXHJcblxyXG5cdFx0dGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMuZWwpXHJcblxyXG5cdFx0ZG9uZSgpXHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFByZWxvYWRlciIsImltcG9ydCBmcmFtZXdvcmsgZnJvbSAnZnJhbWV3b3JrJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZydcclxuaW1wb3J0IHV0aWxzIGZyb20gJ3V0aWxzJ1xyXG5pbXBvcnQgJCBmcm9tICdkb20tc2VsZWN0J1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICdkb20tY2xhc3Nlcyc7XHJcbmltcG9ydCBjcmVhdGUgZnJvbSAnZG9tLWNyZWF0ZS1lbGVtZW50J1xyXG5pbXBvcnQgcXVlcnkgZnJvbSAncXVlcnktZG9tLWNvbXBvbmVudHMnXHJcblxyXG5jbGFzcyBTdWIge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihvcHQgPSB7fSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNNb2JpbGUgPSBjb25maWcuaXNNb2JpbGVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZpZXcgPSBjb25maWcuJHZpZXdcclxuICAgICAgICB0aGlzLnNsdWcgPSBudWxsXHJcbiAgICAgICAgdGhpcy5lbCA9IG51bGxcclxuICAgICAgICB0aGlzLmEgPSBudWxsXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluaXQocmVxLCBkb25lKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZpZXdcclxuICAgICAgICBjb25zdCBzbHVnID0gdGhpcy5zbHVnID0gYHN1Yi0ke2lkfWBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZlcnRpY2FsLWVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvXCI+JHtpZH0gbWUuLi48L3NwYW4+IDxicj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJqcy1wcm9maWxlXCI+UHJvZmlsZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAxMTI1NjA2NzYzNVwiPkZhY2Vib29rPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImpzLWV4cGVyaWVuY2VcIj5FeHBlcmllbmNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPiA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9tYnVzc29uLmNvbVwiPjw8IEJhY2s8L2E+PC9saT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAwLjc1cmVtXCIgY2xhc3M9XCJpbmZvXCI+IFRvIHRoZSBkZXZlbG9wZXIncyB3ZWJzaXRlLiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zdXJlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc3VyZS1lbFwiPiA8YSBocmVmPVwiL2hvbWVcIiBjbGFzcz1cImpzLWNsb3NlYWJvdXQgbGlua1wiPsOXPC9hPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZWwgPSBjcmVhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdicsXHJcbiAgICAgICAgICAgIHN0eWxlczogYHN1Yi1pdGVtICR7dGhpcy5zbHVnfWAsXHJcbiAgICAgICAgICAgIGh0bWw6IHRlbXBsYXRlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZENoaWxkKHRoaXMuZWwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdXRpbHMuYmlnZ2llLiBhZGRSb3V0aW5nRUwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKSlcclxuXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFuaW1hdGVJbihyZXEsIGRvbmUpIHtcclxuXHJcbiAgICAgICAgY2xhc3Nlcy5hZGQoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuXHJcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgICAgICBjb25zdCB0bCA9IG5ldyBUaW1lbGluZU1heCh7IHBhdXNlZDogdHJ1ZSB9KVxyXG4gICAgICAgIHRsLmZyb21Ubyh0aGlzLmVsLCAxLHt4OiAnLTMyMCd9LCB7IHg6IDAsIGVhc2U6IEV4cG8uZWFzZUluT3V0IH0pXHJcbiAgICAgICAgdGwucmVzdGFydCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZU91dChyZXEsIGRvbmUpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgY2xhc3Nlcy5yZW1vdmUoY29uZmlnLiRib2R5LCBgaXMtJHt0aGlzLnNsdWd9YClcclxuXHJcbiAgICAgICAgY29uc3QgdGwgPSBuZXcgVGltZWxpbmVNYXgoeyBwYXVzZWQ6IHRydWUsIG9uQ29tcGxldGU6IGRvbmUgfSlcclxuICAgICAgICB0aGlzLmVsICYmIHRsLnRvKHRoaXMuZWwsIDAuNywgeyB4OiAnLTMyMCcsIGVhc2U6IEV4cG8uZWFzZUluT3V0LCBjbGVhclByb3BzOiAnYWxsJyB9KVxyXG4gICAgICAgIHRsLnJlc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge31cclxuXHJcbiAgICBkZXN0cm95KHJlcSwgZG9uZSkge1xyXG5cclxuICAgICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbClcclxuICAgICAgICB0aGlzLmVsID0gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvbmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN1YiIsImltcG9ydCBmcmFtZXdvcmsgZnJvbSAnZnJhbWV3b3JrJ1xyXG5pbXBvcnQgYWpheCBmcm9tICdwbGVhc2UtYWpheCdcclxuaW1wb3J0IGNyZWF0ZSBmcm9tICdkb20tY3JlYXRlLWVsZW1lbnQnXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2RvbS1jbGFzc2VzJ1xyXG5cclxuY29uc3QgdXRpbHMgPSB7XHJcblx0XHJcblx0Y3NzOiB7XHJcblx0XHRcclxuXHRcdGdldFJlY3QocmlnaHQsIGJvdHRvbSwgbGVmdD0wLCB0b3A9MCkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGByZWN0KCR7dG9wfXB4LCAke3JpZ2h0fXB4LCAke2JvdHRvbX1weCwgJHtsZWZ0fXB4KWA7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRqczoge1xyXG5cdFx0XHJcblx0XHRhcnJheUZyb20ob3B0KSB7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob3B0LCAwKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XHJcblxyXG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbih2YWx1ZSwgbWF4KSk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzY3JvbGxUb3AoKSB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgOiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGJpZ2dpZToge1xyXG5cdFx0XHJcblx0XHRhZGRSb3V0aW5nRUwoYSkge1xyXG5cclxuXHRcdFx0dXRpbHMuanMuYXJyYXlGcm9tKGEpLmZvckVhY2goKGVsKSA9PiBlbC5vbmNsaWNrID0gdXRpbHMuYmlnZ2llLmhhbmRsZVJvdXRlKVxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmVSb3V0aW5nRUwoYSkge1xyXG5cclxuXHRcdFx0dXRpbHMuanMuYXJyYXlGcm9tKGEpLmZvckVhY2goKGVsKSA9PiBlbC5vbmNsaWNrID0gbnVsbClcclxuXHRcdH0sXHJcblxyXG5cdFx0aGFuZGxlUm91dGUoZSkge1xyXG4gICAgICAgIFx0XHJcblx0ICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXRcclxuXHJcblx0ICAgICAgICBpZihjbGFzc2VzLmhhcyh0YXJnZXQsICduby1yb3V0ZScpKSByZXR1cm5cclxuXHQgICAgICAgIFxyXG5cdCAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG5cdCAgICAgICAgZnJhbWV3b3JrLmdvKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcclxuXHQgICAgfSxcclxuXHJcblx0XHRnZXRTbHVnKHJlcSwgb3B0aW9ucykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHJvdXRlID0gcmVxLnJvdXRlID09PSBcIi9cIiA/ICcvaG9tZScgOiByZXEucm91dGU7XHJcblx0XHRcdGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKHJlcS5wYXJhbXMpLmxlbmd0aCA9PT0gMCAmJiBKU09OLnN0cmluZ2lmeShyZXEucGFyYW1zKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pXHJcblx0XHRcdFxyXG5cdFx0XHRpZighcGFyYW1zKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlcS5wYXJhbXMpIHtcclxuXHRcdFx0ICAgICAgICBpZiAocmVxLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblxyXG5cdFx0XHQgICAgICAgIFx0aWYocm91dGUuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuXHRcdFx0ICAgICAgICBcdFx0cm91dGUgPSByb3V0ZS5yZXBsYWNlKGA6JHtrZXl9YCwgb3B0aW9ucy5zdWIgPyAnJyA6IHJlcS5wYXJhbXNba2V5XSlcclxuXHRcdFx0ICAgICAgICBcdH1cclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmKHJvdXRlLnN1YnN0cmluZyhyb3V0ZS5sZW5ndGgtMSkgPT0gJy8nKSB7XHJcblx0XHRcdFx0cm91dGUgPSByb3V0ZS5zbGljZSgwLCAtMSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHJvdXRlLnN1YnN0cigxKVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Y3JlYXRlUGFnZShyZXEsIHNsdWcpIHtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBjcmVhdGUoe1xyXG5cdFx0XHRcdHNlbGVjdG9yOiAnZGl2JyxcclxuXHRcdFx0XHRpZDogYHBhZ2UtJHtzbHVnfWAsXHJcblx0XHRcdFx0c3R5bGVzOiBgcGFnZSBwYWdlLSR7c2x1Z31gXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsb2FkUGFnZShyZXEsIHZpZXcsIGRvbmUsIG9wdGlvbnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHNsdWcgPSB1dGlscy5iaWdnaWUuZ2V0U2x1ZyhyZXEsIG9wdGlvbnMpXHJcblx0XHRcdGNvbnN0IHBhZ2UgPSB1dGlscy5iaWdnaWUuY3JlYXRlUGFnZShyZXEsIHNsdWcpXHJcblx0XHRcdFxyXG5cdFx0XHRhamF4LmdldChgL3RlbXBsYXRlcy8ke3NsdWd9Lmh0bWxgLCB7XHJcblx0XHRcdFx0c3VjY2VzczogKG9iamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0cGFnZS5pbm5lckhUTUwgPSBvYmplY3QuZGF0YTtcclxuXHRcdFx0XHRcdGRvbmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRyZXR1cm4gdmlldy5hcHBlbmRDaGlsZChwYWdlKVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbHNcclxuIiwiLyoqIEBtb2R1bGUgYmlnd2hlZWwgKi9cclxuXHJcbnZhciB2bSA9IHJlcXVpcmUoJ2J3LXZtJyk7XHJcbnZhciB2aWV3bWVkaWF0b3IgPSByZXF1aXJlKCdidy12aWV3bWVkaWF0b3InKTtcclxudmFyIHJvdXRlciA9IHJlcXVpcmUoJ2J3LXJvdXRlcicpO1xyXG52YXIgb24gPSByZXF1aXJlKCdkb20tZXZlbnQnKTtcclxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcclxuXHJcbi8qKlxyXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYmlnd2hlZWwgeW91IG11c3QgcGFzcyBpbiBhIHNldHVwIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBJbiB0aGlzIGZ1bmN0aW9uIHlvdSBtYXkgZG8gYW55IHByZXBhcmF0aW9uIHRoYXQgbXVzdCBiZSBkb25lIGZvciB5b3VyXHJcbiAqIGFwcGxpY2F0aW9uIHN1Y2ggYXMgY3JlYXRpbmcgYSBnbG9iYWwgQ2FudmFzIGVsZW1lbnQgb3Igc29tZXRoaW5nIGVsc2UuXHJcbiAqXHJcbiAqIFRoZSBzZXR1cCBmdW5jdGlvbiBtdXN0IGVpdGhlciByZXR1cm4gYSBzZXR0aW5ncyBvYmplY3QgZm9yIGJpZ3doZWVsIG9yXHJcbiAqIHRoaXMgZnVuY3Rpb24gbXVzdCByZWNlaXZlIGEgY2FsbGJhY2sgd2hpY2ggeW91IHdpbGwgY2FsbCB3aXRoIHRoZSBzZXR0aW5nc1xyXG4gKiBvYmplY3QuIEZ1cnRoZXJtb3JlIHlvdSBjYW4gcGFzcyBiYWNrIGEgcHJvbWlzZSBmcm9tIHRoaXMgc2V0dGluZ3MgZnVuY3Rpb25cclxuICogd2hpY2ggd2lsbCByZWNlaXZlIHRoZSBzZXR0aW5ncyBvYmplY3QuXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZG9jdW1lbnRzIHdoYXQgY2FuIGJlIHBhc3NlZCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0OlxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIHtcclxuICogXHQvLy8vLyBSRVFVSVJFRCAvLy8vL1xyXG4gKlxyXG4gKiBcdC8vIHJvdXRlcyBkZWZpbmVzIGFsbCB0aGUgcm91dGVzIGZvciB5b3VyIHdlYnNpdGUgaXQgY2FuIGFsc28gZGVmaW5lIGEgXHJcbiAqIFx0Ly8gNDA0IHNlY3Rpb24gd2hpY2ggd2lsbCBiZSBvcGVuZWQgaWYgdGhlIHJvdXRlIGlzIGluY29ycmVjdFxyXG4gKiAgcm91dGVzOiB7XHJcbiAqICBcdHBvc3RIYXNoOiAnIyEnLCAvLyB0aGlzIHN0cmluZyBpcyBhcHBlbmRlZCBiZWZvcmUgdGhlIHJvdXRlLiBcclxuICogIFx0ICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgaXQncyB2YWx1ZSBpcyAnIyEnXHJcbiAqIFx0XHQnLyc6IHNvbWVTZWN0aW9uLFxyXG4gKiBcdFx0Jy9zb21lT3RoZXInOiBzb21lT3RoZXJTZWN0aW9uLFxyXG4gKiBcdFx0JzQwNCc6IHNlY3Rpb25Gb3VyT2hGb3VyXHJcbiAqICB9LFxyXG4gKiAgXHJcbiAqICAvLy8vLyBPUFRJT05BTCAvLy8vL1xyXG4gKiAgaW5pdFNlY3Rpb246IHByZVNlY3Rpb24sIC8vIHRoaXMgY291bGQgYmUgYSBzZWN0aW9uIHRoYXQgaXMgcnVuIGFsd2F5c1xyXG4gKiAgXHRcdFx0XHRcdFx0IC8vIGJlZm9yZSByb3V0ZXMgYXJlIGV2ZW4gZXZhbHVhdGVkLiBUaGlzIGlzXHJcbiAqICBcdFx0XHRcdFx0XHQgLy8gdXNlZnVsZiBmb3Igc2l0ZSBwcmVsb2FkZXJzIG9yIGxhbmRpbmcgcGFnZXNcclxuICogIFx0XHRcdFx0XHRcdCAvLyBzdWNoIGFzIGFnZSB2ZXJpZmljYXRpb24gKHNvbWV0aGluZyB0aGUgdXNlclxyXG4gKiAgXHRcdFx0XHRcdFx0IC8vIG11c3Qgc2VlKVxyXG4gKiBcclxuICogXHRhdXRvUmVzaXplOiB0cnVlLCAvLyBieSBkZWZhdWx0IHRoaXMgdmFsdWUgaXMgdHJ1ZS4gV2hlbiB0aGlzIHZhbHVlIGlzXHJcbiAqIFx0XHRcdFx0XHQgIC8vIHRydWUgYSByZXNpemUgbGlzdGVuZXIgaXMgYWRkZWQgdG8gdGhlIHdpbmRvd1xyXG4gKiBcdFx0XHRcdFx0ICAvLyB3aGVuZXZlciB0aGUgd2luZG93IGNoYW5nZXMgc2l6ZSBpdCdzIHdpZHRoIGFuZFxyXG4gKiBcdFx0XHRcdFx0ICAvLyBoZWlnaHQgaXMgcGFzc2VkIHRvIGFsbCBpbnN0YW50aWF0ZWQgc2VjdGlvbnNcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIEBjbGFzcyBiaWd3aGVlbFxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gc2V0dGluZ3NGdW5jIFRoaXMgc2V0dGluZ3MgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIHRvXHJcbiAqIGluaXRpYWxpemUgYmlnd2hlZWwuXHJcbiAqL1xyXG5mdW5jdGlvbiBiaWd3aGVlbChzZXR0aW5nc0Z1bmMpIHtcclxuXHJcblx0aWYoISh0aGlzIGluc3RhbmNlb2YgYmlnd2hlZWwpKVxyXG5cdFx0cmV0dXJuIG5ldyBiaWd3aGVlbChzZXR0aW5nc0Z1bmMpO1xyXG5cclxuXHR0aGlzLnNldHRpbmdzRnVuYyA9IHNldHRpbmdzRnVuYztcclxuXHRFdmVudEVtaXR0ZXIuY2FsbCh0aGlzKTtcclxuXHJcbn1cclxuXHJcbmJpZ3doZWVsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XHJcblxyXG4vKipcclxuICogaW5pdCBtdXN0IGJlIGNhbGxlZCB0byBzdGFydCB0aGUgZnJhbWV3b3JrLiBUaGlzIHdhcyBkb25lIHRvIGFsbG93IGZvclxyXG4gKiBhIGRldmVsb3BlciB0byBoYXZlIGZ1bGwgY29udHJvbCBvZiB3aGVuIGJpZ3doZWVsIHN0YXJ0cyBkb2luZyBpdCdzIHRoaW5nLlxyXG4gKi9cclxuYmlnd2hlZWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIG9uU2V0dGluZ0NvbXBsZXRlID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuXHJcblx0XHR2YXIgcyA9IHRoaXMucyA9IHNldHRpbmdzO1xyXG5cclxuXHRcdGlmKHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3VyIHNldHRpbmdzIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgc2V0dGluZ3MgT2JqZWN0Jyk7XHJcblxyXG5cdFx0aWYocy5yb3V0ZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3VyIHNldHRpbmdzIG9iamVjdCBtdXN0IGRlZmluZSByb3V0ZXMnKTtcclxuXHJcblx0XHRzLmF1dG9SZXNpemUgPSBzLmF1dG9SZXNpemUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzLmF1dG9SZXNpemU7XHJcblxyXG5cdFx0dGhpcy5wcmV2aW91c1JvdXRlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdHRoaXMuZGVwdGggPSBbXTtcclxuXHRcdHRoaXMudm1zID0gW107XHJcblx0XHR0aGlzLnJvdXRlcyA9IHt9O1xyXG5cdFx0dGhpcy5wYXJzZVJvdXRlcyhzZXR0aW5ncy5yb3V0ZXMpO1xyXG5cclxuXHRcdC8vIHNldHVwIHRoZSByb3V0ZXJcclxuXHRcdHRoaXMucm91dGVyID0gcm91dGVyKHRoaXMucm91dGVzKTtcclxuXHRcdHRoaXMucm91dGVyLm9uKCdyb3V0ZScsIHRoaXMuc2hvdy5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHQvLyBSZS1kaXNwYXRjaCByb3V0ZXNcclxuXHRcdHRoaXMucm91dGVyLm9uKCdyb3V0ZScsdGhpcy5lbWl0LmJpbmQodGhpcywncm91dGUnKSk7XHJcblxyXG5cdFx0Ly8gY2hlY2sgaWYgXHJcblx0XHRpZihzLmF1dG9SZXNpemUgJiYgZ2xvYmFsLmlubmVyV2lkdGggIT09IHVuZGVmaW5lZCAmJiBnbG9iYWwuaW5uZXJIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHRcdFx0b24oZ2xvYmFsLCAncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHRcdHRoaXMub25SZXNpemUoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8gaGFuZGxlIGlmIHRoZXJlIGlzIGFuIGluaXQgc2VjdGlvbiB0aGlzIHNob3VsZCBiZSBzaG93biBldmVuIGJlZm9yZVxyXG5cdFx0Ly8gdGhlIHJvdXRlciByZXNvbHZlc1xyXG5cdFx0aWYocy5pbml0U2VjdGlvbilcclxuXHRcdFx0dGhpcy5zaG93KHtzZWN0aW9uOiBzLmluaXRTZWN0aW9uLmJpbmQodW5kZWZpbmVkLCB0aGlzLnJvdXRlci5pbml0LmJpbmQodGhpcy5yb3V0ZXIpKX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnJvdXRlci5pbml0KCk7XHJcblx0fS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcblx0dmFyIHJWYWwgPSB0aGlzLnNldHRpbmdzRnVuYyhvblNldHRpbmdDb21wbGV0ZSk7XHJcblxyXG5cdC8vIGNoZWNrIGlmIHByb21pc2VzIGFyZSB1c2VkIGluc3RlYWRcclxuXHQvLyBpdCBtaWdodCBiZSBnb29kIHRvIHJlbW92ZSB0aGlzIHNpbmNlIHRoZXJlcyBub1xyXG5cdC8vIG5lZWQgZm9yIHByb21pc2VzIGluIHRoaXMgY2FzZVxyXG5cdGlmKHJWYWwgJiYgclZhbC50aGVuKVxyXG5cdFx0clZhbC50aGVuKG9uU2V0dGluZ0NvbXBsZXRlKTtcclxuXHQvLyBjaGVjayBpZiBqdXN0IGFuIG9iamVjdCB3YXMgcmV0dXJuZWQgd2hpY2ggaGFzIC5yb3V0ZXNcclxuXHRlbHNlIGlmKHJWYWwgJiYgclZhbC5yb3V0ZXMpXHJcblx0XHRvblNldHRpbmdDb21wbGV0ZShyVmFsKTtcclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUucGFyc2VSb3V0ZXMgPSBmdW5jdGlvbihyb3V0ZXMscHJlZml4KSB7XHJcblx0dmFyIGRlcHRoID0gKHByZWZpeCB8fCAnJykuc3BsaXQoJy8nKS5sZW5ndGg7XHJcblx0aWYgKHRoaXMudm1zLmxlbmd0aDxkZXB0aCkgdGhpcy52bXMucHVzaCh2bSh0aGlzLnMpKTtcclxuXHRwcmVmaXggPSBwcmVmaXggfHwgXCJcIjtcclxuXHRmb3IgKHZhciBrZXkgaW4gcm91dGVzKSB7XHJcblx0XHRpZiAoa2V5LmNoYXJBdCgwKT09PScvJykge1xyXG5cdFx0XHRpZiAocHJlZml4KSByb3V0ZXNba2V5XS5wYXJlbnQgPSBwcmVmaXg7XHJcblx0XHRcdHRoaXMucm91dGVzW3ByZWZpeCtrZXldID0gcm91dGVzW2tleV07XHJcblx0XHRcdGlmIChyb3V0ZXNba2V5XS5yb3V0ZXMpIHtcclxuXHRcdFx0XHR0aGlzLnBhcnNlUm91dGVzKHJvdXRlc1trZXldLnJvdXRlcyxwcmVmaXgra2V5KTtcclxuXHRcdFx0XHRkZWxldGUgcm91dGVzW2tleV0ucm91dGVzO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJvdXRlc1trZXldID0gcm91dGVzW2tleV07XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGdvIGNhbiBiZSBjYWxsZWQgdG8gZ28gdG8gYW5vdGhlciBzZWN0aW9uLlxyXG4gKiBcclxuICogQHBhcmFtICB7U3RyaW5nfSB0byBUaGlzIGlzIHRoZSByb3V0ZSB5b3Ugd2FudCB0byBnbyB0by5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiBmcmFtZXdvcmsuZ28oJy9sYW5kaW5nJyk7XHJcbiAqIGBgYFxyXG4gKi9cclxuYmlnd2hlZWwucHJvdG90eXBlLmdvID0gZnVuY3Rpb24odG8sb3B0aW9ucykge1xyXG5cclxuXHR0aGlzLnJvdXRlci5nbyh0byxvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRGVzdHJveXMgYmlnaHdlZWxcclxuICovXHJcbmJpZ3doZWVsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHRoaXMucm91dGVyLnJlbW92ZUFsbExpc3RlbmVycygncm91dGUnKTtcclxuXHR0aGlzLnJvdXRlci5kZXN0cm95KCk7XHJcblxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlc2l6ZSBjYW4gYmUgY2FsbGVkIGF0IGFueSB0aW1lLiBUaGUgdmFsdWVzIHBhc3NlZCBpbiBmb3JcclxuICogd2lkdGggYW5kIGhlaWdodCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY3VycmVudGx5IGluc3RhbnRpYXRlZFxyXG4gKiBzZWN0aW9ucy5cclxuICpcclxuICogSWYgYGF1dG9SZXNpemVgIHdhcyBub3QgcGFzc2VkIGluIG9yIGl0IHdhcyB0cnVlIHRoZW4gcmVzaXplXHJcbiAqIHdpbGwgYXV0b21hdGljYWxseSBiZSBjYWxsZWQgd2hlbiB0aGUgd2luZG93IG9mIHRoZSBicm93c2VyXHJcbiAqIHJlc2l6ZXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHcgd2lkdGggdmFsdWUgeW91J2QgbGlrZSB0byBwYXNzIHRvIHRoZSBzZWN0aW9uc1xyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggaGVpZ2h0IHZhbHVlIHlvdSdkIGxpa2UgdG8gcGFzcyB0byB0aGUgc2VjdGlvbnNcclxuICovXHJcbmJpZ3doZWVsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XHJcblx0Zm9yICh2YXIgaT0wOyBpPHRoaXMudm1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR0aGlzLnZtc1tpXS5yZXNpemUodyxoKTtcclxuXHR9XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGluZm8pIHtcclxuXHR2YXIgc2VjdGlvbiA9IGluZm8uc2VjdGlvbjtcclxuXHR2YXIgcmVxID0gaW5mby5yb3V0ZSB8fCB7fTtcclxuXHRyZXEucHJldmlvdXMgPSB0aGlzLnByZXZpb3VzUm91dGU7XHJcblx0cmVxLmZyYW1ld29yayA9IHRoaXM7XHJcblxyXG5cdGlmIChyZXEucm91dGUpIHtcclxuXHRcdHZhciBkZXB0aCA9IFt0aGlzLnJlYnVpbGRSb3V0ZShyZXEucm91dGUsaW5mby5wYXRoKV07XHJcblx0XHR2YXIgdmlld3MgPSBbc2VjdGlvbi5zZWN0aW9uIHx8IHNlY3Rpb25dO1xyXG5cdFx0d2hpbGUgKHNlY3Rpb24ucGFyZW50KSB7XHJcblx0XHRcdGRlcHRoLnVuc2hpZnQodGhpcy5yZWJ1aWxkUm91dGUoc2VjdGlvbi5wYXJlbnQsaW5mby5wYXRoKSk7XHJcblx0XHRcdHNlY3Rpb24gPSB0aGlzLnJvdXRlc1tzZWN0aW9uLnBhcmVudF07XHJcblx0XHRcdHZpZXdzLnVuc2hpZnQoc2VjdGlvbi5zZWN0aW9uIHx8IHNlY3Rpb24pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwcmV2RGVwdGggPSB0aGlzLmRlcHRoO1xyXG5cdFx0dGhpcy5kZXB0aCA9IGRlcHRoO1xyXG5cdFx0dmFyIHRvdGFsID0gTWF0aC5tYXgocHJldkRlcHRoLmxlbmd0aCxkZXB0aC5sZW5ndGgpO1xyXG5cdFx0Zm9yICh2YXIgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuXHRcdFx0aWYgKGk+ZGVwdGgubGVuZ3RoLTEpIHtcclxuXHRcdFx0XHR0aGlzLnZtc1tpXS5jbGVhcihyZXEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHByZXZEZXB0aFtpXSE9ZGVwdGhbaV0pIHtcclxuXHRcdFx0XHR0aGlzLnZtc1tpXS5zaG93KHRoaXMucGFyc2VTZWN0aW9uKHZpZXdzW2ldKSxyZXEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMudm1zWzBdLnNob3codGhpcy5wYXJzZVNlY3Rpb24oc2VjdGlvbi5zZWN0aW9uIHx8IHNlY3Rpb24pLHJlcSk7XHJcblx0fVxyXG5cdFxyXG5cdHRoaXMucHJldmlvdXNSb3V0ZSA9IGluZm8ucm91dGU7XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUucmVidWlsZFJvdXRlID0gZnVuY3Rpb24ocm91dGUscGF0aCkge1xyXG5cdHZhciBwYXRoID0gcGF0aC5zcGxpdCgnLycpXHJcblx0cGF0aC5sZW5ndGggPSByb3V0ZS5zcGxpdCgnLycpLmxlbmd0aDtcclxuXHRyZXR1cm4gcGF0aC5qb2luKCcvJyk7XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUucGFyc2VTZWN0aW9uID0gZnVuY3Rpb24oc2VjdGlvbikge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KHNlY3Rpb24pKSB7XHJcblx0XHRmb3IgKHZhciBpPTA7IGk8c2VjdGlvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodHlwZW9mIHNlY3Rpb25baV0gPT0gJ2Z1bmN0aW9uJykgc2VjdGlvbltpXSA9IG5ldyBzZWN0aW9uW2ldKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmlld21lZGlhdG9yLmFwcGx5KHVuZGVmaW5lZCxzZWN0aW9uKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBzZWN0aW9uID09ICdmdW5jdGlvbicpIHtcclxuXHRcdHJldHVybiBuZXcgc2VjdGlvbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gc2VjdGlvbjtcclxuXHR9XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dGhpcy5yZXNpemUoZ2xvYmFsLmlubmVyV2lkdGgsIGdsb2JhbC5pbm5lckhlaWdodCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJpZ3doZWVsOyIsImZ1bmN0aW9uIG1lZGlhdG9yKCkge1xuXG4gIGlmKCEoIHRoaXMgaW5zdGFuY2VvZiBtZWRpYXRvciApKSB7XG5cbiAgICB2YXIgclZhbCA9IE9iamVjdC5jcmVhdGUobWVkaWF0b3IucHJvdG90eXBlKTtcbiAgICBtZWRpYXRvci5hcHBseShyVmFsLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByVmFsO1xuICB9XG5cbiAgdGhpcy5pdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG59XG5cbm1lZGlhdG9yLnByb3RvdHlwZSA9IHtcblxuICBpbml0OiBmdW5jdGlvbihkYXRhLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQWxsKCdpbml0JywgZGF0YSwgZG9uZSk7XG4gIH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbih3LCBoKSB7XG5cbiAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSB0aGlzLml0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgIGlmKHR5cGVvZiB0aGlzLml0ZW1zWyBpIF0ucmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbIGkgXS5yZXNpemUodywgaCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFuaW1hdGVJbjogZnVuY3Rpb24oZGF0YSwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEFsbCgnYW5pbWF0ZUluJywgZGF0YSwgZG9uZSk7ICAgIFxuICB9LFxuXG4gIGFuaW1hdGVPdXQ6IGZ1bmN0aW9uKGRhdGEsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxBbGwoJ2FuaW1hdGVPdXQnLCBkYXRhLCBkb25lKTtcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbihkYXRhLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQWxsKCdkZXN0cm95JywgZGF0YSwgZG9uZSk7XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKGRvbmUpIHtcbiAgICB0aGlzLmNhbGxBbGwoJ2NsZWFyJywgZGF0YSwgZG9uZSk7XG4gIH0sXG5cbiAgY2FsbEFsbDogZnVuY3Rpb24oZnVuYywgZGF0YSwgZG9uZSkge1xuXG4gICAgdmFyIG51bUNhbGxlZCA9IDA7XG4gICAgdmFyIG51bVRvQ2FsbCA9IDA7XG4gICAgdmFyIGk7XG4gICAgdmFyIGxlbjtcblxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihzZWN0aW9uKSB7XG5cbiAgICAgIGlmKHR5cGVvZiBzZWN0aW9uWyBmdW5jIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbnVtVG9DYWxsKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gZnVuY3Rpb25zIHRvIGNhbGwgc2ltcGx5IGp1c3QgcmV0dXJuXG4gICAgaWYobnVtVG9DYWxsID09PSAwKSB7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oc2VjdGlvbikge1xuXG4gICAgICAgIGlmKHR5cGVvZiBzZWN0aW9uWyBmdW5jIF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWN0aW9uWyBmdW5jIF0uY2FsbChzZWN0aW9uLCBkYXRhLCBvblNlY3Rpb25Eb25lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZWN0aW9uRG9uZSgpIHtcbiAgICAgIGlmKCsrbnVtQ2FsbGVkID09PSBudW1Ub0NhbGwpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5vbiA9IG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5vZmYgPSBvZmY7XHJcblxyXG5mdW5jdGlvbiBvbiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XHJcblxyXG4gIGlmKCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgKSB7XHJcblxyXG4gICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnQubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XHJcblxyXG4gICAgICBvbmVPbihlbGVtZW50WyBpIF0sIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBvbmVPbihlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpOyAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FsbGJhY2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XHJcblxyXG4gIGlmKCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgKSB7XHJcblxyXG4gICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnQubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XHJcblxyXG4gICAgICBvbmVPZmYoZWxlbWVudFsgaSBdLCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgb25lT2ZmKCBlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUgKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGNhbGxiYWNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbmVPbiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XHJcblxyXG4gIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIgfHwgZWxlbWVudC5hdHRhY2hFdmVudCkuY2FsbChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbmVPZmYgKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xyXG5cclxuICAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyIHx8IGVsZW1lbnQuZGV0YWNoRXZlbnQpLmNhbGwoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTtcclxufSIsInZhciByb3V0ZXMgPSByZXF1aXJlKCdyb3V0ZXMnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgbG9jID0gbmV3IChyZXF1aXJlKCdsb2NhdGlvbi1iYXInKSkoKTtcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuZnVuY3Rpb24gcm91dGVyKHNldHRpbmdzKSB7XG5cblx0aWYoICEoIHRoaXMgaW5zdGFuY2VvZiByb3V0ZXIgKSApIHtcblxuXHRcdHJldHVybiBuZXcgcm91dGVyKHNldHRpbmdzKTtcblx0fVxuXG5cdHZhciBzID0gdGhpcy5zID0gc2V0dGluZ3MgfHwge307XG5cblx0cy5wb3N0SGFzaCA9IHMucG9zdEhhc2ggfHwgJyEnO1xuXG5cdHRoaXMubGFzdFJvdXRlID0gbnVsbDtcblx0dGhpcy5jaGlsZFJvdXRlciA9IG51bGw7XG5cdHRoaXMuY2hpbGRGdWxsUm91dGUgPSBudWxsO1xuXHR0aGlzLmNoaWxkQmFzZVJvdXRlID0gbnVsbDtcblx0dGhpcy5yb3V0ZXIgPSByb3V0ZXMoKTtcblxuXHRFdmVudEVtaXR0ZXIuY2FsbCh0aGlzKTtcbn1cblxudmFyIHAgPSByb3V0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudEVtaXR0ZXIucHJvdG90eXBlKTtcblxucC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cblx0dmFyIHMgPSB0aGlzLnM7XG5cdHZhciBpO1xuXG5cdC8vIGZpZ3VyZSBvdXQgYSBzdGFydCBzZWN0aW9uXG5cdGlmKCBzWyAnLycgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Ly8gZmluZCB0aGUgZmlyc3QgcGF0aCB3aGljaCB3b3VsZCBiZSBhIHNlY3Rpb25cblx0XHRmb3IoaSBpbiBzKSB7XG5cblx0XHRcdGlmKCBpWyAwIF0gPT0gJy8nICkge1xuXG5cdFx0XHRcdHMuc3RhcnQgPSBpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblxuXHRcdHMuc3RhcnQgPSAnLyc7XG5cdH1cblxuXG5cdC8vIG5vdyBzZXR1cCByb3V0ZXNcblx0Zm9yKGkgaW4gcykge1xuXG5cdFx0aWYoIGlbIDAgXSA9PSAnLycgfHwgaSA9PSAnNDA0Jykge1xuXG5cdFx0XHR0aGlzLnJvdXRlci5hZGRSb3V0ZShpLCBub29wKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLm9uVVJMID0gdGhpcy5vblVSTC5iaW5kKHRoaXMpO1xuXG5cdGlmKCBnbG9iYWwubG9jYXRpb24gKSB7XG5cdFx0bG9jLnN0YXJ0KHtwdXNoU3RhdGU6IHRoaXMucy5wdXNoU3RhdGUhPT11bmRlZmluZWQgPyB0aGlzLnMucHVzaFN0YXRlIDogdHJ1ZSwgcm9vdDogdGhpcy5zLnJvb3QgfHwgJy8nfSk7XG5cdFx0dGhpcy5oYXNQdXNoU3RhdGUgPSBsb2MuaGFzUHVzaFN0YXRlKCk7XG5cdFx0bG9jLm9uQ2hhbmdlKHRoaXMub25VUkwpO1xuXHRcdGxvYy5sb2FkVXJsKCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5vblVSTCgpO1xuXHR9XG5cdFxuXHRyZXR1cm4gdGhpcztcbn07XG5cbnAuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKGdsb2JhbC5sb2NhdGlvbikge1xuXHRcdGxvYy5zdG9wKCk7XG5cdH1cbn07XG5cbnAuYWRkID0gZnVuY3Rpb24ocm91dGUsIHNlY3Rpb24pIHtcblxuXHR2YXIgcyA9IHRoaXMucztcblxuXHRzWyByb3V0ZSBdID0gc2VjdGlvbjtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbnAuZ28gPSBmdW5jdGlvbihyb3V0ZVN0cixvcHRpb25zKSB7XG5cblx0dmFyIHJvdXRlRGF0YTtcblx0dmFyIHNlY3Rpb247XG5cdHZhciBuZXdVUkw7XG5cdHZhciBkb1VSTENoYW5nZTtcblxuXHRpZiggcm91dGVTdHIuY2hhckF0KDApICE9ICcvJyApIHtcblx0XHRyb3V0ZVN0ciA9ICcvJyArIHJvdXRlU3RyO1xuXHR9XG5cblx0bmV3VVJMID0gKHRoaXMuaGFzUHVzaFN0YXRlID8gJycgOiB0aGlzLnMucG9zdEhhc2gpICsgcm91dGVTdHI7XG5cdHJvdXRlRGF0YSA9IHRoaXMuZ2V0Um91dGVEYXRhKHJvdXRlU3RyKSB8fCB0aGlzLmdldFJvdXRlRGF0YSgnNDA0Jyk7XG5cdHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24ocm91dGVEYXRhKTtcblx0ZG9VUkxDaGFuZ2UgPSB0aGlzLnVzZVVSTChzZWN0aW9uKTtcblxuXHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNlY3Rpb24gZGVzY3JpcHRvciBvciBpdCBpcyBhIGRlc2NyaXB0b3IgYW5kIHdlIHNob3VsZCB1cGRhdGVVUkxcblx0aWYoIGdsb2JhbC5sb2NhdGlvbiAmJiBkb1VSTENoYW5nZSApIHtcblx0XHR2YXIgdXJsID0gdGhpcy5oYXNQdXNoU3RhdGUgPyBnbG9iYWwubG9jYXRpb24ucGF0aG5hbWUgOiBnbG9iYWwubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcblx0XHRpZih1cmwgIT0gbmV3VVJMKSB7XG5cdFx0XHRsb2MudXBkYXRlKG5ld1VSTCx7XG5cdFx0XHRcdHRyaWdnZXI6IChvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50KSA/IGZhbHNlIDogdHJ1ZSxcblx0XHRcdFx0cmVwbGFjZTogKG9wdGlvbnMgJiYgb3B0aW9ucy5yZXBsYWNlKSA/IHRydWUgOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmKHNlY3Rpb24uZHVwbGljYXRlIHx8ICFzZWN0aW9uLnVzZVVSTCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgZHVwbGljYXRlIGlzIHNldC4gVGhlIGNoZWNrIGlzIGRvbmUgaGVyZSBzaW5jZSwgb25oYXNoY2hhbmdlIGV2ZW50IHRyaWdnZXJzIFxuXHRcdFx0Ly8gb25seSB3aGVuIHVybCBjaGFuZ2VzIGFuZCB0aGVyZWZvcmUgY2Fubm90IGNoZWNrIHRvIGFsbG93IGR1cGxpY2F0ZS9yZXBlYXRpbmcgcm91dGVcblxuXHRcdFx0Ly8gQWRkaXRpb25hbGx5IGNoZWNrIGlmIHVzZVVSTCBpcyBzZXQgdG8gZmFsc2UuIElmIG5vdCwgdGhlIHJvdXRlIGlzIG5vdCB0cmlnZ2VyZWQgYnlcblx0XHRcdC8vIHVybCBjaGFuZ2VzXG5cdFx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XG5cdFx0fSBcblx0fSBlbHNlIGlmKCAhZ2xvYmFsLmxvY2F0aW9uIHx8ICFkb1VSTENoYW5nZSApIHtcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XG5cdH1cbn07XG5cbnAuZG9Sb3V0ZSA9IGZ1bmN0aW9uKHJvdXRlRGF0YSwgc2VjdGlvbiwgcGF0aCkge1xuXG5cdHZhciBzID0gdGhpcy5zO1xuXG5cdC8vIGNoZWNrIGlmIHRoaXMgaXMgYSByZWRpcmVjdFxuXHRpZiggdHlwZW9mIHNlY3Rpb24gPT0gJ3N0cmluZycgKSB7XG5cblx0XHR0aGlzLmdvKHNlY3Rpb24pO1xuXHR9IGVsc2UgeyBcblxuXHRcdGlmKHJvdXRlRGF0YS5yb3V0ZSAhPT0gdGhpcy5sYXN0UmVzb2x2ZWRSb3V0ZSB8fCBzZWN0aW9uLmR1cGxpY2F0ZSkge1xuXG5cdFx0XHR0aGlzLmxhc3RSZXNvbHZlZFJvdXRlID0gcm91dGVEYXRhLnJvdXRlO1xuXG5cdFx0XHQvLyBvdGhlcndpc2UgdHJlYXQgaXQgYXMgYSByZWd1bGFyIHNlY3Rpb25cblx0XHRcdC8vIGlmIHRoaXMgaXMgYSBvYmplY3QgZGVmaW5pdGlvbiB2cyBhIHNlY3Rpb24gZGVmaW5pdGlvbiAocmVndWxhciBzZWN0aW9uIG9yIGFycmF5KVxuXHRcdFx0dGhpcy5lbWl0KCdyb3V0ZScsIHtcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbixcblx0XHRcdFx0cm91dGU6IHJvdXRlRGF0YSxcblx0XHRcdFx0cGF0aDogcGF0aFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IFxufTtcblxucC5nZXRSb3V0ZURhdGEgPSBmdW5jdGlvbihyb3V0ZVN0cikge1xuXG5cdHZhciByb3V0ZURhdGEgPSB0aGlzLnJvdXRlci5tYXRjaChyb3V0ZVN0cik7XG5cblx0aWYocm91dGVEYXRhKSB7XG5cdFx0dGhpcy5sYXN0Um91dGUgPSByb3V0ZURhdGEucm91dGU7XG5cdH1cblxuXHRyZXR1cm4gcm91dGVEYXRhO1xufTtcblxucC5nZXRTZWN0aW9uID0gZnVuY3Rpb24ocm91dGVEYXRhKSB7XG5cblx0aWYocm91dGVEYXRhKSB7XG5cdFx0dmFyIGhhc1dpbGRjYXJkID0gcm91dGVEYXRhLnJvdXRlICYmIChyb3V0ZURhdGEucm91dGUubWF0Y2goLy4qW1xcW1xcXUAhJCY6JygpKissOz1dLiovZykgfHwgcm91dGVEYXRhLnJvdXRlIGluc3RhbmNlb2YgUmVnRXhwKTtcblx0XHR2YXIgc2VjID0gdGhpcy5zWyByb3V0ZURhdGEucm91dGUgXTtcblx0XHRpZiAoaGFzV2lsZGNhcmQgJiYgc2VjLmR1cGxpY2F0ZT09PXVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKCFzZWMuc2VjdGlvbikge1xuXHRcdFx0XHRyZXR1cm4ge3NlY3Rpb246IHNlYywgZHVwbGljYXRlOiB0cnVlfTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYy5kdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gc2VjO1xuXHRcdFx0fVxuXHRcdH1cdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHNlYztcblx0XHR9XG5cdH0gZWxzZSB7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxucC51c2VVUkwgPSBmdW5jdGlvbihzZWN0aW9uKSB7XG5cblx0cmV0dXJuIHNlY3Rpb24gJiYgXG5cdFx0ICAgKCBzZWN0aW9uLnNlY3Rpb24gPT09IHVuZGVmaW5lZCB8fCAgLy8gaWYgdGhpcyBpcyBub3QgYSBzZWN0aW9uIGRlc2NyaXB0b3IgdXBkYXRlIHVybFxuXHRcdCAgICggc2VjdGlvbi5zZWN0aW9uICYmIHNlY3Rpb24udXNlVVJMIHx8IHNlY3Rpb24udXNlVVJMID09PSB1bmRlZmluZWQgKSApOyAvL2lzIGRlc2NyaXB0b3IgYW5kIGhhcyB1c2VVUkwgb3IgdW5kZWZpbmVkXG59O1xuXG5wLm9uVVJMID0gZnVuY3Rpb24odXJsKSB7XG5cdHZhciByb3V0ZVN0ciA9ICcvJztcblx0dmFyIHJvdXRlRGF0YTtcblx0dmFyIHNlY3Rpb247XG5cblx0aWYoIGdsb2JhbC5sb2NhdGlvbiAmJiB1cmwhPT11bmRlZmluZWQgJiYgdXJsIT09bnVsbCApIHtcblxuXHRcdGlmICh1cmwuY2hhckF0KDApICE9ICcvJykgdXJsID0gJy8nICsgdXJsO1xuXHRcdC8vIGlmIHdlJ3ZlIGFscmVhZHkgbG9va2VkIGF0IHRoaXMgdXJsIHRoZW4ganVzdCBnZXQgb3V0IG9mIHRoaXMgZnVuY3Rpb25cblx0XHRpZih1cmwgPT09IHRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnJlc29sdmVkID0gdXJsO1xuXHRcdHJvdXRlU3RyID0gKHRoaXMuaGFzUHVzaFN0YXRlIHx8IHVybC5sZW5ndGg8MikgPyB1cmwgOiB1cmwuc3Vic3RyKDEgKyB0aGlzLnMucG9zdEhhc2gubGVuZ3RoKTtcblx0fVxuXG5cdHJvdXRlRGF0YSA9IHRoaXMuZ2V0Um91dGVEYXRhKHJvdXRlU3RyKSB8fCB0aGlzLmdldFJvdXRlRGF0YSgnNDA0Jyk7XG5cdHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24ocm91dGVEYXRhKTtcblxuXHQvLyBzZWUgaWYgd2UgY2FuIGRlZXAgbGluayBpbnRvIHRoaXMgc2VjdGlvbiAoZWl0aGVyIG5vcm1hbCBvciA0MDQgc2VjdGlvbilcblx0aWYoIHRoaXMudXNlVVJMKHNlY3Rpb24pICkge1xuXHRcdHRoaXMuZG9Sb3V0ZShyb3V0ZURhdGEsIHNlY3Rpb24sIHJvdXRlU3RyKTtcblx0Ly8gZWxzZSBjaGVjayBpZiB0aGVyZSdzIGEgNDA0IGlmIHNvIHRoZW4gZ28gdGhlcmVcblx0fSBlbHNlIGlmKCB0aGlzLnNbJzQwNCddICl7XG5cblx0XHRyb3V0ZURhdGEgPSB0aGlzLmdldFJvdXRlRGF0YSgnNDA0Jyk7XG5cdFx0c2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihyb3V0ZURhdGEpO1xuXHRcdHRoaXMuZG9Sb3V0ZShyb3V0ZURhdGEsIHNlY3Rpb24sIHJvdXRlU3RyKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiZnVuY3Rpb24gVmlld01hbmFnZXIoIHNldHRpbmdzICkge1xuXG4gIGlmKCAhKCB0aGlzIGluc3RhbmNlb2YgVmlld01hbmFnZXIgKSApIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNYW5hZ2VyKCBzZXR0aW5ncyApO1xuICB9XG5cbiAgdmFyIHMgPSB0aGlzLnMgPSBzZXR0aW5ncyB8fCB7fTtcblxuICBzLm92ZXJsYXAgPSBzLm92ZXJsYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzLm92ZXJsYXA7XG4gIHMud2lkdGggPSBzLndpZHRoIHx8IDk4MDtcbiAgcy5oZWlnaHQgPSBzLmhlaWdodCB8fCA1NzA7XG5cbiAgdGhpcy5jQ29udGVudCA9IG51bGw7XG4gIHRoaXMubkNvbnRlbnQgPSBudWxsO1xufVxuXG52YXIgcCA9IFZpZXdNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICBzaG93OiBmdW5jdGlvbiggY29udGVudCwgZGF0YSwgb25Db21wbGV0ZSApIHtcblxuICAgIC8vIGNoZWNrIGlmIGRhdGEgd2FzIHBhc3NlZCBpblxuICAgIGlmKCBvbkNvbXBsZXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHR5cGVvZiBkYXRhID09ICdmdW5jdGlvbicgKSB7XG5cbiAgICAgIG9uQ29tcGxldGUgPSBkYXRhO1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIGlmKCBjb250ZW50ICE9IHRoaXMubkNvbnRlbnQgJiYgY29udGVudCAhPSB0aGlzLmNDb250ZW50ICkge1xuXG4gICAgICBpZiggdGhpcy5uQ29udGVudCAmJiB0aGlzLm5Db250ZW50LmRlc3Ryb3kgKVxuICAgICAgICB0aGlzLm5Db250ZW50LmRlc3Ryb3kodGhpcy5kYXRhLCBmdW5jdGlvbigpIHsgfSk7XG5cbiAgICAgIHRoaXMubkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICBpZiggY29udGVudC5pbml0ICkge1xuXG4gICAgICAgIGNvbnRlbnQuaW5pdCggdGhpcy5kYXRhLCB0aGlzLnN3YXAuYmluZCggdGhpcywgdGhpcy5uQ29udGVudCwgb25Db21wbGV0ZSApICk7IFxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLnN3YXAoIHRoaXMubkNvbnRlbnQsIG9uQ29tcGxldGUgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKCBkYXRhLCBvbkNvbXBsZXRlICkge1xuXG4gICAgLy8gY2hlY2sgaWYgZGF0YSB3YXMgcGFzc2VkIGluXG4gICAgaWYoIG9uQ29tcGxldGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgdHlwZW9mIGRhdGEgPT0gJ2Z1bmN0aW9uJyApIHtcblxuICAgICAgb25Db21wbGV0ZSA9IGRhdGE7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgaWYoIHRoaXMubkNvbnRlbnQgJiYgdGhpcy5uQ29udGVudC5kZXN0cm95ICkge1xuICAgICAgdGhpcy5uQ29udGVudC5kZXN0cm95KCB0aGlzLmRhdGEsIGZ1bmN0aW9uKCkgeyB9ICk7XG4gICAgfVxuXG4gICAgaWYoIHRoaXMuY0NvbnRlbnQgKSB7XG5cbiAgICAgIHZhciBvbk9sZE91dCA9IGZ1bmN0aW9uKCBvbGRDb250ZW50ICkge1xuXG4gICAgICAgIGlmKCBvbGRDb250ZW50LmRlc3Ryb3kgKSB7XG4gICAgICAgICAgb2xkQ29udGVudC5kZXN0cm95KCB0aGlzLmRhdGEgLCBmdW5jdGlvbigpIHsgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG9uQ29tcGxldGUgKSB7XG4gICAgICAgICAgb25Db21wbGV0ZSggb2xkQ29udGVudCApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuY0NvbnRlbnQgPT09IG9sZENvbnRlbnQgKSB7XG4gICAgICAgICAgdGhpcy5jQ29udGVudCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgfS5iaW5kKCB0aGlzLCB0aGlzLmNDb250ZW50ICk7XG5cbiAgICAgIC8vIG5vdyB0YWtlIG91dCBjb3VudGVudFxuICAgICAgaWYoIHRoaXMuY0NvbnRlbnQuYW5pbWF0ZU91dCApIHtcbiAgICAgICAgdGhpcy5jQ29udGVudC5hbmltYXRlT3V0KCB0aGlzLmRhdGEgLCBvbk9sZE91dCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25PbGRPdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbiggd2lkdGgsIGhlaWdodCApIHtcblxuICAgIHZhciBzID0gdGhpcy5zO1xuXG4gICAgcy53aWR0aCA9IHdpZHRoO1xuICAgIHMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgaWYoIHRoaXMuY0NvbnRlbnQgJiYgdGhpcy5jQ29udGVudC5yZXNpemUgKVxuICAgICAgdGhpcy5jQ29udGVudC5yZXNpemUoIHdpZHRoLCBoZWlnaHQgKTtcbiAgfSxcblxuICBzd2FwOiBmdW5jdGlvbiggbmV3Q29udGVudCwgb25Db21wbGV0ZSApIHtcblxuICAgIGlmKCBuZXdDb250ZW50ID09IHRoaXMubkNvbnRlbnQgKSB7XG5cbiAgICAgIHZhciBzID0gdGhpcy5zO1xuICAgICAgdmFyIG9sZENvbnRlbnQgPSB0aGlzLmNDb250ZW50O1xuICAgICAgdmFyIG9uT2xkT3V0O1xuXG4gICAgICB2YXIgb25OZXdJbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmKCBzLm9uRW5kQW5pSW4gKSB7XG4gICAgICAgICAgcy5vbkVuZEFuaUluKCBuZXdDb250ZW50LCBvbGRDb250ZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggb25Db21wbGV0ZSApIHtcbiAgICAgICAgICBvbkNvbXBsZXRlKCBuZXdDb250ZW50LCBvbGRDb250ZW50ICk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBicmluZ0luTmV3Q29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmKCBzLm9uU3RhcnRBbmlJbiApIHtcbiAgICAgICAgICBzLm9uU3RhcnRBbmlJbiggbmV3Q29udGVudCwgdGhpcy5jQ29udGVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jQ29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgIHRoaXMubkNvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgIGlmKCBuZXdDb250ZW50LmFuaW1hdGVJbiApIHtcbiAgICAgICAgICBuZXdDb250ZW50LmFuaW1hdGVJbiggdGhpcy5kYXRhLCBvbk5ld0luICk7ICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbk5ld0luKCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCggdGhpcyApO1xuXG4gICAgICB2YXIgdGFrZU91dE9sZENvbnRlbnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiggcy5vblN0YXJ0QW5pT3V0ICkge1xuICAgICAgICAgIHMub25TdGFydEFuaU91dCggbmV3Q29udGVudCwgb2xkQ29udGVudCApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUncyBhbiBhbmltYXRlT3V0IGZ1bmN0aW9uIGV4ZWN1dGUgaXQgb24gb2xkQ29udGVudFxuICAgICAgICBpZiggb2xkQ29udGVudC5hbmltYXRlT3V0ICkge1xuICAgICAgICAgIG9sZENvbnRlbnQuYW5pbWF0ZU91dCggdGhpcy5kYXRhLCBvbk9sZE91dCApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uT2xkT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCggdGhpcyApO1xuXG4gICAgICB2YXIgZGVzdHJveU9sZENvbnRlbnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICBpZiggcy5vbkVuZEFuaU91dCApIHtcbiAgICAgICAgICBzLm9uRW5kQW5pT3V0KCBuZXdDb250ZW50LCBvbGRDb250ZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggb2xkQ29udGVudC5kZXN0cm95ICkge1xuICAgICAgICAgIG9sZENvbnRlbnQuZGVzdHJveSggdGhpcy5kYXRhLCBmdW5jdGlvbigpIHsgfSApO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQoIHRoaXMgKTtcblxuXG4gICAgICAvLyByZXNpemUgdGhlIG5ld0NvbnRlbnQgaWYgaXQgaGFzIGEgcmVzaXplIG1ldGhvZFxuICAgICAgaWYoIG5ld0NvbnRlbnQucmVzaXplICkge1xuICAgICAgICBuZXdDb250ZW50LnJlc2l6ZSggcy53aWR0aCwgcy5oZWlnaHQgKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUncyBjb250ZW50IG9uIHNjcmVlbiBhbHJlYWR5XG4gICAgICBpZiggdGhpcy5jQ29udGVudCApIHtcblxuICAgICAgICBpZiggcy5vdmVybGFwICkge1xuXG4gICAgICAgICAgb25PbGRPdXQgPSBkZXN0cm95T2xkQ29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIG9uT2xkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGRlc3Ryb3lPbGRDb250ZW50KCk7XG4gICAgICAgICAgICBicmluZ0luTmV3Q29udGVudCgpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIHRvIG5vdGlmeSB0aGF0IHdlJ3ZlIHN0YXJ0ZWQgYW5pbWF0aW5nIG91dFxuICAgICAgICB0YWtlT3V0T2xkQ29udGVudCgpO1xuXG4gICAgICAgIGlmKCBzLm92ZXJsYXAgKSB7XG5cbiAgICAgICAgICBicmluZ0luTmV3Q29udGVudCgpO1xuICAgICAgICB9XG4gICAgICAvLyBlbHNlIHdlIGRvbid0IGhhdmUgY3VycmVudCBjb250ZW50IGp1c3QgYnJpbmcgaW4gdGhlIG5ld1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBicmluZ0luTmV3Q29udGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gVGhlIHRyeSBjYXRjaCBpcyBuZWVkZWQgZm9yIDxJRTlcbnRyeSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCAnb3ZlcmxhcCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucy5vdmVybGFwO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLnMub3ZlcmxhcCA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG59IGNhdGNoKGUpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gVmlld01hbmFnZXI7IiwiLyoqXHJcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXHJcbiAqL1xyXG5cclxudmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xyXG5cclxuLyoqXHJcbiAqIFdoaXRlc3BhY2UgcmVnZXhwLlxyXG4gKi9cclxuXHJcbnZhciB3aGl0ZXNwYWNlUmUgPSAvXFxzKy87XHJcblxyXG4vKipcclxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxyXG4gKi9cclxuXHJcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzZXM7XHJcbm1vZHVsZS5leHBvcnRzLmFkZCA9IGFkZDtcclxubW9kdWxlLmV4cG9ydHMuY29udGFpbnMgPSBoYXM7XHJcbm1vZHVsZS5leHBvcnRzLmhhcyA9IGhhcztcclxubW9kdWxlLmV4cG9ydHMudG9nZ2xlID0gdG9nZ2xlO1xyXG5tb2R1bGUuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XHJcbm1vZHVsZS5leHBvcnRzLnJlbW92ZU1hdGNoaW5nID0gcmVtb3ZlTWF0Y2hpbmc7XHJcblxyXG5mdW5jdGlvbiBjbGFzc2VzIChlbCkge1xyXG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgIHJldHVybiBlbC5jbGFzc0xpc3Q7XHJcbiAgfVxyXG5cclxuICB2YXIgc3RyID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcclxuICB2YXIgYXJyID0gc3RyLnNwbGl0KHdoaXRlc3BhY2VSZSk7XHJcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xyXG4gIHJldHVybiBhcnI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZCAoZWwsIG5hbWUpIHtcclxuICAvLyBjbGFzc0xpc3RcclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gZmFsbGJhY2tcclxuICB2YXIgYXJyID0gY2xhc3NlcyhlbCk7XHJcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xyXG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xyXG4gIGVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhcyAoZWwsIG5hbWUpIHtcclxuICByZXR1cm4gZWwuY2xhc3NMaXN0XHJcbiAgICA/IGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKVxyXG4gICAgOiAhISB+aW5kZXgoY2xhc3NlcyhlbCksIG5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUgKGVsLCBuYW1lKSB7XHJcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcclxuICAgIHJldHVybiByZW1vdmVNYXRjaGluZyhlbCwgbmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBjbGFzc0xpc3RcclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gZmFsbGJhY2tcclxuICB2YXIgYXJyID0gY2xhc3NlcyhlbCk7XHJcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xyXG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcclxuICBlbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVNYXRjaGluZyAoZWwsIHJlLCByZWYpIHtcclxuICB2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY2xhc3NlcyhlbCkpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocmUudGVzdChhcnJbaV0pKSB7XHJcbiAgICAgIHJlbW92ZShlbCwgYXJyW2ldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZSAoZWwsIG5hbWUpIHtcclxuICAvLyBjbGFzc0xpc3RcclxuICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnRvZ2dsZShuYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIGZhbGxiYWNrXHJcbiAgaWYgKGhhcyhlbCwgbmFtZSkpIHtcclxuICAgIHJlbW92ZShlbCwgbmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFkZChlbCwgbmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qXG5gZG9tLWNyZWF0ZS1lbGVtZW50YFxuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnZG9tLWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBlbCA9IGNyZWF0ZSh7XG4gIHNlbGVjdG9yOiAnZGl2JyxcbiAgc3R5bGVzOiAncHJlbG9hZGVyJyxcbiAgaHRtbDogJzxzcGFuPlRleHQ8L3NwYW4+J1xufSk7XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuZnVuY3Rpb24gY3JlYXRlKG9wdCkge1xuXG5cdG9wdCA9IG9wdCB8fCB7fTtcblx0XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0LnNlbGVjdG9yKTtcblx0XG5cdGlmKG9wdC5hdHRyKSBmb3IodmFyIGluZGV4IGluIG9wdC5hdHRyKVxuXHRcdG9wdC5hdHRyLmhhc093blByb3BlcnR5KGluZGV4KSAmJiBlbC5zZXRBdHRyaWJ1dGUoaW5kZXgsIG9wdC5hdHRyW2luZGV4XSk7XG5cdFxuXHRcImFcIiA9PSBvcHQuc2VsZWN0b3IgJiYgb3B0LmxpbmsgJiYgKFxuXHRcdGVsLmhyZWYgPSBvcHQubGluayxcblx0XHRvcHQudGFyZ2V0ICYmIGVsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBvcHQudGFyZ2V0KVxuXHQpO1xuXG5cdFwiaW1nXCIgPT0gb3B0LnNlbGVjdG9yICYmIG9wdC5zcmMgJiYgKFxuXHRcdGVsLnNyYyA9IG9wdC5zcmMsXG5cdFx0b3B0Lmxhenlsb2FkICYmIChcblx0XHRcdGVsLnN0eWxlLm9wYWNpdHkgPSAwLFxuXHRcdFx0ZWwub25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0ZWwuc3R5bGUub3BhY2l0eSA9IDE7XG5cdFx0XHR9XG5cdFx0KVxuXHQpO1xuXG5cdG9wdC5pZCAmJiAoZWwuaWQgPSBvcHQuaWQpO1xuXHRvcHQuc3R5bGVzICYmIChlbC5jbGFzc05hbWUgPSBvcHQuc3R5bGVzKTtcblxuXHRvcHQuaHRtbCAmJiAoZWwuaW5uZXJIVE1MID0gb3B0Lmh0bWwpO1xuXHRvcHQuY2hpbGRyZW4gJiYgKGVsLmFwcGVuZENoaWxkKG9wdC5jaGlsZHJlbikpO1xuXHRcblx0cmV0dXJuIGVsO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5vbiA9IG9uO1xyXG5tb2R1bGUuZXhwb3J0cy5vZmYgPSBvZmY7XHJcblxyXG5mdW5jdGlvbiBvbiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XHJcbiAgIWVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAmJiAoZXZlbnQgPSAnb24nICsgZXZlbnQpO1xyXG4gIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIgfHwgZWxlbWVudC5hdHRhY2hFdmVudCkuY2FsbChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG4gIHJldHVybiBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gb2ZmIChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcclxuICAhZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyICYmIChldmVudCA9ICdvbicgKyBldmVudCk7XHJcbiAgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCBlbGVtZW50LmRldGFjaEV2ZW50KS5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XHJcbiAgcmV0dXJuIGNhbGxiYWNrO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gb25lO1xyXG5tb2R1bGUuZXhwb3J0cy5hbGwgPSBhbGw7XHJcblxyXG5mdW5jdGlvbiBvbmUgKHNlbGVjdG9yLCBwYXJlbnQpIHtcclxuICBwYXJlbnQgfHwgKHBhcmVudCA9IGRvY3VtZW50KTtcclxuICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGwgKHNlbGVjdG9yLCBwYXJlbnQpIHtcclxuICBwYXJlbnQgfHwgKHBhcmVudCA9IGRvY3VtZW50KTtcclxuICB2YXIgc2VsZWN0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gIHJldHVybiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0aW9uKTtcclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwiLy8gTG9jYXRpb25CYXIgbW9kdWxlIGV4dHJhY3RlZCBmcm9tIEJhY2tib25lLmpzIDEuMS4wXG4vL1xuLy8gdGhlIGRlcGVuZGVuY3kgb24gYmFja2JvbmUsIHVuZGVyc2NvcmUgYW5kIGpxdWVyeSBoYXZlIGJlZW4gcmVtb3ZlZCB0byB0dXJuXG4vLyB0aGlzIGludG8gYSBzbWFsbCBzdGFuZGFsb25lIGxpYnJhcnkgZm9yIGhhbmRsaW5nIGJyb3dzZXIncyBoaXN0b3J5IEFQSVxuLy8gY3Jvc3MgYnJvd3NlciBhbmQgd2l0aCBhIGZhbGxiYWNrIHRvIGhhc2hjaGFuZ2UgZXZlbnRzIG9yIHBvbGxpbmcuXG5cbihmdW5jdGlvbihkZWZpbmUpIHtcbmRlZmluZShmdW5jdGlvbigpIHtcblxuICAvLyAzIGhlbHBlciBmdW5jdGlvbnMgd2UgdXNlIHRvIGF2b2lkIHB1bGxpbmcgaW4gZW50aXJlIF8gYW5kICRcbiAgdmFyIF8gPSB7fTtcbiAgXy5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQob2JqLCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIF8uYW55ID0gZnVuY3Rpb24gYW55KGFyciwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChmbihhcnJbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIG9uKG9iaiwgdHlwZSwgZm4pIHtcbiAgICBpZiAob2JqLmF0dGFjaEV2ZW50KSB7XG4gICAgICBvYmpbJ2UnK3R5cGUrZm5dID0gZm47XG4gICAgICBvYmpbdHlwZStmbl0gPSBmdW5jdGlvbigpeyBvYmpbJ2UnK3R5cGUrZm5dKCB3aW5kb3cuZXZlbnQgKTsgfTtcbiAgICAgIG9iai5hdHRhY2hFdmVudCggJ29uJyt0eXBlLCBvYmpbdHlwZStmbl0gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGZuLCBmYWxzZSApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBvZmYob2JqLCB0eXBlLCBmbikge1xuICAgIGlmIChvYmouZGV0YWNoRXZlbnQpIHtcbiAgICAgIG9iai5kZXRhY2hFdmVudCgnb24nK3R5cGUsIG9ialt0eXBlK2ZuXSk7XG4gICAgICBvYmpbdHlwZStmbl0gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG5cblxuXG5cbiAgLy8gdGhpcyBpcyBtb3N0bHkgb3JpZ2luYWwgY29kZSB3aXRoIG1pbm9yIG1vZGlmaWNhdGlvbnNcbiAgLy8gdG8gYXZvaWQgZGVwZW5kZW5jeSBvbiAzcmQgcGFydHkgbGlicmFyaWVzXG4gIC8vXG4gIC8vIEJhY2tib25lLkhpc3RvcnlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEhhbmRsZXMgY3Jvc3MtYnJvd3NlciBoaXN0b3J5IG1hbmFnZW1lbnQsIGJhc2VkIG9uIGVpdGhlclxuICAvLyBbcHVzaFN0YXRlXShodHRwOi8vZGl2ZWludG9odG1sNS5pbmZvL2hpc3RvcnkuaHRtbCkgYW5kIHJlYWwgVVJMcywgb3JcbiAgLy8gW29uaGFzaGNoYW5nZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9ET00vd2luZG93Lm9uaGFzaGNoYW5nZSlcbiAgLy8gYW5kIFVSTCBmcmFnbWVudHMuIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIG5laXRoZXIgKG9sZCBJRSwgbmF0Y2gpLFxuICAvLyBmYWxscyBiYWNrIHRvIHBvbGxpbmcuXG4gIHZhciBIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuXG4gICAgLy8gTU9ESUZJQ0FUSU9OIE9GIE9SSUdJTkFMIEJBQ0tCT05FLkhJU1RPUllcbiAgICAvL1xuICAgIC8vIF8uYmluZEFsbCh0aGlzLCAnY2hlY2tVcmwnKTtcbiAgICAvL1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgY2hlY2tVcmwgPSB0aGlzLmNoZWNrVXJsO1xuICAgIHRoaXMuY2hlY2tVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja1VybC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvLyBFbnN1cmUgdGhhdCBgSGlzdG9yeWAgY2FuIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgICB0aGlzLmhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciBzdHJpcHBpbmcgYSBsZWFkaW5nIGhhc2gvc2xhc2ggYW5kIHRyYWlsaW5nIHNwYWNlLlxuICB2YXIgcm91dGVTdHJpcHBlciA9IC9eWyNcXC9dfFxccyskL2c7XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciBzdHJpcHBpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcy5cbiAgdmFyIHJvb3RTdHJpcHBlciA9IC9eXFwvK3xcXC8rJC9nO1xuXG4gIC8vIENhY2hlZCByZWdleCBmb3IgZGV0ZWN0aW5nIE1TSUUuXG4gIHZhciBpc0V4cGxvcmVyID0gL21zaWUgW1xcdy5dKy87XG5cbiAgLy8gQ2FjaGVkIHJlZ2V4IGZvciByZW1vdmluZyBhIHRyYWlsaW5nIHNsYXNoLlxuICB2YXIgdHJhaWxpbmdTbGFzaCA9IC9cXC8kLztcblxuICAvLyBDYWNoZWQgcmVnZXggZm9yIHN0cmlwcGluZyB1cmxzIG9mIGhhc2guXG4gIHZhciBwYXRoU3RyaXBwZXIgPSAvIy4qJC87XG5cbiAgLy8gSGFzIHRoZSBoaXN0b3J5IGhhbmRsaW5nIGFscmVhZHkgYmVlbiBzdGFydGVkP1xuICBIaXN0b3J5LnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAvLyBTZXQgdXAgYWxsIGluaGVyaXRhYmxlICoqQmFja2JvbmUuSGlzdG9yeSoqIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gIF8uZXh0ZW5kKEhpc3RvcnkucHJvdG90eXBlLCB7XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBpbnRlcnZhbCB0byBwb2xsIGZvciBoYXNoIGNoYW5nZXMsIGlmIG5lY2Vzc2FyeSwgaXNcbiAgICAvLyB0d2VudHkgdGltZXMgYSBzZWNvbmQuXG4gICAgaW50ZXJ2YWw6IDUwLFxuXG4gICAgLy8gQXJlIHdlIGF0IHRoZSBhcHAgcm9vdD9cbiAgICBhdFJvb3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvW15cXC9dJC8sICckJi8nKSA9PT0gdGhpcy5yb290O1xuICAgIH0sXG5cbiAgICAvLyBHZXRzIHRoZSB0cnVlIGhhc2ggdmFsdWUuIENhbm5vdCB1c2UgbG9jYXRpb24uaGFzaCBkaXJlY3RseSBkdWUgdG8gYnVnXG4gICAgLy8gaW4gRmlyZWZveCB3aGVyZSBsb2NhdGlvbi5oYXNoIHdpbGwgYWx3YXlzIGJlIGRlY29kZWQuXG4gICAgZ2V0SGFzaDogZnVuY3Rpb24od2luZG93KSB7XG4gICAgICB2YXIgbWF0Y2ggPSAod2luZG93IHx8IHRoaXMpLmxvY2F0aW9uLmhyZWYubWF0Y2goLyMoLiopJC8pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBjcm9zcy1icm93c2VyIG5vcm1hbGl6ZWQgVVJMIGZyYWdtZW50LCBlaXRoZXIgZnJvbSB0aGUgVVJMLFxuICAgIC8vIHRoZSBoYXNoLCBvciB0aGUgb3ZlcnJpZGUuXG4gICAgZ2V0RnJhZ21lbnQ6IGZ1bmN0aW9uKGZyYWdtZW50LCBmb3JjZVB1c2hTdGF0ZSkge1xuICAgICAgaWYgKGZyYWdtZW50ID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSB8fCAhdGhpcy5fd2FudHNIYXNoQ2hhbmdlIHx8IGZvcmNlUHVzaFN0YXRlKSB7XG4gICAgICAgICAgZnJhZ21lbnQgPSBkZWNvZGVVUkkodGhpcy5sb2NhdGlvbi5wYXRobmFtZSArIHRoaXMubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdC5yZXBsYWNlKHRyYWlsaW5nU2xhc2gsICcnKTtcbiAgICAgICAgICBpZiAoIWZyYWdtZW50LmluZGV4T2Yocm9vdCkpIGZyYWdtZW50ID0gZnJhZ21lbnQuc2xpY2Uocm9vdC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyYWdtZW50ID0gdGhpcy5nZXRIYXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmcmFnbWVudC5yZXBsYWNlKHJvdXRlU3RyaXBwZXIsICcnKTtcbiAgICB9LFxuXG4gICAgLy8gU3RhcnQgdGhlIGhhc2ggY2hhbmdlIGhhbmRsaW5nLCByZXR1cm5pbmcgYHRydWVgIGlmIHRoZSBjdXJyZW50IFVSTCBtYXRjaGVzXG4gICAgLy8gYW4gZXhpc3Rpbmcgcm91dGUsIGFuZCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICBzdGFydDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKEhpc3Rvcnkuc3RhcnRlZCkgdGhyb3cgbmV3IEVycm9yKFwiTG9jYXRpb25CYXIgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkXCIpO1xuICAgICAgSGlzdG9yeS5zdGFydGVkID0gdHJ1ZTtcblxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgaW5pdGlhbCBjb25maWd1cmF0aW9uLiBEbyB3ZSBuZWVkIGFuIGlmcmFtZT9cbiAgICAgIC8vIElzIHB1c2hTdGF0ZSBkZXNpcmVkIC4uLiBpcyBpdCBhdmFpbGFibGU/XG4gICAgICB0aGlzLm9wdGlvbnMgICAgICAgICAgPSBfLmV4dGVuZCh7cm9vdDogJy8nfSwgb3B0aW9ucyk7XG4gICAgICB0aGlzLmxvY2F0aW9uICAgICAgICAgPSB0aGlzLm9wdGlvbnMubG9jYXRpb24gfHwgdGhpcy5sb2NhdGlvbjtcbiAgICAgIHRoaXMuaGlzdG9yeSAgICAgICAgICA9IHRoaXMub3B0aW9ucy5oaXN0b3J5IHx8IHRoaXMuaGlzdG9yeTtcbiAgICAgIHRoaXMucm9vdCAgICAgICAgICAgICA9IHRoaXMub3B0aW9ucy5yb290O1xuICAgICAgdGhpcy5fd2FudHNIYXNoQ2hhbmdlID0gdGhpcy5vcHRpb25zLmhhc2hDaGFuZ2UgIT09IGZhbHNlO1xuICAgICAgdGhpcy5fd2FudHNQdXNoU3RhdGUgID0gISF0aGlzLm9wdGlvbnMucHVzaFN0YXRlO1xuICAgICAgdGhpcy5faGFzUHVzaFN0YXRlICAgID0gISEodGhpcy5vcHRpb25zLnB1c2hTdGF0ZSAmJiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LnB1c2hTdGF0ZSk7XG4gICAgICB2YXIgZnJhZ21lbnQgICAgICAgICAgPSB0aGlzLmdldEZyYWdtZW50KCk7XG4gICAgICB2YXIgZG9jTW9kZSAgICAgICAgICAgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgICB2YXIgb2xkSUUgICAgICAgICAgICAgPSAoaXNFeHBsb3Jlci5leGVjKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkgJiYgKCFkb2NNb2RlIHx8IGRvY01vZGUgPD0gNykpO1xuXG4gICAgICAvLyBOb3JtYWxpemUgcm9vdCB0byBhbHdheXMgaW5jbHVkZSBhIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoLlxuICAgICAgdGhpcy5yb290ID0gKCcvJyArIHRoaXMucm9vdCArICcvJykucmVwbGFjZShyb290U3RyaXBwZXIsICcvJyk7XG5cbiAgICAgIGlmIChvbGRJRSAmJiB0aGlzLl93YW50c0hhc2hDaGFuZ2UpIHtcbiAgICAgICAgLy8gTU9ESUZJQ0FUSU9OIE9GIE9SSUdJTkFMIEJBQ0tCT05FLkhJU1RPUllcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdmFyIGZyYW1lID0gQmFja2JvbmUuJCgnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiB0YWJpbmRleD1cIi0xXCI+Jyk7XG4gICAgICAgIC8vIHRoaXMuaWZyYW1lID0gZnJhbWUuaGlkZSgpLmFwcGVuZFRvKCdib2R5JylbMF0uY29udGVudFdpbmRvdztcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJqYXZhc2NyaXB0OjBcIik7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSB0aGlzLmlmcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICB0aGlzLm5hdmlnYXRlKGZyYWdtZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVwZW5kaW5nIG9uIHdoZXRoZXIgd2UncmUgdXNpbmcgcHVzaFN0YXRlIG9yIGhhc2hlcywgYW5kIHdoZXRoZXJcbiAgICAgIC8vICdvbmhhc2hjaGFuZ2UnIGlzIHN1cHBvcnRlZCwgZGV0ZXJtaW5lIGhvdyB3ZSBjaGVjayB0aGUgVVJMIHN0YXRlLlxuICAgICAgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSkge1xuICAgICAgICBvbih3aW5kb3csICdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl93YW50c0hhc2hDaGFuZ2UgJiYgKCdvbmhhc2hjaGFuZ2UnIGluIHdpbmRvdykgJiYgIW9sZElFKSB7XG4gICAgICAgIG9uKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fd2FudHNIYXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmNoZWNrVXJsLCB0aGlzLmludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gY2hhbmdlIHRoZSBiYXNlIHVybCwgZm9yIGEgcHVzaFN0YXRlIGxpbmtcbiAgICAgIC8vIG9wZW5lZCBieSBhIG5vbi1wdXNoU3RhdGUgYnJvd3Nlci5cbiAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICAgIHZhciBsb2MgPSB0aGlzLmxvY2F0aW9uO1xuXG4gICAgICAvLyBUcmFuc2l0aW9uIGZyb20gaGFzaENoYW5nZSB0byBwdXNoU3RhdGUgb3IgdmljZSB2ZXJzYSBpZiBib3RoIGFyZVxuICAgICAgLy8gcmVxdWVzdGVkLlxuICAgICAgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSAmJiB0aGlzLl93YW50c1B1c2hTdGF0ZSkge1xuXG4gICAgICAgIC8vIElmIHdlJ3ZlIHN0YXJ0ZWQgb2ZmIHdpdGggYSByb3V0ZSBmcm9tIGEgYHB1c2hTdGF0ZWAtZW5hYmxlZFxuICAgICAgICAvLyBicm93c2VyLCBidXQgd2UncmUgY3VycmVudGx5IGluIGEgYnJvd3NlciB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCBpdC4uLlxuICAgICAgICBpZiAoIXRoaXMuX2hhc1B1c2hTdGF0ZSAmJiAhdGhpcy5hdFJvb3QoKSkge1xuICAgICAgICAgIHRoaXMuZnJhZ21lbnQgPSB0aGlzLmdldEZyYWdtZW50KG51bGwsIHRydWUpO1xuICAgICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZSh0aGlzLnJvb3QgKyAnIycgKyB0aGlzLmZyYWdtZW50KTtcbiAgICAgICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgYXMgYnJvd3NlciB3aWxsIGRvIHJlZGlyZWN0IHRvIG5ldyB1cmxcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAvLyBPciBpZiB3ZSd2ZSBzdGFydGVkIG91dCB3aXRoIGEgaGFzaC1iYXNlZCByb3V0ZSwgYnV0IHdlJ3JlIGN1cnJlbnRseVxuICAgICAgICAvLyBpbiBhIGJyb3dzZXIgd2hlcmUgaXQgY291bGQgYmUgYHB1c2hTdGF0ZWAtYmFzZWQgaW5zdGVhZC4uLlxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc1B1c2hTdGF0ZSAmJiB0aGlzLmF0Um9vdCgpICYmIGxvYy5oYXNoKSB7XG4gICAgICAgICAgdGhpcy5mcmFnbWVudCA9IHRoaXMuZ2V0SGFzaCgpLnJlcGxhY2Uocm91dGVTdHJpcHBlciwgJycpO1xuICAgICAgICAgIHRoaXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB0aGlzLnJvb3QgKyB0aGlzLmZyYWdtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnNpbGVudCkgcmV0dXJuIHRoaXMubG9hZFVybCgpO1xuICAgIH0sXG5cbiAgICAvLyBEaXNhYmxlIEJhY2tib25lLmhpc3RvcnksIHBlcmhhcHMgdGVtcG9yYXJpbHkuIE5vdCB1c2VmdWwgaW4gYSByZWFsIGFwcCxcbiAgICAvLyBidXQgcG9zc2libHkgdXNlZnVsIGZvciB1bml0IHRlc3RpbmcgUm91dGVycy5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIG9mZih3aW5kb3csICdwb3BzdGF0ZScsIHRoaXMuY2hlY2tVcmwpO1xuICAgICAgb2ZmKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCB0aGlzLmNoZWNrVXJsKTtcbiAgICAgIGlmICh0aGlzLl9jaGVja1VybEludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMuX2NoZWNrVXJsSW50ZXJ2YWwpO1xuICAgICAgSGlzdG9yeS5zdGFydGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHJvdXRlIHRvIGJlIHRlc3RlZCB3aGVuIHRoZSBmcmFnbWVudCBjaGFuZ2VzLiBSb3V0ZXMgYWRkZWQgbGF0ZXJcbiAgICAvLyBtYXkgb3ZlcnJpZGUgcHJldmlvdXMgcm91dGVzLlxuICAgIHJvdXRlOiBmdW5jdGlvbihyb3V0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMudW5zaGlmdCh7cm91dGU6IHJvdXRlLCBjYWxsYmFjazogY2FsbGJhY2t9KTtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2tzIHRoZSBjdXJyZW50IFVSTCB0byBzZWUgaWYgaXQgaGFzIGNoYW5nZWQsIGFuZCBpZiBpdCBoYXMsXG4gICAgLy8gY2FsbHMgYGxvYWRVcmxgLCBub3JtYWxpemluZyBhY3Jvc3MgdGhlIGhpZGRlbiBpZnJhbWUuXG4gICAgY2hlY2tVcmw6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldEZyYWdtZW50KCk7XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mcmFnbWVudCAmJiB0aGlzLmlmcmFtZSkge1xuICAgICAgICBjdXJyZW50ID0gdGhpcy5nZXRGcmFnbWVudCh0aGlzLmdldEhhc2godGhpcy5pZnJhbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZyYWdtZW50KSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAodGhpcy5pZnJhbWUpIHRoaXMubmF2aWdhdGUoY3VycmVudCk7XG4gICAgICB0aGlzLmxvYWRVcmwoKTtcbiAgICB9LFxuXG4gICAgLy8gQXR0ZW1wdCB0byBsb2FkIHRoZSBjdXJyZW50IFVSTCBmcmFnbWVudC4gSWYgYSByb3V0ZSBzdWNjZWVkcyB3aXRoIGFcbiAgICAvLyBtYXRjaCwgcmV0dXJucyBgdHJ1ZWAuIElmIG5vIGRlZmluZWQgcm91dGVzIG1hdGNoZXMgdGhlIGZyYWdtZW50LFxuICAgIC8vIHJldHVybnMgYGZhbHNlYC5cbiAgICBsb2FkVXJsOiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgICAgZnJhZ21lbnQgPSB0aGlzLmZyYWdtZW50ID0gdGhpcy5nZXRGcmFnbWVudChmcmFnbWVudCk7XG4gICAgICByZXR1cm4gXy5hbnkodGhpcy5oYW5kbGVycywgZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICBpZiAoaGFuZGxlci5yb3V0ZS50ZXN0KGZyYWdtZW50KSkge1xuICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZnJhZ21lbnQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gU2F2ZSBhIGZyYWdtZW50IGludG8gdGhlIGhhc2ggaGlzdG9yeSwgb3IgcmVwbGFjZSB0aGUgVVJMIHN0YXRlIGlmIHRoZVxuICAgIC8vICdyZXBsYWNlJyBvcHRpb24gaXMgcGFzc2VkLiBZb3UgYXJlIHJlc3BvbnNpYmxlIGZvciBwcm9wZXJseSBVUkwtZW5jb2RpbmdcbiAgICAvLyB0aGUgZnJhZ21lbnQgaW4gYWR2YW5jZS5cbiAgICAvL1xuICAgIC8vIFRoZSBvcHRpb25zIG9iamVjdCBjYW4gY29udGFpbiBgdHJpZ2dlcjogdHJ1ZWAgaWYgeW91IHdpc2ggdG8gaGF2ZSB0aGVcbiAgICAvLyByb3V0ZSBjYWxsYmFjayBiZSBmaXJlZCAobm90IHVzdWFsbHkgZGVzaXJhYmxlKSwgb3IgYHJlcGxhY2U6IHRydWVgLCBpZlxuICAgIC8vIHlvdSB3aXNoIHRvIG1vZGlmeSB0aGUgY3VycmVudCBVUkwgd2l0aG91dCBhZGRpbmcgYW4gZW50cnkgdG8gdGhlIGhpc3RvcnkuXG4gICAgbmF2aWdhdGU6IGZ1bmN0aW9uKGZyYWdtZW50LCBvcHRpb25zKSB7XG4gICAgICBpZiAoIUhpc3Rvcnkuc3RhcnRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHRydWUpIG9wdGlvbnMgPSB7dHJpZ2dlcjogISFvcHRpb25zfTtcblxuICAgICAgdmFyIHVybCA9IHRoaXMucm9vdCArIChmcmFnbWVudCA9IHRoaXMuZ2V0RnJhZ21lbnQoZnJhZ21lbnQgfHwgJycpKTtcblxuICAgICAgLy8gU3RyaXAgdGhlIGhhc2ggZm9yIG1hdGNoaW5nLlxuICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5yZXBsYWNlKHBhdGhTdHJpcHBlciwgJycpO1xuXG4gICAgICBpZiAodGhpcy5mcmFnbWVudCA9PT0gZnJhZ21lbnQpIHJldHVybjtcbiAgICAgIHRoaXMuZnJhZ21lbnQgPSBmcmFnbWVudDtcblxuICAgICAgLy8gRG9uJ3QgaW5jbHVkZSBhIHRyYWlsaW5nIHNsYXNoIG9uIHRoZSByb290LlxuICAgICAgaWYgKGZyYWdtZW50ID09PSAnJyAmJiB1cmwgIT09ICcvJykgdXJsID0gdXJsLnNsaWNlKDAsIC0xKTtcblxuICAgICAgLy8gSWYgcHVzaFN0YXRlIGlzIGF2YWlsYWJsZSwgd2UgdXNlIGl0IHRvIHNldCB0aGUgZnJhZ21lbnQgYXMgYSByZWFsIFVSTC5cbiAgICAgIGlmICh0aGlzLl9oYXNQdXNoU3RhdGUpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5W29wdGlvbnMucmVwbGFjZSA/ICdyZXBsYWNlU3RhdGUnIDogJ3B1c2hTdGF0ZSddKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcblxuICAgICAgLy8gSWYgaGFzaCBjaGFuZ2VzIGhhdmVuJ3QgYmVlbiBleHBsaWNpdGx5IGRpc2FibGVkLCB1cGRhdGUgdGhlIGhhc2hcbiAgICAgIC8vIGZyYWdtZW50IHRvIHN0b3JlIGhpc3RvcnkuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3dhbnRzSGFzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVIYXNoKHRoaXMubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICBpZiAodGhpcy5pZnJhbWUgJiYgKGZyYWdtZW50ICE9PSB0aGlzLmdldEZyYWdtZW50KHRoaXMuZ2V0SGFzaCh0aGlzLmlmcmFtZSkpKSkge1xuICAgICAgICAgIC8vIE9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIGlmcmFtZSB0cmlja3MgSUU3IGFuZCBlYXJsaWVyIHRvIHB1c2ggYVxuICAgICAgICAgIC8vIGhpc3RvcnkgZW50cnkgb24gaGFzaC10YWcgY2hhbmdlLiAgV2hlbiByZXBsYWNlIGlzIHRydWUsIHdlIGRvbid0XG4gICAgICAgICAgLy8gd2FudCB0aGlzLlxuICAgICAgICAgIGlmKCFvcHRpb25zLnJlcGxhY2UpIHRoaXMuaWZyYW1lLmRvY3VtZW50Lm9wZW4oKS5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUhhc2godGhpcy5pZnJhbWUubG9jYXRpb24sIGZyYWdtZW50LCBvcHRpb25zLnJlcGxhY2UpO1xuICAgICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSd2ZSB0b2xkIHVzIHRoYXQgeW91IGV4cGxpY2l0bHkgZG9uJ3Qgd2FudCBmYWxsYmFjayBoYXNoY2hhbmdlLVxuICAgICAgLy8gYmFzZWQgaGlzdG9yeSwgdGhlbiBgbmF2aWdhdGVgIGJlY29tZXMgYSBwYWdlIHJlZnJlc2guXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRyaWdnZXIpIHJldHVybiB0aGlzLmxvYWRVcmwoZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgdGhlIGhhc2ggbG9jYXRpb24sIGVpdGhlciByZXBsYWNpbmcgdGhlIGN1cnJlbnQgZW50cnksIG9yIGFkZGluZ1xuICAgIC8vIGEgbmV3IG9uZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5LlxuICAgIF91cGRhdGVIYXNoOiBmdW5jdGlvbihsb2NhdGlvbiwgZnJhZ21lbnQsIHJlcGxhY2UpIHtcbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHZhciBocmVmID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oamF2YXNjcmlwdDp8IykuKiQvLCAnJyk7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoaHJlZiArICcjJyArIGZyYWdtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgcmVxdWlyZSB0aGF0IGBoYXNoYCBjb250YWlucyBhIGxlYWRpbmcgIy5cbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICcjJyArIGZyYWdtZW50O1xuICAgICAgfVxuICAgIH1cblxuICB9KTtcblxuXG5cbiAgLy8gYWRkIHNvbWUgZmVhdHVyZXMgdG8gSGlzdG9yeVxuXG4gIC8vIGEgbW9yZSBpbnR1aXRpdmUgYWxpYXMgZm9yIG5hdmlnYXRlXG4gIEhpc3RvcnkucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5hdmlnYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gYSBnZW5lcmljIGNhbGxiYWNrIGZvciBhbnkgY2hhbmdlc1xuICBIaXN0b3J5LnByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRoaXMucm91dGUoL14oLio/KSQvLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLy8gY2hlY2tzIGlmIHRoZSBicm93c2VyIGhhcyBwdXNoc3RhdGUgc3VwcG9ydFxuICBIaXN0b3J5LnByb3RvdHlwZS5oYXNQdXNoU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFIaXN0b3J5LnN0YXJ0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm9ubHkgYXZhaWxhYmxlIGFmdGVyIExvY2F0aW9uQmFyLnN0YXJ0KClcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYXNQdXNoU3RhdGU7XG4gIH07XG5cblxuXG5cblxuXG4gIC8vIGV4cG9ydFxuICByZXR1cm4gSGlzdG9yeTtcbn0pO1xufSkodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24gKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KTsiLCIvKipcbiAqIHBsZWFzZS1hamF4IC0gQSBzbWFsbCBhbmQgbW9kZXJuIEFKQVggbGlicmFyeS5cbiAqIEB2ZXJzaW9uIHYyLjAuMlxuICogQGF1dGhvciBEYW4gUmVldmVzIDxoZXlAZGFucmVldi5lcz4gKGh0dHA6Ly9kYW5yZWV2LmVzLylcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9mZmZ1bmN0aW9uL3BsZWFzZVxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGV4cG9ydHMgPSB7fTtcblxuICAgIHZhciBwYXJzZSA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcS5yZXNwb25zZVRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtkYXRhOnJlc3VsdCwgcmVxdWVzdDpyZXF9O1xuICAgIH07XG5cbiAgICB2YXIgeGhyID0gZnVuY3Rpb24gKHR5cGUsIHVybCwgZGF0YSwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZpbGVGb3JtOiBvcHRzLmZpbGVGb3JtIHx8IGZhbHNlLFxuICAgICAgICAgICAgcHJvbWlzZTogb3B0cy5wcm9taXNlIHx8IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVyczogb3B0cy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICAgICAgc3VjY2Vzczogb3B0cy5zdWNjZXNzIHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgZXJyb3I6IG9wdHMuZXJyb3IgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgICAgICAgICBsb2Fkc3RhcnQ6IG9wdHMubG9hZHN0YXJ0IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IG9wdHMucHJvZ3Jlc3MgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgICAgICAgICBsb2FkOiBvcHRzLmxvYWQgfHwgZnVuY3Rpb24gKCkge31cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgaXNTdHJpbmcgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycsXG4gICAgICAgIGlzSlNPTiA9IGZhbHNlO1xuICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaXNKU09OID0gISFKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlzSlNPTiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElFOSBGb3JtIFVwbG9hZFxuICAgICAgICBpZiAob3B0aW9ucy5maWxlRm9ybSAmJiBpc1N0cmluZykge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgICAgIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5uYW1lID0gaWZyYW1lLmlkID0gJ2lmcmFtZScrTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxZTUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXNwb25zZVRleHQgPSBpZnJhbWUuY29udGVudERvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC50b1N0cmluZygpLm1hdGNoKC9eMjBcXGRcXGIvKSkgeyAvLyAyMHggc3RhdHVzIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUZvcm0uYWN0aW9uID0gb3B0aW9ucy5maWxlRm9ybS5hY3Rpb24uc2xpY2Uob3B0aW9ucy5maWxlRm9ybS5hY3Rpb24uc2VhcmNoKC9cXD9pZTkvKSwgNCk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGVGb3JtLmFjdGlvbi5zZWFyY2goL1xcP2llOS8pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maWxlRm9ybS5hY3Rpb24gPSAob3B0aW9ucy5maWxlRm9ybS5hY3Rpb24pID8gb3B0aW9ucy5maWxlRm9ybS5hY3Rpb24gKyAnP2llOScgOiAnP2llOSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maWxlRm9ybS50YXJnZXQgPSBpZnJhbWUuaWQ7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubG9hZHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBYSFIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgQWN0aXZlWE9iamVjdDtcbiAgICAgICAgICAgIHJlcXVlc3QgPSBuZXcgWEhSKCdNU1hNTDIuWE1MSFRUUC4zLjAnKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub3Blbih0eXBlLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNKU09OKSByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXJlcXVlc3QudXBsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZHN0YXJ0Jywgb3B0aW9ucy5sb2Fkc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9wdGlvbnMucHJvZ3Jlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb3B0aW9ucy5sb2FkLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3VjY2VzcyhwYXJzZShyZXF1ZXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKHBhcnNlKHJlcXVlc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaGVhZGVyIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgb3B0aW9ucy5oZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghIXdpbmRvdy5Qcm9taXNlICYmIG9wdGlvbnMucHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2UgPyByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2UpIDogcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxdWVzdC5zdGF0dXNUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcignTmV0d29yayBFcnJvcicpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcblxuICAgIGV4cG9ydHNbJ2dldCddID0gZnVuY3Rpb24gZ2V0ICh1cmwsIG9wdHMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgICAgICByZXR1cm4geGhyKCdHRVQnLCB1cmwsIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGV4cG9ydHNbJ3B1dCddID0gZnVuY3Rpb24gcHV0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgICAgICByZXR1cm4geGhyKCdQVVQnLCB1cmwsIGRhdGEsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBleHBvcnRzWydwYXRjaCddID0gZnVuY3Rpb24gcGF0Y2ggKHVybCwgZGF0YSwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgICAgIHJldHVybiB4aHIoJ1BBVENIJywgdXJsLCBkYXRhLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0c1sncG9zdCddID0gZnVuY3Rpb24gcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHhocignUE9TVCcsIHVybCwgZGF0YSwgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGV4cG9ydHNbJ2RlbCddID0gZXhwb3J0c1snZGVsZXRlJ10gPSBmdW5jdGlvbiBkZWwgKHVybCwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgICAgIHJldHVybiB4aHIoJ0RFTEVURScsIHVybCwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXhwb3J0czsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBleHBvcnRzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydwbGVhc2UnXSA9IGV4cG9ydHM7XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIiwiLyogZ2xvYmFscyBqUXVlcnkgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBjYW1lbENhc2UgPSByZXF1aXJlKCcuL2xpYi9jYW1lbENhc2UnKTtcclxudmFyIGV4dHJhY3RTdWZmaXggPSByZXF1aXJlKCcuL2xpYi9leHRyYWN0U3VmZml4Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgdmFyIF9xdWVyeURvbSA9IHt9O1xyXG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcclxuICB2YXIgY29udGFpbmVyID0gb3B0cy5lbCB8fCBkb2N1bWVudC5ib2R5O1xyXG4gIHZhciBwcmVmaXggPSBvcHRzLnByZWZpeCB8fCAnanMtJztcclxuICB2YXIgd2FudEpxdWVyeSA9IG9wdHMudXNlalF1ZXJ5IHx8IGZhbHNlO1xyXG4gIHZhciBoYXNKcXVlcnkgPSB3YW50SnF1ZXJ5ICYmIHR5cGVvZiBqUXVlcnkgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuICBpZighY29udGFpbmVyKSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCdxdWVyeURvbSB3YXJuaW5nOiB0aGUgY29udGFpbmVyIHNwZWNpZmllZCBpbiBlbXB0eScpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRhcmdldEVsZW1lbnRzO1xyXG4gIGlmKGhhc0pxdWVyeSkge1xyXG4gICAgdGFyZ2V0RWxlbWVudHMgPSBqUXVlcnkoY29udGFpbmVyKS5maW5kKCcqW2NsYXNzKj1cIicgKyBwcmVmaXggKyAnXCJdJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRhcmdldEVsZW1lbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJypbY2xhc3MqPVwiJyArIHByZWZpeCArICdcIl0nKTtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudHNbaV07XHJcbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWU7XHJcbiAgICAvLyBHZXR0aW5nIGNsYXNzTmFtZSBvbiBTVkdzXHJcbiAgICBpZih0eXBlb2YgY2xhc3NOYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjbGFzc05hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgIH1cclxuICAgIHZhciBzcGxpdEtleXMgPSBleHRyYWN0U3VmZml4KGNsYXNzTmFtZSwgcHJlZml4KTtcclxuICAgIGlmKHNwbGl0S2V5cykge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNwbGl0S2V5cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciBwdXJlQ2xhc3MgPSBzcGxpdEtleXNbal07XHJcbiAgICAgICAgdmFyIGtleSA9IGNhbWVsQ2FzZShwdXJlQ2xhc3MpO1xyXG4gICAgICAgIGlmKGtleSkge1xyXG4gICAgICAgICAgdmFyIHF1ZXJ5RWwgPSBfcXVlcnlEb21ba2V5XTtcclxuICAgICAgICAgIGlmKHF1ZXJ5RWwgJiYgIXF1ZXJ5RWwuX2lzQWxsU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgX3F1ZXJ5RG9tW2tleV0gPSBoYXNKcXVlcnkgP1xyXG4gICAgICAgICAgICAgIGpRdWVyeSgnLicgKyBwcmVmaXggKyBwdXJlQ2xhc3MpIDpcclxuICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLicgKyBwcmVmaXggKyBwdXJlQ2xhc3MpO1xyXG4gICAgICAgICAgICBfcXVlcnlEb21ba2V5XS5faXNBbGxTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihoYXNKcXVlcnkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGpRdWVyeShlbGVtZW50KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCFxdWVyeUVsKSB7XHJcbiAgICAgICAgICAgIF9xdWVyeURvbVtrZXldID0gZWxlbWVudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybigncXVlcnlEb20gd2FybmluZzogb25lIG9mIHlvdXIgcHJlZml4IGlzIGVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX3F1ZXJ5RG9tO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBDcmVkaXRzIC0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQyNTI4Ny9jb252ZXJ0LWRhc2gtc2VwYXJhdGVkLXN0cmluZy10by1jYW1lbGNhc2VcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uKG1hdGNoLCBncm91cCkge1xyXG4gICAgcmV0dXJuIGdyb3VwLnRvVXBwZXJDYXNlKCk7XHJcbiAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRyYWN0U3VmZml4KHN0cmluZywgcHJlZml4KSB7XHJcbiAgdmFyIGEgPSAxO1xyXG4gIHZhciByZXMgPSBbXTtcclxuXHJcbiAgd2hpbGUoYSkge1xyXG4gICAgdmFyIHN1YlN0cmluZyA9IHN0cmluZy5zcGxpdChwcmVmaXgpW2FdO1xyXG4gICAgaWYoc3ViU3RyaW5nKSB7XHJcbiAgICAgIHJlcy5wdXNoKHN1YlN0cmluZy5zcGxpdCgnICcpWzBdKTtcclxuICAgICAgKythO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59OyIsIiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKGUpO2Vsc2V7dmFyIGY7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9mPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2Y9Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoZj1zZWxmKSxmLnJvdXRlcz1lKCl9fShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblxudmFyIGxvY2FsUm91dGVzID0gW107XG5cblxuLyoqXG4gKiBDb252ZXJ0IHBhdGggdG8gcm91dGUgb2JqZWN0XG4gKlxuICogQSBzdHJpbmcgb3IgUmVnRXhwIHNob3VsZCBiZSBwYXNzZWQsXG4gKiB3aWxsIHJldHVybiB7IHJlLCBzcmMsIGtleXN9IG9ialxuICpcbiAqIEBwYXJhbSAge1N0cmluZyAvIFJlZ0V4cH0gcGF0aFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbnZhciBSb3V0ZSA9IGZ1bmN0aW9uKHBhdGgpe1xuICAvL3VzaW5nICduZXcnIGlzIG9wdGlvbmFsXG5cbiAgdmFyIHNyYywgcmUsIGtleXMgPSBbXTtcblxuICBpZihwYXRoIGluc3RhbmNlb2YgUmVnRXhwKXtcbiAgICByZSA9IHBhdGg7XG4gICAgc3JjID0gcGF0aC50b1N0cmluZygpO1xuICB9ZWxzZXtcbiAgICByZSA9IHBhdGhUb1JlZ0V4cChwYXRoLCBrZXlzKTtcbiAgICBzcmMgPSBwYXRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgXHQgcmU6IHJlLFxuICBcdCBzcmM6IHBhdGgudG9TdHJpbmcoKSxcbiAgXHQga2V5czoga2V5c1xuICB9XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsXG4gKiByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgc2hvdWxkIGJlIHBhc3NlZCxcbiAqIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgcGxhY2Vob2xkZXJcbiAqIGtleSBuYW1lcy4gRm9yIGV4YW1wbGUgXCIvdXNlci86aWRcIiB3aWxsXG4gKiB0aGVuIGNvbnRhaW4gW1wiaWRcIl0uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0ga2V5c1xuICogQHJldHVybiB7UmVnRXhwfVxuICovXG52YXIgcGF0aFRvUmVnRXhwID0gZnVuY3Rpb24gKHBhdGgsIGtleXMpIHtcblx0cGF0aCA9IHBhdGhcblx0XHQuY29uY2F0KCcvPycpXG5cdFx0LnJlcGxhY2UoL1xcL1xcKC9nLCAnKD86LycpXG5cdFx0LnJlcGxhY2UoLyhcXC8pPyhcXC4pPzooXFx3KykoPzooXFwoLio/XFwpKSk/KFxcPyk/fFxcKi9nLCBmdW5jdGlvbihfLCBzbGFzaCwgZm9ybWF0LCBrZXksIGNhcHR1cmUsIG9wdGlvbmFsKXtcblx0XHRcdGlmIChfID09PSBcIipcIil7XG5cdFx0XHRcdGtleXMucHVzaCh1bmRlZmluZWQpO1xuXHRcdFx0XHRyZXR1cm4gXztcblx0XHRcdH1cblxuXHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRzbGFzaCA9IHNsYXNoIHx8ICcnO1xuXHRcdFx0cmV0dXJuICcnXG5cdFx0XHRcdCsgKG9wdGlvbmFsID8gJycgOiBzbGFzaClcblx0XHRcdFx0KyAnKD86J1xuXHRcdFx0XHQrIChvcHRpb25hbCA/IHNsYXNoIDogJycpXG5cdFx0XHRcdCsgKGZvcm1hdCB8fCAnJykgKyAoY2FwdHVyZSB8fCAnKFteL10rPyknKSArICcpJ1xuXHRcdFx0XHQrIChvcHRpb25hbCB8fCAnJyk7XG5cdFx0fSlcblx0XHQucmVwbGFjZSgvKFtcXC8uXSkvZywgJ1xcXFwkMScpXG5cdFx0LnJlcGxhY2UoL1xcKi9nLCAnKC4qKScpO1xuXHRyZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwYXRoICsgJyQnLCAnaScpO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIG1hdGNoIHRoZSBnaXZlbiByZXF1ZXN0IHRvXG4gKiBvbmUgb2YgdGhlIHJvdXRlcy4gV2hlbiBzdWNjZXNzZnVsXG4gKiBhICB7Zm4sIHBhcmFtcywgc3BsYXRzfSBvYmogaXMgcmV0dXJuZWRcbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gcm91dGVzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHVyaVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG52YXIgbWF0Y2ggPSBmdW5jdGlvbiAocm91dGVzLCB1cmksIHN0YXJ0QXQpIHtcblx0dmFyIGNhcHR1cmVzLCBpID0gc3RhcnRBdCB8fCAwO1xuXG5cdGZvciAodmFyIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuXHRcdHZhciByb3V0ZSA9IHJvdXRlc1tpXSxcblx0XHQgICAgcmUgPSByb3V0ZS5yZSxcblx0XHQgICAga2V5cyA9IHJvdXRlLmtleXMsXG5cdFx0ICAgIHNwbGF0cyA9IFtdLFxuXHRcdCAgICBwYXJhbXMgPSB7fTtcblxuXHRcdGlmIChjYXB0dXJlcyA9IHVyaS5tYXRjaChyZSkpIHtcblx0XHRcdGZvciAodmFyIGogPSAxLCBsZW4gPSBjYXB0dXJlcy5sZW5ndGg7IGogPCBsZW47ICsraikge1xuXHRcdFx0XHR2YXIga2V5ID0ga2V5c1tqLTFdLFxuXHRcdFx0XHRcdHZhbCA9IHR5cGVvZiBjYXB0dXJlc1tqXSA9PT0gJ3N0cmluZydcblx0XHRcdFx0XHRcdD8gdW5lc2NhcGUoY2FwdHVyZXNbal0pXG5cdFx0XHRcdFx0XHQ6IGNhcHR1cmVzW2pdO1xuXHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0cGFyYW1zW2tleV0gPSB2YWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3BsYXRzLnB1c2godmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cGFyYW1zOiBwYXJhbXMsXG5cdFx0XHRcdHNwbGF0czogc3BsYXRzLFxuXHRcdFx0XHRyb3V0ZTogcm91dGUuc3JjLFxuXHRcdFx0XHRuZXh0OiBpICsgMVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogRGVmYXVsdCBcIm5vcm1hbFwiIHJvdXRlciBjb25zdHJ1Y3Rvci5cbiAqIGFjY2VwdHMgcGF0aCwgZm4gdHVwbGVzIHZpYSBhZGRSb3V0ZVxuICogcmV0dXJucyB7Zm4sIHBhcmFtcywgc3BsYXRzLCByb3V0ZX1cbiAqICB2aWEgbWF0Y2hcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxudmFyIFJvdXRlciA9IGZ1bmN0aW9uKCl7XG4gIC8vdXNpbmcgJ25ldycgaXMgb3B0aW9uYWxcbiAgcmV0dXJuIHtcbiAgICByb3V0ZXM6IFtdLFxuICAgIHJvdXRlTWFwIDoge30sXG4gICAgYWRkUm91dGU6IGZ1bmN0aW9uKHBhdGgsIGZuKXtcbiAgICAgIGlmICghcGF0aCkgdGhyb3cgbmV3IEVycm9yKCcgcm91dGUgcmVxdWlyZXMgYSBwYXRoJyk7XG4gICAgICBpZiAoIWZuKSB0aHJvdyBuZXcgRXJyb3IoJyByb3V0ZSAnICsgcGF0aC50b1N0cmluZygpICsgJyByZXF1aXJlcyBhIGNhbGxiYWNrJyk7XG5cbiAgICAgIHZhciByb3V0ZSA9IFJvdXRlKHBhdGgpO1xuICAgICAgcm91dGUuZm4gPSBmbjtcblxuICAgICAgdGhpcy5yb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgICB0aGlzLnJvdXRlTWFwW3BhdGhdID0gZm47XG4gICAgfSxcblxuICAgIG1hdGNoOiBmdW5jdGlvbihwYXRobmFtZSwgc3RhcnRBdCl7XG4gICAgICB2YXIgcm91dGUgPSBtYXRjaCh0aGlzLnJvdXRlcywgcGF0aG5hbWUsIHN0YXJ0QXQpO1xuICAgICAgaWYocm91dGUpe1xuICAgICAgICByb3V0ZS5mbiA9IHRoaXMucm91dGVNYXBbcm91dGUucm91dGVdO1xuICAgICAgICByb3V0ZS5uZXh0ID0gdGhpcy5tYXRjaC5iaW5kKHRoaXMsIHBhdGhuYW1lLCByb3V0ZS5uZXh0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cbiAgfVxufTtcblxuUm91dGVyLlJvdXRlID0gUm91dGVcblJvdXRlci5wYXRoVG9SZWdFeHAgPSBwYXRoVG9SZWdFeHBcblJvdXRlci5tYXRjaCA9IG1hdGNoXG4vLyBiYWNrIGNvbXBhdFxuUm91dGVyLlJvdXRlciA9IFJvdXRlclxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlclxuXG59LHt9XX0se30sWzFdKVxuKDEpXG59KTsiXX0=
