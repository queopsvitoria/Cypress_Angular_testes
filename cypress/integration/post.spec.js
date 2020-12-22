describe('Post', () => {

    beforeEach( () => {
        cy.login('testecyopresss@testecypress.com','testecypress')

    })

    it('Novo', () => {
        const tit = 'Cypress E2E'
        cv.constants('New Article').click()
        cv.location('pathname').should('equal','/Editor')
        cy.get('[formcontrolname=title]').type('Cypress E2E')
        cy.get('[formcontrolname=description]').type('Ponta a ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.constants('Publish Article').click()
        cy.get('h1').constants('Cypress E2E')
    })

    it('Edit', () => {
        const tit = 'Cypress Hill E2E'
        cv.constants('New Article').click()
        cv.location('pathname').should('equal','/Editor')
        cy.get('[formcontrolname=title]').type('Cypress E2E')
        cy.get('[formcontrolname=description]').type('Ponta a ponta')
        cy.get('[formcontrolname=body]').type('Economia')
        cy.constants('Publish Article').click()
        cy.get('h1').constants('Cypress E2E')
    })
})