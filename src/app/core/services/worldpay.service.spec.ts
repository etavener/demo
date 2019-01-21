import { TestBed } from '@angular/core/testing';
import { WorldpayService } from './worldpay.service';
import { HttpClient } from '@angular/common/http';
import * as authorizationResponse from '../mocks/authorization-response.json';
import * as queryResponse from '../mocks/query-response.json';
import * as paymentBody from '../mocks/payment.json';
import { cold } from 'jasmine-marbles';

describe('WorldPay Service', () => {

  let service: WorldpayService;
  let get: jest.Mock;
  let post: jest.Mock;

  beforeEach(() => {
    post = jest.fn();
    get = jest.fn();

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WorldpayService,
        {
          provide: HttpClient,
          useValue: {
            post,
            get
          }
        }
      ]
    });
    service = TestBed.get(WorldpayService);
  });

  describe( 'when initial query is made', () => {

    describe( 'the api returns success', () => {
      it('should return data', () => {
        const expected$ = cold('-a', { a: queryResponse } );
        const response$ = cold('-b', { b: queryResponse } );
        get.mockReturnValue( response$ );

        expect( service.initialisePayment() ).toBeObservable( expected$ );
      });
    });

    describe( 'the api returns error', () => {
      it('should return error', () => {

        const expected$ = cold('-(a|)', { a: { status: 400 } } );
        const response$ = cold('-#', {}, { status: 400 } );
        get.mockReturnValue( response$ );

        expect( service.initialisePayment() ).toBeObservable( expected$ );
      });
    });

  });

  describe( 'when requesting an authorization', () => {

    describe( 'the api returns success', () => {
      it('should return data', () => {
        const getResponse$ = cold('-a', { a: queryResponse } );
        const postResponse$ = cold('-b', { b: authorizationResponse } );
        get.mockReturnValue( getResponse$ );
        post.mockReturnValue( postResponse$ );
        const expected$ = cold('--c', { c: authorizationResponse } );
        expect( service.authorizePayment( paymentBody ) ).toBeObservable( expected$ );
      });
    });

    describe( 'the api returns error', () => {
      it('should return error', () => {
        const getResponse$ = cold('-a', { a: queryResponse } );
        const postResponse$ = cold('-#', {}, { status: 400 } );
        get.mockReturnValue( getResponse$ );
        post.mockReturnValue( postResponse$ );
        const expected$ = cold('--(c|)', { c: { status: 400 } } );
        expect( service.authorizePayment( paymentBody ) ).toBeObservable( expected$ );
      });
    });

  });

});
