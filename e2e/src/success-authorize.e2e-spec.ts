import {AuthorizePage} from './authorize.po';
import {SuccessPage} from './success.po';

describe('Successful Authorization Journey', () => {

  let authorize: AuthorizePage;
  let success: SuccessPage;

  beforeAll( () => {
    success = new SuccessPage();
    authorize = new AuthorizePage();
    authorize.navigateTo();
  });

  it('should begin on the Authorize page',  () => {
    expect( authorize.getTitle() ).toBe( 'Payment' );
  });

  it('should continue to Make Payment',  async () => {
    await authorize.makeAPayment();

    expect(authorize.currentStep()).toContain( 'Card Details' );
  });

  it('should complete card details',  async () => {
    await authorize.enterName( 'John Appleseed' );
    await authorize.enterCardNumber( '4444333322221111' );
    await authorize.enterCvc( '666' );
    await authorize.addBillingAddress();

    expect(authorize.currentStep()).toContain( 'Billing Address' );
  });

  it('should complete the address',  async () => {
    await authorize.enterAddress1( '270-289 Milton Rd' );
    await authorize.enterAddress2( 'Milton' );
    await authorize.enterPostcode( 'CB4 0WE' );
    await authorize.submitDetails();

    expect(authorize.cardInputToBePresent()).toBeFalsy();
    expect(authorize.addressInputToBepresent()).toBeFalsy();
  });

  it( 'should complete on the success page', () => {
    expect( success.getTitle() ).toBe( 'Success' );
  });

});

