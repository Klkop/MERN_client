describe('tODOLIST',()=>{
    beforeEach(function(){
        cy.fixture('user').then((user)=>{this.userData=user;
        })
    })
    it('testing register page fun',()=>{
        cy.visit('/');
        cy.get('h1').should('contain','Todo List');
        cy.get('input[name="time"]').type('this.userData.time');
        cy.get('input[name="note"]').type('this.userData.note');
        cy.get('button[type:"Submit"]').click({multiple:true});
        cy.log('register functionality is working !')
    })
})