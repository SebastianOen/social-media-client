describe('login into profile', () => {
  it('Try to log in, fill valid information to see if we get into profile', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.wait(1000);

    cy.get('button#register-button-login').click();

    cy.wait(1000);

    cy.get('h5#loginModalLabel').should('contain', 'Login');

    cy.get('input#loginEmail').type('tester28808@stud.noroff.no');

    cy.get('input#loginEmail').should(
      'have.value',
      'tester28808@stud.noroff.no'
    );

    cy.get('input#loginPassword').type('O31njm0p67');

    cy.get('input#loginPassword').should('have.value', 'O31njm0p67');

    cy.get('button#login-button-login').click();

    cy.url().should('include', '?view=profile&name=Helloiamseb');
  });
});
