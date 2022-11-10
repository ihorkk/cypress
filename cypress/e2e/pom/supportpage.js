class SupportPage {


    get searchInput () {
        return cy.get('[name=q]');
    }


    // Methods
    searchInputValue (value) {
        return this.searchInput.type(value).type('{enter}');
    }

}


module.exports = new SupportPage();