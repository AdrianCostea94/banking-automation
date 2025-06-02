class Header{
    constructor(){
        this.homeButton='[ng-click="home()"]'
        this.logoutButton='[ng-click="byebye()"]'
    }

    clickLogoutButton(){
        cy.get(this.logoutButton).click()
    }

}
export const header = new Header();