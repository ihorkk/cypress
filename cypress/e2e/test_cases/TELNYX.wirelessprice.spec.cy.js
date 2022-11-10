const MainPage = require('../pom/mainpage');
const WirelessPage = require('../pom/wirelesspage');


describe('sms pricing', () => {
  it('should show sms pricing', () => {
    const mainpage = MainPage;
    const pricingpage = WirelessPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieAcceptButton.click();
    mainpage.wirelessPricingButton.click();
    pricingpage.selectCountry('Portugal');
    cy.url().should('include', 'pt');
    pricingpage.priceInfo.should('be.visible');
  });
});