describe('Errormessage on login', () => {
  it('Try to log in, fill invalid information to see if we get an error message back', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.wait(1000);

    cy.get('button#register-button-login').click();

    cy.wait(1000);

    cy.get('input#loginEmail').type('Letme@login.please');

    cy.get('input#loginEmail').should('have.value', 'Letme@login.please');

    cy.get('input#loginPassword').type('ThisIsNotAPassword');

    cy.get('input#loginPassword').should('have.value', 'ThisIsNotAPassword');

    cy.get('button#login-button-login').click();
  });
});
