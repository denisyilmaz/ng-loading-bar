(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/http"), require("rxjs/Subject"), require("rxjs/add/operator/share"), require("@angular/animations"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/http", "rxjs/Subject", "rxjs/add/operator/share", "@angular/animations"], factory);
	else if(typeof exports === 'object')
		exports["ng-loading-bar"] = factory(require("@angular/core"), require("@angular/http"), require("rxjs/Subject"), require("rxjs/add/operator/share"), require("@angular/animations"));
	else
		root["ng-loading-bar"] = factory(root["@angular/core"], root["@angular/http"], root["rxjs/Subject"], root["rxjs/add/operator/share"], root["@angular/animations"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var loading_bar_module_1 = __webpack_require__(1);
	exports.NgLoadingBarModule = loading_bar_module_1.NgLoadingBarModule;
	var loading_bar_http_1 = __webpack_require__(4);
	exports.NgLoadingBarHttp = loading_bar_http_1.NgLoadingBarHttp;
	var loading_bar_component_1 = __webpack_require__(7);
	exports.NgLoadingBarComponent = loading_bar_component_1.NgLoadingBarComponent;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(3);
	var loading_bar_http_1 = __webpack_require__(4);
	var loading_bar_component_1 = __webpack_require__(7);
	function httpFactory(xhrBackend, requestOptions) {
	    return new loading_bar_http_1.NgLoadingBarHttp(xhrBackend, requestOptions);
	}
	exports.httpFactory = httpFactory;
	var NgLoadingBarModule = NgLoadingBarModule_1 = (function () {
	    function NgLoadingBarModule() {
	    }
	    NgLoadingBarModule.forRoot = function () {
	        return {
	            ngModule: NgLoadingBarModule_1,
	            providers: [
	                { provide: http_1.Http, useFactory: httpFactory, deps: [http_1.XHRBackend, http_1.RequestOptions] },
	            ],
	        };
	    };
	    return NgLoadingBarModule;
	}());
	NgLoadingBarModule = NgLoadingBarModule_1 = __decorate([
	    core_1.NgModule({
	        declarations: [
	            loading_bar_component_1.NgLoadingBarComponent,
	        ],
	        imports: [
	            http_1.HttpModule,
	        ],
	        exports: [
	            loading_bar_component_1.NgLoadingBarComponent,
	        ],
	    })
	], NgLoadingBarModule);
	exports.NgLoadingBarModule = NgLoadingBarModule;
	var NgLoadingBarModule_1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var http_1 = __webpack_require__(3);
	var core_1 = __webpack_require__(2);
	var Subject_1 = __webpack_require__(5);
	__webpack_require__(6);
	var NgLoadingBarHttp = (function (_super) {
	    __extends(NgLoadingBarHttp, _super);
	    function NgLoadingBarHttp() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.pending = new Subject_1.Subject();
	        _this._pendingRequests = 0;
	        return _this;
	    }
	    NgLoadingBarHttp.prototype.request = function (url, options) {
	        var _this = this;
	        var response = _super.prototype.request.call(this, url, options).share();
	        if (options && options.ignoreLoadingBar === true) {
	            return response;
	        }
	        this.requestStarted();
	        response.subscribe(function (x) { }, function (err) { return _this.requestEnded(); }, function () { return _this.requestEnded(); });
	        return response;
	    };
	    NgLoadingBarHttp.prototype.requestStarted = function () {
	        this.pending.next({
	            started: this._pendingRequests === 0,
	            pendingRequests: ++this._pendingRequests,
	        });
	    };
	    NgLoadingBarHttp.prototype.requestEnded = function () {
	        this.pending.next({
	            completed: this._pendingRequests === 1,
	            pendingRequests: --this._pendingRequests,
	        });
	    };
	    return NgLoadingBarHttp;
	}(http_1.Http));
	NgLoadingBarHttp = __decorate([
	    core_1.Injectable()
	], NgLoadingBarHttp);
	exports.NgLoadingBarHttp = NgLoadingBarHttp;


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var animations_1 = __webpack_require__(8);
	var http_1 = __webpack_require__(3);
	var loading_bar_http_1 = __webpack_require__(4);
	var NgLoadingBarComponent = (function () {
	    function NgLoadingBarComponent(_renderer, http) {
	        var _this = this;
	        this._renderer = _renderer;
	        this.includeSpinner = true;
	        this._autoIncrement = true;
	        this._includeBar = true;
	        this._latencyThreshold = 10;
	        this._startSize = 0.02;
	        this._started = false;
	        this._status = 0;
	        this.state = false;
	        this.width = '0%';
	        if (http instanceof loading_bar_http_1.NgLoadingBarHttp) {
	            http.pending.subscribe(function (progress) {
	                if (progress.started)
	                    _this.start();
	                if (progress.completed)
	                    _this.complete();
	            });
	        }
	    }
	    NgLoadingBarComponent.prototype.ngAfterViewInit = function () {
	        this.hide();
	    };
	    NgLoadingBarComponent.prototype.start = function () {
	        var _this = this;
	        this._startTimeout = setTimeout(function () {
	            clearTimeout(_this._completeTimeout);
	            if (_this._started) {
	                return;
	            }
	            _this._started = true;
	            _this._status = 0;
	            if (_this._includeBar || _this.includeSpinner) {
	                _this.show();
	            }
	            _this.set(_this._startSize);
	        }, this._latencyThreshold);
	    };
	    NgLoadingBarComponent.prototype.set = function (n) {
	        var _this = this;
	        if (!this._started) {
	            return;
	        }
	        var pct = (n * 100) + '%';
	        this.width = pct;
	        this._status = n;
	        if (this._autoIncrement) {
	            clearTimeout(this._incTimeout);
	            this._incTimeout = setTimeout(function () {
	                _this.inc();
	            }, 250);
	        }
	    };
	    NgLoadingBarComponent.prototype.complete = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this.set(1);
	            clearTimeout(_this._completeTimeout);
	            clearTimeout(_this._startTimeout);
	            _this._completeTimeout = setTimeout(function () {
	                _this._started = false;
	                _this.hide();
	            }, 500);
	        }, this._latencyThreshold);
	    };
	    NgLoadingBarComponent.prototype.inc = function () {
	        if (this._status >= 1) {
	            return;
	        }
	        var rnd = 0;
	        var stat = this._status;
	        if (stat >= 0 && stat < 0.25) {
	            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
	        }
	        else if (stat >= 0.25 && stat < 0.65) {
	            rnd = (Math.random() * 3) / 100;
	        }
	        else if (stat >= 0.65 && stat < 0.9) {
	            rnd = (Math.random() * 2) / 100;
	        }
	        else if (stat >= 0.9 && stat < 0.99) {
	            rnd = 0.005;
	        }
	        else {
	            rnd = 0;
	        }
	        var pct = this._status + rnd;
	        this.set(pct);
	    };
	    NgLoadingBarComponent.prototype.show = function () {
	        this.state = true;
	    };
	    NgLoadingBarComponent.prototype.hide = function () {
	        this.state = false;
	    };
	    return NgLoadingBarComponent;
	}());
	__decorate([
	    core_1.ViewChild('loadingBarSpinner'),
	    __metadata("design:type", Object)
	], NgLoadingBarComponent.prototype, "_spinner", void 0);
	__decorate([
	    core_1.ViewChild('loadingBarContainer'),
	    __metadata("design:type", Object)
	], NgLoadingBarComponent.prototype, "_loadingBarContainer", void 0);
	__decorate([
	    core_1.ViewChild('loadingBar'),
	    __metadata("design:type", Object)
	], NgLoadingBarComponent.prototype, "_loadingBar", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], NgLoadingBarComponent.prototype, "includeSpinner", void 0);
	NgLoadingBarComponent = __decorate([
	    core_1.Component({
	        selector: 'ng-loading-bar',
	        template: "\n        <div id=\"loading-bar-spinner\" #loadingBarSpinner [@fadeInOut]=\"state\"><div class=\"spinner-icon\"></div></div>\n        <div id=\"loading-bar\" #loadingBarContainer [@fadeInOut]=\"state\"><div class=\"bar\" #loadingBar [style.width]=\"width\"></div></div>\n    ",
	        animations: [
	            animations_1.trigger('fadeInOut', [
	                animations_1.state('void', animations_1.style({ opacity: 0 })),
	                animations_1.state('true', animations_1.style({ opacity: 1 })),
	                animations_1.state('false', animations_1.style({ opacity: 0 })),
	                animations_1.transition('0 <=> 1', animations_1.animate('0.35s linear')),
	                animations_1.transition('* <=> void', animations_1.animate('0.35s linear'))
	            ])
	        ]
	    }),
	    __param(1, core_1.Inject(http_1.Http)),
	    __metadata("design:paramtypes", [core_1.Renderer, loading_bar_http_1.NgLoadingBarHttp])
	], NgLoadingBarComponent);
	exports.NgLoadingBarComponent = NgLoadingBarComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng-loading-bar.umd.js.map