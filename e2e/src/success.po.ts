import { browser, by, element } from 'protractor';
import {BasePage} from './base.po';

export class SuccessPage extends BasePage {

  constructor() {
    super();
    this.url = '/success';
  }

}
