describe('Home page test',()=>{
    it('Check the input field',()=>{
        cy.visit('/')
        cy.get('input').type('hema')
        cy.get('button').should('be.visible')
        cy.get('button').click({multiple:true})
        cy.contains('Welcome,hema')
        cy.get('input').should('have.value','hema')

    })
})