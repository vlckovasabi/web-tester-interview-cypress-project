/// <reference types="cypress" />

// This file will contain tests for the Sign In form. Feel free to add as many as you want.
// You dont have to test successful sign in as an account is needed for it. Other scenarios are recommended to test.

context('Sign in', () => {
    beforeEach(() => {
        cy.visit('https://app.alfa.smartlook.cloud/sign/in')
    })

    // Test sign in form
    it('Check all login elements', () => {
        cy.checkLogin()
    })

    it('Sign in with email - show password', () => {
        cy.signEmail('email@email.com', 'testing')
        cy.get('#sign-in-form--password-input--show-password-btn').click()
        cy.get("[type='text']").should('be.visible')
    })

    it.only('Sign in with email - reset password', () => {
        cy.get('#sign-in-form--reset-password-link').click()
        cy.contains('.dev-1ct4xql', 'Reset your password').should('be.visible')
        cy.get('#reset-password-form--email-input--inner').should('be.visible')
        cy.get('#reset-password-form--submit').should('be.visible')
        cy.get('#recaptcha-privacy-link').should('be.visible')
        cy.get('#recaptcha-terms-link').should('be.visible')
        cy.get('#reset-password-form--email-input--inner').type('email@email.com')
        // next step would be testing button 'Send a reset link to my email'
    })

    it('Sign in with email - nonvalid email and wrong password', () => {
        cy.signEmail('testing', '123')
        cy.contains('[data-cy=email-input-error]', "That doesn't look like a valid email address").should('be.visible')
        cy.contains('[data-cy=password-input-error]', 'Your password must be at least 6 characters long').should('be.visible')
        cy.get('#sign-in-form--password-input--inner').clear()
        cy.get('#sign-in-form--password-input--inner').type('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
        cy.contains('[data-cy=password-input-error]', 'Your password must be at most 64 characters long').should('be.visible')
        cy.get('#sign-in-form--submit').click()
        cy.contains('.dev-1ct4xql', 'Log in to your account with').should('be.visible')
    })  

    it('Sign in with email - no email and no password', () => {
        cy.get('#sign-in-form--submit').click()
        cy.contains('[data-cy=email-input-error]', "Please fill in your email address").should('be.visible')
        cy.get('#sign-in-form--email-input--inner').type('email@email.com')
        cy.get('[data-cy=email-input-error]').should('not.exist')
        cy.get('#sign-in-form--submit').click()
        cy.contains('[data-cy=password-input-error]', 'Please enter your password').should('be.visible')
        cy.get('#sign-in-form--password-input--inner').type('testing')
        cy.get('[data-cy=password-input-error]').should('not.exist')
    })  

    it('Sign in with email - fail', () => {
        cy.signEmail('email@email.com', 'testing')
        cy.get('#sign-in-form--submit').click()
        cy.wait(2000)
        cy.get('.c-flash-message > .dev-n3reao').should('be.visible')
    }) 

    it('Sign in others', () => {
        cy.get('#google-sign-in').click()  // I don't know how to work with new window in Cypress, so tests bellow are only testing buttons
        cy.get('#facebook-sign-in').click()
        cy.get('#segment-sign-in').click()
        cy.get('#sign-sso-button').click()
    })

    // Feel free to modify this file and other files to you liking except the url.
})
