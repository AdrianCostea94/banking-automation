class CustomerLoginPage{
    constructor(){
        this.userSelect='#userSelect'
        this.loginButon='[type="submit"]'
    }

    selectCustomer(customerName){
        cy.get(this.userSelect).select(customerName)
    }

    clickLoginButton(){
        cy.get(this.loginButon).click()
    }

    isPageOpened(){
        cy.get(this.userSelect).should('be.visible')
    }
}
export const customerLoginPage = new CustomerLoginPage();
