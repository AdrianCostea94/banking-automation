const message = require("../../../fixtures/message.json")

class HomePage{
    constructor(){
        this.customerButton = '[ng-click="customer()"]'
    }
    isPageOpened(){
        cy.get(this.customerButton).then((text)=>{
            expect(text).to.have.text(message.customerLoginText)
        })
    }

    clickCustomerButton(){
        cy.get(this.customerButton).click()
    }
}
export const homePage = new HomePage();