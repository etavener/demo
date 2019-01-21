import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Payment, PaymentDetails} from '../../model';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit  {

  cardFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  @Input() details: PaymentDetails;
  @Output() submit = new EventEmitter<Payment>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.cardFormGroup = this._formBuilder.group({
      nameCtrl: [ '', Validators.required ],
      cardCtrl: [ '', Validators.required ],
      cvcCtrl: [ '', Validators.required ],
      expiryCtrl: [ '' ],
    });
    this.addressFormGroup = this._formBuilder.group({
      addressCtrl: [ '', Validators.required ]
    });
  }

  submitPayment() {
    this.submit.emit( {
      transactionReference: '',
      instruction: {
        ...this.details,
        paymentInstrument: {
          type: 'card/plain',
          cvc: this.cardFormGroup.value['cvcCtrl'],
          cardHolderName: this.cardFormGroup.value['nameCtrl'],
          cardNumber: this.cardFormGroup.value['cardCtrl'],
          cardExpiryDate: this.cardFormGroup.value['expiryCtrl']
        }
      }
    } );
  }

}
