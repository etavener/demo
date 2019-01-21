import { browser, by, element } from 'protractor';

export class BasePage {

  url: string;

  constructor() {}

  navigateTo() {
    return browser.get( this.url );
  }

  getTitle(){
    return element(by.css('h1')).getText();
  }

}
