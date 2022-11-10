const MainPage = require('../pom/mainpage');
const ContactPage = require('../pom/contactpage');


describe('phone numbers list existence', () => {
  it('should verify phone number list', () => {
    const mainpage = MainPage;
    const contactpage = ContactPage;
    cy.visit('/');
    mainpage.cookieAcceptButton.click();
    mainpage.talkExpertButton.click();
    contactpage.phonesList.should('be.visible');
  });
});