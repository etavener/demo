import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AuthorizeContainer } from './authorize.container';
import { AuthorizeModule } from './authorize.module';
import { WorldpayService } from '../core/services';
import { Router } from '@angular/router';
import {cold} from 'jasmine-marbles';
import {Payment} from '../core/model';
import { Observable, of } from 'rxjs';

const MockDate = require('mockdate');
const mock: Payment = {
  transactionReference: 'transactionReference',
  instruction: {
    description: 'description',
    value: {
      amount: 10,
      currency: 'gbp'
    },
    paymentInstrument: {
      type: 'type',
      cardNumber: '1111222233334444',
      cardExpiryDate: {
        month: 12,
        year: 2019
      },
      cardHolderName: 'A Person',
      cvc: '123'
    }
  }
};

describe('Authorize container', () => {
  let component: AuthorizeContainer;
  let fixture: ComponentFixture<AuthorizeContainer>;
  let authorizePayment: jest.Mock;
  let navigate: jest.Mock;

  beforeEach(async(() => {
    MockDate.set(1434319925275);
    authorizePayment = jest.fn();
    navigate = jest.fn();

    TestBed.configureTestingModule({
      imports: [
        AuthorizeModule
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate
          }
        },
        {
          provide: WorldpayService,
          useValue: {
            authorizePayment
          }
        }
      ]
    })
      .compileComponents();
  }));
  afterEach(() => {
    MockDate.reset();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('When submitted', () => {
    beforeEach( () => {
      authorizePayment.mockReturnValue( of('mock') );
      component.onAuthorize(mock);
      fixture.detectChanges();
    });

    it('should call the worldpay service', () => {
      expect(authorizePayment).toHaveBeenCalledWith(mock);
    });

    it('should navigate to success page', () => {
      expect(navigate).toHaveBeenCalledWith( [ '.', 'success']);
    });
  });

});
