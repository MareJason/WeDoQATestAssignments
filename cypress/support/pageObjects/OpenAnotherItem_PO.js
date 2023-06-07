class Opening_Another_item{
    openItem() {
        cy.get('.inventory_item_img').eq(2).click()
        cy.get('button.btn_primary').click()
    }
}
export default Opening_Another_item