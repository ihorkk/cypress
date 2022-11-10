class ContactPage {


    get phonesList () {
        return cy.get('#intl-tel-list');
    }

}


module.exports = new ContactPage();