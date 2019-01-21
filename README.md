# Payment

## Assignment
Your customer is an E-Commerce merchant. They require a UI that will enable their shoppers to purchase goods and cancel those purchases.
You are required to create a simple UI that allows a shopper to Authorize and optionally Cancel a payment using the Access Worldpay API’s - https://beta.developer.worldpay.com/docs/access-worldpay; see Take a Payment for more details - https://beta.developer.worldpay.com/docs/access-worldpay/payments/take-a-payment.
Additionally you can implement other flows such as settling a payment and refunds.

## Guidelines
•	The solution should be written in TypeScript or JavaScript
•	No restrictions on external libraries
•	Submit as a git repository (link to GitHub, BitBucket, etc)
•	We are looking for a simple solution representative of an enterprise deliverable. For example consider coupling and the benefits of using hypermedia.
•	Use TDD - demonstrate unit, integration and acceptance tests
•	Please stub interactions with the Access Worldpay API’s
•	Feel free to make any assumptions and document in a README markdown file, or otherwise, with the submission - such as feasibility of component, PCI implications, security concerns, etc


Notes from developer:
- Jest used for unit / snapshot testing
- e2e journey covers the happy path
- API's mocked with an interceptor
- Angular material used for UI components
- Would have used NGRX but didn't have the time


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
