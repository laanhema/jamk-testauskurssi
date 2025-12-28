/// <reference types="cypress" />

describe('E2E-testit', () => {
  it('E2E - tehtävä 2', () => {
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');
    cy.get('#nimi').type('Pena Perus').should('have.value', 'Pena Perus');

    cy.get('#puhelin').type('0401234567').should('have.value', '0401234567');

    cy.get('#sposti')
      .type('pepe666@email.com')
      .should('have.value', 'pepe666@email.com');

    cy.get('#koko').select('Suuri');

    cy.get('#Ruis').check();

    cy.get('#Kinkku').check();
    cy.get('#Ananas').check();
    cy.get('#Sipuli').check();

    cy.get('#maksa').scrollIntoView();

    cy.get('.lomake > p:nth-child(8)')
      .should('be.visible')
      .should('contain.text', 'Hinta: 14.00 e');
  });
});
