const MainPage = require('../pom/mainpage');


describe('cookies permission', () => {
  it('should verify cookies dialog existence', () => {
    const mainpage = MainPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieDialog.should('be.visible');
    mainpage.cookieAcceptButton.click();
  });
});