import { NgModule } from '@angular/core';
import {
  CardFormComponent,
  PaymentInfoComponent,
  CompletedMessageComponent,
  ProgressDisplayComponent,
  InputExpiryDateComponent,
} from './components';

import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,
  MatButtonModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {WorldpayService} from './services/worldpay.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const DECLARATIONS = [
  CardFormComponent,
  PaymentInfoComponent,
  CompletedMessageComponent,
  ProgressDisplayComponent,
  InputExpiryDateComponent
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatStepperModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WorldpayService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]},
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
  ]
})
export class CoreModule { }
