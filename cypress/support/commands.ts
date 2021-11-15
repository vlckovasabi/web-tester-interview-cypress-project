// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

declare namespace Cypress {
    interface Chainable<Subject> {
      checkLogin(): Cypress.Chainable<void>;
    }
  }
  function checkLogin(): void {
  }

Cypress.Commands.add('checkLogin', () => {
    cy.contains('.dev-1ct4xql', 'Log in to your account with').should('be.visible')
    cy.get('#google-sign-in').should('be.visible')
    cy.get('#facebook-sign-in').should('be.visible')
    cy.get('#segment-sign-in').should('be.visible')
    cy.get('#sign-sso-button').should('be.visible')
    cy.get('#sign-in-form--email-input--inner').should('be.visible')
    cy.get('#sign-in-form--password-input--inner').should('be.visible')
    cy.get('#sign-in-form--password-input--show-password-btn').should('be.visible')
    cy.get('#sign-in-form--reset-password-link').should('be.visible')
    cy.get('#sign-in-form--submit').should('be.visible')
    cy.get('#recaptcha-privacy-link').should('be.visible')
    cy.get('#recaptcha-terms-link').should('be.visible')
})

declare namespace Cypress {
    interface Chainable<Subject> {
      signEmail(username, password): Cypress.Chainable<void>;
    }
  }
  function signEmail(): void {
  }
Cypress.Commands.add('signEmail', (username, password) => {
    cy.get('#sign-in-form--email-input--inner').type(username)
    cy.get('#sign-in-form--password-input--inner').type(password)
})

declare namespace Cypress {
    interface Chainable<Subject> {
      checkRegister(): Cypress.Chainable<void>;
    }
  }
  function checkRegister(): void {
  }
Cypress.Commands.add('checkRegister', () => {
    cy.contains('.dev-qb55eu > span', 'Get started').should('be.visible')
    cy.get('#google-sign-in').should('be.visible')
    cy.get('#facebook-sign-in').should('be.visible')
    cy.get('#segment-sign-in').should('be.visible')
    cy.get('#sign-sso-button').should('be.visible')
    cy.get('#sign-up-form--email-input--inner').should('be.visible')
    cy.get('#sign-up-form--password-input--inner').should('be.visible')
    cy.get('#sign-up-form--password-input--show-password-btn').should('be.visible')
    cy.get('.dev-d3ju8m').should('be.visible')
    cy.get('#sign-up-form--submit').should('be.visible')
})

declare namespace Cypress {
  interface Chainable<Subject> {
    checkDemo(): Cypress.Chainable<void>;
  }
}
function checkDemo(): void {
}
Cypress.Commands.add('checkDemo', () => {
    cy.get('#request-demo-first-name').should('be.visible')
    cy.get('#request-demo-last-name').should('be.visible')
    cy.get('#request-demo-email').should('be.visible')
    cy.get('#request-demo-company').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(1) > .input').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(2) > .input').should('be.visible')
    cy.get(':nth-child(5) > .form-field > .input').should('be.visible')
    cy.get(':nth-child(6) > .form-field > .input').should('be.visible')
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('be.visible')
    cy.get('#request-demo-submit').should('be.visible')
    cy.get('.request-demo-form-new__bottomText > span').should('be.visible')
})

