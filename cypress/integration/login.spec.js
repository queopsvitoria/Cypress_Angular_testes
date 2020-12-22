define('Condut Login', ()=> {

    it('Login sucesso',() => {
        cy.login('testecyopresss@testecypress.com','testecypress')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain','/settings')
            
    })

    it('Dados invalidos',() => {
        cy.login('usuario@inexistete.com','senhaerrada')
        cy.get('.error-message > 11')
        cy.get('.btn:nth-child(5)').click()
        .should('contain','email or password is invalid')
            
    })



})