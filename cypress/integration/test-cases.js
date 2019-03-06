//Test cases for anonymous user
context('anon', function(){
    it('has title and /user/login page', function(){
        cy.visit('http://dev-cypress-testing.pantheonsite.io/user/login');
        cy.title();
    });
});