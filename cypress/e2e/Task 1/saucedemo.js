import Adding_item from "../../support/pageObjects/Adding_Item_To_the_cart_PO"
import Opening_Another_item from "../../support/pageObjects/OpenAnotherItem_PO"
import Opening_Cart from "../../support/pageObjects/openingCart_PO"
import Remove_Item from "../../support/pageObjects/removeTheItem_PO"
import checkout_Page from "../../support/pageObjects/checkoutPage_PO"
import Completing_Form from "../../support/pageObjects/completingTheForm_PO"
import Verifies_Order from "../../support/pageObjects/Verifying_PO"


/// <reference types="Cypress"/>

describe('Automated tests for saucedemo', () => {
    before(function() {
        cy.fixture('loginData').then(function(data) {
            globalThis.data = data
//  login data are stored in the loginData.json file inside the fixtures folder
        })
    })

    it('should be able to log in with existing credentials', () => {
        cy.saucedemo_Log_In_Form_Submission(data.username,data.password,'.app_logo','Swag Labs') 
    })  
    it('adds an item to the cart and verifies it', () => {
        const addItem = new Adding_item
        addItem.addingItemToTheCart()
    }) 
    it("opens another item's details page and add the specific item to the cart", () => {
        const openingItem = new Opening_Another_item
        openingItem.openItem()
    })
    it("opens the cart and verifies that 2 items are present", () => {
        const openingCart = new Opening_Cart
        openingCart.openCart()
    })
    it("removes the first item from the cart and verifies that correct item is present", () => {
        const removeItem = new Remove_Item
        removeItem.removingItem()
    })
    it("it continues to the Check out page", () => {
        const Checkout = new checkout_Page
        Checkout.checkout()
    })
    it('completes the Check out form and finishes the order',() => {
        const CompleteForm = new Completing_Form
        CompleteForm.completeForm()
    })
    it('verifies the completed order with displayed message', () => {
       const orderVerification = new Verifies_Order
       orderVerification.verifyOrder()
    })

    
})
