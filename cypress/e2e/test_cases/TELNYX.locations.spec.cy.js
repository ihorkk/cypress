const MainPage = require('../pom/mainpage');
const AboutPage = require('../pom/aboutpage');


describe('video on "About us"', () => {
  it('should verify if "about" page contain video', () => {
    const mainpage = MainPage;
    const aboutpage = AboutPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieAcceptButton.click();
    mainpage.aboutusButton.click();
    aboutpage.officesInfo.should('be.visible');
  });
});