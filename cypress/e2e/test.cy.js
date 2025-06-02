const { homePage } = require("../support/e2e/page/HomePage")
const { customerLoginPage } = require("../support/e2e/page/CustomerLoginPage")
const { customerPage } = require("../support/e2e/page/CustomerPage")
const {transactionsPage}=require("../support/e2e/page/TransactionsPage")


describe('Customer Banking Flow - Harry Potter',()=>{
    it('Should deposit money, verify balance, and validate trasnactions', ()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        homePage.isPageOpened()
        homePage.clickCustomerButton()
        customerLoginPage.isPageOpened()
        customerLoginPage.selectCustomer('Harry Potter')
        customerLoginPage.clickLoginButton()
        customerPage.isPageOpened('Harry Potter')
        customerPage.clickDepositButton()
        customerPage.depositAmmount('100')
        customerPage.depositAmmount('10')
        customerPage.depositAmmount('5')
        customerPage.balanceIsCorrectCheck('115') 
        customerPage.clickTransactionsButton()  
        transactionsPage.transactionsSumCheck(115)
    })
    
})