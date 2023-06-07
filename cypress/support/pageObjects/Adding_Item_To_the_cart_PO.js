class Adding_item{
    addingItemToTheCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.contains('span.shopping_cart_badge', 1)
    }
}
export default Adding_item