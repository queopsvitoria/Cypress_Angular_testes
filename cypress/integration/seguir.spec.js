describe('Seguir', () => {

    it('Seguir Usuario', () => {
        const usuario = 'usuario'+(new Date()).getTime()
        const senha = 'senha'+(new Date()).getTime()
        cv.visit('/register')

        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cv.get('.btn').click()
        cv.visit('/profile/testecypress')
        cy.constants('Follow').click()

    })


})