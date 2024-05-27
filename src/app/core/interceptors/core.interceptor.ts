import { HttpInterceptorFn } from '@angular/common/http';

export const coreInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
