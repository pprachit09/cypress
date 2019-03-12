const xml2js = require('xml2js');
const parser = new xml2js.Parser();
//to parse xml response
parser.on('error', (err) =>{ 
    console.log('Parser error', err) 
});

//Test cases for anonymous user
context('anon', () => {
    //Load site before every test case
    beforeEach( () => {
        cy.visit('/')
    })

    it('site loading and has title', () => {
        cy.title()
    })

    it('has search functionality', () => {
        cy.title()
        cy.get('#edit-keys').type('cypress')
        cy.get('#edit-submit').click()
        cy.contains('Welcome to Cypress')
    })

    it('has sitemap', () => {
        cy.request('http://dev-cypress-testing.pantheonsite.io/sitemap.xml').then((response) => {
            parser.parseString(response.body, (err, result) => {
                for(let i = 0; i < result.urlset.url.length; i++ ){
                    cy.request(result.urlset.url[i].loc.toString())
                }
            })
        })
    })

    it('download functionality', () => {
        cy.get(':nth-child(2) > .views-field-field-image-1 > .field-content > a').click()
    })
})

//Test cases for authenticated user
context('auth', () =>{
    it('correct login credentials', () =>{
        cy.login( 'site_admin', Cypress.env('password') );
        cy.contains('Log out')
    })

    it('incorrect login credentials', () => {
        cy.login( 'sassad', 'ssasas');
        cy.contains('Unrecognized username or password')
    })
})