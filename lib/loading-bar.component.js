import { Inject, Component, ViewChild, Renderer, Input } from '@angular/core';
import { Http } from '@angular/http';
import { NgLoadingBarHttp } from './loading-bar.http';
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
        if (http instanceof NgLoadingBarHttp) {
            http.pending.subscribe(function (progress) {
                if (progress.started)
                    _this.start();
                if (progress.completed)
                    _this.complete();
            });
        }
    }
    NgLoadingBarComponent.prototype.ngAfterViewInit = function () {
        this.hide(this._loadingBarContainer);
        this.hide(this._spinner);
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
            if (_this._includeBar) {
                _this.show(_this._loadingBarContainer);
            }
            if (_this.includeSpinner) {
                _this.show(_this._spinner);
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
        this.setElementStyle(this._loadingBar, 'width', pct);
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
                _this.hide(_this._loadingBarContainer);
                _this.hide(_this._spinner);
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
    NgLoadingBarComponent.prototype.show = function (el) {
        this.setElementStyle(el, 'display', 'block');
    };
    NgLoadingBarComponent.prototype.hide = function (el) {
        this.setElementStyle(el, 'display', 'none');
    };
    NgLoadingBarComponent.prototype.setElementStyle = function (el, styleName, styleValue) {
        this._renderer.setElementStyle(el.nativeElement, styleName, styleValue);
    };
    return NgLoadingBarComponent;
}());
export { NgLoadingBarComponent };
NgLoadingBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-loading-bar',
                template: "\n        <div id=\"loading-bar-spinner\" #loadingBarSpinner><div class=\"spinner-icon\"></div></div>\n        <div id=\"loading-bar\" #loadingBarContainer><div class=\"bar\" #loadingBar><div class=\"peg\"></div></div></div>\n    ",
            },] },
];
NgLoadingBarComponent.ctorParameters = function () { return [
    { type: Renderer, },
    { type: NgLoadingBarHttp, decorators: [{ type: Inject, args: [Http,] },] },
]; };
NgLoadingBarComponent.propDecorators = {
    '_spinner': [{ type: ViewChild, args: ['loadingBarSpinner',] },],
    '_loadingBarContainer': [{ type: ViewChild, args: ['loadingBarContainer',] },],
    '_loadingBar': [{ type: ViewChild, args: ['loadingBar',] },],
    'includeSpinner': [{ type: Input },],
};
