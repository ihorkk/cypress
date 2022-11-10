const SupportPage = require('../pom/supportpage');


describe('support Center input', () => {
  it('should verify search input and get a result', () => {
    const supportpage = SupportPage;
    cy.visit('https://support.telnyx.com/en/');
    supportpage.searchInputValue('LuxeQuality');
    cy.url().should('include', '/?q=LuxeQuality');
  });
});