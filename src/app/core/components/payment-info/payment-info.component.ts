import { Component, Input } from '@angular/core';
import { PaymentDetails } from '../../model';

@Component({
  selector: 'payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent {

  @Input() details: PaymentDetails;

  constructor() { }

}
