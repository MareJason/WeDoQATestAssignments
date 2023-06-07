// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("saucedemo_Log_In_Form_Submission", (username, password, $selector, textToLocate) => {
    cy.visit('/') 
    // Homepage URL is stored in a cypress.config file as a baseUrl
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.get('#user-name').type(data.username)
    cy.get('#password').type(data.password)
    //  username and pass data are used from the data that are stored inside the loginData.json file inside the fixture folder
    cy.get('#login-button').click()
    cy.get($selector).contains(textToLocate)
    //  I used an element from a header as a selector which was app_logo class and I did assertion of its text content
})

Cypress.Commands.add("adding_item_to_the_cart", () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.contains('span.shopping_cart_badge', 1)
    //  With cy.contains I did assertion of a correct cart badge update
})

Cypress.Commands.add("opening_item_deatils_page_and_adding_it", () => {
    cy.get('.inventory_item_img').eq(2).click()
    cy.get('button.btn_primary').click()
    //  In this command I clicked on another item and add it to the cart
})

Cypress.Commands.add("opening_cart_and_verifying_it", () => {
    cy.get('.shopping_cart_badge').click()
    cy.get('.cart_item_label').eq(0).should('be.visible').and('contain', 'Sauce Labs Backpack')
    cy.get('.cart_item_label').eq(1).should('be.visible').and('contain', 'Sauce Labs Bike Light')
    //  The purpose of this was to click on the cart badge and then verify that there were two different items inside the shopping cart
})

Cypress.Commands.add("removing_the_first_item_and_verifies_that_correct_item_is_present", () => {
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('.cart_item_label').should('be.visible').and('contain', 'Sauce Labs Bike Light')
    //  With this command the second added item was removed from the list and confirmed that after that action there's only the first added item left inside the cart  
})

Cypress.Commands.add("continue_to_the_Checkout_page", () => {
    cy.get('#checkout').click()
    //  Proceed to the checkout page
})

Cypress.Commands.add("complete_the_Checkout_form_and_finish_the_order", () => {
    cy.get('#first-name').type('Marko')
    cy.get('#last-name').type('Markovic')
    cy.get('#postal-code').type('0123456789')
    cy.get('input[type="submit"]').click()
    cy.get('#finish').click()
    //  This command filled out the checkout form and finished the order
})

Cypress.Commands.add("verifying_the_completed_order_with_displayed_message", () => {
    cy.get('h2').should('have.text', 'Thank you for your order!')
    //  Verification of successfully completed order with the following message
})

//THE FOLLOWING TESTS ARE THE EXTRAS

Cypress.Commands.add('iterating_over_the_elements', () => {
    cy.get('.inventory_item .inventory_item_name').each(($el, index) => {
        cy.log("Index: " + index + " : " + $el.text())
        //This command goes through all the products
    })
})

Cypress.Commands.add('making_some_assertions', () => {
    cy.get('.inventory_item').its('length').should('be.gt', 5)
    cy.get('.inventory_item').find('.inventory_item_name').invoke('text').as('itemName')
    cy.get('@itemName').should('include', 'Sauce Labs Fleece Jacket')
    //This command is for assertions
})

Cypress.Commands.add('iterate_over_the_elements_and_log_selected_product', () => {
    cy.get('.inventory_item .inventory_item_name').each(($el) => {
        const product = $el.text()
        const productToSelect = "Sauce Labs Fleece Jacket";
        if (product === productToSelect) {
            $el.trigger('click')
            cy.log('selected product is ' + product)

            //This command is for selecting the specific product and logging its name

        }
    })
})

Cypress.Commands.add('calculates_the_total_price', () => {
    cy.get('.inventory_item').find('.inventory_item_price').invoke('text').as('itemPrice')
    cy.get('@itemPrice').its('length').should('be.gt', 15)

    cy.get('@itemPrice').then($priceText => {
        var itemsPriceTotal = 0
        var itemPrice = $priceText.split('$')
        var i
        for (i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        cy.log("Total price amount of all items is: " + itemsPriceTotal)
        expect(itemsPriceTotal).to.eq(129.94)
        //This command calculates all the products' prices and gives the total amount
    })
})




// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
