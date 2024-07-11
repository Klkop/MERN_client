//to write test cases
describe('Open Homepage',()=>{
    it('Open Homepage',()=>{
        cy.visit('/')//visit url
        //home page running or not
        cy.contains('Register')
        cy.contains('Login')
    })
})