import { browser, by, element } from 'protractor';
import {BasePage} from './base.po';

export class AuthorizePage extends BasePage {

  constructor() {
    super();
    this.url = '/payment-authorize';
  }

  makeAPayment() {
    return element(by.cssContainingText('button', 'Make payment')).click();
  }

  currentStep() {
    return element(by.css('.mat-step-label-selected')).getText();
  }

  cardInputToBePresent() {
    return element(by.css('form[data-role="card-form"]')).isPresent();
  }

  addressInputToBepresent() {
    return element(by.css('form[data-role="address-form"]')).isPresent();
  }

  async enterName( value: string ) {
    const input = element(by.css('input[data-role="name"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  async enterCardNumber( value: string ) {
    const input = element(by.css('input[data-role="number"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  async enterCvc( value: string ) {
    const input = element(by.css('input[data-role="cvc"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  addBillingAddress() {
    return element(by.cssContainingText('button', 'Add Billing Address')).click();
  }

  async enterAddress1( value: string ) {
    const input = element(by.css('input[data-role="address1"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  async enterAddress2( value: string ) {
    const input = element(by.css('input[data-role="address2"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  async enterPostcode( value: string ) {
    const input = element(by.css('input[data-role="postcode"]'));
    await input.clear();
    await input.sendKeys( value );
  }

  submitDetails() {
    return element(by.cssContainingText('button', 'Submit')).click();
  }


}
