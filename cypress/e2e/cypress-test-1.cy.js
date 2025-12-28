/// <reference types="cypress" />

describe('E2E-testit', () => {
  it('E2E - tehtävä 1', () => {
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');
    cy.get('.search-toggle').click();
    cy.get('input[title="Hae Wikipediasta"').type('Jamk');
    cy.get('button[type="submit"').click();
    cy.get('a[title="Jyväskylän ammattikorkeakoulu"]')
      .contains('Jyväskylän ammattikorkeakoulu')
      .click();

    cy.url().should(
      'eq',
      'https://fi.wikipedia.org/wiki/Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu'
    );

    cy.get('h2').contains('Kampukset').scrollIntoView().should('be.visible');

    cy.wait(5000);

    cy.get('#p-lang-btn-checkbox').scrollIntoView().click();
    cy.get(
      'a[href="https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences"]'
    ).click();

    cy.url().should(
      'eq',
      'https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences'
    );
  });
});
