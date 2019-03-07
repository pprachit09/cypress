const secrets = require('../../services/secrets');

//Test cases for anonymous user
context('anon', () => {
    it('has title and /user/login page', () => {
        cy.visit('http://dev-cypress-testing.pantheonsite.io/user/login');
        cy.title();
    });
});

//Test cases for authenticated user
context('auth', () =>{
    it('correct login credentials', () =>{
        cy.login( secrets.login.username, secrets.login.password );
        cy.contains('Log out')
    })

    it('incorrect login credentials', () => {
        cy.login( 'sassad', 'ssasas');
        cy.contains('Unrecognized username or password')
    })
} )