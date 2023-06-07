class Remove_Item{
    removingItem() {
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.cart_item_label').should('be.visible').and('contain', 'Sauce Labs Bike Light')
    }
}
export default Remove_Item