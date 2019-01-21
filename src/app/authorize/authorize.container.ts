import { Component } from '@angular/core';
import { Payment, PaymentDetails } from '../core/model';
import { WorldpayService } from '../core/services/worldpay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'authorize-payment',
  templateUrl: './authorize.container.html',
  styleUrls: ['./authorize.container.scss']
})
export class AuthorizeContainer {

  details: PaymentDetails;
  processing: boolean;

  constructor(
    private worldpayService: WorldpayService,
    private router: Router
  ) {
    this.details = {
      value: {
        amount: 10,
        currency: 'GBP'
      },
      description: 'Item bought for WORLDPAY.'
    };
  }

  onAuthorize( paymentData: Payment ) {
    this.processing = true;
    this.worldpayService.authorizePayment( paymentData )
      .subscribe(() => { this.router.navigate( [ '.', 'success' ] ); } );
  }

}
