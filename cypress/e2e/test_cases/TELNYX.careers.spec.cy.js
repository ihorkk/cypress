const MainPage = require('../pom/mainpage');
const CareersPage = require('../pom/careerspage');


describe('positions list', () => {
  it('should verify if the positions list appears', () => {
    const mainpage = MainPage;
    const careerspage = CareersPage;
    cy.visit('/');
    mainpage.cookieAcceptButton.click();
    mainpage.careersButton.click();
    careerspage.positionButton.scrollIntoView();
    careerspage.positionsList.should('be.visible');
  });
});