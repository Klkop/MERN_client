describe('register page E2E testing',()=>{
    beforeEach(function(){
        cy.fixture('user').then((user)=>{this.userData=user;
        })
    })
    it('testing register page fun',()=>{
        cy.visit('/register');
        cy.get('h1').should('contain','Register');
        cy.get('input[name="Name"]').type('this.userData.name');
        cy.get('input[name="Age"]').type('this.userData.Age');
        cy.get('input[name="Username"]').type('this.userData.UserName');
        cy.get('input[name="Password"]').type('this.userData.password');
        cy.get('button[type:"Sign Up"]').click({multiple:true});
        cy.contains("user registered sucessfully!").should('be.visible');
        cy.log('register functionality is working !')
    })
})