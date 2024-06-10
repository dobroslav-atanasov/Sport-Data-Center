import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../features/auth/services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Token } from '../../features/auth/interfaces/token';

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

  private setHeaders(req: HttpRequest<any>): HttpRequest<any> {
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

  private setApiUrl(req: HttpRequest<any>): HttpRequest<any> {
    const apiUrl = environment.apiUrl;

    if (!req.url.startsWith(apiUrl)) {
      req = req.clone({
        url: `${apiUrl}${req.url}`
      });
    }

    return req;
  }

  private refreshToken(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService
      .createRefreshToken()
      .pipe(switchMap((res: Token) => {
        this.authService.saveAccessToken(res.accessToken);
        req = this.setHeaders(req);
        return next.handle(req);
      }),
        catchError((err) => {
          if (err.status == 403) {
            this.router.navigate(['/auth/logout']);
          }

          return throwError(() => err);
        })
      )
  }
}