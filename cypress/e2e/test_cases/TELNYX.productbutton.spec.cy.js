const MainPage = require('../pom/mainpage');
const ProductsPage = require('../pom/productspage');


describe('explore products button', () => {
  it('should verify all categories are present', () => {
    const mainpage = MainPage;
    const productspage = ProductsPage;
    cy.visit('https://telnyx.com/');
    mainpage.cookieAcceptButton.click();
    mainpage.exploreProductsButton.scrollIntoView();
    mainpage.exploreProductsButton.click();
    const headertexts = [
        "Voice",
        "Messaging",
        "Fax",
        "Numbers",
        "Wireless",
        "Identity & Data",
        "Networking"
    ];
    productspage.categorieHeaders.should("have.length", 7);
    productspage.categorieHeaders.each((item, index, list) => {
        expect(Cypress.$(item).text()).to.eq(headertexts[index]);
    });
  });
});