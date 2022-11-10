class CareersPage {


    get positionButton () {
        return cy.get('[href="https://boards.greenhouse.io/telnyx54/jobs/5378006003"]');
    }

    get positionsList () {
        return cy.get('div[class="sc-e0e3f48a-0 biJXva"]');
    }
}


module.exports = new CareersPage();