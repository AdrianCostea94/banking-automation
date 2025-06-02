
class TransactionsPage{

    constructor(){
        this.resetButton = '[ng-click="reset()"]'
    }

    transactionsSumCheck(sum){
        let total = 0;

        cy.get('tr[id^="anchor"] td:nth-child(2)').each(($el) => {
          const value = parseFloat($el.text().trim());
          total += value;
        }).then(() => {
          cy.log('Total amount: ' + total);
          expect(total).to.equal(sum);
        }); 
    }

}

export const transactionsPage = new TransactionsPage()