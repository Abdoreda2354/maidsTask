import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, HttpResponse<any>>();

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const url = req.urlWithParams;
    return this.cache.get(url) || null;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    this.cache.set(url, response);
  }

  clear(): void {
    this.cache.clear();
  }
}
