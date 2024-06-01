import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()

export class HttpCoreInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.setApiUrl(req);
    req = this.setHeaders(req);

    return next.handle(req)
      .pipe(catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error?.status === 401 && this.authService.isLoggedIn()) {
            return this.refreshToken(req, next);
          } else {
            return throwError(() => error);
          }
        } else {
          return throwError(() => error);
        }
      }));
  }

  setHeaders(req: HttpRequest<any>): HttpRequest<any> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    const token = this.authService.getAccessToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return req;
  }

  setApiUrl(req: HttpRequest<any>): HttpRequest<any> {
    throw new Error('Method not implemented.');
  }

  refreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
}