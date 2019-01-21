import {Component, DebugElement} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFormComponent } from './card-form.component';
import { CoreModule } from '../../core.module';
import { By } from '@angular/platform-browser';
const MockDate = require('mockdate');
describe('CardFormComponent', () => {
  let component: TestCardFormComponent;
  let innerComponent: CardFormComponent;
  let fixture: ComponentFixture<TestCardFormComponent>;

  beforeEach(async(() => {
    MockDate.set(1434319925275);

    TestBed.configureTestingModule({
      declarations: [
        TestCardFormComponent
      ],
      imports: [
        CoreModule
      ]
    })
    .compileComponents();
  }));

  afterEach(() => {
    MockDate.reset();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should output a submit event', () => {
    const inner: DebugElement = fixture.debugElement.query(By.css('card-form'));
    innerComponent = inner.componentInstance;
    innerComponent.cardFormGroup.controls.nameCtrl.setValue('A Person');
    innerComponent.cardFormGroup.controls.cardCtrl.setValue('111122223333');
    innerComponent.cardFormGroup.controls.cvcCtrl.setValue('123');
    fixture.debugElement.nativeElement.querySelector('.submit-btn').click();
    fixture.detectChanges();
    expect( component.submitMock ).toHaveBeenCalledWith({
      transactionReference: '',
      instruction: {
        description: 'description',
        value: {
          currency: 'GBP',
          amount: 100
        },
        paymentInstrument: {
          type: 'card/plain',
          cvc: '123',
          cardHolderName: 'A Person',
          cardNumber: '111122223333',
          cardExpiryDate: ''
        }
      }
    });
  });

  @Component({
    selector: 'test-card-form',
    template: `<card-form [details]="details"
                          (submit)="submitMock($event)">
    </card-form>`
  })
  class TestCardFormComponent {
    details = {
      description: 'description',
      value: {
        currency: 'GBP',
        amount: 100
      }
    };
    submitMock = jest.fn();
  }

});
