require('@cypress/xpath');


class MainPage {


    get cookieDialog () {
        return cy.get('div[class*="daZtYl"]');
    }

    get cookieAcceptButton () {
        return cy.get('button[class*="itIjRb"]');
    }

    get talkExpertButton () {
        return cy.get('div[class*="byuCMl"]');
    }

    get exploreProductsButton () {
        return cy.get('[href="/products"][class*="sc-5d3a275a-1"]');
    }

    get aboutusButton  () {
        return cy.get('a[href="/company/about"][class="sc-f97529d6-0 bjUuRN mchNoDecorate"]');
    }

    get careersButton () {
        return cy.get('[href="/company/careers"][class="sc-f97529d6-0 bjUuRN mchNoDecorate"]');
    }

    get linkedinButton () {
        return cy.get('a[href="https://www.linkedin.com/company/telnyx/"]');
    }

    get twitterButton () {
        return cy.get('a[href="https://twitter.com/telnyx"]');
    }

    get facebookButton () {
        return cy.get('a[href="https://www.facebook.com/Telnyx/"]');
    }

    get networkButton () {
        return cy.get('[href*="global-ip-network"][class*="fVDMEa m"]');
    }

    get smsPricingButton () {
        return cy.get('[href*="messaging"][class*="bjUuRN m"]');
    }

    get wirelessPricingButton () {
        return cy.get('[href*="iot-data-plans"][class*="bjUuRN m"]');
    }

}


module.exports = new MainPage();