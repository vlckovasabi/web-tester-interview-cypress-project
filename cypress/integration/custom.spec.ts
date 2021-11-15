/// <reference types="cypress" />

// You can test something else in here (be creative :)

context('Other tests', () => {
    beforeEach(() => {
        cy.visit('https://www.alfa.smartlook.cloud/')
    })

    it('Check all sign up elements', () => {
        cy.get('#navbar-signup-action').should('be.visible')
        cy.get('.header__action-row > .action-component--hero-action > #action-component-signup').should('be.visible')
        cy.get('.footer-hp__btn-row > .action-component--hero-action > #action-component-signup').should('be.visible')
    })

    it('Create free account with email', () => {
        cy.get('#navbar-signup-action').click()
        cy.checkRegister()
        cy.get('#sign-up-form--email-input--inner').type('email')
        cy.contains('[data-cy=email-input-error]', "That doesn't look like a valid email address").should('be.visible')
        cy.get('#sign-up-form--email-input--inner').clear()
        cy.get('#sign-up-form--email-input--inner').type('email@email.com')
        cy.get('#sign-up-form--password-input--inner').type('1234')
        cy.contains('[data-cy=password-input-error]', 'Your password must be at least 8 characters long').should('be.visible')
        cy.get('#sign-up-form--password-input--inner').clear()
        cy.get('#sign-up-form--password-input--inner').type('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        cy.contains('[data-cy=password-input-error]', 'Your password must be at most 64 characters long').should('be.visible')
        cy.get('#sign-up-form--password-input--inner').clear()
        cy.get('#sign-up-form--password-input--inner').type('12345678')
        cy.contains('[data-cy=password-input-error]', 'Password is not strong enough.').should('be.visible')
        cy.contains('.dev-gg41a1 > div', 'Weak password').should('be.visible')
        cy.get('#sign-up-form--password-input--inner').clear()
        cy.get('#sign-up-form--password-input--inner').type('a1Bv3d6?9kLuiw')
        cy.contains('.dev-gg41a1 > div', 'Strong password').should('be.visible')
        cy.get('#sign-up-form--consent-checkbox').check({force: true}) 
        // next step would be cy.get('#sign-up-form--submit').click()
    })

    it('Accept All Cookies', () => {
        cy.get('#onetrust-accept-btn-handler').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
    })

    it('Cookie Settings', () => {
        cy.get('#onetrust-pc-btn-handler').should('be.visible')
        cy.get('#onetrust-pc-btn-handler').click()
        cy.get('#ot-header-id-C0002').click()
        cy.get('#ot-desc-id-C0002 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('#ot-header-id-C0003').click()
        cy.get('#ot-desc-id-C0003 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('#ot-header-id-C0004').click()
        cy.get('#ot-desc-id-C0004 > .ot-grp-hdr1 > .ot-tgl > .ot-switch > .ot-switch-nob').click()
        cy.get('.save-preference-btn-handler').click()
    })

    it('Get a 1-to1 demo', () => {
        cy.get('.header__action-row > .action-component--hero-action-demo > #action-component-signup').click()
        cy.contains('.header-demo-request__title > span', 'Get a live demo').should('be.visible')
        cy.checkDemo()
        // next steps would be filling fields and trying button Request a Demo
    })    
})