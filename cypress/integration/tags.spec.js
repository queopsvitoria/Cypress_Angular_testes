describe('Tags', () => {

    it('Adicionar', () => {
        cy.login('testecyopresss@testecypress.com','testecypress')
        cy.constants('testecpress').click()
        cv.location('pathname').should('contains','/profile')
        cv.get('.article-preview').get('h1').first().click()
        cv.constants('Edit Article').click()
        cv.get('[placeholder="enter tags"]').type('dungons[enter]')
        cv.get('[placeholder="enter tags"]').type('dungons[enter]')
        cy.constants('Publish Article').click()
        cy.get('.tag-list').constants('dragons')
 
    })

})