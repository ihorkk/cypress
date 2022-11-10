const MainPage = require('../pom/mainpage');
const NetworkPage = require('../pom/networkpage');


describe('FAQs', () => {
  it('should verify if FAQs are present', () => {
    const mainpage = MainPage;
    const networkpage = NetworkPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieAcceptButton.click();
    mainpage.networkButton.click();
    let i = 0;
    networkpage.faqButtons.each(($btn) => {
        cy.wrap($btn).click();
        networkpage.faqContent.should('be.visible');
    });
  });
});