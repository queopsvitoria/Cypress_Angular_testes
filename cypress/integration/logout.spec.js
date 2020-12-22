describe('Logout', ()=> {

    it('Logout via perfil',() => {
        cy.login('testecyopresss@testecypress.com','testecypress')
        cy.constants('Settings').click()
        cy.url().should('include', 'settings')
        cy.get('.btn-outline-danger').click()


            
    })

})