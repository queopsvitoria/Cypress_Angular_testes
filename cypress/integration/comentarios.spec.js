describe('comentarios', ()=> {
    it('Escrever', ()=>{
        cy.login('testecyopresss@testecypress.com','testecypress')
        cy.constants('Global Feed').click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Sensacional')
        cy.get('.btn-primary').click()
        cy.constants('Sensacional')
    })
})