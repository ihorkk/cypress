class AboutPage {


    get officesInfo () {
        return cy.get('ul[class="sc-388f5438-3 fykHYR"]');
    }
}


module.exports = new AboutPage();