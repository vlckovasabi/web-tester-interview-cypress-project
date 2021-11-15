/// <reference types="cypress" />

// This file will contain tests for the Pricing page. Feel free to add as many as you want.

context('Pricing', () => {
    beforeEach(() => {
        cy.visit('https://www.alfa.smartlook.cloud/pricing/?currencyCode=CZK')
    })

    // Check prices of packages

    // Test that 'Build a plan' button works and the modal is behaving as expected - prices and limits

    // Feel free to modify this file and other files to you liking except the url.

    it('Check prices of packages', () => {
        cy.contains(':nth-child(1) > .package__price > .package-price__heading', 'Free').should('be.visible')
        cy.contains(':nth-child(2) > .package__price > .package-price__heading', 'CZK 879 / monthly').should('be.visible')
        cy.contains('.package--highlighted > .package__price > .package-price__heading', 'CZK 2,079 / monthly').should('be.visible')
        cy.contains(':nth-child(4) > .package__price', 'CZK').should('not.exist')
    })

    it('Build a plan button - Startup', () => {
        let prices = [
            {priceMonthly: "CZK 1,099", priceYear:"CZK 879", sessions:"5,000"},
            {priceMonthly: "CZK 1,299", priceYear:"CZK 1,039", sessions:"7,500"},
            {priceMonthly: "CZK 1,999", priceYear:"CZK 1,599", sessions:"15,000"},
            {priceMonthly: "CZK 2,799", priceYear:"CZK 2,239", sessions:"25,000"},
        ];

        cy.get('#startup-package-button').should('be.visible')
        cy.get('#startup-package-button').click()
        cy.get('.pricing-modal').should('be.visible')

        prices.forEach(element => {
            cy.get(':nth-child(1) > .input').select(element.sessions)
            cy.get(':nth-child(2) > .radio__box').click()
            cy.contains('.modal-price', element.priceMonthly).should('be.visible')
            cy.get(':nth-child(3) > .radio__box').click()
            cy.contains('.modal-price', element.priceYear).should('be.visible')
        });

    // Selected more sessions limit and check prices
        cy.get(':nth-child(1) > .input').select('more')
        cy.get(':nth-child(2) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.get(':nth-child(3) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.contains('#pricing-modal-button', 'Contact us').should('be.visible')
    })
    // next test would be testing button Start free trial

    it('Build a plan button - Business', () => {
        cy.get('#business-package-button').should('be.visible')
        cy.get('#business-package-button').click()
        cy.get('.pricing-modal').should('be.visible')
    })

    it('Build a plan button - Business', () => {
        let prices = [
            {priceMonthly: "CZK 2,599", priceYear:"CZK 2,079", history:"1 month", sessions:"15,000"},
            {priceMonthly: "CZK 3,049", priceYear:"CZK 2,439", history:"3 months", sessions:"15,000"},
            {priceMonthly: "CZK 3,499", priceYear:"CZK 2,799", history:"6 months", sessions:"15,000"},
            {priceMonthly: "CZK 3,949", priceYear:"CZK 3,159", history:"12 months", sessions:"15,000"},
            
            {priceMonthly: "CZK 3,299", priceYear:"CZK 2,639", history:"1 month", sessions:"25,000"},
            {priceMonthly: "CZK 3,949", priceYear:"CZK 3,159", history:"3 months", sessions:"25,000"},
            {priceMonthly: "CZK 4,599", priceYear:"CZK 3,679", history:"6 months", sessions:"25,000"},
            {priceMonthly: "CZK 5,249", priceYear:"CZK 4,199", history:"12 months", sessions:"25,000"},

            {priceMonthly: "CZK 4,399", priceYear:"CZK 3,519", history:"1 month", sessions:"50,000"},
            {priceMonthly: "CZK 5,499", priceYear:"CZK 4,399", history:"3 months", sessions:"50,000"},
            {priceMonthly: "CZK 6,599", priceYear:"CZK 5,279", history:"6 months", sessions:"50,000"},
            {priceMonthly: "CZK 7,699", priceYear:"CZK 6,159", history:"12 months", sessions:"50,000"},

            {priceMonthly: "CZK 6,599", priceYear:"CZK 5,279", history:"1 month", sessions:"100,000"},
            {priceMonthly: "CZK 8,149", priceYear:"CZK 6,519", history:"3 months", sessions:"100,000"},
            {priceMonthly: "CZK 9,699", priceYear:"CZK 7,759", history:"6 months", sessions:"100,000"},
            {priceMonthly: "CZK 11,249", priceYear:"CZK 8,999", history:"12 months", sessions:"100,000"},

            {priceMonthly: "CZK 8,799", priceYear:"CZK 7,039", history:"1 month", sessions:"150,000"},
            {priceMonthly: "CZK 10,799", priceYear:"CZK 8,639", history:"3 months", sessions:"150,000"},
            {priceMonthly: "CZK 12,799", priceYear:"CZK 10,239", history:"6 months", sessions:"150,000"},
            {priceMonthly: "CZK 14,799", priceYear:"CZK 11,839", history:"12 months", sessions:"150,000"},

            {priceMonthly: "CZK 10,999", priceYear:"CZK 8,799", history:"1 month", sessions:"200,000"},
            {priceMonthly: "CZK 13,399", priceYear:"CZK 10,719", history:"3 months", sessions:"200,000"},
            {priceMonthly: "CZK 15,799", priceYear:"CZK 12,639", history:"6 months", sessions:"200,000"},
            {priceMonthly: "CZK 18,199", priceYear:"CZK 14,559", history:"12 months", sessions:"200,000"},
        ];

        cy.get('#business-package-button').should('be.visible')
        cy.get('#business-package-button').click()
        cy.get('.pricing-modal').should('be.visible')

        prices.forEach(element => {
            // Selected sessions limit  
            cy.get(':nth-child(1) > .input').select(element.sessions)
            // month
            cy.get(':nth-child(2) > .input').select(element.history)
            cy.get(':nth-child(2) > .radio__box').click()
            cy.contains('.modal-price', element.priceMonthly).should('be.visible')
            cy.get(':nth-child(3) > .radio__box').click()
            cy.contains('.modal-price', element.priceYear).should('be.visible')
        });
        //more limit
        cy.get(':nth-child(1) > .input').select('more')
        cy.get(':nth-child(2) > .input').select('1 month')
        cy.get(':nth-child(2) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.get(':nth-child(3) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')

        cy.get(':nth-child(2) > .input').select('3 months')
        cy.get(':nth-child(2) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.get(':nth-child(3) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')

        cy.get(':nth-child(2) > .input').select('6 months')
        cy.get(':nth-child(2) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.get(':nth-child(3) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')

        cy.get(':nth-child(2) > .input').select('12 months')
        cy.get(':nth-child(2) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')
        cy.get(':nth-child(3) > .radio__box').click()
        cy.get('.modal-price').should('have.class', 'modal-price--loading')

        cy.contains('#pricing-modal-button', 'Contact us').should('be.visible')
    })
})
