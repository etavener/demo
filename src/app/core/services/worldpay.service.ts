import { Injectable } from '@angular/core';
import { Payment, WorldPayResponse } from '../model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';

const URL = 'https://access.worldpay.com/payments';
const RESPONSE = 'application/vnd.worldpay.payments-v0.4+json';

@Injectable()
export class WorldpayService {

  constructor( private http: HttpClient ) { }

  initialisePayment(): Observable<WorldPayResponse> {
    return this.http.get( URL, {
      headers: new HttpHeaders({
        'Content-Type':  RESPONSE,
        'Accept': RESPONSE
      } )
    } ).pipe(
      catchError( error => of(error) )
    );
  }

  authorizePayment( body: Payment ): Observable<WorldPayResponse> {
    return this.initialisePayment()
      .pipe(
        switchMap( response => {
          const url = response._links['payments:authorize'].href;
          return this.http.post( url, body, {
            headers: new HttpHeaders({
              'Content-Type':  RESPONSE,
              'Accept': RESPONSE
            } )
          } );
        }),
        catchError( error => of(error) )
      );
  }

}
