const MainPage = require('../pom/mainpage');


describe('socialmedia buttons', () => {
  it('should verify if socialmedia buttons are present', () => {
    const mainpage = MainPage;
    cy.visit('/');
    mainpage.cookieAcceptButton.click();
    mainpage.linkedinButton.should('be.visible');
    mainpage.twitterButton.should('be.visible');
    mainpage.facebookButton.should('be.visible');
  });
});