class NetworkPage {


    get faqButtons () {
        return cy.get('div[class*="sc-fec4993d-3 kxXGpw"]');
    }

    get faqContent () {
        return cy.get('p[class*="sc-fec4993d-9"]');
    }
}


module.exports = new NetworkPage();