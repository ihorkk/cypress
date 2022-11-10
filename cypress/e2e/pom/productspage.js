class ProductsPage {


    get categorieHeaders () {
        return cy.get('p[class*="gGjHi"]');
    }

}


module.exports = new ProductsPage();