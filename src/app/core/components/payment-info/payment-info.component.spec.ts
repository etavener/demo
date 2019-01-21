import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentInfoComponent } from './payment-info.component';
import {Component} from '@angular/core';

describe('Payment Info Component', () => {
  let fixture: ComponentFixture<TestPaymentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaymentInfoComponent,
        TestPaymentInfoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentInfoComponent);
    fixture.detectChanges();
  });

  it('should render the content', () => {
    expect(fixture).toMatchSnapshot();
  });

  @Component({
    selector: 'test-payment-info',
    template: `<payment-info [details]="details"></payment-info>`
  })
  class TestPaymentInfoComponent {
    details = {
      description: 'description',
      value: {
        currency: 'GBP',
        amount: 100
      }
    };
  }

});
