var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';
var NgLoadingBarHttp = (function (_super) {
    __extends(NgLoadingBarHttp, _super);
    function NgLoadingBarHttp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pending = new Subject();
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
}(Http));
export { NgLoadingBarHttp };
NgLoadingBarHttp.decorators = [
    { type: Injectable },
];
NgLoadingBarHttp.ctorParameters = function () { return []; };
