import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import * as authorizationResponse from './core/mocks/authorization-response.json';
import * as queryResponse from './core/mocks/query-response.json';

@Injectable()
export class WorldPayInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {

          if (request.url.endsWith('/payments') && request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: queryResponse['default'] }));
          }

          if (request.url.endsWith('/payments/authorizations') && request.method === 'POST') {
            return of(new HttpResponse({ status: 201, body: authorizationResponse['default'] }));
          }

          return next.handle(request);
        })
      )
      .pipe(
        materialize()
      )
      .pipe(
        delay(1000)
      )
      .pipe(
        dematerialize()
      );

  }

}
