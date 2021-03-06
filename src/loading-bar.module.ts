import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { NgLoadingBarHttp } from './loading-bar.http';
import { NgLoadingBarComponent } from './loading-bar.component';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new NgLoadingBarHttp(xhrBackend, requestOptions);
}

@NgModule({
    declarations: [
        NgLoadingBarComponent,
    ],
    imports: [
        HttpModule,
    ],
    exports: [
        NgLoadingBarComponent,
    ],
})
export class NgLoadingBarModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: NgLoadingBarModule,
        providers: [
            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
        ],
      };
    }
}
