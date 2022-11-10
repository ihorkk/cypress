const MainPage = require('../pom/mainpage');
const MessagingPricingPage = require('../pom/smspricingpage');


describe('sms pricing', () => {
  it('should show sms pricing', () => {
    const mainpage = MainPage;
    const pricingpage = MessagingPricingPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieAcceptButton.click();
    mainpage.smsPricingButton.click();
    pricingpage.selectCountry('Portugal');
    cy.url().should('include', 'pt');
    pricingpage.priceInfo.should('be.visible');
  });
});