/// <reference types="Cypress"/>

describe('Automated tests for saucedemo', () => {
    before(function() {
        cy.fixture('loginData').then(function(data) {
            globalThis.data = data
//  login data are stored in the loginData.json file inside the fixtures folder
        })
    }),

    it('should be able to log in with existing credentials', () => {
        cy.saucedemo_Log_In_Form_Submission(data.username,data.password,'.app_logo','Swag Labs') 
    })  
    it('adds an item to the cart and verifies it', () => {
        cy.adding_item_to_the_cart()
    }) 
    it("opens another item's details page and add the specific item to the cart", () => {
        cy.opening_item_deatils_page_and_adding_it()
    })
    it("opens the cart and verifies that 2 items are present", () => {
        cy.opening_cart_and_verifying_it()
    })
    it("removes the first item from the cart and verifies that correct item is present", () => {
        cy.removing_the_first_item_and_verifies_that_correct_item_is_present()
    })
    it("it continues to the Check out page", () => {
        cy.continue_to_the_Checkout_page()
    })
    it('completes the Check out form and finishes the order',() => {
        cy.complete_the_Checkout_form_and_finish_the_order()
    })
    it('verifies the completed order with displayed message', () => {
        cy.verifying_the_completed_order_with_displayed_message()
    })

    
})
