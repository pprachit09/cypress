const secrets = require('../../services/secrets');

//Test cases for anonymous user
context('anon', () => {
    //Load site before every test case
    beforeEach( () => {
        cy.visit('/')
    })

    it('site loading and has title', () => {
        cy.title()
    })
})

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
})