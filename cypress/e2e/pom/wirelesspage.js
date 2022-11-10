class WirelessPage {


    get selectCountryButton () {
        return cy.get('div[class*="hrQdsr"]');
    }

    get priceInfo () {
        return cy.get('div[class="sc-3ef5d51e-2 fVClWx"]');
    }

    selectCountry (value) {
        this.selectCountryButton.click();
        this.selectCountryButton.type(value).type('{enter}');
    }

}


module.exports = new WirelessPage();