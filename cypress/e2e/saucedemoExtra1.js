/// <reference types="Cypress"/>

describe('Iterate over elements and do some actions', () => {
    before(function () {
        cy.fixture('loginData').then(function (data) {
            globalThis.data = data
//  login data are stored in the loginData.json file inside the fixtures folder

        })
    })
    it("Iterate over the elements,log their names and do some assertions", () => {
        cy.saucedemo_Log_In_Form_Submission(data.username, data.password, '.app_logo', 'Swag Labs')
        cy.iterating_over_the_elements()
        cy.making_some_assertions()
    })

    it("log selected product's name", () => {
        cy.saucedemo_Log_In_Form_Submission(data.username, data.password, '.app_logo', 'Swag Labs')
        cy.iterate_over_the_elements_and_log_selected_product()
    })

    it("calculates the total price of all products", () => {
        cy.saucedemo_Log_In_Form_Submission(data.username, data.password, '.app_logo', 'Swag Labs')
        cy.calculates_the_total_price()
    })

})