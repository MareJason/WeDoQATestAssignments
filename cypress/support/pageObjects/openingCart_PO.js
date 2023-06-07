class Opening_Cart{
    openCart() {
        cy.get('.shopping_cart_badge').click()
        cy.get('.cart_item_label').eq(0).should('be.visible').and('contain', 'Sauce Labs Backpack')
        cy.get('.cart_item_label').eq(1).should('be.visible').and('contain', 'Sauce Labs Bike Light')
    }
}
export default Opening_Cart