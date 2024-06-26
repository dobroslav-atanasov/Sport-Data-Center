import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { HttpCoreInterceptor } from './http.interceptor';

export const CoreInterceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCoreInterceptor,
    multi: true
  }
]