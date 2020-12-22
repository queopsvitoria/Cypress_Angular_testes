describe('Profile', ()=> {

    it('Editar perfil',() => {
        cy.login('testecyopresss@testecypress.com','testecypress')
        cy.constants('testecpress').click()
        cy.constants('Edit Profile settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
            .type('http://thispersondoesnotexit.com/image')
        cy.get('[formcontrolname="password"]').type('testecypress')
        cy.contain('Update Settings').click()
            
    })

})