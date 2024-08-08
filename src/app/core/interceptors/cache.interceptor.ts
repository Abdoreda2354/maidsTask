import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CacheService } from '../services/cache-service.service';
import { of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(CacheService);

  if (req.method !== 'GET') {
    return next(req);
  }

  const cachedResponse = cacheService.get(req);
  if (cachedResponse) {
    return of(cachedResponse);
  }

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cacheService.put(req, event);
      }
    })
  );
};