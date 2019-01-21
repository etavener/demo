import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'input-expiry-date',
  templateUrl: './input-expiry-date.component.html',
  styleUrls: ['./input-expiry-date.component.scss']
})
export class InputExpiryDateComponent {

  now = moment();
  date = new FormControl(moment());

  constructor() {}

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: Moment, datePicker: MatDatepicker<Moment>) {
    console.log( 'normlizedMonth', normlizedMonth );
    const ctrlValue = this.date.value;
    ctrlValue.month(normlizedMonth.month());
    this.date.setValue(ctrlValue);
    datePicker.close();
  }

}
