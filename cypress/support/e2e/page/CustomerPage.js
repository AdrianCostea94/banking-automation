const message = require("../../../fixtures/message.json")

class CustomerPage{
    
    constructor(){
        this.welcomeText='strong'
        this.depositActionButton='[ng-click="deposit()"]'
        this.transactionActionButtton='[ng-click="transactions()"]'
        this.depositInput='[placeholder="amount"]'
        this.depositSuccessfulMessageLocator='[ng-show="message"]'
    }

    isPageOpened(customerName){
        cy.contains('Welcome').should('be.visible')
        cy.contains(customerName).should('be.visible');
    }

    balanceIsCorrectCheck(expectedBalance){
    cy.get('div.center strong').eq(1).invoke('text').then((actualBalance)=>{
        expect(actualBalance).to.equal(expectedBalance)
    })
     
    }
    clickDepositButton(){
        cy.get(this.depositActionButton).click()
    }  
    
    depositAmmount(ammount){
        cy.get(this.depositInput).type(ammount)
        cy.contains('button[type="submit"]', 'Deposit').click();
        cy.get(this.depositSuccessfulMessageLocator).then((text)=>{
            expect(text).to.have.text(message.depositSuccessfulMessage)
        })  
    }

    clickTransactionsButton(){
        cy.wait(2500)
        cy.get(this.transactionActionButtton).click()
    }

    
}
export const customerPage = new CustomerPage()