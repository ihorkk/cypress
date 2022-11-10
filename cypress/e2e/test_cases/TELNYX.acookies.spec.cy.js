const MainPage = require('../pom/mainpage');


describe('cookies permission', () => {
  it('should verify cookies dialog existence', () => {
    const mainpage = MainPage;
    cy.visit('/');
    mainpage.cookieDialog.should('be.visible');
    mainpage.cookieAcceptButton.click();
  });
});