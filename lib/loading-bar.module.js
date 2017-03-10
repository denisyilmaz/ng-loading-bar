import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NgLoadingBarHttp } from './loading-bar.http';
import { NgLoadingBarComponent } from './loading-bar.component';
export function httpFactory(xhrBackend, requestOptions) {
    return new NgLoadingBarHttp(xhrBackend, requestOptions);
}
var NgLoadingBarModule = (function () {
    function NgLoadingBarModule() {
    }
    NgLoadingBarModule.forRoot = function () {
        return {
            ngModule: NgLoadingBarModule,
            providers: [
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
            ],
        };
    };
    return NgLoadingBarModule;
}());
export { NgLoadingBarModule };
NgLoadingBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgLoadingBarComponent,
                ],
                imports: [
                    HttpModule,
                ],
                exports: [
                    NgLoadingBarComponent,
                ],
            },] },
];
NgLoadingBarModule.ctorParameters = function () { return []; };
