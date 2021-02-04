/// <reference types="cypress" />

// This file will contain tests for the Pricing page. Feel free to add as many as you want.

context('Pricing', () => {
    beforeEach(() => {
        cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
    })

    it('Website packages test case', () => {
        // Check prices of website Startup package and Business package, that they are 350 CZK and 1592 CZK
    })

    it('Mobile packages', () => {
        // Check prices of mobile Startup package and Business package, that they are 960 CZK and 1960 CZK
    })

    // Test that 'Build a plan' button works and the modal is behaving as expected - prices and limits

    // Feel free to modify this file and other files to you liking except the url.
})
